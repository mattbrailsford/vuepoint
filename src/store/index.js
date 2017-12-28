import Vue from 'vue'
import Vuex from 'vuex'

import weather from './modules/weather'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        weather
    }
})