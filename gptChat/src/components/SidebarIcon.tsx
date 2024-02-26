import { useState } from "react";
import { useSidebarOpen } from "../hooks/useSidebarOpen";

export default function SidebarIcon() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { handleSideBarOpen, isSideBarOpen } = useSidebarOpen();

  console.log("hover", isHovered);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="lg:flex md:flex lg:h-6 lg:w-6 md:h-6 md:w-6 lg:flex-col md:flex-col hidden items-center justify-center relative z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSideBarOpen}
      >
        <div
          className={`h-3 w-1 ${
            isHovered ? " bg-slate-500" : " bg-black "
          } rounded-full ${
            isHovered && isSideBarOpen
              ? "transform translate-y-[0.15rem] rotate-[15deg]"
              : "transform translate-y-[-0.15rem] rotate-[-15deg] m-[-4px]"
          } `}
        ></div>
        <div
          className={`h-3 w-1${
            isHovered ? " bg-slate-500" : " bg-black "
          } rounded-full ${
            isHovered && isSideBarOpen
              ? "transform translate-y-[-0.15rem] rotate-[-15deg]"
              : "transform translate-y-[0.15rem] rotate-[15deg] m-[-4px]"
          }  `}
        ></div>
      </div>

      {/* tooltip */}

      {isHovered && (
        <div className="bg-black py-1 px-2 w-[8rem] text-center rounded-md text-amber-50 absolute top-[40%] left-10 ">
          {isHovered && isSideBarOpen ? (
            <p>Close Sidebar</p>
          ) : (
            <p>Open Sidebar</p>
          )}
        </div>
      )}
    </>
  );
}
