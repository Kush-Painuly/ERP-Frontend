import React, { useContext, useEffect, useState } from "react";
import UsePrivateAPI from "../../../hooks/UsePrivateAPI";
import UseAlert from "../../../hooks/UseAlert";
import Teamctx from "../../../contexts/Teamcontext";
import { ClipLoader } from "react-spinners";
import DepartmentForm from "./DepartmentForm";
import ConfirmationBox from "../../../custom/components/ConfirmationBox";

const DepartmentList = () => {
  const { get, data, loading, error } = UsePrivateAPI();
  const {
    del,
    data:deptdata,
    loading:deptloader,
    error:depterror,
  } = UsePrivateAPI();
  const [Loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const teamctx = useContext(Teamctx);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deptId, setDeptId] = useState("");
  const [showConfirmationBox, setShowConfirmationBox] = useState(false);

  useEffect(() => {
    if (data) {
      setLoading(false);
      teamctx.addDeptHandler(data?.data);
    }
    if (loading) {
      setLoading(true);
    }
    if (error) {
      setLoading(false);
      setShowAlert({
        type: "error",
        msg: error.message,
        show: true,
      });
    }
  }, [data, loading, error]);

  //for handling delete api for department side-effects
  useEffect(() => {
    if (deptdata) {
      setLoading(false);
      const updatedDepts = teamctx.departments.filter((item)=> item._id !== deptId)
      teamctx.addDeptHandler(updatedDepts);
    }
    if (deptloader) {
      setLoading(true);
    }
    if (depterror) {
      setLoading(false);
      setShowAlert({
        type: "error",
        msg: depterror,
        show: true,
      });
    }
  }, [deptdata, deptloader, depterror]);

  useEffect(() => {
    get("/api/dept/get-departments");
  }, []);

  const handleDeleteHandler = (arg) =>{
    if(arg){
      console.log(deptId)
      del(`/api/dept/delete-dept/${deptId}`)
    }
    setShowConfirmationBox(false);
  }

  return (
    <>
      <div className="p-5 m-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Department Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Manager
              </th>
              <th
               className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teamctx.departments.length > 0 &&
              teamctx.departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dept.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {dept?.managerId?.name || dept?.managerId?.email || "No Manager Assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        disabled={dept.name === "Management"}
                        className={` text-white px-4 py-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          dept.name === "Management"
                            ? "bg-gray-600"
                            : "bg-blue-500"
                        }`}
                        onClick={() => {
                          setIsModalOpen(true), setDeptId(dept._id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={`text-white px-4 py-2 rounded  focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          dept.name === "Management"
                            ? "bg-gray-600"
                            : "bg-red-500"
                        }`}
                        onClick={() => {
                          setShowConfirmationBox(true), setDeptId(dept._id)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {Loading && (
          <div>
            <ClipLoader size={50} color="#fff" />
          </div>
        )}
        {showAlert.show && (
          <UseAlert showAlert={showAlert} setShowAlert={setShowAlert} />
        )}
        {isModalOpen && (
          <DepartmentForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            deptId={deptId}
          />
        )}
        {showConfirmationBox && (
          <ConfirmationBox handleDeleteHandler={handleDeleteHandler} />
        )}
      </div>
    </>
  );
};

export default DepartmentList;
