import { useEffect, useRef, useState } from "react";

const useGlobalScroll = () => {
  const [scrolled, setScrolled] = useState<Boolean | null>(null);
  const prevScrollPosition = useRef(0);
  const handleScroll = () => {
    const position = window.scrollY;
    if (Math.abs(position - prevScrollPosition.current) > 30) {
      setScrolled(true);
    }
    if (position === 0) {
      setScrolled(null);
    }
    prevScrollPosition.current = position;
  };
  const resetScrolledState = () => {
    setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrolled, resetScrolledState];
};

export default useGlobalScroll;
