import Vue from 'vue'
import axios from 'axios';

// initial state
const state = {
    conditions: {}
}

// actions
const actions = {
    getConditions ({ commit }, city) {
        var query = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`;
        var endpoint = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`;
        axios.get(endpoint).then((response) => {
            commit('SET_CONDITIONS', { city:city, conditions:response.data.query.results.channel.item.condition })
        }, (err) => {
            console.log(err)
        });
    }
}

// mutations
const mutations = { 
    SET_CONDITIONS: (state, data) => {
        Vue.set(state.conditions, data.city, data.conditions);
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced: true    
}