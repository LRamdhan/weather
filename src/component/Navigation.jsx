import { Drawer } from "@mui/material";
import { memo } from "react";
import NavigationTitle from "./NavigationTitle.jsx";
import NavigationList from "./NavigationList.jsx";

const Navigation = () => {
  return (<Drawer anchor="left" open={true} variant="temporary">
    <aside className="w-[283px] h-full text-white flex flex-col pb-3 sm:pb-4 sm:w-[526px] bg-[#4B4B4B]">
      <NavigationTitle/>
      <NavigationList/>
    </aside>
  </Drawer>);
};

export default memo(Navigation);