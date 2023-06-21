import { memo } from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const {mainReducer, skeletonReducer} = useSelector(data => data);

  return (<div className="mt-[87px] sm:mt-[116px] md:mt-0 px-4 grid grid-cols-1 grid-rows-currentRow justify-items-center sm:px-28 md:grid-rows-currentRowLg md:grid-cols-currentCol md:grid-align-items-center md:px-28 md:justify-items-start">
    <img src={`/img/condition/${mainReducer.current.icon}.svg`} alt="something went wrong" className={`h-40 drop-shadow-condition sm:h-[245px] md:row-span-full ${skeletonReducer.contentDisplay}`}/>
    <div className={`aspect-square h-40 rounded-full sm:h-[245px] md:row-span-full bg-[#95CDFC] dark:bg-[#73ACD9] md:skeleton ${skeletonReducer.skeletonDisplay}`}></div>
    <div className={`flex items-start space-x-2 pt-11 sm:pt-14 md:pt-0 md:col-start-3 ${skeletonReducer.contentDisplay}`}>
      <h1 className="font-bold text-7xl sm:text-[85px]">{mainReducer.current.temperature}</h1>
      <div className="flex items-start space-x-1 sm:space-x-2">
        <div className="aspect-square w-3 border-solid border-[3px] border-white rounded-full mt-3 sm:w-4 sm:border-[4px]"></div>
        <span className="mt-1.5 font-bold text-2xl sm:text-4xl">C</span>
      </div>
    </div>
    <div className={`mt-11 sm:mt-14 md:mt-0 md:col-start-3 w-36 h-14 skeleton sm:w-[135px] sm:h-[85px] ${skeletonReducer.skeletonDisplay}`}></div>
    <h2 className={`font-semibold text-2xl capitalize pt-10 sm:text-5xl sm:pt-12 md:pt-0 md:pl-10 ${skeletonReducer.contentDisplay}`}>{mainReducer.current.condition}</h2>
    <div className={`w-44 h-6 skeleton mt-10 sm:w-40 sm:h-12 sm:mt-12 md:mt-0 md:ml-10 ${skeletonReducer.skeletonDisplay}`}></div>
    <div className="flex justify-between w-full pt-16 sm:pt-20 md:pt-14 md:col-span-2 md:col-start-3 md:space-x-20">
      <div className="flex flex-col items-center space-y-5 md:items-start">
        <h3 className={`font-medium text-base capitalize sm:text-xl ${skeletonReducer.contentDisplay}`}>wind</h3>
        <div className={`w-24 h-4 sm:w-28 sm:h-7 skeleton ${skeletonReducer.skeletonDisplay}`}></div>
        <div className={`space-x-1 ${skeletonReducer.contentDisplay}`}>
          <span className="text-3xl font-bold sm:text-[40px]">{mainReducer.current.wind}</span>
          <span className="font-semibold text-sm sm:text-xl">km/h</span>
        </div>
        <div className={`w-16 h-6 skeleton sm:w-[76px] sm:h-7 ${skeletonReducer.skeletonDisplay}`}></div>
      </div>
      <div className="flex flex-col items-center space-y-5 md:items-start">
        <h3 className={`font-medium text-base capitalize sm:text-xl ${skeletonReducer.contentDisplay}`}>humidity</h3>
        <div className={`w-24 h-4 sm:w-28 sm:h-7 skeleton ${skeletonReducer.skeletonDisplay}`}></div>
        <div className={`space-x-1 ${skeletonReducer.contentDisplay}`}>
          <span className="text-3xl font-bold sm:text-[40px]">{mainReducer.current.humidity}</span>
          <span className="font-semibold text-sm sm:text-xl">%</span>
        </div>
        <div className={`w-16 h-6 skeleton sm:w-[76px] sm:h-7 ${skeletonReducer.skeletonDisplay}`}></div>
      </div>
      <div className="flex flex-col items-center space-y-5 md:items-start">
        <h3 className={`font-medium text-base capitalize sm:text-xl ${skeletonReducer.contentDisplay}`}>cloud</h3>
        <div className={`w-24 h-4 sm:w-28 sm:h-7 skeleton ${skeletonReducer.skeletonDisplay}`}></div>
        <div className={`space-x-1 ${skeletonReducer.contentDisplay}`}>
          <span className="text-3xl font-bold sm:text-[40px]">{mainReducer.current.cloud}</span>
          <span className="font-semibold text-sm sm:text-xl">%</span>
        </div>
        <div className={`w-16 h-6 skeleton sm:w-[76px] sm:h-7 ${skeletonReducer.skeletonDisplay}`}></div>
      </div>
    </div>
  </div>);
};

export default memo(CurrentWeather);