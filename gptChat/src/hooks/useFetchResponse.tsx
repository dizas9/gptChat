import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../API";

interface ResponseItem {
  prompt: string;
  response: string;
}

interface FetchResponseContextProps {
  prompt: string;
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
  responses: [],
  question: "",
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
  const [responses, setResponses] = useState<ResponseItem[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [isClick, setClick] = useState<boolean>(false);

  //handle Input Change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  //onClick Value handler

  //    const handleClick = (
  //      event: React.MouseEvent<HTMLDivElement, MouseEvent>
  //    ) => {
  //      const clickedElement = event.currentTarget;
  //      const content = clickedElement.textContent;
  //      if (content) {
  //        setPrompt(content);
  //      }
  //    };

  const handleClick = (title: string) => {
    setPrompt(title);
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
    setClick(true);
    setQuestion(prompt);
    try {
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
  return (
    <FetchResponseContext.Provider
      value={{
        prompt,
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
