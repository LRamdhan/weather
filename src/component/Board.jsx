import { memo } from "react";
import waveSm from "./../img/wave-sm.svg";
import waveSmDark from "./../img/wave-dark-sm.svg";
import waveMd from "./../img/wave-md.svg";
import waveMdDark from "./../img/wave-dark-md.svg";
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import HourForecast from "./HourForecast";
import DayForecast from "./DayForecast";
import Activity from "./Activity";
import Copyright from "./Copyright";

const Board = () => {
  return (<main className="relative">
    <img src={waveSm} alt="terjadi kesalahan" className="top-space w-full absolute top-0 dark:hidden sm:hidden"/>
    <img src={waveSmDark} alt="terjadi kesalahan" className="top-space w-full absolute top-0 hidden dark:block sm:dark:hidden"/>
    <img src={waveMd} alt="terjadi kesalahan" className="top-space w-full absolute top-0 hidden sm:block md:hidden"/>
    <img src={waveMdDark} alt="terjadi kesalahan" className="top-space w-full absolute top-0 hidden sm:dark:block md:dark:hidden"/>
    <section className="relative inset-x-0 top-0">
      <div className="md:h-screen md:grid md:grid-cols-1 md:grid-rows-currentRowLayout md:grid-align-items-center">
        <NavBar/> 
        <CurrentWeather/>
      </div>
      <HourForecast/>
      <DayForecast/>
      <Activity/>
      <Copyright/>
    </section>
  </main>);
};

export default memo(Board);