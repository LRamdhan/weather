import { memo } from "react";
import PhishingIcon from '@mui/icons-material/Phishing';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const Aktivity = () => {
  const iconStyle = {
    fontSize: {
      xs: "33px",
      sm: "35px"
    }
  };

  return (<div className="mt-14 px-4 sm:mt-[104px] sm:px-[92px]">
    <h3 className="title-info">aktivitas</h3>
    <div className="mt-6 grid grid-cols-2 auto-rows-max gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-x-9 sm:gap-y-12 md:mx-auto md:w-[587px]">
      <div className="bg-paper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <PhishingIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">memancing</h3>
        <div className="h-1 w-9 bg-good sm:w-10"></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">bagus</h3>
      </div>
      <div className="bg-paper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <HikingIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">Mendaki</h3>
        <div className="h-1 w-9 bg-enough sm:w-10"></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">bagus</h3>
      </div>
      <div className="bg-paper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <DirectionsBikeIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">bersepeda</h3>
        <div className="h-1 w-9 bg-good sm:w-10"></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">bagus</h3>
      </div>
      <div className="bg-paper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <DirectionsBusIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">berpergian</h3>
        <div className="h-1 w-9 bg-bad sm:w-10"></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">bagus</h3>
      </div>
      <div className="bg-paper aspect-square rounded-xl p-4 flex flex-col sm:px-6">
        <DirectionsRunIcon sx={iconStyle}/>
        <h3 className="text-base capitalize grow pt-[14px]">olahraga</h3>
        <div className="h-1 w-9 bg-enough sm:w-10"></div>
        <h3 className="text-base capitalize font-semibold pt-[10px]">bagus</h3>
      </div>
    </div>
  </div>);
};

export default memo(Aktivity);