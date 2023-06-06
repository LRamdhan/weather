import { memo } from "react";
import SearchInput from "./SearchInput.jsx";
import SearchList from "./SearchList.jsx";

const Search = () => {
  return (<div className="fixed inset-x-0 top-0 h-screen bg-black/50 backdrop-blur-sm py-9 px-5 sm:sm:py-[87px] sm:px-14 md:p-0 md:flex md:justify-center md:items-center">
    <div className="w-full h-full bg-background rounded-lg flex flex-col pb-5 md:pb-4 md:w-[836px] md:h-[526px] md:rounded-xl">
      <SearchInput/>
      <SearchList/>
    </div>
  </div>);
};

export default memo(Search);