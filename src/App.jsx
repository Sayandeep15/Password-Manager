import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen">
        <div class="relative w-full">
          {/* BLUR CIRCLE */}
          <div class="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 z-50 top-0 left-[90%]"></div>
          <div class="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-64 h-64 z-50 top-0 left-[90%]"></div>
        </div>
        <Navbar />
        {/* INPUT AREA */}
        <div className="w-[90%]  mx-auto items-center flex flex-col justify-center my-8 gap-4">
          <h1 className="text-3xl text-white ">Manage Your<span className="text-violet-600  items-center">{" "}PASSWORD{" "}</span>{" "}At One Place</h1>
          <input placeholder="Enter your url" type="text" className="w-[60%] border-2 border-violet-600 rounded-full p-1 bg-white" />

          <div className="w-[60%] flex gap-2 justify-between">
            <input placeholder="website" type="text" className="w-96 border-2 border-violet-600 rounded-full p-1 bg-white" />
            <input placeholder="password" type="password" className=" w-96 border-2 border-violet-600 rounded-full p-1 bg-white" />
          </div>
        </div>

       </div> {/*MAIN DIV */}
    </>
  );
}

export default App;
