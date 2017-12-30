<template>
    <span v-if="emaValue != undefined">{{ emaValue.toFixed(decimalPlaces) }}</span>
</template>

<script>
    export default {

        props: {
            value: {
                type: Number
            },
            alpha: {
                type: Number,
                default: 0.2
            },
            decimalPlaces: {
                type: Number,
                default: 0
            }
        },
        
        data() {
            return {
                emaValue: undefined
            }
        },

        watch: {
            value(newValue){
                if (newValue){
                    if (this.emaValue != undefined){
                        this.emaValue = ((newValue * this.alpha) + (this.emaValue * (1 - this.alpha)));
                    } else {
                        this.emaValue = newValue;
                    }
                }
            }
        }

    };
</script>