import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Manager from "./Component/Manager";
import Footer from "./Component/Footer";
import List from "./Component/List";
import Landing from "./Component/Landing";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { tableContext } from "./Context/Context";
import { ToastContainer, toast } from "react-toastify";



function App() {

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []); //when the website loads, it fetches the passwords from local storage and populates the passwordArray

  // DELETE FUNCTION
  const handleDelete = (id) => {
    let c = confirm("Do you want to delete?")
    if (c) {
      setPasswordArray(passwordArray.filter(item => item.id !== id))
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
    if (passwordArray.length == 0) {
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
    else {
      let c = confirm("Do you want to delete?")
      if (c) {
        setPasswordArray([])
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

  }

  //EDIT FUNCTION
  const handleEdit = (id) => {
    setdata(...passwordArray, (passwordArray.filter(i => i.id === id)))
    setPasswordArray(passwordArray.filter(i => i.id !== id))

  }
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

  // contextValue definition
  const contextValue = {
    passwordArray,
    setPasswordArray,
    handleDelete,
    handleEdit,
    deleteAll,
    copyText
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Landing /> <Footer /></>
    },
    {
      path: "/manager",
      element: <><Navbar /> <Manager /> <Footer /></>
    },
    {
      path: "/vault",
      element: <><Navbar /> <List /> <Footer /></>
    }

  ])

  return (
    <>
      <div className="w-full h-screen relative">
        <div className="relative w-full">
          {/* BLUR CIRCLE */}
          <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 -z-10 top-0 left-[88%] transform -translate-y-1/3"></div>
        </div>

        <tableContext.Provider value={contextValue}>
          <RouterProvider router={router} />
        </tableContext.Provider>

      </div>
      {/*MAIN DIV */}
      <div className="relative w-full">
        {/* BLUR CIRCLE */}
        <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 -z-10 bottom-[50%] transform -translate-y-1/2 -left-[5%]"></div>
      </div>

    </>
  );
}

export default App;
