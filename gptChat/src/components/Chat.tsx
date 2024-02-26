import React, { useState, useRef, useEffect } from "react";
import { API_URL } from "../API";

const Chat = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [responses, setResponses] = useState<
    { prompt: string; response: string }[]
  >([]);
  const [question, setQuestion] = useState<string>("");
  const responsesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  //scroll handler
  const scrollToBottom = () => {
    if (responsesEndRef.current) {
      responsesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [responses, question]);

  // user query handler
  const handleSubmit = async () => {
    try {
      setQuestion(prompt);
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      if (data) {
        setQuestion("");
      }
      setResponses([...responses, { prompt, response: data }]);
      setPrompt("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //

  return (
    <>
      <div className="lg:h-[85vh] md:h-screen h-screen lg:mt-0 mt-24 lg:w-[75rem] md:w-[50rem] w-full relative flex flex-col flex-wrap justify-start items-center ">
        <div
          className="flex flex-col gap-0 overflow-y-scroll mb-24 lg:w-full md:w-full w-screen border-2 items-center "
          style={{
            overflowY: "scroll",
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          {[...responses].map((item, index) => (
            <div key={index} className="flex flex-col">
              <h2>{item.prompt}</h2>
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
            <h2 className="border-2 border-black w-[60%] m-[10rem]]">
              {question}
            </h2>
          )}
          <div ref={responsesEndRef} />
        </div>

        <div className="absolute lg:bottom-8 md:bottom-7 bottom-1 border-2 border-[2px solid] w-[90%] lg:md:w-[60%]  lg:md:h-16 h-14 rounded-xl border-slate-400 flex items-center">
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
