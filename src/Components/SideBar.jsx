import {
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
  LogoutOutlined as LogoutOutlinedIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import SidebarButton from "./Widget/SidebarButton";

const SideBar = () => {
  return (
    <div className="  flex-initial w-48  border-r-2 border-solid  font-semibold font-serif border-r-blue-400 h-max-full ">
      {/* Top */}
      <Link to="/">
        <div className=" h-10 flex justify-center items-center font-mono font-bold pt-3 cursor-pointer">
          <spn className="text-xl text-blue-400 p-4">AmirSaeed </spn>
        </div>
      </Link>

      <hr className="border h-0 border-blue-400 mt-5" />

      {/* Middle */}
      <div className=" list-none pl-4">
        <p className=" uppercase text-[10px] text-slate-500 mt-4 mb-1">main</p>
        <SidebarButton
          path="/"
          text="Dashboard"
          icon={<SpaceDashboardIcon className="text-blue-400" />}
        />
        <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">lists</p>
        <SidebarButton
          path="/users"
          text="User"
          icon={<Person2SharpIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/products"
          text="Product"
          icon={<StorefrontIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/"
          text="Order"
          icon={<CreditCardRoundedIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/"
          text="Delivery"
          icon={<LocalShippingIcon className="text-blue-400" />}
        />
        <p className=" uppercase text-[10px] text-slate-500 mt-4 mb-1">
          {" "}
          usefull
        </p>
        <SidebarButton
          path="/"
          text="State"
          icon={<AnalyticsIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/"
          text="Notification"
          icon={<NotificationsNoneIcon className="text-blue-400" />}
        />
        <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">
          {" "}
          service
        </p>
        <SidebarButton
          path="/"
          text="System Health"
          icon={<SettingsSystemDaydreamIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/"
          text="Logs"
          icon={<PsychologyOutlinedIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/"
          text="Setting"
          icon={<SettingsOutlinedIcon className="text-blue-400" />}
        />
        <p className="uppercase text-[10px] text-slate-500 mt-4 mb-1">user</p>
        <SidebarButton
          path="/"
          text="Profile"
          icon={<AccountBoxOutlinedIcon className="text-blue-400" />}
        />
        <SidebarButton
          path="/"
          text="Logout"
          icon={<LogoutOutlinedIcon className="text-blue-400" />}
        />
      </div>
      {/* Bottom */}
      <div className=""></div>
    </div>
  );
};

export default SideBar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideBarItem = ({ icon, label, link }) => (
//     <Link to={ link }>
//         <span className="flex flex-row gap-2 hover:bg-blue-200 cursor-pointer">
//             { icon }
//             <li>{ label }</li>
//         </span>
//     </Link>
// );

// const SideBar = ({ items }) => (
//     <div className="flex-initial w-48 border-r-2 border-solid font-semibold font-serif border-r-blue-400 h-max-full">
//         {/* Top */ }
//         <Link to="/">
//             <div className="h-10 flex justify-center items-center font-mono font-bold pt-3 cursor-pointer">
//                 <span className="text-xl text-blue-400 p-4">AmirSaeed </span>
//             </div>
//         </Link>

//         <hr className="border h-0 border-blue-400 mt-5" />

//         {/* Middle */ }
//         <div className="list-none pl-4">
//             { items.map((item, index) => (
//                 <SideBarItem key={ index } { ...item } />
//             )) }
//         </div>

//         {/* Bottom */ }
//         <div className=""></div>
//     </div>
// );

// export default SideBar;
