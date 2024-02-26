import { useRef, useEffect } from "react";
import { useFetchResponse } from "../hooks/useFetchResponse";
import Welcome from "./Welcome";
// import { API_URL } from "../API";

const Chat = () => {
  const {
    prompt,
    responses,
    question,
    handleSubmit,
    handleInputChange,
    isClick,
  } = useFetchResponse();
  const responsesEndRef = useRef<HTMLDivElement>(null);

  console.log("responses", responses);

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
        <div
          className="flex flex-col gap-0 overflow-y-scroll mb-24 lg:md:mt-10 mt-28 lg:w-full md:w-full w-screen items-center "
          style={{
            overflowY: "scroll",
            // "-ms-overflow-style": "none",
            // "scrollbar-width": "none",
          }}
        >
          {[...responses].map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-5">
                <img src="/gpt.svg" alt="" className="w-6" />
                <h2>{item.prompt ? item.prompt : "Question"}</h2>
              </div>
              <div className=" lg:w-[40rem] md:w-[30rem] ">
                <p
                  key={index}
                  className="lg:w-[40rem] md:w-[30rem] text-justify lg:p-3 md:pl-5 p-10"
                >
                  {item.response}
                </p>
              </div>
            </div>
          ))}
          {question && (
            <div className="flex gap-5 w-[60%]">
              <img src="/gpt.svg" alt="" className="w-6" />
              <h2 className=" m-[10rem]]">{question}</h2>
            </div>
          )}
          <div ref={responsesEndRef} />
        </div>

        <div className="absolute lg:bottom-9 md:bottom-7 bottom-1 border-2  w-[90%] lg:md:w-[60%]  lg:md:h-16 h-14 rounded-xl border-slate-400 flex items-center">
          <input
            type="text"
            value={prompt}
            placeholder="Message ChatGPT..."
            className="w-[90%] h-12 outline-none rounded-xl pl-2"
            onChange={handleInputChange}
          />
          <button
            className="w-[10%]  absolute lg:right-5 right-5 flex justify-center bg-slate-300 p-2 rounded-xl"
            onClick={handleSubmit}
          >
            <img src="/toparrowht.svg" alt="" className="w-6" />
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
