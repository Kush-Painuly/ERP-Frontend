import React, { useState } from "react";
import CreateRole from "./Role List and Form/CreateRole";
import RoleList from "./Role List and Form/RoleList";

const Role = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-end justify-end w-[62rem] flex-shrink flex-wrap">
        <button
          onClick={()=>setIsModalOpen(true)}
          className="border border-white py-2 px-4 font-semibold rounded-md text-white hover:bg-white hover:text-black hover:rounded-full transition duration-200 delay-150"
        >
          Add Role +
        </button>
      </div>

      <CreateRole isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      {!isModalOpen && (
        <RoleList/>
      )}
    </>
  );
};

export default Role;
