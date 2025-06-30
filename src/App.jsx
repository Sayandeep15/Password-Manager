import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Button from "./Component/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const [show, setshow] = useState(false);

  const toggleEyeBtn = () => {
    setshow(!show);
    
    
  };

  return (
    <>
      <div className="w-full h-screen">
        <div class="relative w-full">
          {/* BLUR CIRCLE */}
          <div class="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 z-50 top-0 left-[90%]"></div>
        </div>
        <Navbar />
        {/* INPUT AREA */}
        <div className="inputs w-[90%]  mx-auto items-center flex flex-col justify-center my-8 gap-4">
          <h1 className="text-3xl text-white ">
            Manage Your
            <span className="text-violet-600  items-center"> PASSWORD </span> At
            One Place
          </h1>
          <input
            placeholder="Enter your url"
            type="text"
            className="w-[60%] border-2 border-violet-600 rounded-full p-1 bg-white"
          />

          <div className="w-[60%] flex gap-2 justify-between">
            <input
              placeholder="website"
              type="text"
              className="w-124 border-2 border-violet-600 rounded-full p-1 bg-white"
            />
            <div className="password relative w-124">
              <input
                placeholder="password"
                type={show ? "text" : "password"}
                className="w-full  border-2 border-violet-600 rounded-full p-1 bg-white"
              />
              <button
                type="button"
                onClick={toggleEyeBtn}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-900"
              >
                {show? <FaEye />:<FaEyeSlash />}
              </button>
            </div>
          </div>
          <Button value="SUBMIT" />
          {/* <button className="text-white border-2 border-violet-600 rounded-full p-2 font-semibold cursor-pointer "> Add Password</button> */}
        </div>
      </div>{" "}
      {/*MAIN DIV */}
    </>
  );
}

export default App;
