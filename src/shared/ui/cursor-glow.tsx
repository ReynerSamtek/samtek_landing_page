"use client";

import React, { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Only track if device supports fine pointer (mouse / trackpad)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden transition-opacity duration-500 ease-out"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background:
            "radial-gradient(circle, rgba(12, 103, 145, 0.18) 0%, rgba(12, 103, 145, 0.06) 40%, rgba(182, 44, 44, 0.03) 65%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
