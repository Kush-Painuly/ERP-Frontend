import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../custom/components/Modal";
import UseAlert from "../../../hooks/UseAlert";
import { ClipLoader } from "react-spinners";
import Teamctx from "../../../contexts/Teamcontext";
import UsePrivateApi from "../../../hooks/UsePrivateAPI";

const DepartmentForm = ({ isModalOpen, setIsModalOpen, deptId }) => {
  const [department, setDepartment] = useState("");
  const [managersList, setManagersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, post } = UsePrivateApi();
  const {
    data: getData,
    loading: getLoading,
    error: getError,
    get,
  } = UsePrivateApi();
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });
  const teamCtx = useContext(Teamctx);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      //   console.log(data);
      setShowAlert({
        type: "success",
        msg: data?.message,
        show: true,
      });
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
    if (loading) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: error,
        show: true,
      });
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (getData) {
      setIsLoading(false);
      let updatedManagersList = getData.data;
      //updation
      if (deptId) {
        const dept = teamCtx.depts.find((item) => item._id === deptId);
        setDepartment(dept);
        if (dept?.managerId) {
          updatedManagersList = [
            ...updatedManagersList,
            {
              _id: dept?.managerId?._id,
              email: dept?.managerId?.email,
              selected: true,
            },
          ];
        }
      }

      setManagersList(updatedManagersList);
    }
    if (getLoading) {
      setIsLoading(true);
    }
    if (getError) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: getError,
        show: true,
      });
    }
  }, [getData, getLoading, getError]);

  useEffect(() => {
    get("/api/user/available-managers");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!department) {
      setShowAlert({
        type: "error",
        msg: "Please enter department name.",
        show: true,
      });
      return;
    }

    post("/api/dept/create-dept", { name: department });
  };

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Department</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="department-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="department-name"
              name="department-name"
              placeholder="Enter Department Name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
              onChange={(e) => setDepartment(e.target.value)}
              value={department.name}
            />
          </div>
          <div>
            <label
              htmlFor="manager"
              className="block text-sm font-medium text-gray-700"
            >
              Manager
            </label>
            <select
              name="manager"
              id="manager"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
            >
              {managersList.length > 0 &&
              managersList.map((item) => (
                <option
                  value={item._id}
                  key={item._id}
                  selected={item?.selected}
                >
                  {item?.name || item?.email}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {!isLoading ? (
                <ClipLoader size={30} color="#fff" />
              ) : deptId ? (
                "Update Department"
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      {showAlert.show && (
        <UseAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </Modal>
  );
};

export default DepartmentForm;
