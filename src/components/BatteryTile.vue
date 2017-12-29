<template>
    <value-tile :position="position" :heading="heading" :color="color">

        <i slot="value" class="battery fa" :class="iconCssClass"></i>
        <span slot="after">
            {{value}}%
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
                type: Number,
            }
        },

        computed: {
            iconCssClass(){
                if (this.value <= 5){
                    return "fa-battery-0 color--red";
                } else if (this.value > 5 && this.value <= 25){
                    return "fa-battery-1 color--red";
                } else if (this.value > 25 && this.value <= 50){
                    return "fa-battery-2 color--yellow";
                } else if (this.value > 50 && this.value <= 75){
                    return "fa-battery-3 color--green";
                } else if (this.value > 75){
                    return "fa-battery-4 color--green";
                }
            }
        }

    };
</script>

<style lang="scss">

    

</style>
