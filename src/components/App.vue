<template>
    <dashboard columns="5" rows="8">

        <time-weather-tile position="a1:a2" heading="Barnsley" color="blue"
          date-format="ddd DD/MM" 
          time-zone="Europe/London" 
          weather-city="Barnsley">
        </time-weather-tile>
        <indicator-tile position="a3" value="true" color="green" label="Living room lights"></indicator-tile>
        <indicator-tile position="a4" value="true" color="blue" label="Garage lights"></indicator-tile>
        <indicator-tile position="a5" value="false" color="red" label="Garage door open"></indicator-tile>

        <value-tile position="b1:b2" heading="Temperature" color="yellow"
          :value="temperature" decimal-places="2" unit="°C">
          <percentile-change slot="after" :value="temperature"></percentile-change>
        </value-tile> 
        <sparkline-tile position="b3" :value="temperature" samples="50"></sparkline-tile>
        <gauge-tile position="b4:b5" color="yellow" 
          :value="temperature" max="30"
          decimal-places="2" unit="°C"></gauge-tile>

        <battery-tile position="c1:c2" heading="Battery" color="green"
          :value="battery">
        </battery-tile>
        <sparkline-tile position="c3" :value="battery" samples="50"></sparkline-tile>
        <gauge-tile position="c4:c5" color="green" 
          :value="battery" max="100" unit="%"></gauge-tile>

        <list-tile position="d1:d5" heading="Something" color="red" :values="listData"></list-tile> 

        <value-tile position="e1:e2" heading="SNR" color="orange"
          :value="snr" unit="dB"></value-tile>
        <chart-tile position="e3:e5" :data="chartData3" type="doughnut"></chart-tile>

        <chart-tile position="a6:c8" heading="Something" color="red" :data="chartData1" type="bar"></chart-tile>
        <chart-tile position="d6:e8" heading="Something" color="blue" :data="chartData1" type="line"></chart-tile>
        
    </dashboard>
</template>

<script>

    import Dashboard from './Dashboard';

    import PercentileChange from './atoms/PercentileChange';
    import ValueTile from './molecules/ValueTile';
    import ListTile from './molecules/ListTile';
    import SparklineTile from './molecules/SparklineTile';
    import GaugeTile from './molecules/GaugeTile';
    import ChartTile from './molecules/ChartTile';
    import IndicatorTile from './IndicatorTile';
    import BatteryTile from './BatteryTile';
    import TimeWeatherTile from './TimeWeatherTile';

    export default {

        components: {
            Dashboard,
            PercentileChange,
            ValueTile,
            ListTile,
            SparklineTile,
            GaugeTile,
            ChartTile,
            IndicatorTile,
            BatteryTile,
            TimeWeatherTile,
        },

        data(){
            return {
                temperature: 0,
                battery: 100,
                snr: 0,
                rssi: -100,
                chartData1: {},
                chartData2: {},
                chartData3: {},
                listData: [
                    { label: "Something 1", value: 123 },
                    { label: "Something 2", value: 90 },
                    { label: "Something 3", value: 87 },
                    { label: "Something 4", value: 30 },
                    { label: "Something 5", value: 10 }
                ]
            }
        },

        created() {

            var self = this;
            
            // Temperature
            setInterval(function(){
                self.temperature = Math.random() * 30;
            }, 5000);

            // Battery
            setInterval(function(){
                self.battery = Math.round(Math.random() * 100);
            }, 4500);

            // Snr / Rssi
            setInterval(function(){
                self.rssi = (Math.round(Math.random() * 20) + 100) * -1;
                self.snr = Math.round(Math.random() * 20);
            }, 4000);

            self.chartData1 = {
                labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                    {
                        label: 'Test',
                        color: '#2ecc71',
                        data: [10,15,20,20,10,15,5,7,30,10,12,15]
                    },
                    {
                        label: 'Test2',
                        color: '#3498db',
                        data: [10,15,5,7,30,10,12,15,10,15,20,20]
                    }
                ]
            }

            self.chartData3 = {
                labels: ['Jan','Feb','Mar'],
                datasets: [
                    {
                        label: 'Test',
                        color: ['#e74c3c', '#3498db', '#2ecc71'],
                        data: [10,15,20]
                    }
                ]
            }

        },
    };

</script>