import useMobileMode from "../hooks/useMobileMode";
import { useSidebarOpen } from "../hooks/useSidebarOpen";

export default function Header() {
  //hooks
  const { mediaQuery } = useMobileMode();
  const { isSideBarOpen, handleSideBarOpen } = useSidebarOpen();
  return (
    <div className="flex w-screen h-16 border-b-2 md:lg:relative fixed items-center lg:mx-5">
      {!isSideBarOpen && (
        <button className=" flex w-fit absolute right-0 lg:left-0 md:left-2 bg-none button border-none lg:outline md:outline lg:outline-2 md:outline-2 lg:outline-slate-200 md:outline-slate-200 lg:outline-offset-2 md:outline-offset-2 h-10 items-center ">
          <img src="/edit.svg" alt="" className="w-6 lg:w-5" />
        </button>
      )}

      <button className="absolute right-[32%] lg:left-14 md:left-24 p-0 button border-none lg:hover:bg-slate-50">
        <div className="flex flex-row w-fit items-center">
          <span className="font-semibold text-[18px] mr-1 text-black">
            ChatGPT
          </span>
          <span className="font-semibold text-[18px] text-secondarytxt mr-1">
            3.5
          </span>
          <img src="/downarrow.png" alt="" className="w-3 h-3 align-bottom" />
        </div>
      </button>

      {mediaQuery <= 428 && (
        <button
          className="lg:none button border-none"
          onClick={handleSideBarOpen}
        >
          <img src="/burger.svg" alt="" className="w-6" />
        </button>
      )}
    </div>
  );
}
