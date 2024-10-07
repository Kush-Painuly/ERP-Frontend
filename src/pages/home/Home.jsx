import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TimelineIcon from "@mui/icons-material/Timeline";
import LineChart from "./Inner/LineChart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PieChart from "./Inner/PieChart";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-white flex items-center justify-center gap-4 rounded-2xl p-4">
        <div className="w-1/5 flex flex-col items-center justify-center bg-blue-300 p-2 rounded-3xl">
          <div className="border border-white bg-white p-3 rounded-full">
            <PersonIcon fontSize="large" />
          </div>
          <div className="text-center">
            <h4 className="font-bold">Total Employees</h4>
            <p className="font-medium">240</p>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 hover:border-black shadow-md bg-white hover:bg-black text-black hover:text-white font-bold rounded-lg"
            >
              <Link to="/team/employee">View Details</Link>
            </button>
          </div>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-center bg-blue-300 p-2 rounded-3xl">
          <div className="border border-white bg-white p-3 rounded-full">
            <GroupIcon fontSize="large" />
          </div>
          <div className="text-center">
            <h4 className="font-bold">Total Team</h4>
            <p className="font-medium">8</p>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 hover:border-black shadow-md bg-white hover:bg-black text-black hover:text-white font-bold rounded-lg"
            >
             <Link to="/team/department">View Details</Link>
            </button>
          </div>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-center bg-blue-300 p-2 rounded-3xl">
          <div className="border border-white bg-white p-3 rounded-full">
            <DoneAllIcon fontSize="large" />
          </div>
          <div className="text-center">
            <h4 className="font-bold">Total Leaves</h4>
            <p className="font-medium">100</p>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 hover:border-black shadow-md bg-white hover:bg-black text-black hover:text-white font-bold rounded-lg"
            >
              <Link to="/attendance">View Details</Link>
            </button>
          </div>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-center bg-blue-300 p-2 rounded-3xl">
          <div className="border border-white bg-white p-3 rounded-full">
            <TimelineIcon fontSize="large" />
          </div>
          <div className="text-center">
            <h4 className="font-bold">Total Projects</h4>
            <p className="font-medium">16</p>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 hover:border-black shadow-md bg-white hover:bg-black text-black hover:text-white font-bold rounded-lg"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="p-4 w-3/5 ">
          <LineChart />
          <div className="text-center">
            <p className="text-gray-500 capitalize">rate over employment engagement</p>
          </div>
        </div>
        <div className="p-4 w-1/3">
        <div className="text-center">
            <p className="text-gray-500 capitalize">Total Customers Projects</p>
          </div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
