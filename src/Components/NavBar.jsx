import React from "react";
import ProfilePic from "../Assets/Images/profile.png"
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";


const NavBar = () =>
{
  return (
    <div className="flex items-center border-b border-blue-400  rounded shadow-md justify-between ">
      <div className="  flex justify-between items-center p-3  w-full">
        <div class="w-64 flex border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:border-blue-500">
          <input type="text" class="w-full  border-none  outline-none" placeholder="Enter your text..." />
          <SearchIcon className=" text-slate-400" />
        </div>
        <div className=" flex  item-center justify-center  gap-9 ">
          <div className=" text-[20px]">
            English
            <LanguageIcon className="text-slate-400" />
          </div>
          <div className="flex ">
            <NotificationsNoneOutlinedIcon className="text-slate-400" />
            <div className=" text-center bg-red-600 rounded-full   justify-center items-center h-3 w-3 text-[10px] text-white absolute">1</div>
          </div>
          <div className=" flex">
            <ChatBubbleOutlineOutlinedIcon className="text-slate-400" />
            <div className=" text-center bg-red-600 rounded-full   justify-center items-center h-3 w-3 text-[10px] text-white absolute">1</div>
          </div>
          <div className="text-[20px]">
            <MenuOpenIcon className="text-slate-400" />
          </div>
          <div className="text-[20px]">
            <ZoomInMapOutlinedIcon className="text-slate-400" />
          </div>
          <div className="text-[20px]">
            <NightlightRoundIcon className="text-slate-400" />
          </div>
          <div className="text-[20px]">
            <img src={ ProfilePic } className="text-slate-400 w-[30px] h-[30px]  rounded-full" alter="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
