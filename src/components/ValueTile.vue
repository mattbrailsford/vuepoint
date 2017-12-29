<template>
    <tile :position="position" :heading="heading" :color="color">
        <section class="value-tile">
            <span class="value-tile__before">
                <slot name="before">{{ before }}</slot>
            </span>
            <span class="value-tile__value">
                <slot name="value">
                    {{value.toFixed(decimalPlaces)}}<span class="value-tile__value__suffix" v-if="unit">{{ unit }}</span>
                </slot>
            </span>
            <span class="value-tile__after">
                <slot name="after">{{ after }}</slot>
            </span>
        </section>
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
            before: {
                type: String,
            },
            value: {
                type: Number,
                default: 0
            },
            decimalPlaces: {
                type: Number,
                default: 0
            },
            unit: {
                type: String,
            },
            after: {
                type: String,
            }
        }

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";

    .value-tile {
        text-align: center;
        width: 100%;
    }

    .value-tile__value {
        display: block;
        padding: .1em 0;
        font-weight: $font-weight-bold;
        font-size: $font-size-xl;
        line-height: 1;
    }

    .value-tile__value__suffix {
        font-size: $font-size-s;
        margin-left: 2px;
    }

    .value-tile__before {
        display: block;
        color: rgba(white, 0.5);
        font-size: $font-size-s;
    }

    .value-tile__after {
        display: block;
        color: rgba(white, 0.5);
        font-size: $font-size-m;
    }

</style>
