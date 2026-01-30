"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({
    x: -100,
    y: -100,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Adjust these values to change cursor size
  const CURSOR_SIZE = 38; // Change this to make cursor larger or smaller

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Don't render until mounted (prevents hydration mismatch)
  if (!isMounted) {
    return null;
  }

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Image
        src="/Cursor/CustomCursor.svg"
        alt=""
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
      />
    </div>
  );
}
