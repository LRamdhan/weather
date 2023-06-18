const date = "2023-06-11 15:00:00";

let result = parseInt(date.match(/ [0-9][0-9]/i)[0]);
result = result < 12 ? `${result} am` : `${result - 12} pm`;

console.log(result);

const data = {
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
}

// let finalResult;
// const good = 1, fair = 3, bad = 1; 

// const highGood = good - fair > 0 && good - bad > 0;
// const highFair = fair - good > 0 && fair - bad > 0;
// const highBad = bad - good > 0 && bad - fair > 0;
// const same = [
//   { condition: "good", amount: good === 2 ? 2 : 0 },
//   { condition: "fair", amount: fair === 2 ? 2 : 0 },
//   { condition: "bad", amount: bad === 2 ? 2 : 0 }
// ];
// for(let child of same) { if(child.amount === 2) same.push(child.condition); } 
// same.shift();
// same.shift();
// same.shift();

// if(same.length === 2) {
//   console.log("ada yang sama");
//   for(let child of same) {
//     if(child === "good") {
//       finalResult = "good";
//       break;
//     } else if(child === "fair") {
//       finalResult = "fair";
//       break;
//     } else if(child === "bad") {
//       finalResult = "bad";
//       break;
//     }
//   } 
// } else {
//   if(highGood) {
//     finalResult = "good";
//   } else if(highFair) {
//     finalResult = "fair";
//   } else {
//     finalResult = "bad";
//   }
// }