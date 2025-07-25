import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Tabs from "./Tabs.jsx";
import MapScroll from "./MapScroll.jsx";
import Contact from "./Contact.jsx";

// Images
import mainImage from "../assets/images/cake/mainImage.webp";
import mainImageTop from "../assets/images/cake/mainImage-top.png";
import mainImageBottom from "../assets/images/cake/mainImage-bottom.png";
import cookingImge from "../assets/images/cake/cooking.webp";
import cookingButter from "../assets/images/cake/cooking-butter.webp";
import subTitle from "../assets/images/cake/subtitle.png";

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
    <main ref={containerRef} className="relative pt-[40px]">
      {/* 一 */}
      <div className="relative text-center px-[40px]  py-0 mb-28 md:px-[120px]">
        <img
          className="absolute w-56 -top-5 left-2 md:-top-4 md:w-96 md:left-12 lg:left-24 xl:left-64 xl:-top-8"
          src={mainImageTop}
          alt="nunu Wheel cake"
        />
        <img className="mx-auto" src={mainImage} alt="nunu Wheel cake" />
        <img
          className="absolute w-56 right-7 md:-bottom-20 md:w-96 md:right-16 xl:right-80 xl:-bottom-28"
          src={mainImageBottom}
          alt="nunu Wheel cake"
        />
      </div>
      {/* 二 */}
      <div className="relative text-center mt-60 px-[40px]  py-0 mb-28 md:px-[120px] md:mt-80">
        <img
          src={subTitle}
          className="absolute left-10 w-48 -top-24"
          alt="nunu Wheel cake"
        />
        <img
          className="absolute w-44 -top-32 right-5 z-10 md:w-72 md:-top-36 md:right-[5.5rem] lg:right-36 lg:-top-32 lg:w-80 xl:w-96 xl:right-[13rem] xl:-top-1/3"
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
      <MapScroll />
      <Contact />
    </main>
  );
}

export default Main;
