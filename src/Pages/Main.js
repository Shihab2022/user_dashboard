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
        <div className="flex justify-evenly items-center ">
          <div class="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <img src='https://lh3.googleusercontent.com/ogw/AOh-ky3JsNqydzOEa6vQYLGkjbsQjDJeVZSMJXQta1U59g=s32-c-mo' alt="" />
          <p>{d.name}</p>
          <p>{d.email}</p>
          <p>{d.role}</p>
          <p>{d.isActive}</p>
          <p>13 minutes ago</p>
        </div>
  
      ))}
    </div>
  );
};

export default Main;
