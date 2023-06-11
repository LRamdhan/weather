import { createContext, memo, useContext, useState } from "react";

const navigation = createContext({
  empty: true,
  message: "there's no data"
});

const NavigationProvider = props => {
  const [sideAppear, setSideAppear] = useState(false);
  const data = {sideAppear, setSideAppear};

  return (<navigation.Provider value={data}>{props.children}</navigation.Provider>);
};

const useNavigation = () => useContext(navigation);

export default memo(NavigationProvider);
export {useNavigation};