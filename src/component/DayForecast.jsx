import { memo } from "react";

const DayForecast = () => {
  return (<div className="mt-14 px-4 sm:mt-[104px] sm:px-[92px]">
    <h3 className="title-info">5 hari kedepan</h3>
    <div className="mt-6 space-y-5 sm:mt-12 sm:space-y-6 md:w-[587px] md:mx-auto">
      <div className="flex items-center h-14 bg-paper rounded-xl px-6 sm:h-[72px]">
        <img src="/img/condition/little-rain-day.svg" alt="something went wrong" className="drop-shadow-md w-9 sm:w-12"/>
        <h4 className="font-semibold text-base grow pl-9 capitalize sm:text-xl sm:pl-14">Rabu</h4>
        <h4 className="flex items-start">
          <span className="font-semibold text-base sm:text-xl">22</span>
          <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white sm:w-[7px] sm:border-2"></div>
        </h4>
      </div>
      <div className="flex items-center h-14 bg-paper rounded-xl px-6 sm:h-[72px]">
        <img src="/img/condition/rain-day.svg" alt="something went wrong" className="drop-shadow-md w-9 sm:w-12"/>
        <h4 className="font-semibold text-base grow pl-9 capitalize sm:text-xl sm:pl-14">kamis</h4>
        <h4 className="flex items-start">
          <span className="font-semibold text-base sm:text-xl">24</span>
          <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white sm:w-[7px] sm:border-2"></div>
        </h4>
      </div>
      <div className="flex items-center h-14 bg-paper rounded-xl px-6 sm:h-[72px]">
        <img src="/img/condition/storm-day.svg" alt="something went wrong" className="drop-shadow-md w-9 sm:w-12"/>
        <h4 className="font-semibold text-base grow pl-9 capitalize sm:text-xl sm:pl-14">jum'at</h4>
        <h4 className="flex items-start">
          <span className="font-semibold text-base sm:text-xl">17</span>
          <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white sm:w-[7px] sm:border-2"></div>
        </h4>
      </div>
      <div className="flex items-center h-14 bg-paper rounded-xl px-6 sm:h-[72px]">
        <img src="/img/condition/storm-night.svg" alt="something went wrong" className="drop-shadow-md w-9 sm:w-12"/>
        <h4 className="font-semibold text-base grow pl-9 capitalize sm:text-xl sm:pl-14">sabtu</h4>
        <h4 className="flex items-start">
          <span className="font-semibold text-base sm:text-xl">19</span>
          <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white sm:w-[7px] sm:border-2"></div>
        </h4>
      </div>
      <div className="flex items-center h-14 bg-paper rounded-xl px-6 sm:h-[72px]">
        <img src="/img/condition/little-rain-day.svg" alt="something went wrong" className="drop-shadow-md w-9 sm:w-12"/>
        <h4 className="font-semibold text-base grow pl-9 capitalize sm:text-xl sm:pl-14">minggu</h4>
        <h4 className="flex items-start">
          <span className="font-semibold text-base sm:text-xl">27</span>
          <div className="aspect-square w-[6px] rounded-full m-1 border-[1.5px] border-solid border-white sm:w-[7px] sm:border-2"></div>
        </h4>
      </div>
    </div>
  </div>);
};

export default memo(DayForecast);