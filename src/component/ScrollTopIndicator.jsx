import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollTopIndicator() {
  const [displayText, setDisplayText] = useState("Scroll");
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const windowBottom = scrollY + windowHeight;

      const showScroll = scrollY < 300;
      const showTop = windowBottom >= documentHeight * 0.8;

      let nextText = "";
      if (showScroll) {
        nextText = "Scroll";
      } else if (showTop) {
        nextText = "Top";
      }

      if (nextText !== displayText) {
        setVisible(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
          setDisplayText(nextText);
          setVisible(true);
        }, 100); // 與 transition 時間配合
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText]);

  const handleClick = () => {
    if (displayText === "Top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {displayText && (
        <motion.div
          key={displayText}
          className={`component-svg fixed bottom-12 left-6 z-10 cursor-pointer ${
            displayText === "Top" ? "top" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
        >
          <div className="line">
            <span></span>
          </div>
          {displayText}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopIndicator;
