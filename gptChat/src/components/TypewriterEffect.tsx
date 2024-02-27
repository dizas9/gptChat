import { useEffect, useState } from "react";

interface propsTypes{
text: string;
}

export default function TypewriterEffect({text}:propsTypes) {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 10); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [text]);

  return <div>{displayText}</div>;
};

