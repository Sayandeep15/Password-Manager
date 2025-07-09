import React from "react";
import { Link } from "react-router-dom";
import lockImage from '../assets/password.svg';


const Landing = () => {
  return (
    
    <div className="w-full min-h-[80%]  text-white flex items-center justify-center px-6 py-16">
      <div class="custom-shape-divider-bottom-1752050492">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>

      <div className="max-w-7xl w-full flex justify-around gap-12 items-center ">
        {/* LEFT: Text content */}
        <div className="flex flex-col gap-6 w-1/2 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Your <span className="text-violet-600">Passwords</span>,<br /> Safe & Sound
          </h1>

          <p className="text-lg text-gray-300">
            Say goodbye to sticky notes and forgotten logins. A simple, secure, and local password manager built for everyday use. All your data stays on your device.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/manager">
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-full transition-all">
                Get Started
              </button>
            </Link>
            <Link to="/vault">
              <button className="bg-white text-violet-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-all">
                View My Vault
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <h2 className="text-xl font-semibold mb-1">🔒 Local & Secure</h2>
              <p className="text-gray-400 text-sm">Data stays in your browser — never stored online.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">⚡ Fast & Lightweight</h2>
              <p className="text-gray-400 text-sm">Instant access with zero bloat or delay.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">📋 Easy Copy & Edit</h2>
              <p className="text-gray-400 text-sm">Manage credentials in just a few clicks.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative items-center  w-fit m-4">
          <img
            src={lockImage}
            loading="eager"  // Force it to load immediately
            width="400"
            height="400"
            onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
            alt="Password Manager Illustration"
            className=" rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-3xl w-84 h-24 -z-20 top-[50%] transform -translate-1/2 left-[50%]"></div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Landing;
