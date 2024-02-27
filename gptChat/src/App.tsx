// import { useState } from 'react'
import "./App.css";
import Drawer from "./components/Drawer";
// import Chat from "./pages/Chat";

import Sidebar from "./components/Sidebar";
import useMobileMode from "./hooks/useMobileMode";
import { useSidebarOpen } from "./hooks/useSidebarOpen";

import Homepage from "./pages/Homepage";

function App() {
  const { isSideBarOpen, isDrawerOpen } = useSidebarOpen();
  const { mediaQuery } = useMobileMode();

  
  return (
    <>
      <div className="w-screen h-screen flex relative items-center">
        {/* //overlay effect */}

        <div
          className={`${
            isSideBarOpen && mediaQuery >= 428
              ? "lg:w-[20%] md:w-[30%] overflow-hidden"
              : "w-0 overflow-hidden"
          }  shadow-lg shadow-blue-500/50`}
        >
          <Sidebar />
        </div>

        {/* Drawer */}

        {mediaQuery <= 428 && isDrawerOpen && <Drawer />}

        <div
          className={`${
            isSideBarOpen && mediaQuery >= 428
              ? "lg:w-[80vw] md:w-[70%] overflow-hidden "
              : "lg:w-[100%] lg:overflow-hidden"
          } `}
        >
          <Homepage />
        </div>
      </div>
    </>
  );
}

export default App;
