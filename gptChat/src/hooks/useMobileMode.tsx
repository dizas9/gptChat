
import { useEffect, useState } from "react";

export default function useMobileMode() {
  const [mediaQuery, setMediaQuery] = useState<number>(0);

  useEffect(() => {
    const handleMediaQuery = () => {
      setMediaQuery(window.innerWidth);
    };

    handleMediaQuery();

    window.addEventListener("resize", handleMediaQuery);

    return () => {
      window.removeEventListener("resize", handleMediaQuery);
    };
  }, [mediaQuery]);

  // console.log("inside mobile", isMobileMode);
  return { mediaQuery };
}
