import { useRef, useEffect } from "react";
import { useFetchResponse } from "../hooks/useFetchResponse";
import Welcome from "./Welcome";
import Loading from "./Loading";
import TypewriterEffect from "./TypewriterEffect";
import useMatchMedia from "../hooks/useMatchMedia";

const Chat = () => {
  const {
    prompt,
    responses,
    question,
    handleSubmit,
    handleInputChange,
    isClick,
  } = useFetchResponse();

  const { isDarkMode } = useMatchMedia();

  const responsesEndRef = useRef<HTMLDivElement>(null);



  //scroll handler
  const scrollToBottom = () => {
    if (responsesEndRef.current) {
      responsesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [responses, question]);

  return (
    <>
      <div className="lg:h-[85vh] md:h-screen h-screen lg:mt-0 mt-24 lg:w-[75rem] md:w-[50rem] w-screen relative flex flex-col flex-wrap justify-start items-center ">
        {!isClick && responses.length === 0 && <Welcome />}

        {responses.length !== 0 && (
          <div
            className="flex flex-col gap-0 overflow-y-scroll mb-24 lg:mb-32 lg:md:mt-10 mt-28 lg:w-full md:w-full w-screen items-center "
            style={{
              overflowY: "scroll",
            }}
          >
            {/* Response Section */}

            {[...responses].map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex gap-5">
                  <img
                    src="/userwht.svg"
                    alt=""
                    className="w-6 dark:bg-white h-fit rounded-full"
                  />
                  <div className="">
                    <p className="font-semibold text-black dark:text-white">
                      User
                    </p>

                    <h2>{item.prompt}</h2>
                  </div>
                </div>

                <div className="flex lg:w-[40rem] md:w-[30rem] items-start">
                  <img
                    src="/gpt.svg"
                    alt=""
                    className="w-6 dark:bg-white h-fit rounded-full"
                  />
                  <p
                    key={index}
                    className=" lg:w-[40rem] md:w-[30rem] text-justify lg:p-3 md:pl-5 p-10 flex"
                  >
                    <TypewriterEffect text={item.response} />
                  </p>
                </div>
              </div>
            ))}
            {question && (
              <div className="flex gap-5 w-[60%]">
                <img
                  src="/gpt.svg"
                  alt=""
                  className="w-6 dark:bg-white h-fit rounded-full"
                />
                <h2 className=" m-[10rem]] relative">
                  {question}
                  <span className="absolute lg:md:bottom-[-22px] bottom-[-20px] left-0">
                    <Loading />
                  </span>
                </h2>
              </div>
            )}
            <div ref={responsesEndRef} />
          </div>
        )}
        <div className="absolute lg:bottom-9 md:bottom-7 bottom-1 border-[0.1em]  w-[90%] lg:md:w-[60%]  lg:md:h-16 h-14 rounded-xl border-slate-400 flex items-center">
          <input
            type="text"
            value={prompt}
            placeholder="Message ChatGPT..."
            className="w-[90%] h-[100%] outline-none rounded-xl pl-2 bg-none dark:bg-inherit"
            onChange={handleInputChange}
          />
          <button
            className="w-[10%]  absolute lg:right-5 right-5 flex justify-center bg-slate-300 p-2 rounded-xl dark:bg-borderDark"
            onClick={handleSubmit}
          >
            <img
              src={isDarkMode ? "/toparrow.svg" : "toparrowht.svg"}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        <p className="absolute lg:bottom-1 md:bottom-1 bottom-[-2.3rem] lg:ml-16 text-center font-thin text-sm">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </>
  );
};

export default Chat;
