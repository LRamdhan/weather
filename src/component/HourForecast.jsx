import { memo, useMemo } from "react";
import { useSelector } from "react-redux";

const HourForecast = () => {
  const {mainReducer, skeletonReducer} = useSelector(data => data);

  const skeletonList = useMemo(() => {
    const data = [];
    for(let i = 1; i <= 6; i++) { data.push(i); }
    return data;
  }, []);

  return (<div className="pl-4 mt-14 sm:mt-[104px] sm:pl-12 md:pl-0 md:mt-0">
    <h2 className={`title-info text-start md:text-center ${skeletonReducer.contentDisplay}`}>today</h2>
    <div className={`w-36 h-7 text-info skeleton md:mx-auto sm:h-9 ${skeletonReducer.skeletonDisplay}`}></div>
    <div className={`overflow-x-scroll no-scrollbar mt-6 sm:mt-12 md:flex md:justify-center ${skeletonReducer.contentDisplay === "hidden" ? "hidden md:hidden" : ""}`}>
      <div className="space-x-4 w-[1200px] md:w-max">
        {mainReducer.hourForecast.map((el, ind) => {
          return (<div key={ind} className="w-[105px] h-36 bg-paper dark:bg-darkPaper rounded-xl inline-flex flex-col items-center justify-between py-3">
            <h4 className="text-sm">{el.hour}</h4>
            <img src={`/img/condition/${el.icon}.svg`} alt="something went wrong" className="drop-shadow-lg h-8 sm:h-9"/>
            <h4 className="flex items-start">
              <span className="font-semibold text-base">{el.temperature}</span>
              <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white"></div>
            </h4>
          </div>)
        })}
      </div>
    </div>
    <div className={`overflow-x-scroll no-scrollbar mt-6 sm:mt-12  md:flex md:justify-center ${skeletonReducer.skeletonDisplay === "hidden" ? "hidden md:hidden" : ""}`}>
      <div className="space-x-4 w-[900px] md:w-max">
        {skeletonList.map(el => <div key={el} className="w-[105px] h-36 skeleton inline-flex"></div>)}
      </div>
    </div>
  </div>);
};

export default memo(HourForecast);