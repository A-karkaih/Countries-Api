import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../assets/utils/data.json";
import { Link } from "react-router-dom";
const Home = ({ darkmode }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("filter");
  const [newData, setNewData] = useState([{}]);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };
  useEffect(() => {
    console.log("the dark mode is =>", darkmode);
    if (search.trim() !== "") {
      const filteredData = data.filter(
        (item) => item.name.toLowerCase() === search.toLowerCase()
      );
      if (filteredData.length >= 1) {
        setNewData(filteredData);
        console.log(search);
        console.log(filteredData);
      }
    } else {
      const slicedData = data.slice(0, 20);
      setNewData(slicedData);
    }
  }, [search, darkmode]);

  useEffect(() => {
    if (selectedRegion === "filter") {
      const slicedData = data.slice(0, 20);
      setNewData(slicedData);
    } else {
      const data1 = data.filter((item) => item.region === selectedRegion);
      setNewData(data1);
      console.log(data1);
    }
  }, [selectedRegion]);

  return (
    <main
      className={`h-screen w-screen px-16 font-display font-extrabold ${
        darkmode ? "dark" : ""
      }`}
    >
      <div className={`mt-10 ${darkmode ? "text-white" : "text-black"}`}>
        <section
          className={`flex flex-col sm:flex-row justify-between items-center w-full h-20 ${
            darkmode ? "bg-gray-800" : "bg-[#fffefe]"
          }`}
        >
          <div
            className={`flex items-center relative ${
              darkmode ? "bg-gray-700" : "bg-[#fffefe]"
            } `}
          >
            <FaSearch
              className={`absolute ml-[20px] ${
                darkmode ? "text-gray-200" : "text-gray-400"
              }`}
            />
            <input
              onChange={handleSearch}
              value={search}
              className={`shadow-lg rounded-md w-[200px] h-[43px] sm:w-[370px] pl-[43px] ${
                darkmode ? "bg-gray-700 text-white" : "bg-[#fffefe] text-black"
              }`}
              type="text"
              placeholder="Search for country.."
            />
          </div>

          <div
            className={`flex items-center justify-center w-[154px] sm:w-[154px] h-[43px] shadow-lg ${
              darkmode ? "bg-gray-700" : "bg-[#fffefe]"
            }`}
          >
            <select
              name="Region"
              className={` ${
                darkmode ? "text-red-700" : "text-black"
              } bg-transparent`}
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="filter">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </section>

        <section
          className={`flex-wrap justify-center flex gap-[56px] sm:justify-between w-full h-screen mt-[37px] ${
            darkmode ? "bg-gray-800" : "bg-[#fffefe]"
          }`}
        >
          {newData.map((data, index) => {
            return (
              <Link
                to="/Countries-Api/home"
                state={{ myObj: data }}
                key={index}
              >
                <div
                  className={`h-[310px] w-[300px] flex flex-col rounded-md shadow-lg ${
                    darkmode ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="h-[140px] w-full">
                    <img
                      className="object-cover h-full w-full"
                      src={data.flag}
                      alt=""
                    />
                  </div>
                  <div className="h-full px-5 w-full flex flex-col pt-2 ">
                    <h1
                      className={`${
                        darkmode ? "text-white" : "text-black"
                      } text-e mb-5`}
                    >
                      {" "}
                      {data.name}{" "}
                    </h1>
                    <h1>
                      Population:{" "}
                      <span
                        className={`${
                          darkmode ? "text-white" : "text-black"
                        } font-medium`}
                      >
                        {data.population}{" "}
                      </span>
                    </h1>
                    <h1>
                      Region:{" "}
                      <span
                        className={`${
                          darkmode ? "text-white" : "text-black"
                        } font-medium`}
                      >
                        {data.region}{" "}
                      </span>
                    </h1>
                    <h1>
                      Capital:{" "}
                      <span
                        className={`${
                          darkmode ? "text-white" : "text-black"
                        } font-medium`}
                      >
                        {data.capital || "not found"}{" "}
                      </span>
                    </h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Home;
