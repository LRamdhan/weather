import { memo } from "react";
import { useSelector } from "react-redux";

const DayForecast = () => {
  const {mainReducer} = useSelector(data => data);

  return (<div className="mt-14 px-4 sm:mt-[104px] sm:px-[92px]">
    <h3 className="title-info">5 days forecast</h3>
    <div className="mt-6 space-y-5 sm:mt-12 sm:space-y-6 md:w-[587px] md:mx-auto">
      {mainReducer.dayForecast.map((el, ind) => {
        return (<div key={ind} className="flex items-center h-14 bg-paper rounded-xl px-6 sm:h-[72px]">
          <img src={`/img/condition/${el.icon}.svg`} alt="something went wrong" className="drop-shadow-md w-9 sm:w-12"/>
          <h4 className="font-semibold text-base grow pl-9 capitalize sm:text-xl sm:pl-14">{el.day}</h4>
          <h4 className="flex items-start">
            <span className="font-semibold text-base sm:text-xl">{el.temperature}</span>
            <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white sm:w-[7px] sm:border-2"></div>
          </h4>
        </div>)
      })}
      
    </div>
  </div>);
};

export default memo(DayForecast);