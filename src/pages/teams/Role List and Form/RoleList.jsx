import React, { useEffect, useState, useContext } from "react";
import UsePrivateAPI from "../../../hooks/UsePrivateAPI";
import UseAlert from "../../../hooks/UseAlert";
import { ClipLoader } from "react-spinners";
import Teamctx from "../../../contexts/Teamcontext";
import CreateRole from "./CreateRole";
import ConfirmationBox from "../../../custom/components/ConfirmationBox";

const RoleList = () => {
  const { get, data, loading, error } = UsePrivateAPI();
  const { del, data:deletedata, loading:deleteLoader, error:deleteError } = UsePrivateAPI();
  const [Loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleEditId, setRoleEditId] = useState("");
  const [showConfirmationBox, setShowConfirmationBox] = useState(false)

  const teamctx = useContext(Teamctx);

  useEffect(() => {
    if (data) {
      setLoading(false);
      teamctx.addRoleHandler(data?.data);
    }
    if (loading) {
      setLoading(true);
    }
    if (error) {
      setShowAlert({
        type: "error",
        msg: error.message,
        show: true,
      });
    }
  }, [data, loading, error]);

  //for handling delete api side-effects
  useEffect(() => {
    if (deletedata) {
      setLoading(false);
      const updatedRoles = teamctx.roles.filter((item)=> item._id !== roleEditId)
      teamctx.addRoleHandler(updatedRoles);
    }
    if (deleteLoader) {
      setLoading(true);
    }
    if (deleteError) {
      setShowAlert({
        type: "error",
        msg: deleteError,
        show: true,
      });
    }
  }, [deletedata, deleteLoader, deleteError]);

  useEffect(() => {
    get("/api/role/get-roles");
  }, []);

  const handleDeleteHandler = (arg) =>{
    if(arg){
      console.log(roleEditId)
      del(`/api/role/delete-role/${roleEditId}`)
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
                Role Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teamctx.roles.length > 0 &&
              teamctx.roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {role.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        className={` px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${role.name == "Admin" ? "text-gray-500 bg-gray-700": "text-white bg-blue-500"}`}
                        disabled={role.name === 'Admin'}
                        onClick={() => {
                          setIsModalOpen(true), setRoleEditId(role._id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                      className={` px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${role.name == "Admin" ? "text-gray-500 bg-gray-700": "text-white bg-red-500"}`}
                        disabled={role.name === 'admin'}
                        onClick={()=> {setShowConfirmationBox(true), setRoleEditId(role._id)}}
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
            <ClipLoader size={40} color="#fff" />
          </div>
        )}
        {showAlert.show && (
          <UseAlert setShowAlert={setShowAlert} showAlert={showAlert} />
        )}
        {isModalOpen && (
          <CreateRole
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            roleEditId={roleEditId}
          />
        )}
        {
          showConfirmationBox && (
            <ConfirmationBox handleDeleteHandler={handleDeleteHandler} />
          )
        }
      </div>
    </>
  );
};

export default RoleList;
