<template>
    <tile :position="position" :heading="heading" :color="color">
        <section class="text-tile" v-html="value"></section>
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
            value: {
                type: String
            }
        }

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";

    .text-tile {
        align-self: stretch;
        width: 100%;
        flex: 1 0 100%;
        font-size: $font-size-s;
    }

</style>
