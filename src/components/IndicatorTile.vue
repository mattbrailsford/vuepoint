<template>
    <value-tile :position="position" :heading="heading" :color="color"
        :before="before" :after="after">
        <span slot="value" class="indicator" :class="{ 'with-label': !!label }">
            <i class="fa" :class="iconCssClass"></i> <span class="value-tile__value__suffix" v-if="label">{{ label }}</span>
        </span>
    </value-tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import ValueTile from './ValueTile';

    export default {

        extends: Tile,

        components: {
            ValueTile,
        },

        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: String
            }
        },

        computed: {
            iconCssClass(){
                var v = this.value === "false" ? false : !!this.value;
                return v ? "fa-circle color--" + this.color : "fa-circle-o";
            }
        }

    };
</script>

<style lang="scss">

    .indicator {
        display: block;

        &.with-label {
            text-align: left;
        }
    }

    .indicator .fa {
        color: rgba(white, 0.05);
        vertical-align: middle;
    }

    .indicator .value-tile__value__suffix {
        vertical-align: middle;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>
