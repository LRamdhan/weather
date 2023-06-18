import "./../css/app.css";
import MainPage from "./MainPage";
import Search from "./Search.jsx";
import Navigation from "./Navigation.jsx";
import NavigationProvider from "./../context/navigationContext.jsx";
import SearchProvider from "./../context/searchContext.jsx";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../toolkit/mainSlice";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCallback, useState } from "react";

const mainStore = configureStore({reducer: {mainReducer}});

const App = () => {
  const [mode, setMode] = useState("light");

  mainStore.subscribe(useCallback(() => {
    let icon = mainStore.getState().mainReducer.current.icon;
    icon = icon[icon.length - 1];
    setMode(icon === 'n' ? 'dark' : 'light');
  }, []));

  const customTheme = createTheme({
    palette: {
      icon: { main: mode === 'light' ? '#AED6FB' : '#6590AC' }
    }
  })

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
  </div>);
};

export default App;