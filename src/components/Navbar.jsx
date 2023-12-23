import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header
      className={`font-display font-extrabold px-[20px] sm:px-[63px] flex justify-between items-center h-16 w-screen ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      } shadow-lg`}
    >
      <Link to="/">
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
  );
};

export default Navbar;
