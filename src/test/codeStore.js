const date = "2023-06-11 15:00:00";
let result = parseInt(date.match(/ [0-9][0-9]/i)[0]);
result = result < 12 ? `${result} am` : `${result - 12} pm`;
console.log(result);


const data = {
  "mainReducer":{
    "current":{
      "city":"Dubai",
      "temperature":40,
      "condition":"Clear",
      "wind":7,
      "humidity":25,
      "cloud":0,
      "icon":"01d"
    },
    "hourForecast":[
      {"hour":"12 am","icon":"01d","temperature":40},
      {"hour":"3 pm","icon":"02d","temperature":38},
      {"hour":"6 pm","icon":"04n","temperature":35},
      {"hour":"9 pm","icon":"04n","temperature":31}
    ],
    "dayForecast":[
      {"icon":"04n","day":"Wednesday","temperature":31},
      {"icon":"01n","day":"Thursday","temperature":30},
      {"icon":"01n","day":"Friday","temperature":30},
      {"icon":"01n","day":"Saturday","temperature":30},
      {"icon":"01n","day":"Sunday","temperature":30}
    ]
  },
  "skeletonReducer":{
    "skeletonDisplay":"hidden",
    "contentDisplay":""
  }
};


const defaultWeather = {
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


let finalResult;
const good = 1, fair = 3, bad = 1; 

const highGood = good - fair > 0 && good - bad > 0;
const highFair = fair - good > 0 && fair - bad > 0;
const highBad = bad - good > 0 && bad - fair > 0;
const same = [
  { condition: "good", amount: good === 2 ? 2 : 0 },
  { condition: "fair", amount: fair === 2 ? 2 : 0 },
  { condition: "bad", amount: bad === 2 ? 2 : 0 }
];
for(let child of same) { if(child.amount === 2) same.push(child.condition); } 
same.shift();
same.shift();
same.shift();

if(same.length === 2) {
  console.log("ada yang sama");
  for(let child of same) {
    if(child === "good") {
      finalResult = "good";
      break;
    } else if(child === "fair") {
      finalResult = "fair";
      break;
    } else if(child === "bad") {
      finalResult = "bad";
      break;
    }
  } 
} else {
  if(highGood) {
    finalResult = "good";
  } else if(highFair) {
    finalResult = "fair";
  } else {
    finalResult = "bad";
  }
}


const ulElement = useRef();
const observer = new IntersectionObserver(entries => {
  let imgLoaded = 0;
  for(let el of entries) { if(el.isIntersecting) imgLoaded++; }
  if((result.length > 4 && imgLoaded > 4) || (result.length <= 4 && imgLoaded === result.length)) setLoading("loading");
});
useEffect(() => Array.from(ulElement.current.children).forEach(el => observer.observe(el.children[2])), [result]);