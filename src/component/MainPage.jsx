import { memo, useCallback, useEffect } from "react";
import Navbar from "./Navbar";
import Board from "./Board";
import { useDefaultWeather } from "../hook/search";
import { useDispatch } from "react-redux";
import { updateWeather } from "../toolkit/mainSlice";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(useCallback(() => useDefaultWeather(response => dispatch(updateWeather(response))), []), []);

  return (<section className="bg-background dark:bg-gradient-to-b dark:from-[#11466A] dark:from-4% dark:to-[#3B8DD1] dark:to-15% md:bg-gradient-to-r md:from-gr1 md:to-gr2 dark:md:bg-gradient-to-r dark:md:from-[#11466A] dark:md:from-20% dark:md:to-[#3078B4] dark:md:to-70%">
    <Navbar/>
    <Board/>
  </section>);
};

export default memo(MainPage);