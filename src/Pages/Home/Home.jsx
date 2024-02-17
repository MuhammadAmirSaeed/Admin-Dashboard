import React from "react";
import SideBar from "../../Components/SideBar";
import NavBar from "../../Components/NavBar";

const Home = () => {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1">
        {" "}
        <NavBar /> Container
      </div>
    </div>
  );
};

export default Home;
