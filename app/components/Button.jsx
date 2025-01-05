import React from "react";

export default function Button({ value, onClick, theme }) {
  const getButtonStyle = () => {
    if (["C", "√", "^", "sin", "cos", "tan", "%", "/", "*", "-", "+"].includes(value)) {
      return theme === "light" ? "bg-purple-400" : "bg-purple-500";
    } else if (value === "=") {
      return theme === "light" ? "bg-yellow-400" : "bg-yellow-700";
    } else {
      return theme === "light" ? "text-black bg-white" : "bg-gray-700";
    }
  };

  return (
    <button
      className={`shadow h-[50px] text-lg m-[5px] border border-black rounded cursor-pointer ${getButtonStyle()} ${value === "0" ? "w-[110px]" : "w-[50px]"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
