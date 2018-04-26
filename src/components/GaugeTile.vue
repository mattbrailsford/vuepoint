<template>
    <tile :position="position" :heading="heading" :color="color">
        <gauge-chart class="chart" :value="value"
            :min="min" :max="max"
            :decimalPlaces="decimalPlaces" :title="unit"
            :color="color"></gauge-chart>
    </tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import GaugeChart from './charts/GaugeChart'

    export default {

        extends: Tile,

        components: {
            Tile,
            GaugeChart
        },

        props: {
            value: {
                type: Number,
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            decimalPlaces: {
                type: Number,
                default: 0
            },
            unit: {
                type: String
            },
        }

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";

    .chart {
        flex: 1 0 100%;
        align-self: stretch;
        width: 100%;
    }

</style>
