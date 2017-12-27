<template>
    <value-tile :position="position" :heading="heading" :color="color">

        <span slot="before">{{date.toUpperCase()}}</span>
        <span slot="value">{{time}}</span>
        <span slot="after" class="time-weather__weather">
            <span class="time-weather__weather__temperature">{{ weather.temperature }}</span>
            <span class="time-weather__weather__description">
                <i class="wi" :class="weather.iconClass"></i>
            </span>
        </span>

    </value-tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import ValueTile from './molecules/ValueTile';
    import moment from 'moment-timezone';
    import weather from '../services/weather/Weather';

    export default {

        extends: Tile,

        components: {
            ValueTile,
        },

        props: {
            weatherCity: {
                type: String,
            },
            dateFormat: {
                type: String,
                default: 'DD-MM-YYYY',
            },
            timeFormat: {
                type: String,
                default: 'HH:mm',
            },
            timeZone: {
                type: String,
            }
        },

        data() {
            return {
                date: '',
                time: '',
                weather: {
                    temperature: '',
                    iconClass: '',
                },
            };
        },

        created() {
            this.refreshTime();
            setInterval(this.refreshTime, 1000);

            this.fetchWeather();
            setInterval(this.fetchWeather, 15 * 60 * 1000);
        },

        methods: {
            refreshTime() {
                this.date = moment().tz(this.timeZone).format(this.dateFormat);
                this.time = moment().tz(this.timeZone).format(this.timeFormat);
            },

            async fetchWeather() {
                const conditions = await weather.conditions(this.weatherCity);

                this.weather.temperature = conditions.temp;
                this.weather.iconClass = `wi-yahoo-${conditions.code}`;
            },
        },
    };
</script>

<style lang="scss">

    .time-weather__weather__temperature:after {
        content: '\00b0';
    }

    .time-weather__weather__description {
        margin-left: .25em;
    }

</style>
