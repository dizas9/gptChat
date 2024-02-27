import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL,PROD_URL } from "../API";

interface ResponseItem {
  prompt: string;
  response: string;
}

interface FetchResponseContextProps {
  prompt: string;
  promptTitle: string;
  responses: ResponseItem[];
  question: string;
  isClick: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (title: string) => void;
  handleSubmit: () => void;

  handleClearChat: () => void;
}

//default

const defaultContextValue = {
  prompt: "",
  promptTitle: "",
  responses: [],
  question: "Welcome To ChatGPT",
  isClick: false,
  handleInputChange: () => {},
  handleClick: () => {},
  handleSubmit: () => {},
  handleClearChat: () => {},
};

export const FetchResponseContext =
  createContext<FetchResponseContextProps>(defaultContextValue);

//hook
export const useFetchResponse = () => useContext(FetchResponseContext);

//provider function
export function FetchResponseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //state

  const [prompt, setPrompt] = useState<string>("");
  const [promptTitle, setPromptTitle] = useState<string>("");
  const [responses, setResponses] = useState<ResponseItem[]>([]);
  const [question, setQuestion] = useState<string>("Welcome To ChatGPT");
  const [isClick, setClick] = useState<boolean>(false);

  //handle Input Change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  

  const handleClick = (title: string) => {
    setPromptTitle(title);

    if (promptTitle.length !== 0 && prompt === "") {
      handleSubmit();
      setClick(true);
    }
  };

  //Clear ChatHistory
  const handleClearChat = () => {
    setResponses([]);
  };

  useEffect(() => {
    if (responses.length === 0) {
      setClick(false);
    }
  }, [responses]);

  //handle Async user Submit
  const handleSubmit = async () => {
    const promptToSend = prompt ? prompt : promptTitle;
    if(promptToSend){
      setQuestion(promptToSend);
    }
    setClick(true);

    try {
      const response = await fetch(`${PROD_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptToSend }),
      });

      console.log("inside submit", promptToSend);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      if (data) {
        setQuestion("");
      }
      setResponses([...responses, { prompt: promptToSend, response: data }]);
      setPrompt("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <FetchResponseContext.Provider
      value={{
        prompt,
        promptTitle,
        responses,
        question,
        handleSubmit,
        handleInputChange,
        isClick,
        handleClick,
        handleClearChat,
      }}
    >
      {children}
    </FetchResponseContext.Provider>
  );
}
