import { memo, useEffect } from "react";
import SearchInput from "./SearchInput.jsx";
import SearchList from "./SearchList.jsx";
import {useSearch} from "./../context/searchContext.jsx";

const Search = () => {
  const {display, setDisplay} = useSearch();

  useEffect(() => {
    document.addEventListener("keydown", event => {
      if(event.code === "Escape") {
        event.preventDefault();
        setDisplay("none");
      } else if(event.ctrlKey && event.code === "KeyK") {
        event.preventDefault();
        setDisplay(display == "none" ? "flex" : "none");
      }
    });
  }, [display]);
  
  return (<div style={{display: display}} className={`fixed inset-x-0 top-0 h-screen bg-black/50 backdrop-blur-sm py-9 px-5 transition-all sm:sm:py-[87px] sm:px-14 md:p-0 md:justify-center md:items-center`}>
    <div className="w-full h-full bg-background dark:bg-[#11466A] rounded-lg flex flex-col pb-5 md:pb-4 md:w-[836px] md:h-[526px] md:rounded-xl">
      <SearchInput/>
      <SearchList/>
    </div>
  </div>);
};

export default memo(Search);