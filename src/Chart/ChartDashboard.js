import React from "react";
import { FaVolleyballBall, FaHive, FaUserFriends } from "react-icons/fa";
import AreaCharts from "./AreaChart";
import Earning from "./Earning";
import LineChart from "./LineChart";
import PiCharts from "./PiCharts";
import Profile from "./Profile";
import TopProduct from "./TopProduct";

const ChartDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 px-14 gap-2">
        <div className=" w-full h-screen p-5 col-start-1 col-end-10">
          <div className="grid grid-cols-3 gap-5 ">
            <div className="bg-white w-full rounded-xl h-20 flex items-center px-5 py-3 shadow-lg ">
              <FaVolleyballBall className=" text-2xl h-14 rounded-lg w-14 bg-sky-600 text-white shadow-lg p-2 " />
              <div className="ml-3 basis-1/2">
                <p className="text-lg ">Revenue</p>
                <h1 className="text-xl font-semibold">$ 21,456</h1>
              </div>
              <p className="text-green-600 bg-green-100 px-2 rounded-full ">
                + 2.75%
              </p>
            </div>
            <div className="bg-white w-full rounded-xl h-20 flex items-center px-5 py-3 shadow-lg ">
              <FaHive className=" text-xl h-14 rounded-lg w-14 bg-sky-600 text-white shadow-lg p-2 " />
              <div className="ml-3 basis-1/2">
                <p className="text-lg ">Orders</p>
                <h1 className="text-xl font-semibold">5,634</h1>
              </div>
              <p className="text-red-600 bg-red-100 px-2 rounded-full ">
                - .82%
              </p>
            </div>
            <div className="bg-white w-full rounded-xl h-20 flex items-center px-5 py-3 shadow-lg ">
              <FaUserFriends className=" text-2xl h-14 rounded-lg w-14 bg-sky-600 text-white shadow-lg p-2 " />
              <div className="ml-3 basis-1/2">
                <p className="text-lg ">Customers</p>
                <h1 className="text-xl font-semibold">51,456</h1>
              </div>
              <p className="text-red-600 bg-red-100 px-2 rounded-full ">
                - 1.82%
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 my-5 rounded-md w-full">
            <div className=" p-5 h-96 w-full col-start-1 col-end-5">
              <p className="text-lg font-semibold mb-1">Overview</p>
              <div>
                <p className="text-lg">This Month</p>
                <h1 className="text-xl font-bold ">
                  $245,68{" "}
                  <span className="text-green-600 ml-6 text-base font-base bg-green-100 px-2 rounded-full ">
                    + 2.65%
                  </span>
                </h1>
              </div>
              <div className="flex mt-3">
                <div className="shadow-lg w-full px-5 py-3 rounded-lg">
                  <p className="text-lg text-zinc-600">Orders</p>
                  <p className="text-xl font-bold">5,365</p>
                </div>
                <div className="shadow-lg w-full px-5 py-3 rounded-lg ml-3">
                  <p className="text-lg text-zinc-600">Sales</p>
                  <p className="text-xl font-bold">1,786</p>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="shadow-lg w-full px-5 py-3 rounded-lg">
                  <p className="text-lg text-zinc-600">Order Value</p>
                  <p className="text-xl font-bold">12.04%</p>
                </div>
                <div className="shadow-lg w-full px-5 py-3 rounded-lg ml-3">
                  <p className="text-lg text-zinc-600">Customers</p>
                  <p className="text-xl font-bold">21,458</p>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="shadow-lg w-full px-5 py-3 rounded-lg">
                  <p className="text-lg text-zinc-600">Income</p>
                  <p className="text-xl font-bold">$35,452</p>
                </div>
                <div className="shadow-lg w-full px-5 py-3 rounded-lg ml-3">
                  <p className="text-lg text-zinc-600">Expenses</p>
                  <p className="text-xl font-bold">$12,453</p>
                </div>
              </div>
            </div>
            <div className=" h-96 w-full col-start-5 col-end-13">
                <LineChart/>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-64 w-full rounded-md">
                <AreaCharts/>
            </div>
            <div className="h-64 w-full  rounded-md">

              <PiCharts/>
            </div>
            <div className="h-64 w-full p-5 rounded-md">

              <TopProduct/>
            </div>
          </div>
        </div>

        <div className="w-full h-screen col-start-10 col-end-13 rounded-md ">
          <Profile/>
          <Earning/>
        </div>
      </div>
    </>
  );
};

export default ChartDashboard;
