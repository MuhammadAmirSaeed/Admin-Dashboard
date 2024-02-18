import React from "react";
import SideBar from "../../Components/SideBar";
import NavBar from "../../Components/NavBar";
import UserData from "../../Components/TableData/UserData";
import TableData from "../../Components/TableData/TableData";


const List = () =>
{

  return <div className="">
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        <div>
          <UserData />
        </div>
      </div>
    </div>
  </div>;
};

export default List;
