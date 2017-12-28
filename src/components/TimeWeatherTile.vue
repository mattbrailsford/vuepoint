<template>
    <value-tile :position="position" :heading="heading" :color="color">

        <span slot="before">{{date.toUpperCase()}}</span>
        <span slot="value">{{time}}</span>
        <span slot="after" class="time-weather__weather">
            <span class="time-weather__weather__temperature">{{ temperature }}</span>
            <span class="time-weather__weather__description">
                <i class="wi" :class="weatherIconCssClass"></i>
            </span>
        </span>

    </value-tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import ValueTile from './molecules/ValueTile';
    import moment from 'moment-timezone';

    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapActions } = createNamespacedHelpers('weather')

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
                time: ''
            };
        },

        computed: {
            ...mapState({
                conditions: state => state.conditions
            }),
            temperature(){
                if (this.conditions.hasOwnProperty(this.weatherCity)){
                    return this.conditions[this.weatherCity].temp;
                } else {
                    return 0;
                }
            },
            weatherIconCssClass(){
                if (this.conditions.hasOwnProperty(this.weatherCity)){
                    return `wi-yahoo-${this.conditions[this.weatherCity].code}`;
                } else {
                    return "";
                }
            }
        },

        created() {
            this.refreshTime();
            setInterval(this.refreshTime, 1000);

            this.fetchWeather();
            setInterval(this.fetchWeather, 15 * 60 * 1000);
        },

        methods: {
            ...mapActions(['getConditions']),

            refreshTime() {
                this.date = moment().tz(this.timeZone).format(this.dateFormat);
                this.time = moment().tz(this.timeZone).format(this.timeFormat);
            },

            fetchWeather() {
                this.getConditions(this.weatherCity);
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
