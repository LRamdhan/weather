import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main-state",
  initialState: {"current":{"city":"Banten","temperature":25,"condition":"Clouds","wind":1,"humidity":88,"cloud":47,"icon":"03n"},"hourForecast":[{"hour":"0 pm","icon":"10n","temperature":25},{"hour":"3 pm","icon":"04n","temperature":25},{"hour":"6 pm","icon":"04n","temperature":24},{"hour":"9 pm","icon":"04n","temperature":23}],"dayForecast":[{"icon":"04d","day":"Tuesday","temperature":24},{"icon":"04d","day":"Wednesday","temperature":25},{"icon":"10d","day":"Thursday","temperature":23},{"icon":"10d","day":"Friday","temperature":23},{"icon":"04d","day":"Saturday","temperature":23}]}, // bakal diganti
  reducers: {
    updateWeather: (state, {payload}) => {
      const forecast = payload.forecast.list;
      const hourForecast = [];
      let date = parseInt(forecast[0].dt_txt.match(/[0-9][0-9] /i)[0]);
      for(let weather of forecast) {
        if(parseInt(weather.dt_txt.match(/[0-9][0-9] /i)[0]) === date) {
          let hour = parseInt(weather.dt_txt.match(/ [0-9][0-9]/i)[0]);
          hour = hour < 12 ? `${hour} am` : `${hour - 12} pm`;
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