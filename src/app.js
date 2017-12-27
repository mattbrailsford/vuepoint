import './bootstrap.js';

//import Echo from 'laravel-echo';
import Vue from 'vue';

import Dashboard from './components/Dashboard';

import PercentileChange from './components/atoms/PercentileChange';
import ValueTile from './components/molecules/ValueTile';
import ListTile from './components/molecules/ListTile';
import SparklineTile from './components/molecules/SparklineTile';
import GaugeTile from './components/molecules/GaugeTile';
import ChartTile from './components/molecules/ChartTile';

//import Calendar from './components/Calendar';
//import Github from './components/Github';
//import InternetConnection from './components/InternetConnection';
//import Music from './components/Music';
//import Npm from './components/Npm';
//import Packagist from './components/Packagist';
//import Tasks from './components/Tasks';
import IndicatorTile from './components/IndicatorTile';
import BatteryTile from './components/BatteryTile';
import TimeWeatherTile from './components/TimeWeatherTile';
//import Twitter from './components/Twitter';
//import Uptime from './components/Uptime';

new Vue({

    el: '#dashboard',

    components: {
        Dashboard,
        PercentileChange,
        ValueTile,
        ListTile,
        SparklineTile,
        GaugeTile,
        ChartTile,
        //Calendar,
        //Github,
        //InternetConnection,
        //Music,
        //Npm,
        //Packagist,
        //Tasks,
        IndicatorTile,
        BatteryTile,
        TimeWeatherTile,
        //Twitter,
        //Uptime,
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
});
