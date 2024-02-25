import { useState } from "react";
import { useSidebarOpen } from "../hooks/useSidebarOpen";

export default function SidebarIcon() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const  {handleSideBarOpen ,isSideBarOpen}  = useSidebarOpen();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="lg:flex lg:h-6 lg:w-6 lg:flex-col hidden items-center justify-center"
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
    </>
  );
}
