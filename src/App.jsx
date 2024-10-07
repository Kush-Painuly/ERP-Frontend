import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/components/Login";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import TeamIndex from "./pages/teams/index";
import Employee from "./pages/teams/Employee";
import Department from "./pages/teams/Department";
import Role from "./pages/teams/Role";
import UsePersistLogin from "./hooks/UsePersistLogin";
import Profile from "./pages/profile/Profile";
import Work from "./pages/work/Work";
import Documents from "./pages/documents/Documents";
import Attendance from "./pages/attendance/Attendance";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<UsePersistLogin />}>
            <Route element={<Root />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/team" element={<TeamIndex />}>
                <Route index element={<Employee />}></Route>
                <Route path="employee" element={<Employee />}></Route>
                <Route path="department" element={<Department />}></Route>
                <Route path="role" element={<Role />}></Route>
              </Route>
              <Route path="/work" element={<Work />}></Route>
              <Route path="/documents" element={<Documents />}></Route>
              <Route path="/attendance" element={<Attendance />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
