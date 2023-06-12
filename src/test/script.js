const date = "2023-06-11 15:00:00";

let result = parseInt(date.match(/ [0-9][0-9]/i)[0]);
result = result < 12 ? `${result} am` : `${result - 12} pm`;

console.log(result);

{"current":{"city":"Banten","temperature":25,"condition":"Clouds","wind":1,"humidity":88,"cloud":47,"icon":"03n"},"hourForecast":[{"hour":"0 pm","icon":"10n","temperature":25},{"hour":"3 pm","icon":"04n","temperature":25},{"hour":"6 pm","icon":"04n","temperature":24},{"hour":"9 pm","icon":"04n","temperature":23}],"dayForecast":[{"icon":"04d","day":"Tuesday","temperature":24},{"icon":"04d","day":"Wednesday","temperature":25},{"icon":"10d","day":"Thursday","temperature":23},{"icon":"10d","day":"Friday","temperature":23},{"icon":"04d","day":"Saturday","temperature":23}]}