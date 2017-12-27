<template>
    <div class="dashboard" :style="gridTemplate">
    	<slot></slot>
    </div>
</template>

<script>
    export default {

        props: ['rows', 'columns'],

        computed: {
            gridTemplate() {
                return `grid-template: repeat(${ this.rows }, 1fr) / repeat(${ this.columns }, 1fr);`;
            },
        }

    };
</script>

<style lang="scss">

    @import "~@/styles/_vars.scss";
    @import "~@/styles/_base.scss";

    .dashboard {
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        padding: $grid-gap;
        grid-gap: $grid-gap;
        width: 100%;
        height: 100%;
    }

</style>
