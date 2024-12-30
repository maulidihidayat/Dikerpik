"use client";
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Datepicker
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Select a date"
        minDate={new Date(2023, 0, 1)} // Example: January 1, 2023
        maxDate={new Date(2025, 11, 31)} // Example: December 31, 2025
        autoHide={true}
        title="Select a Date"
      />
    </div>
  );
};

export default Calender;
