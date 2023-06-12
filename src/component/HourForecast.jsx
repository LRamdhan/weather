import { memo } from "react";
import { useSelector } from "react-redux";

const HourForecast = () => {
  const {mainReducer} = useSelector(data => data);

  return (<div className="pl-4 sm:pl-12 md:pl-0 md:mt-[75px]">
    <h2 className="title-info text-start md:hidden">today</h2>
    <div className="overflow-x-scroll no-scrollbar mt-5 sm:mt-12 md:mt-0 md:flex md:justify-center">
      <div className="space-x-4 w-[900px] md:w-max">
        {mainReducer.hourForecast.map(el => {
          return (<div className="w-[105px] h-36 bg-paper rounded-xl inline-flex flex-col items-center justify-between py-3">
            <h4 className="text-sm">{el.hour}</h4>
            <img src={`/img/condition/${el.icon}.svg`} alt="something went wrong" className="drop-shadow-lg w-[50px] sm:w-[55px]"/>
            <h4 className="flex items-start">
              <span className="font-semibold text-base">{el.temperature}</span>
              <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white"></div>
            </h4>
          </div>)
        })}
      </div>
    </div>
  </div>);
};

export default memo(HourForecast);