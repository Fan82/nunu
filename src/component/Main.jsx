import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Tabs from "./Tabs.jsx";
import Contact from "./Contact.jsx";

// Images
import mainImage from "../assets/images/cake/mainImage.webp";
import mainImageTop from "../assets/images/cake/mainImage-top.png";
import mainImageBottom from "../assets/images/cake/mainImage-bottom.png";
import cookingImge from "../assets/images/cake/cooking.webp";
import cookingButter from "../assets/images/cake/cooking-butter.webp";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("main > div");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 清理 ScrollTrigger 實例，避免記憶體泄漏
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="relative py-[40px]">
      {/* 一 */}
      <div className="relative text-center px-[120px] py-0 mb-[80px]">
        <img
          className="absolute left-24 -top-4 w-96 md:left-12 xl:left-64 xl:-top-8"
          src={mainImageTop}
          alt="nunu Wheel cake"
        />
        <img className="mx-auto" src={mainImage} alt="nunu Wheel cake" />
        <img
          className="absolute right-32 -bottom-20 w-96 md:right-16 xl:right-80 xl:-bottom-28"
          src={mainImageBottom}
          alt="nunu Wheel cake"
        />
      </div>
      {/* 二 */}
      <div className="relative text-center mt-80 px-[120px] py-0 mb-[80px]">
        <img
          className="absolute w-80 right-28 -top-[11.5rem] max-w-2xl z-10 md:w-72 md:-top-52 md:right-[5.5rem] xl:w-96 xl:right-[13rem] xl:-top-1/3"
          src={cookingButter}
          alt="nunu Wheel cake"
        />
        <img
          className="relative mx-auto"
          src={cookingImge}
          alt="nunu Wheel cake"
        />
      </div>

      <Tabs />
      <Contact />
    </main>
  );
}

export default Main;
