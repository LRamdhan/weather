import MainPage from "./MainPage";
import "./../css/app.css";
import Search from "./Search.jsx";
import Navigation from "./Navigation.jsx";
import NavigationProvider from "./../context/navigationContext.jsx";
import SearchProvider from "./../context/searchContext.jsx";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../toolkit/mainSlice";
import { Provider } from "react-redux";

const mainStore = configureStore({reducer: {mainReducer}});

const App = () => {
  return (<>
    <SearchProvider>
      <NavigationProvider>
        <Provider store={mainStore}>
          <MainPage/>
          <Navigation/>
          <Search/>
        </Provider>
      </NavigationProvider>
    </SearchProvider>
  </>);
};

export default App;