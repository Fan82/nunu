import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Tabs from "./Tabs.jsx";
import Contact from "./Contact.jsx";

// Images
import mainImage from "../assets/images/cake/mainImage.gif";
import mainImageTop from "../assets/images/cake/mainImage-top.png";
import mainImageBottom from "../assets/images/cake/mainImage-bottom.png";
import cookingImge from "../assets/images/cake/cooking.gif";
import spinerImge from "../assets/images/cake/spiner.gif";
import cookingButter from "../assets/images/cake/cooking-butter.gif";
import shopImge from "../assets/images/cake/shop.png";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll(".content-box");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 }, // 初始透明度0，Y軸往下50px
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // 當section頂端距離視窗底部80%位置時觸發
            toggleActions: "play none none none",
            // markers: true, // 調試用
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
    <main ref={containerRef}>
      <div className="content-box relative">
        <img
          className="absolute t-60px l-10p"
          src={mainImageTop}
          alt="nunu Wheel cake"
        />
        <img src={mainImage} alt="nunu Wheel cake" />
        <img
          className="absolute r-20p b--60px"
          src={mainImageBottom}
          alt="nunu Wheel cake"
        />
      </div>

      <div className="content-box relative">
        <img
          className="absolute b--20px r-70px z-1"
          src={cookingButter}
          alt="nunu Wheel cake"
        />

        <div className="relative b--260px">
          <img src={cookingImge} alt="nunu Wheel cake" />
        </div>
      </div>

      <Tabs />
      <Contact />
    </main>
  );
}

export default Main;
