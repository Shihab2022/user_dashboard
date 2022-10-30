import React, { useEffect, useState } from "react";

const Main = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
