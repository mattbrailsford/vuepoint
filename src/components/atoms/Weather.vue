<template>
    <span class="weather">
        <span class="weather__temperature">{{ weather.temperature }}</span>
        <span class="weather__description">
            <i class="wi" :class="weather.iconCssClass"></i>
        </span>
    </span>
</template>

<script>

    import WeatherService from '../../services/WeatherService';

    const weatherService = new WeatherService();

    export default {

        props: {
            city: {
                type: String
            }
        },

        data() {
            return {
                weather: {
                    temperature: '',
                    iconCssClass: ''
                }
            }
        },

        created() {
            this.updateWeather();
            setInterval(this.updateWeather, 15 * 60 * 1000);
        },

        methods: {

            async updateWeather() {
                let result = await weatherService.getWeather(this.city);

                this.weather.temperature = result.temp;
                this.weather.iconCssClass = `wi-yahoo-${result.code}`;
            },
        }

    }

</script>

<style lang="scss">

    .weather__temperature:after {
        content: '\00b0';
    }

    .weather__description {
        margin-left: .25em;
    }

</style>
