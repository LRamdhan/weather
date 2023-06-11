import { createContext, memo, useContext, useState } from "react";

const search = createContext({
  empty: true,
  message: "there's no data"
});

const SearchProvider = props => {
  const [display, setDisplay] = useState("none");
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const data = {display, setDisplay, result, setResult, searchInput, setSearchInput};

  return (<search.Provider value={data}>{props.children}</search.Provider>);
};

const useSearch = () => useContext(search);

export default memo(SearchProvider);
export {useSearch};