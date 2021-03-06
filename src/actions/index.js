import axios from 'axios';

const API_KEY = 'a5c54dcce9dd6432efa59e10c6bb4223';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
//https://home.openweathermap.org/api_keys
//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
