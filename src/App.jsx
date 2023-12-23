import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode((prevDarkMode) => !prevDarkMode);
    };

  useEffect(() => {
    const rootElement = document.getElementById("root");
     rootElement.style.backgroundColor = "";
      if (darkMode) {
        document.documentElement.classList.add("dark");
        rootElement.style.backgroundColor = "#1f2937";
      } else {
        document.documentElement.classList.remove("dark");
         rootElement.style.backgroundColor = "#fbfbf";
      }
    }, [darkMode]);
  return (
    <BrowserRouter>
      <>
        <header
          className={`font-display font-extrabold px-[20px] sm:px-[63px] flex justify-between items-center h-16 w-screen ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
          } shadow-lg`}
        >
          <Link to="/Countries-Api/home">
            <h1 className=" text-xl sm:text-2xl">Where in the world ?</h1>
          </Link>

          <div
            onClick={toggleDarkMode}
            className="flex gap-2 justify-center items-center cursor-pointer "
          >
            <FaMoon />
            <h2>Dark Mode</h2>
          </div>
        </header>
      </>
      <Routes>
        <Route
          path="/Countries-Api/home"
          element={<Home darkmode={darkMode} />}
        />
        <Route
          path="/Countries-Api/home/details"
          element={<Details darkmode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
