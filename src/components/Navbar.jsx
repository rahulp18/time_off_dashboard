import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle, BsPlusLg } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-sky-900 px-8 text-white py-3">
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 items-center">
          <h1 className="font-bold text-2xl mr-4 font-roboto">Grove</h1>
          <div className="flex justify-center gap-5 items-center">
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150  ">
              Recuitment
            </h3>
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Onboading
            </h3>
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Employees
            </h3>
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Time Off
            </h3>
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Attendance
            </h3>
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Reports
            </h3>
            <h3 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              News
            </h3>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center">
            <div className="bg-green-500  cursor-pointer rounded-full p-2 mr-3 hover:scale-110 transition-transform ease-in-out delay-75  ">
              <BsPlusLg className="text-xl" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 text-2xl">
            <BsQuestionCircle className="hover:scale-110 transition-transform ease-in-out delay-75 cursor-pointer" />

            <IoIosNotificationsOutline className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />

            <FiSettings className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />
            <div className="bg-green-500  cursor-pointer rounded-full p-1  relative hover:scale-110 transition-transform ease-in-out delay-75">
              <img
                src="https://png.pngtree.com/png-clipart/20211009/original/pngtree-mens-cartoon-face-cleaning-png-image_6843354.png"
                alt="person"
                className="h-[25px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
