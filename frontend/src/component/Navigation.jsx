import { Drawer } from "@mui/material";
import { memo, useCallback, useEffect } from "react";
import NavigationTitle from "./NavigationTitle.jsx";
import NavigationList from "./NavigationList.jsx";
import {useNavigation} from "./../context/navigationContext.jsx";

const Navigation = () => {
  const {sideAppear, setSideAppear, setNavWeather} = useNavigation();

  useEffect(useCallback(() => { 
    if(!localStorage.getItem("navigation")) localStorage.setItem("navigation", JSON.stringify([])); 
    setNavWeather();
  }, []), []);
  
  return (<Drawer anchor="left" open={sideAppear} variant="temporary" onClose={() => setSideAppear(false)}>
    <aside className="w-[283px] h-full text-white flex flex-col pb-3 sm:pb-4 sm:w-[526px] bg-[#4B4B4B]">
      <NavigationTitle/>
      <NavigationList/>
    </aside>
  </Drawer>);
};

export default memo(Navigation);