import React, { useState } from "react";
import { API_URL } from "../API";

const Chat = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [responses, setResponses] = useState<
    { prompt: string; response: string }[]
  >([]);
  const [question, setQuestion] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    //

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
      setResponses([ ...responses, { prompt, response: data }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {[...responses].map((item, index) => (
        <div key={index}>
          <h2>{item.prompt}</h2>
          <pre key={index}>{item.response}</pre>
        </div>
      ))}
      {question && <h2>{question}</h2>}
      <input type="text" value={prompt} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Chat;
