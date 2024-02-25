import { useSidebarOpen } from "../hooks/useSidebarOpen";

export default function Header() {
  //hooks

  const { isSideBarOpen , handleSideBarOpen} = useSidebarOpen();
  return (
    <div className="flex w-screen h-16 border-b-2 relative items-center">
      <button className="w-fit absolute right-0 lg:left-0 bg-none">
        <img src="/edit.svg" alt="" className="w-6 lg:w-5" />
      </button>

      <button className="absolute right-[32%] lg:left-16">
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

      <button className="lg:none" onClick={handleSideBarOpen}>
        <img src="/burger.svg" alt="" className="w-6" />
      </button>
    </div>
  );
}
