import './bootstrap.js';

import Vue from 'vue';
import App from './components/App';

import store from './store'

new Vue({
    store, // inject store to all children
    el: '#app',
    render: h => h(App)
});
