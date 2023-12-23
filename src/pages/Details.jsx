import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Details = ({ darkmode }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state?.myObj;
  console.log("this is data sent ", data);
  const handleNavigate = () => {
    navigate("/Countries-Api/home");
  }
  if (!data) {
    return (
      <div className="h-screen flex justify-center ">
        <button
          onClick={handleNavigate}
          className="rounded-md mt-10  h-[40px] w-[300px] text-center shadow-lg bg-[#fffefe] flex items-center  px-2 gap-2"
        >
          <IoMdArrowRoundBack />
         please chose coutry in home page 
        </button>
      </div>
    );
  }
  return (
    <main className="h-screen w-screen px-[10px] sm:px-16 overflow-hidden ">
      <div className="flex  flex-col mt-5 sm:mt-10">
        <button
          onClick={handleNavigate}
          className="rounded-md h-[40px] w-[80px] text-center shadow-lg bg-[#fffefe] flex items-center  px-2 gap-2"
        >
          <IoMdArrowRoundBack />
          Back
        </button>

        <div className="flex flex-col sm:flex-row mt-[10px]">
          <div className=" w-[350px] h-[350px]">
            <img className="object-cover" src={data.flag} alt="" />
          </div>
          <div className=" -mt-[130px] sm:mt-0 ">
            <div className="h-full px-5 w-full flex flex-col pt-2 ">
              <h1
                className={`${
                  darkmode ? "text-white" : "text-black"
                } text-e mb-5`}
              >
                {" "}
                {data.name}{" "}
              </h1>
              <h1
                className={`${
                  darkmode ? "text-white" : "text-black"
                } text-e mb-5`}
              >
                native Name:{" "}
                <span
                  className={`${
                    darkmode ? "text-white" : "text-black"
                  } font-medium`}
                >
                  {data.nativeName}{" "}
                </span>
              </h1>
              <h1
                className={`${
                  darkmode ? "text-white" : "text-black"
                } text-e mb-5`}
              >
                Population:{" "}
                <span
                  className={`${
                    darkmode ? "text-white" : "text-black"
                  } font-medium`}
                >
                  {data.population}{" "}
                </span>
              </h1>
              <h1
                className={`${
                  darkmode ? "text-white" : "text-black"
                } text-e mb-5`}
              >
                Region:{" "}
                <span
                  className={`${
                    darkmode ? "text-white" : "text-black"
                  } font-medium`}
                >
                  {data.region}{" "}
                </span>
              </h1>
              <h1
                className={`${
                  darkmode ? "text-white" : "text-black"
                } text-e mb-5`}
              >
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
        </div>
      </div>
    </main>
  );
};

export default Details;
