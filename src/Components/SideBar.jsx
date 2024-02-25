import React from "react";
// import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
// import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import
{
    SpaceDashboard as SpaceDashboardIcon,
    Person2Sharp as Person2SharpIcon,
    Storefront as StorefrontIcon,
    CreditCardRounded as CreditCardRoundedIcon,
    LocalShipping as LocalShippingIcon,
    Analytics as AnalyticsIcon,
    NotificationsNone as NotificationsNoneIcon,
    SettingsSystemDaydream as SettingsSystemDaydreamIcon,
    PsychologyOutlined as PsychologyOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    AccountBoxOutlined as AccountBoxOutlinedIcon,
    LogoutOutlined as LogoutOutlinedIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";



const SideBar = () =>
{
    return (
        <div className="  flex-initial w-48  border-r-2 border-solid  font-semibold font-serif border-r-blue-400 h-max-full ">
            {/* Top */ }
            <Link to="/">
                <div className=" h-10 flex justify-center items-center font-mono font-bold pt-3 cursor-pointer">
                    <spn className="text-xl text-blue-400 p-4">AmirSaeed </spn>
                </div>
            </Link>



            <hr className="border h-0 border-blue-400 mt-5" />



            {/* Middle */ }
            <div className=" list-none pl-4">
                <p className=" uppercase text-[10px] text-slate-500 mt-4 mb-1">main</p>
                <Link to="/">
                    <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                        <SpaceDashboardIcon className="text-blue-400" />
                        <li>Dashboard</li>
                    </span>
                </Link>
                <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">lists</p>
                <Link to="/users">
                    <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                        <Person2SharpIcon className="text-blue-400" />
                        <li>user</li>
                    </span>
                </Link>
                <Link to="/products">
                    <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                        <StorefrontIcon className="text-blue-400" />
                        <li>Products</li>
                    </span>
                </Link>


                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <CreditCardRoundedIcon className="text-blue-400" />
                    <li>Orders</li>
                </span>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <LocalShippingIcon className="text-blue-400" />
                    <li>Delivery</li>
                </span>
                <p className=" uppercase text-[10px] text-slate-500 mt-4 mb-1">
                    usefull
                </p>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <AnalyticsIcon className="text-blue-400" />
                    <li>State</li>
                </span>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <NotificationsNoneIcon className="text-blue-400" />
                    <li>notifications</li>
                </span>
                <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">
                    service
                </p>

                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <SettingsSystemDaydreamIcon className="text-blue-400" />
                    <li>System Health</li>
                </span>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <PsychologyOutlinedIcon className="text-blue-400" />
                    <li>Logs</li>
                </span>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <SettingsOutlinedIcon className="text-blue-400" />
                    <li>Settings</li>
                </span>
                <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">user</p>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <AccountBoxOutlinedIcon className="text-blue-400" />
                    <li>Profile</li>
                </span>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <LogoutOutlinedIcon className="text-blue-400" />
                    <li>Logout</li>
                </span>
            </div>
            {/* Bottom */ }
            <div className="">Bottom</div>
        </div>
    );
};

export default SideBar;
