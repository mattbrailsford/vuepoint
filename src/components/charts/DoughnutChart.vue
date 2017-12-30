<script>
    import { Doughnut } from 'vue-chartjs'
    import deepAssign from 'deep-assign'

    require('chart.piecelabel.js');

    const chartOptions = {
        responsive: true, 
        maintainAspectRatio: false,

        cutoutPercentage: 40,
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
        pieceLabel: {
            render: 'percentage',
            fontColor: 'white',
            precision: 2
        },
        legend: {
            labels: {
                boxWidth: 12,
                fontColor: 'white'
            }
        },
        elements: {
            arc: {
                borderWidth: 0
            },
        },
        tooltips: {
            enabled: false
        },
        events: []
        
    }

    export default {

        extends: Doughnut,

        props: ['data', 'options'],

        computed: {
            chartData() {

                var newData = deepAssign({}, this.data);

                if (newData.datasets){
                    newData.datasets.forEach(function(ds){
                        ds.borderColor = ds.color;
                        ds.backgroundColor = ds.color;
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