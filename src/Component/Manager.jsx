import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password));
    }
  }, []); //when the website loads, it fetches the passwords from local storage and populates the passwordArray

  // ----FUNCTIONS----
  // Disable button if any field length is less than 3
  const isDisabled =
    data.site.length < 5 ||
    data.username.length < 3 ||
    data.password.length < 8;

  //SAVE PASSWORD TO THE LOCAL STORAGE
  const handleSave = () => {
    setpasswordArray([...passwordArray, { ...data, id: uuidv4() }]);
    localStorage.setItem(
      "password",
      JSON.stringify([...passwordArray, { ...data, id: uuidv4() }])
    );
    console.log([...passwordArray, data]);
    setdata({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const toggleEyeBtn = () => {
    setshow(!show);
  };

  const copyText = (text) => {
    toast("Coppied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="inputs w-[90%]  mx-auto items-center flex flex-col justify-center my-8 gap-4">
        <h1 className="text-3xl text-white ">
          Manage Your
          <span className="text-violet-600  items-center"> PASSWORD </span> At
          One Place
        </h1>
        <input
          required={true}
          onChange={handleChange}
          name="site"
          value={data.site}
          placeholder="Enter url"
          type="text"
          className="w-[60%] border-1 border-violet-600 rounded-full p-1 bg-white"
        />

        <div className="w-[60%] flex gap-2 justify-between">
          <input
            required={true}
            onChange={handleChange}
            name="username"
            value={data.username}
            placeholder="Enter username"
            type="text"
            className="w-114 border-1 border-violet-600 rounded-full p-1 bg-white"
          />
          <div className="password relative w-114">
            <input
              required={true}
              onChange={handleChange}
              name="password"
              value={data.password}
              placeholder="Enter password"
              type={show ? "text" : "password"}
              className="w-full  border-1 border-violet-600 rounded-full p-1 bg-white"
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
        <Button value="SAVE" onClick={handleSave} disabled={isDisabled} />
        {/* <button className="text-white border-1 border-violet-600 rounded-full p-1 font-semibold cursor-pointer "> Add Password</button> */}

        {/* Input div ends--- */}

        {/* PASSWORD TABLE */}
        <div className="tableContainer w-[80%] mt-4 mx-auto items-center text-white ">
          <h1 className="text-xl mb-2">
            Your{" "}
            <span className="text-violet-600  items-center">Passwords</span>{" "}
          </h1>

          {passwordArray.length === 0 && (
            <div className="text-gray-400 text-sm mt-2">
              No password to show
            </div>
          )}
          {/* TABLE */}
          {passwordArray.length >= 1 && (
            <div className="max-h-96 overflow-y-auto rounded-md ">
              <table className="table-fixed w-full text-center  ">
                <thead className="bg-violet-700 sticky top-0 z-10 ">
                  <tr>
                    <th className="w-[1/4] py-1">Website</th>
                    <th className="w-[1/4] py-1">Username</th>
                    <th className="w-[1/4] py-1">Password</th>
                    <th className="w-[1/4] py-1">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((items, index) => (
                    <tr key={index} className="bg-[#0a0a14] text-sm">
                      <td
                        className="overflow-hidden "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}
                      >
                        <a
                          href={items.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {items.site}
                        </a>
                      </td>
                      <td
                        className="p-1.5 "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}
                      >
                        <div className="flex items-center flex-row gap-1 justify-between overflow-hidden relative">
                          {items.username}
                          <MdContentCopy
                            onClick={() => {
                              copyText(items.username);
                            }}
                            className="text-violet-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          />
                        </div>
                      </td>
                      <td
                        className="p-1.5 "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}
                      >
                        {" "}
                        <div className="flex items-center flex-row gap-1 justify-between overflow-hidden relative">
                          {items.password}
                          <MdContentCopy
                            onClick={() => {
                              copyText(items.password);
                            }}
                            className="text-violet-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          />
                        </div>
                      </td>
                      <td
                        className="overflow-hidden "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}
                      >
                        <div className="action flex justify-center gap-4 text-center items-center">
                          <FiEdit3 className="text-violet-500 text-[17px] hover:scale-110 transition-all ease"/> <MdDeleteOutline className="text-violet-500 text-[17px] hover:scale-110 transition-all ease"/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
