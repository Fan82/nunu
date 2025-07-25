import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dudeImage from "../assets/images/van.webp";

gsap.registerPlugin(ScrollTrigger);

export default function MapScroll() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = contentRef.current;
      const totalScrollWidth = content.scrollWidth - window.innerWidth;

      gsap.to(content, {
        x: `-${totalScrollWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden h-[100vh]" // ← 要有明確高度
    >
      {/* 固定圖片 */}
      <img
        src={dudeImage}
        alt="van"
        className="fixed bottom-6 left-6 w-40 z-10 pointer-events-none"
      />

      {/* 可橫向滾動的內容 */}
      <div
        ref={contentRef}
        className="flex h-screen w-fit" // ← flex + w-fit 是重點
      >
        {[
          { title: "Hello 👋", color: "#f97316" },
          { title: "我是誰", color: "#10b981" },
          { title: "我會什麼", color: "#3b82f6" },
          { title: "聯絡我", color: "#f43f5e" },
          { title: "新店面資訊", color: "#facc15", image: dudeImage },
        ].map((item, i) => (
          <section
            key={i}
            className="w-screen h-screen flex items-center justify-center p-10"
            style={{ backgroundColor: item.color }}
          >
            <div className="max-w-xl text-center text-white space-y-4">
              <h2 className="text-4xl font-bold">{item.title}</h2>
              {item.image && (
                <img
                  src={item.image}
                  alt="圖"
                  className="mx-auto w-64 rounded-lg shadow-md"
                />
              )}
              <p className="text-lg">這裡可以放描述文字或商店資訊。</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
