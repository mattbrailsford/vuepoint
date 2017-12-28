<template>
    <tile :position="position" :heading="heading" :color="color">
        <sparkline-chart class="chart" :values="values"></sparkline-chart>
    </tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import SparklineChart from './charts/SparklineChart'
    import { takeRight } from 'lodash'

    export default {

        extends: Tile,

        components: {
            Tile,
            SparklineChart
        },

        data(){
            return {
                values: []
            }
        },

        props: {
            value: {
                type: Number,
            },
            samples: {
                type: Number,
            }
        },

        watch: {
            value(newValue){
                this.values.push(newValue);
                if (this.values.length > this.samples){
                    this.values = takeRight(this.values, this.samples);
                }
            }
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
