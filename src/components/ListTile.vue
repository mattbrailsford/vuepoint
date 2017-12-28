<template>
    <tile :position="position" :heading="heading" :color="color">
        <ul class="list-tile">
            <li class="list-tile__list-item" v-for="value in values"><span class="list-tile__key">{{value.label}}</span><span class="list-tile__value" :class="colorCssClass">{{value.value}}</span></li>
        </ul>
    </tile>
</template>

<script>
    import Tile from './atoms/Tile';

    export default {

        extends: Tile,

        components: {
            Tile,
        },

        props: ['values']

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";

    .list-tile {
        align-self: flex-start;
        list-style: none;
        width: 100%;
    }

    .list-tile__list-item {
        display: flex;
        padding: $grid-padding*0.5 0;
        border-bottom: 1px solid rgba(white, 0.25);

        &:first-child {
            padding-top: 0;
        }

        &:last-child {
            border: 0;
            padding-bottom: 0;
        }
    }

    .list-tile__key {
        color: rgba(white, 0.5);
        font-size: $font-size-s;
    }

    .list-tile__value {
        flex: 1;
        font-size: $font-size-s;
        font-weight: $font-weight-bold;
        text-align: right;
    }

</style>
