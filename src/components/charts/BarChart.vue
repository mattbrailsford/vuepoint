<script>
    import { Bar } from 'vue-chartjs'
    import deepAssign from 'deep-assign'

    const chartOptions = {
        responsive: true, 
        maintainAspectRatio: false,

        layout: {
            padding: {
                top: -5,
                right: 5,
                bottom: 5,
                left: 5
            }
        },
        animation: {
            duration: 0
        },
        legend: {
            labels: {
                boxWidth: 12,
                fontColor: 'white'
            }
        },
        scales: {
            xAxes: [{
                categoryPercentage: 0.8,
                barPercentage: 1,
                scaleLabel: {
                    fontColor: 'white'
                },
                gridLines: { 
                    color: "rgba(255,255,255,.1)" 
                },
                ticks: { fontColor: "white" }
            }],
            yAxes: [{
                scaleLabel: {
                    fontColor: 'white'
                },
                gridLines: { 
                    color: "rgba(255,255,255,.1)" 
                },
                ticks: { fontColor: "white" }
            }]
        },
        elements: {
            line: {
                borderWidth: 0,
                backgroundColor: 'transparent'
            },
            point: {
                hitRadius: 0
            }
        },
        tooltips: {
            enabled: false
        },
        events: []
        
    }

    export default {

        extends: Bar,

        props: ['data', 'options'],

        computed: {
            chartData() {

                var newData = deepAssign({}, this.data);

                if (newData.datasets){
                    newData.datasets.forEach(function(ds){
                        ds.borderColor = ds.color;
                        ds.backgroundColor = ds.color;
                        ds.borderWidth = 2;
                    });
                }

                return newData;

            }
        },

        created() {

            var self = this;
            var opts = deepAssign({}, chartOptions, this.options || {});

            self.drawChart = function(){
                self.renderChart(self.chartData, opts); 
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