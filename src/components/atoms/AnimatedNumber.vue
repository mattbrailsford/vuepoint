<template>
    <span>{{animatedValue.toFixed(decimalPlaces)}}</span>
</template>

<script>
    import anime from 'animejs'

    export default {

        props: {
            value: {
                type: Number,
                required: true
            },
            decimalPlaces: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                animatedValue: 0
            }
        },
        watch: {
            value: function(newValue, oldValue){
                if (newValue == Infinity || isNaN(newValue))
                    newValue = 0;
                if (oldValue == Infinity || isNaN(oldValue))
                    oldValue = 0;
                this.animate(oldValue, newValue)
            }
        },
        mounted: function () {
            this.animate(0, this.value)
        },
        methods: {
            animate: function (startValue, endValue) {
                var vm = this;
                vm.animatedValue = startValue;
                anime({
                    targets: vm,
                    animatedValue: endValue,
                    easing: 'easeOutQuad'
                });
            }
        }

    };
</script>