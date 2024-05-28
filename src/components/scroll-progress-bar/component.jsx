import { useEffect, useRef, useState } from "react";
import './style.css';

export const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0)
  const progressBarRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={progressBarRef} className="progressBar" style={{ width: `${scrollWidth}%` }}></div>
};
