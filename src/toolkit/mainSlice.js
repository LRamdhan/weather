import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main-state",
  initialState: {
    current: {
      city: "",
      temperature: "",
      condition: "",
      wind: "",
      humidity: "",
      cloud: "",
      icon: ""
    },
    hourForecast: [],
    dayForecast: []
  },
  reducers: {
    updateWeather: (state, {payload}) => {
      const forecast = payload.forecast.list;
      const hourForecast = [];
      let date = parseInt(forecast[0].dt_txt.match(/[0-9][0-9] /i)[0]);
      for(let weather of forecast) {
        if(parseInt(weather.dt_txt.match(/[0-9][0-9] /i)[0]) === date) {
          let hour = parseInt(weather.dt_txt.match(/ [0-9][0-9]/i)[0]);
          hour = hour <= 12 ? `${hour} am` : `${hour - 12} pm`;
          hourForecast.push({
            hour: hour,
            icon: weather.weather[0].icon,
            temperature: Math.round(weather.main.temp)
          });
        } else { break; }
      }
      const dayForecast = [];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      for(let weather of forecast) {
        const subDate = parseInt(weather.dt_txt.match(/[0-9][0-9] /i)[0]);
        if(subDate !== date) {
          dayForecast.push({
            icon: weather.weather[0].icon,
            day: days[new Date(weather.dt_txt).getDay()],
            temperature: Math.round(weather.main.temp)
          }); 
          date = subDate;
        }
        if(dayForecast.length === 5) break;
      }
      const newState = {
        current: {
          city: payload.current.name,
          temperature: Math.round(payload.current.main.temp),
          condition: payload.current.weather[0].main,
          wind: Math.round(payload.current.wind.speed),
          humidity: payload.current.main.humidity,
          cloud: payload.current.clouds.all,
          icon: payload.current.weather[0].icon
        },
        hourForecast,
        dayForecast
      };
      return newState;
    }
  }
});

const mainReducer = mainSlice.reducer;
const {updateWeather} = mainSlice.actions;

export default mainReducer;
export {updateWeather};