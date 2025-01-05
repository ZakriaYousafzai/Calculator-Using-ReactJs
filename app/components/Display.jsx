import React from "react";

export default function Display({ display, theme }) {
  return (
    <input
      type="text"
      className={`shadow w-[95%] h-[60px] border-2 border-black my-2 mx-[30px] p-[10px] text-right text-4xl ${theme === "light" ? "text-black bg-white" : "text-white bg-gray-700"}`}
      value={display}
      disabled
    />
  );
}
