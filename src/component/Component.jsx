import React, { useState, useEffect, useRef } from "react";

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

      // 條件 1：是否滑過第一區塊（假設第一區塊高 600px）
      const showScroll = scrollY < 300;

      // 條件 2：是否接近頁面底部（例如最後20%開始顯示 Top）
      const showTop = windowBottom >= documentHeight * 0.8;

      let nextText = "";

      if (showScroll) {
        nextText = "Scroll";
      } else if (showTop) {
        nextText = "Top";
      }

      if (nextText !== displayText) {
        // 淡出
        setVisible(false);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setDisplayText(nextText);
          setVisible(true);
        }, 100); // CSS 淡出對應的時間
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化

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
    <div
      className="component-svg fixed bottom-6 z-10 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      onClick={handleClick}
    >
      <div>{displayText}</div>
    </div>
  );
}

export default ScrollTopIndicator;
