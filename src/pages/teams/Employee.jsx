import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CreateEmployee from "./Employee List and Form/CreateEmployee";
import EmployeeList from "./Employee List and Form/EmployeeList";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex items-end justify-end w-[62rem] flex-shrink flex-wrap">
        <NavLink
          to=""
          className="border border-white py-2 px-4 font-semibold rounded-md text-white hover:bg-white hover:text-black hover:rounded-full transition duration-200 delay-150"
          onClick={()=>setIsModalOpen(true)}
        >
          Add Employee +
        </NavLink>
      </div>

      <CreateEmployee isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {!isModalOpen && (
        <EmployeeList/>
      )}
    </>
  );
};

export default Employee;
