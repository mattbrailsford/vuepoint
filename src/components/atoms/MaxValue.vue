<template>
    <span v-if="maxValue != undefined">{{ maxValue.toFixed(decimalPlaces) }}</span>
</template>

<script>
    export default {

        props: {
            value: {
                type: Number
            },
            decimalPlaces: {
                type: Number,
                default: 0
            }
        },
        
        data() {
            return {
                maxValue: undefined
            }
        },

        watch: {
            value(newValue){
                if (this.maxValue == undefined || newValue > this.maxValue){
                    this.maxValue = newValue;
                }
            }
        }

    };
</script>