import React, { useState, useEffect, useRef } from "react";

function Component() {
  const [scrolledPast, setScrolledPast] = useState(false); // 目標狀態
  const [visible, setVisible] = useState(true); // 文字是否顯示(透明度控制)
  const [displayText, setDisplayText] = useState("Scroll"); // 實際顯示文字
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerHeight = 500;

      if (scrollY > triggerHeight && !scrolledPast) {
        setScrolledPast(true);
      } else if (scrollY < triggerHeight && scrolledPast) {
        setScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scrolledPast]);

  // 用 useEffect 監控 scrolledPast 狀態變化，觸發淡出換字流程
  useEffect(() => {
    // 先淡出
    setVisible(false);

    timeoutRef.current = setTimeout(() => {
      // 換字
      setDisplayText(scrolledPast ? "Top" : "Scroll");
      // 淡入
      setVisible(true);
    }, 800); // 和 CSS transition 時間要配合

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scrolledPast]);

  return (
    <div>
      <div
        className={`component-svg z-10 ${scrolledPast ? "top" : ""}`}
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div>{displayText}</div>
      </div>
    </div>
  );
}

export default Component;
