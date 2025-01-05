"use client";

import React, { useState } from "react";
import Display from "./components/Display";
import History from "./components/History";
import Button from "./components/Button";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [display, setDisplay] = useState(""); // Display state
  const [history, setHistory] = useState([]); // History state
  const [theme, setTheme] = useState("light"); // Theme state

  const handleClick = (value) => {

    if (value === "C") {
      setDisplay("");

    } else if (value === "=") {
      try {
        const result = eval(display).toString(); // Calculation
        setHistory([...history, `${display} = ${result}`]); // Add to history
        setDisplay(result);
      } catch {
        setDisplay("Error");
      }

    } else if (value === "^") {
      try {
        setDisplay((prev) => prev + "**");
      } catch {
        setDisplay("Error");
      }

    } else if (value === "√") {
      try {
        const result = Math.sqrt(parseFloat(display)).toString(); // Calculation
        setHistory([...history, `√(${display}) = ${result}`]); // Add to history
        setDisplay(result);
      } catch {
        setDisplay("Error");
      }

    } else if (value === "sin") {
      try {
        const result = Math.sin(parseFloat(display) * (Math.PI / 180)).toString(); // Calculation 
        setHistory([...history, `sin(${display}) = ${result}`]); // Add to history
        setDisplay(result);
      } catch {
        setDisplay("Error");
      }

    } else if (value === "cos") {
      try {
        const result = Math.cos(parseFloat(display) * (Math.PI / 180)).toString(); // Calculation
        setHistory([...history, `cos(${display}) = ${result}`]); // Add to history
        setDisplay(result);
      } catch {
        setDisplay("Error");
      }

    } else if (value === "tan") {
      try {
        const result = Math.tan(parseFloat(display) * (Math.PI / 180)).toString(); // Calculation
        setHistory([...history, `tan(${display}) = ${result}`]); // Add to history
        setDisplay(result);
      } catch {
        setDisplay("Error");
      }  
    
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`flex justify-center items-center h-[100vh] ${theme === "light" ? "bg-white" : "bg-gray-700"}`}>

      {/* Calculator */}
      <div className={`shadow w-[300px] border-2 border-black p-[20px] rounded-lg flex flex-col items-center justify-center ${theme === "light" ? "bg-gray-300" : "bg-gray-800 text-white"}`}>

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <History history={history} theme={theme} />
        <Display display={display} theme={theme} />

        <div className="flex flex-wrap justify-center items-center">

          {/* Render buttons */}
          {["C", "√", "^", "sin", "cos", "tan", "%", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", ".", "0"].map((value) => (
            <Button key={value} value={value} onClick={() => handleClick(value)} theme={theme} />
          ))}

        </div>
      </div>
    </div>
  );
}
