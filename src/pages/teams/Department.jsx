import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DepartmentForm from "./Department List N Form/DepartmentForm";
import DepartmentList from "./Department List N Form/DepartmentList";

const Department = () => {
  const [isModalOpen,setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-end justify-end w-[62rem] flex-shrink flex-wrap">
        <NavLink
          to=""
          className="border border-white py-2 px-4 font-semibold rounded-md text-white hover:bg-white hover:text-black hover:rounded-full transition duration-200 delay-150"
        onClick={()=>setIsModalOpen(true)}
        >
          Add Department +
        </NavLink>
      </div>

      <DepartmentForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      {!isModalOpen && (
        <DepartmentList/>
      )}
    </>
  );
};

export default Department;
