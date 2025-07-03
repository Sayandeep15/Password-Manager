import {  useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Manager from "./Component/Manager";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="relative w-full">
          {/* BLUR CIRCLE */}
          <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 -z-10 top-0 left-[88%] transform -translate-y-1/3"></div>
        </div>
        <Navbar />
        <Manager />
        <Footer/>
      </div>
      {/*MAIN DIV */}
       <div className="relative w-full">
          {/* BLUR CIRCLE */}
          <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 -z-50 bottom-[50%] transform -translate-y-1/2 -left-[5%]"></div>
        </div>
        
    </>
  );
}

export default App;
