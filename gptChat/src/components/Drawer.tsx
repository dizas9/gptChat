import { useSidebarOpen } from "../hooks/useSidebarOpen";
import useMobileMode from "../hooks/useMobileMode";
import { useFetchResponse } from "../hooks/useFetchResponse";
import { Drawer as MaterialDrawer } from "@material-tailwind/react";

export default function Drawer() {
  const { isDrawerOpen, handleDrawerOpen } = useSidebarOpen();
  const { mediaQuery } = useMobileMode();
  const { handleClearChat } = useFetchResponse();


  //handleDrawerClick
  const DrawerClickHandler=()=>{
    handleDrawerOpen();
    handleClearChat();
  }
  return (
    <>
      {isDrawerOpen && mediaQuery <= 428 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {isDrawerOpen && (
        <div className="z-40 bg-white h-full relative">
          <MaterialDrawer
            open={isDrawerOpen}
            onClose={handleDrawerOpen}
            className="p-4 dark:bg-mainDark"
            placeholder={""}
          >
            <button
              className="absolute top-9 right-[-4rem] bg-transparent"
              onClick={handleDrawerOpen}
            >
              <img src="/cross.svg" alt="cross" className="w-8 " />
            </button>

            <button
              className="flex w-full justify-start gap-2 items-center pt-5 relative button border-none"
              onClick={DrawerClickHandler}
            >
              <img
                src="/gpt.svg"
                alt=""
                className="w-6 outline outline-2 outline-slate-500 outline-offset-1 rounded-full dark:bg-white"
              />

              <p className="text-sm font-bold text-black dark:text-white">
                New Chat
              </p>

              <img
                src="/edit.svg"
                alt=""
                className="w-5 absolute right-5 dark:bg-white rounded-md"
              />
            </button>

            {/* upgrade plane Box */}
            <div className="flex absolute bottom-24 items-center gap-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-token-border-light">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-sm shrink-0"
                >
                  <path
                    d="M8.78158 8.60266L9.8188 5.49098C10.037 4.83634 10.963 4.83634 11.1812 5.49098L12.2184 8.60266C12.7187 10.1035 13.8965 11.2813 15.3973 11.7816L18.509 12.8188C19.1637 13.037 19.1637 13.963 18.509 14.1812L15.3973 15.2184C13.8965 15.7187 12.7187 16.8965 12.2184 18.3973L11.1812 21.509C10.963 22.1637 10.037 22.1637 9.8188 21.509L8.78158 18.3973C8.28128 16.8965 7.10354 15.7187 5.60266 15.2184L2.49098 14.1812C1.83634 13.963 1.83634 13.037 2.49098 12.8188L5.60266 11.7816C7.10354 11.2813 8.28128 10.1035 8.78158 8.60266Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.1913 3.69537L17.6794 2.23105C17.7821 1.92298 18.2179 1.92298 18.3206 2.23105L18.8087 3.69537C19.0441 4.40167 19.5983 4.9559 20.3046 5.19133L21.769 5.67944C22.077 5.78213 22.077 6.21787 21.769 6.32056L20.3046 6.80867C19.5983 7.0441 19.0441 7.59833 18.8087 8.30463L18.3206 9.76895C18.2179 10.077 17.7821 10.077 17.6794 9.76895L17.1913 8.30463C16.9559 7.59833 16.4017 7.0441 15.6954 6.80867L14.231 6.32056C13.923 6.21787 13.923 5.78213 14.231 5.67944L15.6954 5.19133C16.4017 4.9559 16.9559 4.40167 17.1913 3.69537Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>

              <div className="flex flex-col ">
                <p className="text-black dark:text-white text-sm font-semibold">
                  Upgrade plan
                </p>
                <p className="text-tertiarytxt text-sm font-normal">
                  Get GPT-4, DALL·E, and more
                </p>
              </div>
            </div>

            {/* User Account Box */}
            <div className="flex absolute bottom-10 items-center gap-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-token-border-light">
                <img
                  src="/profile.svg"
                  alt=""
                  className="w-6 dark:bg-white rounded-full"
                />
              </span>

              <div className="flex flex-col ">
                <p className="text-black  dark:text-white text-sm font-semibold">
                  User Name
                </p>
              </div>
            </div>
          </MaterialDrawer>
        </div>
      )}
    </>
  );
}
