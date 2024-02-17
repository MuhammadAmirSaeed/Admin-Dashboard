import React from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const SideBar = () =>
{
    return (
        <div className="   flex-2   border-r-2 border-solid  border-r-blue-400 h-screen">
            {/* Top */ }
            <div className=" h-10 flex justify-center items-center font-mono font-bold ">
                <spn className="text-xl text-blue-400 p-4">AmirSaeed hlkadfkjasd</spn>
            </div>
            <hr className="border h-0 border-blue-400" />
            {/* Middle */ }
            <div className=" list-none pl-4">
                <p className=" uppercase text-[10px] text-slate-500 mt-4 mb-1">main</p>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <SpaceDashboardIcon className="text-blue-400" />
                    <li>Dashboard</li>
                </span>
                <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">lists</p>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <Person2SharpIcon className="text-blue-400" />
                    <li>user</li>
                </span>
                <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
                    <StorefrontIcon className="text-blue-400" />
                    <li>Products</li>
                </span>
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
