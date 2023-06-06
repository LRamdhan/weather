import { memo } from "react";
import search from "./../img/search.svg";

const SearchInput = () => {
  return (<div className="flex items-center justify-between p-5 border-b-[1.5px] border-second border-solid md:px-8 md:py-4">
    <img src={search} alt="something's wrong" className="w-9"/>
    <input type="text" placeholder="cari kota" className="w-0 flex-1 bg-transparent text-lg placeholder:text-second placeholder:capitalize placeholder:font-medium placeholder:text-lg outline-none px-3 sm:text-xl sm:placeholder:text-xl sm:px-7 md:text-lg md:placeholder:text-lg md:px-3"/>
    <button className="w-[68px] h-[30px] bg-[#A8D4FF] rounded-md text-black font-medium border-[1.5px] border-[#7D7D7D] md:text-lg">esc</button>
  </div>);
};

export default memo(SearchInput);