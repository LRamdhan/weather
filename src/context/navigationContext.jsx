import { createContext, memo, useContext, useReducer, useState } from "react";

const navigation = createContext({
  empty: true,
  message: "there's no data"
});

const NavigationProvider = props => {
  const [sideAppear, setSideAppear] = useState(false);
  const reducer = () => JSON.parse(localStorage.getItem('navigation'));
  const [navWeather, setNavWeather] = useReducer(reducer, []);
  const data = {sideAppear, setSideAppear, navWeather, setNavWeather};

  return (<navigation.Provider value={data}>{props.children}</navigation.Provider>);
};

const useNavigation = () => useContext(navigation);

export default memo(NavigationProvider);
export {useNavigation};