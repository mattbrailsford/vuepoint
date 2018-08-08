<template>
    <div class="tile" :style="tilePosition">
        <div class="tile__head" :class="bgCssClass" v-if="heading">{{heading}}</div>
        <div class="tile__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { positionToGridAreaNotation } from '../../helpers';

    export default {

        props: {
            heading: {
                type: String,
            },
            position: {
                type: String,
            },
            color: {
                type: String,
                default: 'default'
            }
        },

        computed: {
            tilePosition() {
                return `grid-area: ${positionToGridAreaNotation(this.position)}`;
            },
            bgCssClass() {
                return 'bg--' + this.color;
            },
            colorCssClass(){
                return 'color--' + this.color;
            }
        }

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";

    .tile {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: .25vw;
        background-color: rgba(white, 0.1);
    }

    .tile--overflow:after {
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 1px;
        box-shadow: 0 0 .5em .5em $tile-background-color;
        content: '';
    }

    .tile--above {
        z-index: 500;
    }

    .tile__head {
        color: white;
        font-size: $font-size-s;
        font-weight: $font-weight-bold;
        padding: $grid-padding*0.5 $grid-padding;
    }

    .tile__body {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: $grid-padding;
        text-shadow: 1px 1px 1px $tile-background-color;
    }

</style>
