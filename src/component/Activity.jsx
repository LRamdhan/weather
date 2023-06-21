import { memo, useCallback, useMemo } from "react";
import PhishingIcon from '@mui/icons-material/Phishing';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useActivity } from "../hook/info";
import { useSelector } from "react-redux";

const Activity = () => {
  const iconStyle = useMemo(() => {
    return {
      fontSize: {
        xs: "33px",
        sm: "35px"
      }
    };
  }, []);
  const {mainReducer, skeletonReducer} = useSelector(data => data);
  const sugesstions = useActivity(mainReducer.current.temperature, mainReducer.current.condition, mainReducer.current.wind, mainReducer.current.humidity, mainReducer.current.cloud);

  const setColor = useCallback(cdt => {
    switch(cdt) {
      case "good" :
        return "bg-good";
      case "fair" :
        return "bg-enough";
      case "bad" :
        return "bg-bad";
    }
  }, []);

  const skeletonList = useMemo(() => {
    const data = [];
    for(let i = 1; i <= 5; i++) { data.push(i); }
    return data;
  }, []);

  return (<div className="mt-14 px-4 sm:mt-[104px] sm:px-[92px]">
    <h3 className={`title-info ${skeletonReducer.contentDisplay}`}>activity</h3>
    <div className={`w-36 h-7 text-info skeleton sm:h-9 sm:mx-auto ${skeletonReducer.skeletonDisplay}`}></div>
    <div className={`mt-6 grid grid-cols-2 auto-rows-max gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-x-9 sm:gap-y-12 md:mx-auto md:w-[587px] ${skeletonReducer.contentDisplay}`}>
      <div className="bg-paper dark:bg-darkPaper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <PhishingIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">fishing</h3>
        <div className={`h-1 w-9 ${setColor(sugesstions.fishing)} sm:w-10`}></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">{sugesstions.fishing}</h3>
      </div>
      <div className="bg-paper dark:bg-darkPaper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <HikingIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">hiking</h3>
        <div className={`h-1 w-9 ${setColor(sugesstions.hiking)} sm:w-10`}></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">{sugesstions.hiking}</h3>
      </div>
      <div className="bg-paper dark:bg-darkPaper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <DirectionsBikeIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">bicycle</h3>
        <div className={`h-1 w-9 ${setColor(sugesstions.bicyle)} sm:w-10`}></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">{sugesstions.bicyle}</h3>
      </div>
      <div className="bg-paper dark:bg-darkPaper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <DirectionsBusIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">traveling</h3>
        <div className={`h-1 w-9 ${setColor(sugesstions.traveling)} sm:w-10`}></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">{sugesstions.traveling}</h3>
      </div>
      <div className="bg-paper dark:bg-darkPaper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <DirectionsRunIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">sport</h3>
        <div className={`h-1 w-9 ${setColor(sugesstions.sport)} sm:w-10`}></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">{sugesstions.sport}</h3>
      </div>
    </div>
    <div className={`mt-6 grid grid-cols-2 auto-rows-max gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-x-9 sm:gap-y-12 md:mx-auto md:w-[587px] ${skeletonReducer.skeletonDisplay}`}>
      {skeletonList.map(el => <div className="aspect-square skeleton p-4 flex flex-col sm:px-6"></div>)}
    </div>
  </div>);
};

export default memo(Activity);