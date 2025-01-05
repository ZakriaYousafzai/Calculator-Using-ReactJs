import React from "react";

export default function History({ history, theme }) {
  return (
    <div className={`shadow w-[95%] h-[60px] border-2 border-black my-2 mx-[30px] p-[5px] overflow-y-auto ${theme === "light" ? "text-gray-700 bg-white" : "text-gray-400 bg-gray-700"}`}>
      <h2 className="text-sm">History</h2>
      <ul className='text-sm'>
        {history.map((entry, index) => (
          <li key={index} className="mb-[2px]">{entry}</li>
        ))}
      </ul>
    </div>
  );
}
