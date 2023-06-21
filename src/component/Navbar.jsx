import { memo } from "react";
import menu from "./../img/menu.svg";
import search from "./../img/search.svg";
import {useNavigation} from "./../context/navigationContext.jsx";
import {useSearch} from "./../context/searchContext.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {setSideAppear} = useNavigation();
  const {setDisplay} = useSearch();
  const {mainReducer, skeletonReducer} = useSelector(data => data);

  document.title = mainReducer.current.city;

  return (<nav className="px-5 pt-6 sm:pt-10 sm:px-9 md:pt-9 md:px-28">
    <div className="flex justify-between items-center">
      <img src={menu} alt="something's went wrong" onClick={() => setSideAppear(true)} className="sm:w-12 md:hidden cursor-pointer"/>
      <h3 className={`text-2xl capitalize font-bold sm:text-3xl ${skeletonReducer.contentDisplay}`}>{mainReducer.current.city}</h3>
      <div className={`w-40 h-6 skeleton sm:w-48 sm:h-9 ${skeletonReducer.skeletonDisplay}`}></div>
      <img src={search} alt="something's went wrong" onClick={() => setDisplay("flex")} className="sm:w-12 cursor-pointer"/>
    </div>
  </nav>);
};

export default memo(Navbar);