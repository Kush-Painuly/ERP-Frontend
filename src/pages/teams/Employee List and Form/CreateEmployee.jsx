import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../custom/components/Modal";
import UsePrivateAPI from "../../../hooks/UsePrivateAPI";
import Teamctx from "../../../contexts/Teamcontext";
const CreateEmployee = ({ isModalOpen, setIsModalOpen }) => {
  const[employeeName,setEmployeeName] = useState("");
  const[employeeEmail,setEmployeeEmail] = useState("");
  const[employeePhone,setEmployeePhone] = useState("");
  const[employeeRole,setEmployeeRole] = useState("");
  const[departmentName,setDepartmentName] = useState("");

  const[Loading,setLoading] = useState(false);
  const[isError,setIsError] = useState(false);
  const {data,loading,error, post} = UsePrivateAPI();

  const [showAlert,setShowAlert] = useState({
    type:"",
    msg:"",
    show:false
  });

  const teamctx = useContext(Teamctx);

  useEffect(()=>{
    if(data){
      setLoading(false);
      setShowAlert({
        type:"success",
        msg:data.message,
        show:true
      })
      setTimeout(() => {
        isModalOpen(false);
      }, 3000);

      teamctx.addEmployeeHandler(data?.employee);
    }
    if(loading){
      setLoading(true);
    }
    if(error){
      setLoading(false);
      setShowAlert({
        type:"error",
        msg:error,
        show:true
      })

    }
  },[data,loading,error])

  const addEmployee = (e) =>{
    e.preventDefault();
    console.log({employeeName,employeeEmail,employeePhone,employeeRole,departmentName});
    if(!employeeName||!employeeEmail||!employeePhone||!employeeRole||!departmentName){
      setShowAlert({
        type:"error",
        msg:error.message,
        show:true
    })
    return;
  }
  // post("")
  }

  return (
    <>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Employee Form</h2>
        <form className="space-y-4" onSubmit={addEmployee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="employee-name"
                className="block text-sm font-medium text-gray-700"
              >
                Employee Name
              </label>
              <input
                type="text"
                id="employee-name"
                name="employee-name"
                placeholder="Enter Employee Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                onChange={(e)=>setEmployeeName(e.target.value)}
              />
              {isError && (
                <span className="text-red-700 font-bold text-lg">{isError}</span>
              )}
            </div>

            <div>
              <label
                for="employee-email"
                className="block text-sm font-medium text-gray-700"
              >
                Employee Email
              </label>
              <input
                type="email"
                id="employee-email"
                name="employee-email"
                placeholder="Enter Employee Email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                onChange={(e)=>setEmployeeEmail(e.target.value)}
              />
              {isError && (
                <span className="text-red-700 font-bold text-lg">{isError}</span>
              )}
            </div>

            <div>
              <label
                for="contact-no"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No.
              </label>
              <input
                type="tel"
                id="contact-no"
                name="contact-no"
                placeholder="Enter Contact No."
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                onChange={(e)=>setEmployeePhone(e.target.value)}
              />
              {isError && (
                <span className="text-red-700 font-bold text-lg">{isError}</span>
              )}
            </div>

            <div>
              <label
                for="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="Enter Role"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                onChange={(e)=>setEmployeeRole(e.target.value)}
              />
              {isError && (
                <span className="text-red-700 font-bold text-lg">{isError}</span>
              )}
            </div>

            <div>
              <label
                for="dept-id"
                className="block text-sm font-medium text-gray-700"
              >
                Dept ID
              </label>
              <input
                type="text"
                id="dept-id"
                name="dept-id"
                placeholder="Enter Dept ID"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                onChange={(e)=>setDepartmentName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
    </>
  );
};

export default CreateEmployee;
