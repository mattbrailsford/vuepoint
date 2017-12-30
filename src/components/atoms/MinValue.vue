<template>
    <span v-if="minValue != undefined">{{ minValue.toFixed(decimalPlaces) }}</span>
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
                minValue: undefined
            }
        },

        watch: {
            value(newValue){
                if (this.minValue == undefined || newValue < this.minValue){
                    this.minValue = newValue;
                }
            }
        }

    };
</script>