import { memo } from "react";
import waveSm from "./../img/wave-sm.svg";
import waveMd from "./../img/wave-md.svg";
import CurrentWeather from "./CurrentWeather";

const Board = () => {
  return (<main className="relative mt-44 sm:mt-60 md:mt-0">
    <img src={waveSm} alt="terjadi kesalahan" className="w-full absolute top-0 sm:hidden"/>
    <img src={waveMd} alt="terjadi kesalahan" className="w-full absolute top-0 hidden sm:block md:hidden"/>
    <section className="absolute top-0 inset-x-0">
      <CurrentWeather/>
    </section>
  </main>);
};

export default memo(Board);