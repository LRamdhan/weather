import "./../css/app.css";
import MainPage from "./MainPage";
import Search from "./Search.jsx";
import Navigation from "./Navigation.jsx";
import Layer from "./Layer.jsx";
import NavigationProvider from "./../context/navigationContext.jsx";
import SearchProvider from "./../context/searchContext.jsx";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../toolkit/mainSlice";
import skeletonReducer from "../toolkit/skeletonSlice";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCallback, useMemo, useState } from "react";

const mainStore = configureStore({reducer: {mainReducer, skeletonReducer}});

const App = () => {
  const [mode, setMode] = useState("light");
  const [layer, setLayer] = useState("");

  mainStore.subscribe(useCallback(() => {
    let icon = mainStore.getState().mainReducer.current.icon;
    icon = icon[icon.length - 1];
    if(mainStore.getState().skeletonReducer.skeletonDisplay === "hidden" && layer.length === 0) setTimeout(() => setLayer('hidden'), 500);
    setMode(icon === 'n' ? 'dark' : 'light');
  }, []));

  const customTheme = useMemo(() => {
    return createTheme({
      palette: {
        icon: { main: mode === 'light' ? '#AED6FB' : '#6590AC' }
      }
    });
  }, [mode]);

  return (<div className={`${mode}`}>
    <SearchProvider>
      <NavigationProvider>
        <Provider store={mainStore}>
          <ThemeProvider theme={customTheme}>
            <MainPage/>
            <Navigation/>
            <Search/>
          </ThemeProvider>
        </Provider>
      </NavigationProvider>
    </SearchProvider>
    <Layer display={layer}/>
  </div>);
};

export default App;