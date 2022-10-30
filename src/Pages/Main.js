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
        <div className="flex flex-row hover:bg-red-400 bg-amber-100 shadow-lg py-4 px-5 my-1 items-center ">
          <div class="flex items-center basis-10">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex justify-start items-center basis-1/4">
          <img class="w-10 h-10 rounded" src='https://lh3.googleusercontent.com/ogw/AOh-ky3JsNqydzOEa6vQYLGkjbsQjDJeVZSMJXQta1U59g=s32-c-mo'  alt="Default avatar"/>
          <p className="ml-3">{d.name}</p>
          </div>
         
          <p className="basis-2/6">{d.email}</p>
          <p className="basis-32">{d.role}</p>
          {/* <p className="basis-1/6">{d.isActive} true</p> */}
          <button type="button" class="basis-1/6 inline-flex w-1/2 items-center px-5 py-2.5 text-sm font-medium text-center border-2 border-zinc-400 rounded-md">
          <span class="inline-flex mr-2 justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
    2
  </span>
  Active
</button>
          <p>13 minutes ago</p>
        </div>
  
      ))}
    </div>
  );
};

export default Main;
