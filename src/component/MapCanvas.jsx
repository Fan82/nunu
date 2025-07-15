import React, { useRef, useEffect, useState } from "react";

const MapCanvas = () => {
  const canvasRef = useRef(null);
  const [car, setCar] = useState({ x: 50, y: 50 });
  const [destination, setDestination] = useState(null);
  const [info, setInfo] = useState(null);

  // 地區資訊範例
  const areaInfo = [
    { x: 200, y: 100, name: "區域 A", description: "這裡是 A 區" },
    { x: 400, y: 200, name: "區域 B", description: "這裡是 B 區" },
    { x: 800, y: 50, name: "區域 C", description: "這裡是 C 區" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 畫地圖背景
      ctx.fillStyle = "#f6f5ee";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 畫地點標記
      areaInfo.forEach((area) => {
        ctx.beginPath();
        ctx.arc(area.x, area.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();
      });

      // 畫車子
      ctx.beginPath();
      ctx.arc(car.x, car.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();
    };

    draw();
  }, [car]);

  // 控制車子移動動畫
  useEffect(() => {
    if (!destination) return;

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
  }, [destination]);

  // 點擊設定目的地
  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDestination({ x, y });
    setInfo(null); // 清除之前的資訊
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        // style={{ border: "1px solid #ccc" }}
        onClick={handleClick}
      />
      {info && (
        <div
          style={{
            marginTop: 10,
            padding: 10,
            background: "#fffbe6",
            border: "1px solid #f5c518",
          }}
        >
          <strong>{info.name}</strong>
          <p>{info.description}</p>
        </div>
      )}
    </div>
  );
};

export default MapCanvas;
