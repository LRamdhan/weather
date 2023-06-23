const useActivity = (temp, cdt, wind, hmd, cloud, icon) => {
  cdt = cdt.toLowerCase();
  icon = icon[icon.length - 1];
  const sugesstions = {};
  const threshold = [
    {
      activity: "fishing",
      temperature: {
        good: temp >= 15,
        fair: temp >= 10 && temp <= 14,
        bad: temp < 10      
      },
      windSpeed: {
        good: wind < 10,
        fair: wind >= 10 && wind <= 20,
        bad: wind > 20
      },
      humidity: {
        good: hmd >= 40 && hmd <= 70,
        fair: (hmd >= 30 && hmd <= 39) || (hmd >= 71 && hmd <= 80),
        bad: hmd < 30 || hmd > 80
      },
      cloudCover: {
        good: cloud < 30,
        fair: cloud >= 30 && cloud <= 60,
        bad: cloud > 60
      },
      condition: {
        good: cdt === "drizzle" || cdt === "clear" || cdt === "clouds",
        fair: cdt === "rain",
        bad: true
      }
    },
    {
      activity: "hiking",
      temperature: {
        good: temp >= 15 && temp <= 25,
        fair: (temp >= 10 && temp <= 14) || (temp >= 26 && temp <= 30),
        bad: temp < 10 || temp > 30      
      },
      windSpeed: {
        good: wind < 15,
        fair: wind >= 15 && wind <= 25,
        bad: wind > 25
      },
      humidity: {
        good: hmd >= 30 && hmd <= 60,
        fair: (hmd >= 20 && hmd <= 29) || (hmd >= 61 && hmd <= 70),
        bad: hmd < 20 || hmd > 70
      },
      cloudCover: {
        good: cloud < 30,
        fair: cloud >= 30 && cloud <= 60,
        bad: cloud > 60
      },
      condition: {
        good: cdt === "drizzle" || cdt === "clear" || cdt === "clouds",
        fair: cdt === "rain",
        bad: true
      }
    },
    {
      activity: "bicyle",
      temperature: {
        good: temp >= 10 && temp <= 25,
        fair: (temp >= 5 && temp <= 9) || (temp >= 26 && temp <= 30),
        bad: temp < 5 || temp > 30      
      },
      windSpeed: {
        good: wind < 20,
        fair: wind >= 20 && wind <= 30,
        bad: wind > 30
      },
      humidity: {
        good: hmd >= 30 && hmd <= 60,
        fair: (hmd >= 20 && hmd <= 29) || (hmd >= 61 && hmd <= 70),
        bad: hmd < 20 || hmd > 70
      },
      cloudCover: {
        good: cloud < 40,
        fair: cloud >= 40 && cloud <= 70,
        bad: cloud > 70
      },
      condition: {
        good: cdt === "clear" || cdt === "clouds",
        fair: cdt === "drizzle",
        bad: true
      }
    },
    {
      activity: "traveling",
      temperature: {
        good: temp >= 10 && temp <= 25,
        fair: (temp >= 5 && temp <= 9) || (temp >= 26 && temp <= 30),
        bad: temp < 5 || temp > 30      
      },
      windSpeed: {
        good: wind < 20,
        fair: wind >= 20 && wind <= 30,
        bad: wind > 30
      },
      humidity: {
        good: hmd >= 30 && hmd <= 60,
        fair: (hmd >= 20 && hmd <= 29) || (hmd >= 61 && hmd <= 70),
        bad: hmd < 20 || hmd > 70
      },
      cloudCover: {
        good: cloud < 40,
        fair: cloud >= 40 && cloud <= 70,
        bad: cloud > 70
      },
      condition: {
        good: cdt === "clear" || cdt === "clouds",
        fair: cdt !== "thunderstorm" && cdt !== "snow" && cdt !== "squall" && cdt !== "tornado",
        bad: cdt === "thunderstorm" || cdt === "snow" || cdt === "squall" || cdt === "tornado"
      }
    },
    {
      activity: "sport",
      temperature: {
        good: temp >= 15 && temp <= 25,
        fair: (temp >= 10 && temp <= 14) || (temp >= 26 && temp <= 30),
        bad: temp < 10 || temp > 30      
      },
      windSpeed: {
        good: wind < 20,
        fair: wind >= 20 && wind <= 30,
        bad: wind > 30
      },
      humidity: {
        good: hmd >= 30 && hmd <= 60,
        fair: (hmd >= 20 && hmd <= 29) || (hmd >= 61 && hmd <= 70),
        bad: hmd < 20 || hmd > 70
      },
      cloudCover: {
        good: cloud < 50,
        fair: cloud >= 50 && cloud <= 70,
        bad: cloud > 70
      },
      condition: {
        good: cdt === "clear" || cdt === "clouds",
        fair: cdt !== "drizzle",
        bad: true
      }
    }
  ];
  for(let avt of threshold) {
    const point = [];
    if(avt.temperature.good) {
      point.push("good");
    } else if(avt.temperature.fair) {
      point.push("fair");
    } else {
      point.push("bad");
    }
    if(avt.windSpeed.good) {
      point.push("good");
    } else if(avt.windSpeed.fair) {
      point.push("fair");
    } else {
      point.push("bad");
    }
    if(avt.humidity.good) {
      point.push("good");
    } else if(avt.humidity.fair) {
      point.push("fair");
    } else {
      point.push("bad");
    }
    if(avt.cloudCover.good) {
      point.push("good");
    } else if(avt.cloudCover.fair) {
      point.push("fair");
    } else {
      point.push("bad");
    }
    if(avt.condition.good) {
      point.push("good");
    } else if(avt.condition.fair) {
      point.push("fair");
    } else if(avt.condition.bad){
      point.push("bad");
    }
    let good = 0, fair = 0, bad = 0; 
    for(let child of point) {
      if(child === "good") {
        good++;
      } else if(child === "fair") {
        fair++;
      } else if(child === "bad") {
        bad++;
      }
    }
    const highGood = good - fair > 0 && good - bad > 0;
    const highFair = fair - good > 0 && fair - bad > 0;
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
      for(let child of same) {
        if(child === "good") {
          sugesstions[avt.activity] = "good";
          break;
        } else if(child === "fair") {
          sugesstions[avt.activity] = "fair";
          break;
        } else if(child === "bad") {
          sugesstions[avt.activity] = "bad";
          break;
        }
      } 
    } else {
      if(highGood) {
        sugesstions[avt.activity] = "good";
      } else if(highFair) {
        sugesstions[avt.activity] = "fair";
      } else {
        sugesstions[avt.activity] = "bad";
      }
    }
  }
  if(icon === "n") {
    sugesstions.hiking = "bad";
    if(sugesstions.bicyle === "good") {
      sugesstions.bicyle = "fair";
    } else if(sugesstions.bicyle === "good") {
      sugesstions.bicyle = "bad";
    }
    if(sugesstions.sport === "good") {
      sugesstions.sport = "fair";
    } else if(sugesstions.sport === "good") {
      sugesstions.sport = "bad";
    }
  }
  return sugesstions;
};

const useSaveNavigation = data => {
  const ngt = JSON.parse(localStorage.getItem('navigation'));
  let i = 0;
  for(let child of ngt) {
    if(child.id === data.id) {
      ngt.splice(i, 1);
      break;
    }
    i++;
  }
  ngt.unshift(data);
  localStorage.setItem('navigation', JSON.stringify(ngt));
};

const useRemoveNavigation = id => {
  const ngt = JSON.parse(localStorage.getItem('navigation'));
  let i = 0;
  for(let child of ngt) {
    if(child.id === id) {
      ngt.splice(i, 1);
      break;
    }
    i++;
  }
  localStorage.setItem('navigation', JSON.stringify(ngt));
}

export {useActivity, useSaveNavigation, useRemoveNavigation};