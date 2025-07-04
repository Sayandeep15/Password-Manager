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
  const [touched, setTouched] = useState({ site: false, username: false, password: false });

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password));
    }
  }, []); //when the website loads, it fetches the passwords from local storage and populates the passwordArray

  // ----FUNCTIONS----
  // Validation logic
  const isSiteInvalid = data.site.length < 5;
  const isUsernameInvalid = data.username.length < 3;
  const isPasswordInvalid = data.password.length < 8;

  const isDisabled = isSiteInvalid || isUsernameInvalid || isPasswordInvalid;
  const cursor = touched.site || touched.username || touched.password

  //SAVE PASSWORD TO THE LOCAL STORAGE
  const handleSave = () => {
    setpasswordArray([...passwordArray, { ...data, id: uuidv4() }]);
    localStorage.setItem(
      "password",
      JSON.stringify([...passwordArray, { ...data, id: uuidv4() }]));
    setdata({ site: "", username: "", password: "" });
    setTouched({ site: false, username: false, password: false });
    toast("Saved Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // DELETE FUNCTION
  const handleDelete = (id) => {
    let c = confirm("Do you want to delete?")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
      toast("Deleted Successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  //DELETE ALL
  const deleteAll = () => {
    if(passwordArray.length==0){
      toast.warning("Nothing to delete!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
    setpasswordArray([])
    localStorage.clear()
    toast.success("It is all clear!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  //EDIT FUNCTION
  const handleEdit = (id) => {
    setdata(...passwordArray, (passwordArray.filter(i => i.id === id)))
    setpasswordArray(passwordArray.filter(i => i.id !== id))

  }

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
      <div className="inputs w-[90%]   mx-auto items-center flex flex-col justify-center my-6 gap-4">
        <h1 className="text-3xl text-white ">
          Manage Your
          <span className="text-violet-600 font-medium items-center"> PASSWORD </span> At
          One Place
        </h1>
        <div className="urlBox w-[60%]">

          <input onBlur={() => setTouched({ ...touched, site: true })}
            required={true}
            onChange={handleChange}
            name="site"
            value={data.site}
            placeholder="Enter url"
            type="text"
            className="w-full border-1 border-violet-600 rounded-full py-1 px-2 bg-white"
          />
          {touched.site && isSiteInvalid && (
            <p className="text-red-500 text-xs pt-1">URL must be at least 5 characters.</p>
          )}
        </div>

        <div className="w-[60%] flex gap-2 justify-between">
          {/* username */}
          <div className="usernameBox w-114">
            <input onBlur={() => setTouched({ ...touched, username: true })}
              required={true}
              onChange={handleChange}
              name="username"
              value={data.username}
              placeholder="Enter username"
              type="text"
              className="w-full border-1 border-violet-600 rounded-full py-1 px-2 bg-white"
            />

            {touched.username && isUsernameInvalid && (
              <p className="text-red-500 text-xs pt-1">Username must be at least 3 characters.</p>
            )}
          </div>
          {/* password */}
          <div className="passwordBox w-114">
            <div className="password relative ">
              <input onBlur={() => setTouched({ ...touched, password: true })}
                required={true}
                onChange={handleChange}
                name="password"
                value={data.password}
                placeholder="Enter password"
                type={show ? "text" : "password"}
                className="w-full  border-1 border-violet-600 rounded-full py-1 px-2 bg-white "
              />
              <button
                type="button"
                onClick={toggleEyeBtn}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-900 cursor-pointer"
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </button>

            </div>
            {touched.password && isPasswordInvalid && (
              <p className="text-red-500 text-xs pt-1 ">Password must be at least 8 characters.</p>
            )}
          </div>
        </div>
        <Button value="SAVE" onClick={handleSave} disabled={isDisabled} cursor={cursor} />


        {/* Input div ends--- */}

        {/* PASSWORD TABLE */}
        <div className="tableContainer w-[80%] my-2 mx-auto items-center text-white ">
          <div className="heading w-full flex justify-between items-center px-1">
            <h1 className="text-xl mb-2">
              Your{" "}
              <span className="text-violet-600 font-medium  items-center">Passwords</span>{" "}
            </h1>

            {/* DELETE ALL BUTTON */}
            <button onClick={deleteAll} className="flex gap-1 items-center font-semibold text-violet-500 hover:text-red-500 hover:scale-x-105 transition-all ease-in cursor-pointer">Delete All <MdDeleteOutline /> </button>
          </div>

          {passwordArray.length === 0 && (
            <div className="text-gray-400 text-sm mt-2">
              No password to show
            </div>
          )}
          {/* TABLE */}
          {passwordArray.length >= 1 && (
            <div className="tableDiv max-h-80 bg-amber-100 overflow-y-auto rounded-md ">
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
                  {passwordArray.map((items, id) => (
                    <tr key={id} className="bg-[#0a0a14] text-sm ">
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
                          className="hover:text-blue-400 transition-all ease-in "
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
                            className="text-violet-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all ease"
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
                            className="text-violet-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all ease"
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
                          <FiEdit3 className="text-violet-500 text-[17px] hover:scale-110 transition-all ease cursor-pointer" onClick={() => { handleEdit(items.id) }} /> <MdDeleteOutline className="text-violet-500 text-[17px] hover:scale-110 transition-all ease cursor-pointer" onClick={() => { handleDelete(items.id) }} />
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
