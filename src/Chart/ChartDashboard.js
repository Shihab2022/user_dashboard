import React from "react";

const ChartDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 px-14 gap-2">
        <div className="bg-red-800 w-full h-screen p-5 col-start-1 col-end-10">

          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white w-full rounded-md h-20"></div>
            <div className="bg-white w-full rounded-md h-20"></div>
            <div className="bg-white w-full rounded-md h-20"></div>
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
