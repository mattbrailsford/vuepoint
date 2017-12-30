<script>
    import { Doughnut } from 'vue-chartjs'
    import { cssColor } from '../../helpers'
    import deepAssign from 'deep-assign'

    const chartOptions = {
        responsive: true, 
        maintainAspectRatio: false,

        rotation: 0.85 * Math.PI, // 1.1, 0.75
        circumference: 1.3 * Math.PI, // 1.2, 1.5
        cutoutPercentage: 70,
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
        elements: {
            arc: {
                borderWidth: 0
            },
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        events: []
        
    }

    export default {

        extends: Doughnut,

        props: {
            value:{ 
                type: Number
            }, 
            min: {
                type: Number,
                default: 0
            }, 
            max: {
                type: Number,
                default: 100              
            }, 
            decimalPlaces: {
                type: Number,
                default: 0
            },
            title: {
                type: String
            },
            color: {
                type: String
            }  
        },

        created() {

            var self = this;

            self.drawChart = function(){
                var clr = cssColor(self.color) || '#ffffff';
                var values = [this.value - this.min, this.max - this.min - this.value];
                self.renderChart({
                    labels: ['',''],
                    datasets: [
                        {
                            backgroundColor: [clr, 'rgba(255,255,255,.05)'],
                            data: values
                        }
                    ]
                }, deepAssign({}, chartOptions, {
                    animation: {
                        onComplete: function(anim){
                            var ctx = anim.animationObject.chart.ctx;
                            var can = anim.animationObject.chart.canvas;
 
                            // Value
                            var fontHeight = can.offsetHeight * (20/100);
                            var x = can.width / 2;
                            var y = (can.height / 1.7) + (fontHeight / 2.5);

                            ctx.textAlign = 'center';
                            ctx.fillStyle = '#ffffff';
                            ctx.font = "600 "+ fontHeight +"px Montserrat";
                            ctx.fillText("" + self.value.toFixed(self.decimalPlaces), x, y);

                            // Title
                            if (self.title){
                                y = can.height - 7;
                                ctx.font = "600 14px Montserrat";
                                ctx.fillText(self.title, x, y);
                            }
                        }
                    }
                })); 
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
            value(){
                this.drawChart();
            }
        },

        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize);
        }

    };
</script>