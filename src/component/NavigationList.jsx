import { memo, useCallback } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigation } from "../context/navigationContext";
import { useRemoveNavigation } from "../hook/info";
import { useDispatch } from "react-redux";
import { updateWeather } from "../toolkit/mainSlice";
import { useWeather } from "../hook/search";
import { content, skeleton } from "../toolkit/skeletonSlice";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const NavigationList = () => {
  const {navWeather, setNavWeather, setSideAppear} = useNavigation();
  const dispatch = useDispatch();

  const removeNavWeather = useCallback(id => {
    useRemoveNavigation(id);
    setNavWeather(); 
  }, []);

  const pickNavWeather = useCallback(id => {
    setSideAppear(false);
    dispatch(skeleton());
    useWeather(id, response => {
      dispatch(updateWeather(response));
      dispatch(content());
    }, error => console.log(error));
  }, []);

  return (<div className="flex-1 overflow-y-scroll no-scrollbar">
    <ul className="py-[18px] px-3 divide-y-[1.5px] divide-[#848484] sm:py-7 sm:px-[14px]">
      {navWeather.map((el, ind) => {
        return (<li key={ind} onClick={event => { event.stopPropagation(); pickNavWeather(el.id); }} className="px-[10px] py-5 flex items-center sm:py-6 sm:px-4">
          <div className="w-max h-max">
            <span className={`fi fi-${el.country.toLowerCase()} text-2xl sm:text-3xl`}></span>
          </div>
          <h3 className="capitalize font-medium text-lg flex-1 ml-4 sm:text-[28px] sm:ml-12">{el.name}</h3>
          <CloseIcon sx={{fontSize: {xs: "33px", sm: "46px"}}} onClick={event => {event.stopPropagation (); removeNavWeather(el.id); }}/>
        </li>);
      })}  
    </ul>
  </div>);
};

export default memo(NavigationList);