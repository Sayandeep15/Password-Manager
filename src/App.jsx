import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div class="relative w-full">
          <div class="absolute inset-0 rounded-full bg-blue-700 opacity-50 blur-3xl w-48 h-48 z-50 top-0 left-[90%]"></div>

        </div>

      </div>
    </>
  );
}

export default App;
