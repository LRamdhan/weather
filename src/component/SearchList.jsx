import { memo } from "react";
import HistoryIcon from '@mui/icons-material/History';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const SearchList = () => {
  const iconStyle = {
    fontSize: {
      xs: "31px"
    },
    color: "#AED6FB",
  };

  const data = [];
  for(let i = 1; i <= 20; i++) data.push(i);

  return (<ul className="px-[14px] mt-1 divide-y-[1.5px] divide-second divide-solid flex-1 overflow-y-scroll no-scrollbar md:custom-scrollbar md:custom-scrollbar-thumb md:px-8 md:text-lg">
    {data.map(el => {
      return <li className="flex justify-between items-center text-lg py-4 px-1 md:px-4">
        {el > 7 ? <HistoryIcon sx={iconStyle}/> : <PlaceOutlinedIcon sx={iconStyle}/>}
        <span className="font-medium capitalize flex-1 pl-6 md:order-2">satu</span>
        <img src="/img/norway.svg" alt="something's wrong" className="w-10 md:order-1 md:ml-8"/>
        <div className="aspect-square w-3 border-t-2 border-r-2 border-second rotate-45 hidden md:block md:order-3"></div>
      </li>
    })}
  </ul>);
};

export default memo(SearchList); 