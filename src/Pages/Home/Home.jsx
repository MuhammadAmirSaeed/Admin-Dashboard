import React from "react";
import SideBar from "../../Components/SideBar";
import NavBar from "../../Components/NavBar";
import Widget from "../../Components/Widget/Widget";
import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Table from "../../Table/table";

const Home = () => {
  return (
    <div className="flex ">
      <SideBar />

      <div className="flex-1">
        {" "}
        <NavBar />
        {/*  =============================== */}
        {/* Cart component */}
        <div className="flex  gap-3 justify-between p-10  ">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* ========================== */}
        {/* Featured and chart */}
        <div className=" flex gap-4 px-4">
          <Featured />
          <Chart title="Last 12 months Revenue" />
        </div>
        {/*  ============================*/}
        {/* Products Table */}
        <div className=" ">
          <div className="flex-1 shadow-lg rounded-md  p-3 m-2">
            <div className="font-bold text-xl text-slate-800 p-3 ">
              {" "}
              List Transactions
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
