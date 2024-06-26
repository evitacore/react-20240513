import { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';

export const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0)
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollWidth(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={progressBarRef} className={styles.progressBar} style={{ width: `${scrollWidth}%` }} />
};
