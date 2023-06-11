import { memo, useCallback, useEffect, useMemo } from "react";
import HistoryIcon from "@mui/icons-material/History";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useSearch } from "./../context/searchContext.jsx";
import { useWeather, useHistory } from "../hook/search.js";
import { useDispatch } from "react-redux";
import { updateWeather } from "../toolkit/mainSlice.js";

const SearchList = () => {
  const { result, setResult, setDisplay, setSearchInput } = useSearch();
  const dispatch = useDispatch();
  const iconStyle = useMemo(() => {
    return {
      fontSize: {
        xs: "31px"
      },
      color: "#AED6FB"
    };
  }, []);

  useEffect(useCallback(() => {
    if(!localStorage.getItem("history"))
      localStorage.setItem("history", JSON.stringify([]));
      useHistory(setResult);
    }, []),
  []);

  const pick = useCallback((id, name, country) => {
    const history = JSON.parse(localStorage.getItem("history"));
    let i = 0;
    for(let city of history) {
      if(city.id === id) {
        history.splice(i, 1);
        break;
      }
      i++;
    }
    history.push({ id, name, country, history: true });
    localStorage.setItem("history", JSON.stringify(history));
    setSearchInput("");
    setDisplay("none");
    useHistory(setResult);
    useWeather(id, response => dispatch(updateWeather(response)), error => console.log(error));
  }, []);

  return (
    <ul className="px-[14px] mt-1 divide-y-[1.5px] divide-second divide-solid flex-1 overflow-y-scroll no-scrollbar md:custom-scrollbar md:custom-scrollbar-thumb md:px-8 md:text-lg">
      {result.map((el, ind) => {
        return (<li key={ind} onClick={() => pick(el.id, el.name, el.country)} className="flex justify-between items-center text-lg py-4 px-1 md:px-4">
          {el.history ? <HistoryIcon sx={iconStyle}/> : <PlaceOutlinedIcon sx={iconStyle} />}
          <span className="font-medium capitalize flex-1 pl-6 md:order-2">{el.name}</span>
          <img src={`https://www.countryflagicons.com/FLAT/64/${el.country}.png`} alt="something's wrong" className="w-10 md:order-1 md:ml-8"/>
          <div className="aspect-square w-3 border-t-2 border-r-2 border-second rotate-45 hidden md:block md:order-3"></div>
        </li>);
      })}
    </ul>
  );
};

export default memo(SearchList);
