import { memo, useCallback, useEffect, useRef } from "react";
import searchIcon from "./../img/search.svg";
import {useSearch} from "./../context/searchContext.jsx";
import {useCity, useHistory} from "./../hook/search.js";

const SearchInput = () => {
  const {display, setDisplay, setResult, searchInput, setSearchInput, setLoading} = useSearch();

  const search = useCallback(event => {
    setLoading("list");
    const input = event.target.value.trim();
    if(input.length === 0) {
      useHistory(data => {
        setResult(data);
        setLoading("loading");
      });
      return;
    }
    useCity(input, response => {
      setResult(response.data);
      setLoading("loading");
    }, error => setResult([]));
  }, []);

  const input = useRef();
  useEffect(useCallback(() => { if(display === "flex") input.current.focus() }), [display]);

  return (<div className="flex items-center justify-between p-5 border-b-[1.5px] border-second dark:border-darkOuter border-solid sm:max-md:py-7 sm:max-md:px-[43px] md:px-8 md:py-4">
    <img src={searchIcon} alt="something's wrong" className="w-9 sm:max-md:w-[46px]"/>
    <input type="text" placeholder="find city" onKeyUp={search} ref={input} value={searchInput} onInput={event => setSearchInput(event.target.value)} className="w-0 flex-1 bg-transparent text-lg placeholder:text-second dark:placeholder:text-darkOuter placeholder:capitalize placeholder:font-medium placeholder:text-lg outline-none px-3 sm:max-md:text-[28px] sm:max-md:placeholder:text-[28px] sm:px-7 md:text-lg md:placeholder:text-lg md:px-3"/>
    <button onClick={() => setDisplay("none")} className="w-[68px] h-[30px] bg-[#A8D4FF] rounded-md text-black font-medium border-[1.5px] border-[#7D7D7D] md:text-lg">esc</button>
  </div>);
};

export default memo(SearchInput);