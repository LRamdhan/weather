import { memo, useCallback, useEffect } from "react";
import HistoryIcon from "@mui/icons-material/History";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useSearch } from "./../context/searchContext.jsx";
import { useWeather, useHistory } from "../hook/search.js";
import { useDispatch } from "react-redux";
import { updateWeather } from "../toolkit/mainSlice.js";
import { useNavigation } from "../context/navigationContext.jsx";
import { useSaveNavigation } from "../hook/info.js";
import { skeleton, content } from "../toolkit/skeletonSlice.js";

const SearchList = () => {
  const { result, setResult, setDisplay, searchInput, setSearchInput, loading } = useSearch();
  const dispatch = useDispatch();
  const {setNavWeather} = useNavigation();

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
    useWeather(id, response => {
      dispatch(updateWeather(response));
      dispatch(content());
    }, error => console.log(error));
    useSaveNavigation({ id, name, country });
    setNavWeather();
    dispatch(skeleton());
  }, []);

  return (<>
    <div className={`spin-loading ${searchInput.trim().length === 0 ? "hidden" : loading.load}`}></div>
    {result.length === 0 && searchInput.length !== 0 ? <p className={`text-center mt-28 text-lg sm:max-md:text-[28px] capitalize ${loading.notFound}`}>city not found</p> : ""}
    <ul className={`z-10 px-[14px] mt-1 divide-y-[1.5px] divide-second dark:divide-darkOuter divide-solid flex-1 overflow-y-scroll no-scrollbar sm:px-4 md:custom-scrollbar md:custom-scrollbar-thumb md:px-8 md:text-lg ${loading.list}`}>
      {result.map((el, ind) => {
        return (<li key={ind} onClick={() => pick(el.id, el.name, el.country)} className="cursor-pointer flex justify-between items-center text-lg py-4 px-1 sm:px-[26px] sm:max-md:py-5 md:px-4">
          {el.history ? <HistoryIcon sx={{fontSize: {xs: "31px", sm: "46px", md: "31px"}}} color="icon"/> : <PlaceOutlinedIcon sx={{fontSize: {xs: "31px", sm: "46px", md: "31px"}}} color="icon"/>}
          <span className="font-medium capitalize flex-1 pl-6 sm:max-md:pl-11 sm:max-md:text-[28px] md:order-2">{el.name}</span>
          <img src={`https://www.countryflagicons.com/FLAT/64/${el.country}.png`} alt="something's wrong" className="w-10 sm:max-md:w-14 md:order-1 md:ml-8"/>
          <div className="aspect-square w-3 border-t-2 border-r-2 border-second dark:border-darkOuter rotate-45 hidden md:block md:order-3"></div>
        </li>);
      })}
    </ul>
  </>);
};

export default memo(SearchList);
