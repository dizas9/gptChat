import  { useState, useEffect } from "react";

export default function Loading() {
  const [showDiv, setShowDiv] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDiv((prev) => !prev);
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      {showDiv ? (
        <div className="border-8 border-black w-4 h-4 rounded-full"></div>
      ) : (
        <div className="border-4 border-black w-2 h-2 rounded-full"></div>
      )}
    </div>
  );
}
