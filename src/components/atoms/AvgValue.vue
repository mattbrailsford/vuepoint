<template>
    <span v-if="avgValue != undefined">{{ avgValue.toFixed(decimalPlaces) }}</span>
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
                avgValue: undefined,
                valueCount: 0
            }
        },

        watch: {
            value(newValue){
                if (newValue){
                    if (this.avgValue != undefined){
                        let ttl = (this.avgValue * this.valueCount) + newValue;
                        this.valueCount += 1;
                        this.avgValue = ttl / this.valueCount;
                    } else {
                        this.avgValue = newValue;
                        this.valueCount += 1;
                    }
                }
            }
        }

    };
</script>