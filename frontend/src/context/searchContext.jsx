import { createContext, memo, useContext, useReducer, useState } from "react";

const search = createContext({
  empty: true,
  message: "there's no data"
});

const SearchProvider = props => {
  const [display, setDisplay] = useState("none");
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const reducer = (state, actions) => {
    const newState = {};
    if(actions === "list") {
      newState.list = "hidden";
      newState.load = "";
      newState.notFound = "hidden"
    } else {
      newState.list = "";
      newState.load = "hidden";
      newState.notFound = ""
    }
    return newState;
  }
  const [loading, setLoading] = useReducer(reducer, {list: "", load: "hidden", notFound: ""})
  const data = {display, setDisplay, result, setResult, searchInput, setSearchInput, setLoading, loading};

  return (<search.Provider value={data}>{props.children}</search.Provider>);
};

const useSearch = () => useContext(search);

export default memo(SearchProvider);
export {useSearch};