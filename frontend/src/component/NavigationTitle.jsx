import { memo } from "react";

const NavigationTitle = () => {
  return (<div className="bg-[#3B3B3B] flex items-center py-3 px-5 sm:py-4 sm:px-8">
    <img src="/img/navigation-icon.svg" alt="something's wrong" className="w-6 sm:w-11"/>
    <h2 className="font-semibold capitalize text-lg ml-5 sm:text-[28px] sm:ml-7">weather location</h2>
  </div>);
};

export default memo(NavigationTitle);