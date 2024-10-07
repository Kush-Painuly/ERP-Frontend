import React, { useEffect, useState, useContext } from "react";
import UsePrivateAPI from "../../../hooks/UsePrivateAPI";
import Modal from "../../../custom/components/Modal";
import UseAlert from "../../../hooks/UseAlert";
import Teamctx from "../../../contexts/Teamcontext";
import { ClipLoader } from "react-spinners";

const CreateRole = ({ isModalOpen, setIsModalOpen, roleEditId }) => {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, post } = UsePrivateAPI();
  const {
    data: patchData,
    loading: patchLoader,
    error: patchError,
    patch,
  } = UsePrivateAPI();

  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const teamctx = useContext(Teamctx);

  useEffect(() => {
    if (roleEditId) {
      setName(teamctx.roles.find((item) => item._id === roleEditId).name);
    }
  }, [roleEditId]);

  //for handling edit side-effects
  useEffect(()=>{
    if (patchData) {
      console.log(patchData);
      setIsLoading(false);
      setShowAlert({
        type: "success",
        msg: patchData.message,
        show: true,
      });
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
      const updatedRoles = teamctx.roles.map((item)=>{
        if( item._id === roleEditId)
        {
          return {...item, name: name};
        }
        return item;
      })
      teamctx.addRoleHandler(updatedRoles);
    }
    if (patchLoader) {
      setIsLoading(true);
    }
    if (patchError) {
      setIsLoading(false);
      showAlert({
        type: "error",
        msg: patchError,
        show: true,
      });
    }
  })

  useEffect(() => {
    if (data) {
      console.log(data);
      setIsLoading(false);
      setShowAlert({
        type: "success",
        msg: data?.message,
        show: true,
      });
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
      teamctx.addRoleHandler(data?.role);
    }
    if (loading) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(false);
      showAlert({
        type: "error",
        msg: error,
        show: true,
      });
    }
  }, [data.loading, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert({
        type: "error",
        msg: error,
        show: true,
      });
      return;
    }
    if(!roleEditId){
      post("/api/role/create-role", { name });
    }
    else{
      patch(`/api/role/update-role/${roleEditId}`,{name})
    }
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 mt-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Role</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="employee-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="employee-name"
                name="employee-name"
                placeholder="Enter Employee Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            {isError && <p className="text-red-500 font-bold">{isError}</p>}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {!isLoading ? (
                  roleEditId ? (
                    "Update Role"
                  ) : (
                    "submit"
                  )
                ) : (
                  <div className="grid place-content-center">
                    <ClipLoader size={20} color="#fff" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {showAlert.show && (
        <UseAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default CreateRole;
