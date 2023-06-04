import { memo } from "react";
import Navbar from "./Navbar";
import Board from "./Board";

const MainPage = () => {
  return (<section className="bg-background md:bg-gradient-to-r md:from-gr1 md:to-gr2">
    <Navbar/>
    <Board/>
  </section>);
};

export default memo(MainPage);