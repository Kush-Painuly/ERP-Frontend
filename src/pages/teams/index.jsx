import React from "react";
import TeamHeader from "./TeamHeader";
import { Outlet } from "react-router-dom";
import { TeamContextProvider } from "../../contexts/Teamcontext";
const index = () => {
  return (
    <>
      <TeamHeader />
      <TeamContextProvider>
        <Outlet />
      </TeamContextProvider>
    </>
  );
};

export default index;
