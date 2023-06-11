import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main-state",
  initialState: { //
    current: null,
    hourForecast: null,
    dayForeCast: null
  },
  reducers: {
    updateWeather: (state, action) => {
      // 
      return action; //
    }
  }
});

const mainReducer = mainSlice.reducer;
const {updateWeather} = mainSlice.actions;

export default mainReducer;
export {updateWeather};