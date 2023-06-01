import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: 'b5002ec102b2469d8bb135824233003',
    q: 'Ponta Grossa',
    days: 5,
    aqi: 'yes'
  }
});

export function getWeather() {
  return weatherApi.get('/forecast.json');
}
