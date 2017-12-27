<template>
    <span class="change" :class="colorCssClass">
        <span v-html="indicator"></span>{{Math.abs(percent)}}%
    </span>
</template>

<script>
    import AnimatedNumber from './AnimatedNumber';

    export default {

        components: {
            AnimatedNumber,
        },

        props: {
            value: {
                type: Number,
            }
        },
        data() {
            return {
                percent: 0
            }
        },
        watch: {
            value: function(newValue, oldValue){
                var perc = Math.round(((newValue - oldValue)/oldValue)*100);
                this.percent = perc != Infinity && !isNaN(perc) ? perc : 0;
            }
        },
        computed: {
            indicator(){
                if (this.percent < 0){
                    return "&#9660;";
                } else if (this.percent > 0){
                    return "&#9650;";
                } else {
                    return "&#x25cf;";
                }
            },
            colorCssClass(){
                if(this.percent < 0){
                    return "color--red";
                } else if (this.percent >= 0 && this.percent < 3){
                    return "color--yellow";
                } else {
                    return "color--green";
                }                
            }
        }

    };
</script>