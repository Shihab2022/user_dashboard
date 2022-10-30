import React, { useEffect, useState } from "react";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [start, setStart] = useState(0);
  const [show, setShow] = useState(5);
  useEffect(() => {
    fetch("fake.json")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);
  const handleNext = () => {
    setShow(show + 5);
    setStart(start + 5);
  };
  const handlePre = () => {
    setShow(show - 5);
    setStart(start - 5);
  };
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {userData.slice(start, show).map((d) => (
        <div className="flex flex-row hover:bg-sky-200 duration-500  shadow py-4 px-5 my-1 items-center ">
          <div className="flex items-center basis-10">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
            />
          </div>
          <div className="flex justify-start items-center basis-1/4">
            <img
              className="w-10 h-10 rounded"
              src={d.picture}
              alt="Default avatar"
            />
            <p className="ml-3 text-lg">{d.name}</p>
          </div>

          <p className="basis-2/6">{d.email}</p>
          <p className="basis-32">{d.role}</p>
          {d.isActive ? (
            <button
              type="button"
              className=" inline-flex w-24 items-center px-3 py-2 text-sm font-medium text-center border-2 border-zinc-400 rounded-md"
            >
              <span className="inline-flex mr-2 justify-center items-center  w-2 h-2  bg-[#6fb8d1]  rounded-full"></span>
              Active
            </button>
          ) : (
            <button
              type="button"
              disabled
              className=" inline-flex w-24 items-center px-3 py-2 text-sm font-medium text-center border-2 border-zinc-200 text-zinc-200 rounded-md"
            >
              <span className="inline-flex mr-2 justify-center items-center  w-2 h-2 bg-zinc-300   rounded-full"></span>
              Inactive
            </button>
          )}
          <p className="basis-1/6 text ml-20">{d.time}</p>
        </div>
      ))}

      {/* for pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center py-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">
            {start} -{" "}
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {show}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {userData.length}
          </span>{" "}
        </span>
        <div className="">
          {!(show <= 5) && (
            <button
              onClick={handlePre}
              className=" border-[.5px] border-zinc-500  px-4 text-xl py-2   rounded-l-lg"
            >
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
          {!(show >= userData.length) && (
            <button
              onClick={handleNext}
              className=" border-[.5px] border-zinc-500 px-4 text-xl py-2  rounded-r-lg"
            >
              <svg
                aria-hidden="true"
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
