import { memo } from "react";

const Copyright = () => {
  return (<div className="mt-16 pb-6 sm:mt-[168px] md:mt-[108px] ">
    <p className="text-center capitalize font-medium text-sm sm:text-base">&copy; 2023 luji ramdhan</p>
  </div>);
};

export default memo(Copyright);