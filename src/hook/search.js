import axios from "axios";

const useCity = (keyword, success, fail) => {
  const history = JSON.parse(localStorage.getItem("history")).reverse();
  let index = 0;
  const matchedHistory = [];
  const regex = new RegExp('^' + keyword, 'i');
  for(let h of history) {
    if(regex.test(h.name)) matchedHistory.push(history[index]);
    if(matchedHistory.length === 3) break;
    index++;
  }
  axios.get(`${import.meta.env.VITE_url}/search/index.php`, {
    params: {
      q: keyword
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      response.data.data = matchedHistory.concat(response.data.data);
      success(response.data);
    })
    .catch(error => fail(error.message));
};

const useWeather = async (id, success, fail) => {
  const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
      id: id,
      appid: import.meta.env.VITE_api_key,
      units: "metric"
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  let currentFail = false, forecastFail = false;
  const current = await weatherApi.get("weather")
    .then(response => response.data)
    .catch(error => currentFail = error.message);
  const forecast = await weatherApi.get("forecast")
    .then(response => response.data)
    .catch(error => forecastFail = error.message);
  if(currentFail && forecastFail) {
    fail({currentFail, forecastFail});
    return;
  }
  success({current, forecast});
};

const useHistory = addHistory => {
  const history = JSON.parse(localStorage.getItem("history")).reverse();
  if (history.length === 0) return;
  const historyList = [];
  const loop = history.length <= 3 ? history.length - 1 : 3;
  for (let i = 0; i <= loop; i++) { historyList.push(history[i]); }
  addHistory(historyList)
};

export { useCity, useWeather, useHistory };