// import { useState } from 'react'
import "./App.css";
// import Chat from "./pages/Chat";

import Sidebar from "./components/Sidebar";
import useMobileMode from "./hooks/useMobileMode";
import { useSidebarOpen } from "./hooks/useSidebarOpen";

import Homepage from "./pages/Homepage";

function App() {
  const { isSideBarOpen, handleSideBarOpen } = useSidebarOpen();
  const { mediaQuery } = useMobileMode();

  return (
    <>
      <div className="w-screen h-screen flex relative">
        {/* //overlay effect */}
        {isSideBarOpen && mediaQuery <= 428 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        )}

        <div
          className={`${
            isSideBarOpen ? "lg:w-[20%] md:w-[30%]" : "lg:w-[0%] md:w-[0%]"
          }  ${
            mediaQuery <= 428 && isSideBarOpen
              ? "z-50 absolute transition-all w-[80%] ease-linear duration-200 "
              : "w-0"
          } shadow-lg shadow-blue-500/50`}
        >
          <Sidebar />

          <button
            className="absolute top-2 right-[-4.5rem]   bg-transparent"
            onClick={handleSideBarOpen}
          >
            <img src="/cross.svg" alt="" className="w-9 object-cover" />
          </button>
        </div>

        <div
          className={`${
            isSideBarOpen ? "lg:w-[80%] md:w-[70%]" : "lg:w-[100%]"
          } z-10`}
        >
          <Homepage />
        </div>
      </div>
    </>
  );
}

export default App;
