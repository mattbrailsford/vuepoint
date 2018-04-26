<template>
    <tile :position="position" :heading="heading" :color="color">
       <div class="level-tile">
           <div class="level-tile__label" v-if="label">{{label}}</div>
           <div class="level-tile__bar"><span :class="barCssClass" :style="barCssStyle"></span></div>
           <div class="level-tile__value">{{value.toFixed(decimalPlaces)}}{{unit}}</div>
       </div>
    </tile>
</template>

<script>
    import Tile from './atoms/Tile';

    export default {

        extends: Tile,

        components: {
            Tile,
        },

        props: {
            label: {
                type: String
            },
            value: {
                type: Number
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
            }
        },

        computed: {
            barCssClass() {
                return "bg--" + this.color;
            },
            barCssStyle() {
                var rng = this.max - this.min;
                var perc = (this.value - this.min) / rng * 100;
                return "height: " + perc + "%;";
            }
        }

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";

    .level-tile {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        flex: 1 0 100%;
        align-self: stretch;
    }

    .level-tile__label {
        overflow:hidden;
        text-overflow: ellipsis;
        padding-bottom: 1vw;
        font-size: $font-size-s;
    }

    .level-tile__bar {
        flex-grow: 1;
        background-color: rgba(white, .05);
        position: relative;
        margin: 0 auto;
        width: 75%;

        span {
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }

    .level-tile__value {
        padding-top: 1vw;
    }

</style>
