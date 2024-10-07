import React, { useState } from "react";
import erplogo from "../../assets/erp.PNG";
import userAvatar from "../../assets/avatar.jpeg";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { logout } from "../../pages/auth/api/auth";
import { setLogout } from "../../store/slices/authSlice";
import { unsetUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [portal, setPortal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showPortal = () => {
    setPortal(!portal);
  };

  const userData = useSelector((state)=> state.user.userData);
  console.log(userData);

  const logoutHandler = async() =>{
    await logout();
    dispatch(setLogout());
    dispatch(unsetUser());
    navigate("/login");
  }
  
  return (
    <>
      <header className=" realtive h-20 bg-[#3d3c3c34] shadow-xl flex items-center justify-between flex-wrap">
        <div className="w-1/5 flex items-center">
          <img src={erplogo} alt="ERP-logo" className="w-1/4 pt-2 pl-3" />
          <h2 className="text-white font-bold text-sm">Enterprise Resource Planner</h2>
        </div>
        <div className="w-[12%] flex items-center justify-center">
          <img
            src={userAvatar}
            alt="user-avatar"
            className="w-2/6 rounded-full cursor-pointer"
          />
          <IconButton onClick={showPortal}>
            <ArrowDropDownIcon className="text-white" />
          </IconButton>
        </div>
        {portal && (
          <>
              <div className="absolute top-10 z-10 right-40 bg-black rounded-full">
                <p className="text-white font-bold text-xl p-4">K</p>
              </div>
            <div className="absolute top-20 right-8 bg-white p-3 w-80 rounded-md">
              <h1 className="text-center text-2xl font-bold p-2">{userData?.name || userData?.email}</h1>
              <div className="flex items-center flex-col justify-around gap-4">
                <div className="flex items-center justify-between flex-wrap gap-4 border border-gray-500 py-2 px-16 text-gray-600 font-semibold rounded">
                  <HelpIcon />
                  <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4 border border-gray-500 py-2 px-16 text-gray-600 font-semibold rounded">
                  <SettingsIcon />
                  <NavLink to="">Upload</NavLink>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4 border border-gray-500 py-2 px-16 text-gray-600 font-semibold rounded">
                  <LogoutIcon />
                  <NavLink to="" onClick={logoutHandler}>Logout</NavLink>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
