import React, { useEffect, useState } from "react";

const Main = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {userData.map((d) => (
        <div className="flex flex-row hover:bg-sky-200 duration-500  shadow py-4 px-5 my-1 items-center ">
          <div class="flex items-center basis-10">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
            />
          </div>
          <div className="flex justify-start items-center basis-1/4">
            <img
              class="w-10 h-10 rounded"
              src={d.picture}
              alt="Default avatar"
            />
            <p className="ml-3 text-lg">{d.name}</p>
          </div>

          <p className="basis-2/6">{d.email}</p>
          <p className="basis-32">{d.role}</p>
          {/* <p className="basis-1/6">{} true</p> */}
         {d.isActive? <button
            type="button"
            class=" inline-flex w-24 items-center px-3 py-2 text-sm font-medium text-center border-2 border-zinc-400 rounded-md"
          >
            <span class="inline-flex mr-2 justify-center items-center  w-2 h-2  bg-[#6fb8d1]  rounded-full"></span>
            Active
          </button>:
          <button
            type="button"
            disabled
            class=" inline-flex w-24 items-center px-3 py-2 text-sm font-medium text-center border-2 border-zinc-200 text-zinc-200 rounded-md"
          >
            <span class="inline-flex mr-2 justify-center items-center  w-2 h-2 bg-zinc-300   rounded-full"></span>
            Inactive
          </button>}
          <p className="basis-1/6 text ml-20">{d.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
