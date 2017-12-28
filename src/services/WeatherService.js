import axios from 'axios';

export default class WeatherService {

    async getWeather(city) {
        let query = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`;
        let response = await this.performQuery(query);
        return response.data.query.results.channel.item.condition;
    }

    async performQuery(query) {
        return await axios({
            method: 'get',
            url: `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`
        });
    }
     
}