import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = ({date, handleDateChange}) => {
  return (
    <div className="w-full">
      <Calendar onChange={handleDateChange}  date={date} />
    </div>
  );
};

export default MyCalendar;
