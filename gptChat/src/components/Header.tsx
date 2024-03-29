import { useFetchResponse } from "../hooks/useFetchResponse";
import useMobileMode from "../hooks/useMobileMode";
import { useSidebarOpen } from "../hooks/useSidebarOpen";
import useMatchMedia from "../hooks/useMatchMedia";
export default function Header() {
  //hooks
  const { mediaQuery } = useMobileMode();
  const { isSideBarOpen, handleDrawerOpen } = useSidebarOpen();
  const { handleClearChat } = useFetchResponse();
  const { isDarkMode } = useMatchMedia();

  return (
    <div className="flex lg:md:w-screen w-screen h-16 lg:md:h-10 border-b-2 lg:md:border-none lg:md:relative fixed items-center lg:mx-5 lg:mt-5 z-20">
      {!isSideBarOpen && (
        <button
          className=" flex w-fit absolute right-0 lg:left-0 md:left-2 bg-none button border-none lg:outline md:outline lg:outline-[0.1em] lg:outline-border dark:lg:outline-borderDark md:outline-[0.1em]lg:outline-slate-200 md:outline-slate-200 lg:outline-offset-2 md:outline-offset-2 h-10 items-center ml-5 lg:mb-3 "
          onClick={handleClearChat}
        >
          <img
            src={isDarkMode ? "/edit2.svg" : "/edit.svg"}
            alt=""
            className="w-6 lg:w-5 p-0"
          />
        </button>
      )}

      <button className="absolute right-[32%] lg:left-18 md:left-24 p-0 button border-none lg:hover:bg-slate-50 lg:mb-3">
        <div className="flex flex-row w-fit items-center">
          <span className="font-semibold text-[18px] mr-1 text-black dark:text-white">
            ChatGPT
          </span>
          <span className="font-semibold text-[18px] text-secondarytxt dark:text-tertiarytxt mr-1">
            3.5
          </span>
          <img
            src={isDarkMode ? "/downarrowDark.svg" : "/downarrow.png"}
            alt=""
            className="w-3 dark:w-4 h-3 align-bottom"
          />
        </div>
      </button>

      {mediaQuery <= 428 && (
        <button
          className="lg:none button border-none p-2 ml-2"
          onClick={handleDrawerOpen}
        >
          <img
            src={isDarkMode ? "/burgerD.svg" : "/burger.svg"}
            alt=""
            className="w-6"
          />
        </button>
      )}
    </div>
  );
}
