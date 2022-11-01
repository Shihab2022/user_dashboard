import React from "react";
import { PieChart, Pie,  Cell } from "recharts";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#0088FE"];

const Earning = () => {
  return (
    <div>
      <div className="flex justify-between px-5">
        <h4 className="text-xl font-semibold">Earning</h4>
        <HiOutlineExclamationCircle className=" text-2xl " />
      </div>

      <div className=" relative w- full ">
        <PieChart width={400} height={115}>
          <Pie
            data={data}
            cx='50%'
            cy={100}
            startAngle={180}
            endAngle={30}
            innerRadius={60}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <h1 className="text-2xl font-bold  absolute top-20 right-[43%]">71%</h1>
        <h1 className="text-center text-2xl font-bold mt-3 ml-10">$26,256</h1>
        <h1 className="text-center text-lg text-zinc-400  ml-10">Earning This Month</h1>
        <h1 className="text-center text-lg text-zinc-400 mt-3 ml-10"> <span className="text-base px-3 py-1 rounded-xl bg-green-100 text-green-600">+2.65%</span> From Previous Period</h1>
        <hr class=" h-px bg-gray-500 border-0 dark:bg-gray-500 my-5"></hr>
      </div>
    </div>
  );
};

export default Earning;
