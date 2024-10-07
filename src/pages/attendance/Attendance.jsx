import React, { useState } from "react";
import MyCalendar from "./inner/MyCalendar";
import { Link } from "react-router-dom";
import LeaveForm from "./inner/LeaveForm";

const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    presentForm();
  };

  const presentForm = () => {
    console.log("form is here");
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 pb-1">
        <h1 className="text-white">
          Mark Attendance for today ({date.toDateString()})
        </h1>
        <button
          type="button"
          className="px-2 py-2 text-black border border-white bg-white rounded-lg font-medium hover:underline"
          onClick={() => setOpenCalendar(!openCalendar)}
        >
          Mark Attendance
        </button>
      </div>
      {openCalendar && (
        <MyCalendar onDateChange={handleDateChange} date={date} />
      )}
      <div className="p-4 text-center">
        <h2 className="text-white font-medium">Attendance</h2>
        <p className="text-white font-light">
          To check out your attendance see below, check the edit option ! If you
          want to take leave{" "}
          <Link
            href="#"
            className="text-blue-400 underline font-light"
            onClick={() => setIsModalOpen(true)}
          >
            Click here.
          </Link>
        </p>
      </div>
      <LeaveForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Check In
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Check Out
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Duration
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Remarks
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Edit
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Attendance;
