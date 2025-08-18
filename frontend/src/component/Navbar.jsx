import { memo } from "react";
import menu from "./../img/menu.svg";
import search from "./../img/search.svg";
import locationIcon from '/img/location-icon.svg'
import {useNavigation} from "./../context/navigationContext.jsx";
import {useSearch} from "./../context/searchContext.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {setSideAppear} = useNavigation();
  const {setDisplay} = useSearch();
  const {mainReducer, skeletonReducer} = useSelector(data => data);

  document.title = mainReducer.current.city;

  return (
    <nav className="px-5 pt-6 sm:pt-10 sm:px-9 md:pt-9 md:px-28">
      <div className="max-w-[1040px] mx-auto flex justify-between items-center">
        <img src={menu} alt="something's went wrong" onClick={() => setSideAppear(true)} className="sm:w-12 md:hidden cursor-pointer"/>
        <div className={`text-xl flex items-center gap-4 capitalize font-bold sm:text-2xl ${skeletonReducer.contentDisplay}`}>
          <img src={locationIcon} alt="Icon" className="w-5" />
          {mainReducer.current.city}
        </div>
        <div className={`w-40 h-6 skeleton sm:w-48 sm:h-9 ${skeletonReducer.skeletonDisplay}`}></div>
        <img src={search} alt="something's went wrong" onClick={() => setDisplay("flex")} className="sm:w-12 cursor-pointer"/>
      </div>
    </nav>
  );
};

export default memo(Navbar);