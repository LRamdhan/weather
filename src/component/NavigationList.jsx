import { memo } from "react";
import CloseIcon from '@mui/icons-material/Close';

const NavigationList = () => {
  const data = [];
  for(let i = 1; i <= 20; i++) data.push(i);

  return (<div className="flex-1 overflow-y-scroll no-scrollbar">
  <ul className="py-[18px] px-3 divide-y-[1.5px] divide-[#848484] sm:py-7 sm:px-[14px]">
    {data.map(el => {
      return (<li key={el} className="px-[10px] py-5 flex items-center sm:py-6 sm:px-4">
        <img src="/img/norway.svg" alt="something's wrong" className="w-10 sm:w-14"/>
        <h3 className="capitalize font-medium text-lg flex-1 ml-4 sm:text-[28px] sm:ml-12">tiga</h3>
        <CloseIcon sx={{fontSize: {xs: "33px", sm: "46px"}}}/>
      </li>);
    })}  
  </ul>
  </div>);
};

export default memo(NavigationList);