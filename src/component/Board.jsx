import { memo } from "react";
import waveSm from "./../img/wave-sm.svg";
import waveSmDark from "./../img/wave-dark-sm.svg";
import waveMd from "./../img/wave-md.svg";
import waveMdDark from "./../img/wave-dark-md.svg";
import CurrentWeather from "./CurrentWeather";
import HourForecast from "./HourForecast";
import DayForecast from "./DayForecast";
import Activity from "./Activity";
import Copyright from "./Copyright";

const Board = () => {
  return (<main className="relative mt-44 sm:mt-60 md:mt-0">
    <img src={waveSm} alt="terjadi kesalahan" className="w-full absolute top-0 dark:hidden sm:hidden"/>
    <img src={waveSmDark} alt="terjadi kesalahan" className="w-full absolute top-0 hidden dark:block sm:dark:hidden"/>
    <img src={waveMd} alt="terjadi kesalahan" className="w-full absolute top-0 hidden sm:block md:hidden"/>
    <img src={waveMdDark} alt="terjadi kesalahan" className="w-full absolute top-0 hidden sm:dark:block md:dark:hidden"/>
    <section className="relative top-0 inset-x-0">
      <CurrentWeather/>
      <HourForecast/>
      <DayForecast/>
      <Activity/>
      <Copyright/>
    </section>
  </main>);
};

export default memo(Board);