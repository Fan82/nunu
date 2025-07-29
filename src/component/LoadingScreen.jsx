import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import vanLoading from "../assets/images/van.webp";

function LoadingScreen({ isLoading, onFadeOutComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    // 先淡入
    gsap.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // 當父元件告訴 loading 狀態 false，才淡出
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: onFadeOutComplete,
      });
    }
  }, [isLoading, onFadeOutComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-default z-50"
    >
      <img
        src={vanLoading}
        alt="nunu loading"
        className="w-40 h-auto aspect-auto object-contain"
      />
      <p className="load"></p>
    </div>
  );
}

export default LoadingScreen;
