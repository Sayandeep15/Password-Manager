import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div class="relative w-fit">
          <div class="absolute inset-0 rounded-full bg-blue-700 opacity-50 blur-3xl w-48 h-48"></div>

          {/* <div class="w-40 h-40 bg-blue-500 rounded-full shadow-2xl"></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
