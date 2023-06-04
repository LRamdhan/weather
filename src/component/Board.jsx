import { memo } from "react";
import waveSm from "./../img/wave-sm.svg";
import waveMd from "./../img/wave-md.svg";
import CurrentWeather from "./CurrentWeather";
import HourForecast from "./HourForecast";
import DayForecast from "./DayForecast";
import Aktivity from "./Aktivity";
import Copyright from "./Copyright";

const Board = () => {
  return (<main className="relative mt-44 sm:mt-60 md:mt-0">
    <img src={waveSm} alt="terjadi kesalahan" className="w-full absolute top-0 sm:hidden"/>
    <img src={waveMd} alt="terjadi kesalahan" className="w-full absolute top-0 hidden sm:block md:hidden"/>
    <section className="relative top-0 inset-x-0">
      <CurrentWeather/>
      <HourForecast/>
      <DayForecast/>
      <Aktivity/>
      <Copyright/>
    </section>
  </main>);
};

export default memo(Board);