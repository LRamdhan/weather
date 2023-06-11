import { memo, useMemo } from "react";
import menu from "./../img/menu.svg";
import search from "./../img/search.svg";
import {useNavigation} from "./../context/navigationContext.jsx";
import {useSearch} from "./../context/searchContext.jsx";

const Navbar = () => {
  const {setSideAppear} = useNavigation();
  const {setDisplay} = useSearch();

  return (<nav className="px-5 pt-6 sm:pt-10 sm:px-9 md:pt-9 md:px-28">
    <div className="flex justify-between items-center">
      <img src={menu} alt="terjadi kesalahan" onClick={() => setSideAppear(true)} className="sm:w-12 md:hidden cursor-pointer"/>
      <h3 className="text-2xl capitalize font-bold sm:text-3xl">{"sumedang"}</h3>
      <img src={search} alt="terjadi kesalahan" onClick={() => setDisplay("flex")} className="sm:w-12 cursor-pointer"/>
    </div>
  </nav>);
};

export default memo(Navbar);