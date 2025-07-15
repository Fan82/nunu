import React, { useRef, useEffect, useState } from "react";

const MapCanvas = () => {
  const canvasRef = useRef(null);
  const [car, setCar] = useState({ x: 50, y: 50 });
  const [destination, setDestination] = useState(null);
  const [info, setInfo] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const mapImage = useRef(null);
  const carImage = useRef(null);

  const areaInfo = [
    { x: 650, y: 460, name: "mini nunu", description: "Suntec City" },
    { x: 1240, y: 280, name: "nunu Van", description: "Hong Lim Park" },
  ];

  useEffect(() => {
    const loadImages = () => {
      const map = new Image();
      const car = new Image();
      map.src = "./map.png"; // 放在 public 的圖片路徑
      car.src = "./van.png"; // 車子圖片

      map.onload = car.onload = () => {
        mapImage.current = map;
        carImage.current = car;
        setImagesLoaded(true);
      };
    };

    loadImages();
  }, []);

  // 畫面
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      // 清空畫面
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 畫地圖背景
      ctx.drawImage(mapImage.current, 0, 0, canvas.width, canvas.height);

      // 畫地點標記
      areaInfo.forEach((area) => {
        ctx.beginPath();
        ctx.arc(area.x, area.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#3B3B3B";
        ctx.fill();
        ctx.closePath();
      });

      // 畫車子圖片
      const carWidth = 220;
      const carHeight = 220;
      ctx.drawImage(
        carImage.current,
        car.x - carWidth / 2,
        car.y - carHeight / 2,
        carWidth,
        carHeight
      );
    };

    draw();
  }, [car, imagesLoaded]);

  // 車子移動
  useEffect(() => {
    if (!destination || !imagesLoaded) return;

    const move = () => {
      setCar((prev) => {
        const dx = destination.x - prev.x;
        const dy = destination.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 2) {
          setDestination(null);
          const found = areaInfo.find(
            (area) =>
              Math.abs(area.x - destination.x) < 15 &&
              Math.abs(area.y - destination.y) < 15
          );
          if (found) setInfo(found);
          return prev;
        }

        return {
          x: prev.x + dx * 0.05,
          y: prev.y + dy * 0.05,
        };
      });
    };

    const interval = setInterval(move, 16);
    return () => clearInterval(interval);
  }, [destination, imagesLoaded]);

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDestination({ x, y });
    setInfo(null);
  };

  return (
    <div>
      <canvas ref={canvasRef} width={1400} height={500} onClick={handleClick} />
      {info && (
        <div>
          <strong>{info.name}</strong>
          <p>{info.description}</p>
        </div>
      )}
    </div>
  );
};

export default MapCanvas;
