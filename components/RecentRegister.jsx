import React, { useEffect, useState } from "react";
import { data } from "../data/data.js";
import { RiPhoneFindLine } from "react-icons/ri";

const RecentRegister = () => {
  const [phone, setPhone] = useState("");

  useEffect(() => {}, []);

  // console.log(typeof data);
  console.log(data);

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>최근 등록폰</h1>
      <ul>
        {data &&
          data.map((phone, id) => (
            <li
              key={id}
              className="flex bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-1 items-center cursor-pointer"
            >
              <div className="bg-purple-100 rounded-lg p-3">
                <RiPhoneFindLine className="text-purple-800" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">{phone.Generation}</p>
                <p className="text-gray-400 text-sm">{phone.ANumber}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">
                {phone.InternalName}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentRegister;
