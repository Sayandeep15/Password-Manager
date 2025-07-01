import {  useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Manager from "./Component/Manager";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="relative w-full">
          {/* BLUR CIRCLE */}
          <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 z-50 top-0 left-[90%]"></div>
        </div>
        <Navbar />
        <Manager />
      </div>
      {/*MAIN DIV */}
    </>
  );
}

export default App;
