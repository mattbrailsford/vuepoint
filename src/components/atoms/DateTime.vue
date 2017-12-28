<template>
    <span>{{ value }}</span>
</template>

<script>
    import moment from 'moment-timezone';

    export default {

        props: {
            format: {
                type: String,
                default: 'Do MMMM YYYY, HH:mm',
            },
            timeZone: {
                type: String,
            }
        },
        
        data() {
            return {
                value: ''
            }
        },

        created() {
            this.updateValue();
            setInterval(this.updateValue, 1000);
        },

        methods: {
            updateValue() {
                this.value = moment().tz(this.timeZone).format(this.format);
            },
        }

    };
</script>