import React from "react";
import { FaVolleyballBall ,FaHive,FaUserFriends} from "react-icons/fa";

const ChartDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 px-14 gap-2">
        <div className="bg-red-800 w-full h-screen p-5 col-start-1 col-end-10">

          <div className="grid grid-cols-3 gap-5 ">
            <div className="bg-white w-full rounded-xl h-20 flex items-center px-5 py-3 shadow-lg ">
                <FaVolleyballBall className=" text-2xl h-14 rounded-lg w-14 bg-sky-600 text-white shadow-lg p-2 "/>
               <div className="ml-3 basis-1/2">
                <p className="text-lg ">Revenue</p>
                <h1 className="text-xl font-semibold">
                    $ 21,456
                </h1>
               </div>
               <p className="text-green-600 bg-green-100 px-2 rounded-full ">+ 2.75%</p>
            </div>
            <div className="bg-white w-full rounded-xl h-20 flex items-center px-5 py-3 shadow-lg ">
                <FaHive className=" text-xl h-14 rounded-lg w-14 bg-sky-600 text-white shadow-lg p-2 "/>
               <div className="ml-3 basis-1/2">
                <p className="text-lg ">Orders</p>
                <h1 className="text-xl font-semibold">
                    5,634
                </h1>
               </div>
               <p className="text-green-600 bg-green-100 px-2 rounded-full ">+ 2.75%</p>
            </div>
            <div className="bg-white w-full rounded-xl h-20 flex items-center px-5 py-3 shadow-lg ">
                <FaUserFriends className=" text-2xl h-14 rounded-lg w-14 bg-sky-600 text-white shadow-lg p-2 "/>
               <div className="ml-3 basis-1/2">
                <p className="text-lg ">Revenue</p>
                <h1 className="text-xl font-semibold">
                    $ 21,456
                </h1>
               </div>
               <p className="text-red-600 bg-red-100 px-2 rounded-full ">- 0.82%</p>
            </div>
       
          </div>
          <div className="grid grid-cols-12 gap-2 my-5 rounded-md w-full">
            <div className="bg-green-500 h-96 w-full col-start-1 col-end-4"></div>
            <div className="bg-green-800 h-96 w-full col-start-4 col-end-13"></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-64 w-full bg-zinc-400 rounded-md"></div>
            <div className="h-64 w-full bg-zinc-400 rounded-md"></div>
            <div className="h-64 w-full bg-zinc-400 rounded-md"></div>
          </div>
        </div>

        <div className="w-full h-screen col-start-10 col-end-13 bg-amber-400"></div>
      </div>
    </>
  );
};

export default ChartDashboard;
