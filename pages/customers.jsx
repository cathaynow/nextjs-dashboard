import React from "react";
import { BsFillPhoneFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Apple Store</h2>
        <h2 className="font-bold">Welcome Back, Apple</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto"></div>
        <div className="my-2 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
          <span>Name</span>
          <span className="sm:text-left text-right">ANumber</span>
          <span className="hidden md:grid">Bootrom</span>
          <span className="hidden sm:grid">InternalName</span>
        </div>
        <ul>
          {data.map((phone, index) => (
            <li
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-1 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BsFillPhoneFill className="text-purple-800" />
                </div>
                <p className="pl-4">{phone.Generation}</p>
              </div>
              <p className="text-gray-600 sm:text-left text-right">
                {phone.ANumber}
              </p>
              <p className="hidden md:flex">{phone.Bootrom}</p>
              <div className="sm:flex hidden justify-between items-center">
                <p>{phone.InternalName}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default customers;
