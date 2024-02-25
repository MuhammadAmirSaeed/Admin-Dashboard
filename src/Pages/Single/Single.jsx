import React from "react";
import SideBar from "../../Components/SideBar"
import NavBar from "../../Components/NavBar"
import Chart from "../../Components/Chart/Chart";
import Table from "../../Table/table";
const Single = () =>
{
  return <div className="flex flex-row" >
    <div className="">
      <SideBar />
    </div>
    <div className=" flex-1">
      <NavBar />
      {/* top */ }
      <div className="flex">
        <div className="">
          <div className=" shadow-lg shadow-blue-400  w- ml-3 p-3 rounded-lg overflow-hidden bg-white my-6 " >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-bold text-2xl">Information</h1>
                <div className="flex flex-row mt-3">
                  <img src="https://plus.unsplash.com/premium_photo-1679923814027-2afd45cd2563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D" alt=" profile" className="h-24 w-24 rounded-full" />
                  {/* Details */ }
                  <div className="  px-4">
                    <h1 className="font-bold text-slate-800 text-lg">Amir Saeed</h1>
                    <div className="">
                      <span className="font-bold text-sm text-slate-600">email:</span>
                      <span className="text-sm font-mono"> amirsaeed@gmail.com</span>
                    </div>
                    <div className="">
                      <span className="font-bold text-sm text-slate-600">Contect no. :</span>
                      <span className="text-sm font-mono"> +92 76543210</span>
                    </div>
                    <div className="">
                      <span className="font-bold text-sm text-slate-600">Address :</span>
                      <span className="text-sm font-sans"> Block A ...</span>
                    </div>
                    <div className="">
                      <span className="font-bold text-sm text-slate-600">Country :</span>
                      <span className="text-sm font-serif"> Pakistan</span>
                    </div>
                  </div>

                </div>
              </div>
              <button className="bg-blue-200 px-1 -m-2.5  rounded-s-lg text-blue-600 hover:bg-blue-400">edit</button>
            </div>
          </div>
        </div>
        {/* Right side */ }
        <div className=" m-3 w-full shadow-lg shadow-blue-400 rounded-lg ">
          <Chart title="Profile Chart" />

        </div>
      </div>

      {/* Bottom */ }
      <div className="m-3 pt-4">
        <Table />
      </div>

    </div>
  </div >;
};

export default Single;
