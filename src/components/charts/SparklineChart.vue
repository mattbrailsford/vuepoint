<script>
    import { Line } from 'vue-chartjs'

    const chartOptions = {
        responsive: true, 
        maintainAspectRatio: false,

        layout: {
            padding: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            }
        },
        animation: {
            duration: 0
        },
        legend: {
            display: false
        },
        elements: {
            line: {
                borderColor: '#ffffff',
                borderWidth: 2,
                backgroundColor: 'transparent',
                tension: 0
            },
            point: {
                radius: 0,
                hitRadius: 0
            }
        },
        tooltips: {
            enabled: false
        },
        events: [],
        scales: {
            yAxes: [{ display: false }],
            xAxes: [{ display: false }],
        }
        
    }

    export default {

        extends: Line,

        props: ['values'],

        created() {

            var self = this;

            self.drawChart = function(){
                self.renderChart({
                    labels: new Array(self.values.length),
                    datasets: [
                        {
                            data: self.values
                        }
                    ]
                }, chartOptions); 
            }

            self.handleResize = function(){
                setTimeout(function(){
                    self.drawChart();
                }, 1);
            }

        },

        mounted () {
            this.drawChart();
            window.addEventListener('resize', this.handleResize);
        },

        watch: {
            values(){
                this.drawChart();
            }
        },

        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize);
        }

    };
</script>