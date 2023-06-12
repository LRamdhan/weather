import { memo } from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const {mainReducer} = useSelector(data => data);

  return (<div className="px-4 grid grid-cols-1 grid-rows-currentRow justify-items-center -translate-y-[85px] sm:px-28 sm:-translate-y-[130px] md:-translate-y-0 md:grid-rows-currentRowLg md:grid-cols-currentCol md:grid-align-items-center md:px-28 md:mt-[89px] md:justify-items-start">
    <img src={`/img/condition/${mainReducer.current.icon}.svg`} alt="something went wrong" className="w-60 drop-shadow-condition sm:w-[364px] md:row-span-full"/>
    <div className="flex items-start space-x-2 pt-11 sm:pt-14 md:pt-0 md:col-start-3">
      <h1 className="font-bold text-7xl sm:text-[85px]">{mainReducer.current.temperature}</h1>
      <div className="aspect-square w-3 border-solid border-[3px] border-white rounded-full mt-3 sm:w-4 sm:border-[4px]"></div>
    </div>
    <h2 className="font-semibold text-2xl capitalize pt-10 sm:text-5xl sm:pt-12 md:pt-0 md:pl-10">{mainReducer.current.condition}</h2>
    <div className="flex justify-between w-full pt-16 sm:pt-20 md:pt-0 md:col-span-2 md:col-start-3 md:space-x-20">
      <div className="flex flex-col items-center space-y-5 md:items-start">
        <h3 className="font-medium text-base capitalize sm:text-xl">wind</h3>
        <div className="space-x-1">
          <span className="text-3xl font-bold sm:text-[40px]">{mainReducer.current.wind}</span>
          <span className="font-semibold text-sm sm:text-xl">km/h</span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-5 md:items-start">
        <h3 className="font-medium text-base capitalize sm:text-xl">humidity</h3>
        <div className="space-x-1">
          <span className="text-3xl font-bold sm:text-[40px]">{mainReducer.current.humidity}</span>
          <span className="font-semibold text-sm sm:text-xl">%</span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-5 md:items-start">
        <h3 className="font-medium text-base capitalize sm:text-xl">cloud</h3>
        <div className="space-x-1">
          <span className="text-3xl font-bold sm:text-[40px]">{mainReducer.current.cloud}</span>
          <span className="font-semibold text-sm sm:text-xl">%</span>
        </div>
      </div>
    </div>
  </div>);
};

export default memo(CurrentWeather);