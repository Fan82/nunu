import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vanImage from "../assets/images/van.webp";
import shopImage from "../assets/images/shop.png";

gsap.registerPlugin(ScrollTrigger);

export default function MapScroll() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = contentRef.current;
      const scrollAmount = content.scrollWidth - window.innerWidth;

      gsap.to(content, {
        x: () => `-${content.scrollWidth - window.innerWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+${content.scrollWidth - window.innerWidth}px`,
          scrub: true,
          pin: true,
          anticipatePin: 0,
          pinType: "transform",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            console.log("scroll progress", self.progress);
          },
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
      {/* <img
        src={vanImage}
        alt="van"
        className="fixed top-0 left-6 w-52 aspect-auto z-10 pointer-events-none"
      /> */}
      {/* 可橫向滾動的內容 */}
      <div
        ref={contentRef}
        className="flex h-full w-fit will-change-transform" // ← flex + w-fit 是重點
      >
        {[
          {
            title: "nunu Shop",
            content: "266 South Bridge Rd, #000, Singapore",
            week: "Mon - Sun |",
            time: "10:00 - 18:00",
            image: shopImage,
          },
          {
            title: "nunu Van",
            content: "3 Temasek Blvd, Singapore 038983",
            week: "Weekend |",
            time: "11:00 - 18:00",
            image: vanImage,
          },
        ].map((item, i) => (
          <section
            key={i}
            className="w-screen h-full flex flex-col items-center justify-center p-4 pt-28 text-dark text-center md:flex-row lg:gap-8"
          >
            {item.image && (
              <img
                src={item.image}
                alt="nunu"
                className={`mx-auto mb-6 h-[300px] md:w-auto md:h-96 lg:m-0 lg:h-[36rem] ${
                  item.image.includes("van") ? "w-96" : "w-72"
                }`}
              />
            )}
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-2xl font-bold lg:text-6xl after:content'' after:bg-dark after:w-11/12 after:h-0.5 after:mt-1 after:block lg:after:mt-4">
                {item.title}
              </h4>
              <div className="text-sm lg:text-md/loose">{item.content}</div>
              <div>
                <div className="text-sm font-semibold inline-block lg:text-md/loose">
                  {item.week}
                </div>
                <div className="text-sm inline-block ml-2 lg:text-md/loose">
                  {item.time}
                </div>
              </div>
              <button
                className={`flex justify-center items-center gap-2 bg-white px-2.5 py-1.5 rounded-full text-sm my-4 ${
                  item.image.includes("shop") ? "block" : "hidden"
                }`}
              >
                Contact us
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#000"
                    stroke-width="2"
                  />
                  <path d="M22 6L12 13L2 6" stroke="#000" stroke-width="2" />
                </svg>
              </button>
            </div>
          </section>
        ))}
        <svg
          className="absolute top-10 overflow-hidden -z-10 opacity-50"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-2 78.9951C-2 78.9951 490.5 -76.9943 551 63C611.5 202.994 370.5 292.5 530.5 389.5C690.5 486.5 1277.5 324 1277.5 324"
            stroke="#3B3B3B"
            stroke-opacity="0.63"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="23 23"
          />
        </svg>
      </div>
    </section>
  );
}
