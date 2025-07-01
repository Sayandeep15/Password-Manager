import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Manager = () => {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password));
    }
  }, []);  //when the website loads, it fetches the passwords from local storage and populates the passwordArray

  // ----FUNCTIONS----

  //SAVE PASSWORD TO THE LOCAL STORAGE
  const handleSave=() => {
    setpasswordArray([...passwordArray, data])
    localStorage.setItem("password",JSON.stringify([...passwordArray, data]))
    console.log([...passwordArray, data]);
    setdata({ site: "", username: "", password: "" }) 
  }
  
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const toggleEyeBtn = () => {
    setshow(!show);
  };

  return (
    <div className="inputs w-[90%]  mx-auto items-center flex flex-col justify-center my-8 gap-4">
      <h1 className="text-3xl text-white ">
        Manage Your
        <span className="text-violet-600  items-center"> PASSWORD </span> At One
        Place
      </h1>
      <input
        onChange={handleChange}
        name="site"
        value={data.site}
        placeholder="Enter your url"
        type="text"
        className="w-[60%] border-2 border-violet-600 rounded-full p-1 bg-white"
      />

      <div className="w-[60%] flex gap-2 justify-between">
        <input
          onChange={handleChange}
          name="username"
          value={data.username}
          placeholder="Enter username"
          type="text"
          className="w-124 border-2 border-violet-600 rounded-full p-1 bg-white"
        />
        <div className="password relative w-124">
          <input
            onChange={handleChange}
            name="password"
            value={data.password}
            placeholder="Enter password"
            type={show ? "text" : "password"}
            className="w-full  border-2 border-violet-600 rounded-full p-1 bg-white"
          />
          <button
            type="button"
            onClick={toggleEyeBtn}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-900"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      <Button value="SUBMIT" onClick={handleSave}/>
      {/* <button className="text-white border-2 border-violet-600 rounded-full p-2 font-semibold cursor-pointer "> Add Password</button> */}
    </div>
  );
};

export default Manager;
