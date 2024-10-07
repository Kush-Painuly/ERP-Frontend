import { createContext, useState } from "react";

const Teamctx = createContext({
  roles: [],
  departments: [],
  employees: [],
});

export const TeamContextProvider = ({ children }) => {
    
  
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  const addRoleHandler = (newRole) => {
    if (newRole?.length > 0) {
      setRoles(newRole);
    } else {
      setRoles((prevState) => [...prevState, newRole]);
    }
  };
  const addDeptHandler = (newDepts) => {
    if (newDepts?.length > 0) {
      setDepartments(newDepts);
    } else {
      setDepartments((prevState) => [...prevState, newDepts]);
    }
  };
  const addEmployeeHandler = (newRole) => {
    if (newRole?.length > 0) {
      setEmployees((prevState) => [...prevState, ...newRole]);
    } else {
      setEmployees((prevState) => [...prevState, newRole]);
    }
  };
  return (
    <>
      <Teamctx.Provider
        value={{
          roles,
          addRoleHandler,
          departments,
          addDeptHandler,
          employees,
          addEmployeeHandler,
        }}
      >
        {children}
      </Teamctx.Provider>
    </>
  );
};

export default Teamctx;
