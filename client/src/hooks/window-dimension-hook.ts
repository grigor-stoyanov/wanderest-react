import { useEffect, useState } from "react";

function getWindowDimension() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());
  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimension());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return {windowDimension};
};

export default useWindowDimension;
