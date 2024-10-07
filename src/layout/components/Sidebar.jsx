import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Groups2Icon from "@mui/icons-material/Groups2";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckIcon from "@mui/icons-material/Check";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { IconButton } from "@mui/material";
const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-1/5 bg-[#3d3c3c34] shadow-xl">
        <div className="flex flex-col items-start gap-4 h-auto">
          <div className="flex items-center justify-center gap-4 p-3">
            <IconButton>
              <DashboardIcon sx={{ color: "white" }} />
            </IconButton>
            <div>
              <NavLink to="/" className="text-white font-bold ">
                Dashboard
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-3">
            <IconButton>
              <Groups2Icon sx={{ color: "white" }} />
            </IconButton>
            <div>
              <NavLink to="/team" className="text-white font-bold ">
                Teams
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-3">
            <IconButton>
              <EditNoteIcon sx={{ color: "white" }} />
            </IconButton>
            <div>
              <NavLink to="/work" className="text-white font-bold ">
                Work
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-3">
            <IconButton>
              <CheckIcon sx={{ color: "white" }} />
            </IconButton>
            <div>
              <NavLink to="/attendance" className="text-white font-bold ">
                Attendance
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 p-3">
            <IconButton>
              <DocumentScannerIcon sx={{ color: "white" }} />
            </IconButton>
            <div>
              <NavLink to="/documents" className="text-white font-bold ">
                Documents
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
