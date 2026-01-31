"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");

  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    // Check for reduced motion preference
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Show loading for initial animation
    const runTyping = async () => {
      if (media.matches) {
        setTypedText(fullText);
        setTimeout(() => setIsLoading(false), 2000);
        return;
      }

      for (let i = 0; i < fullText.length; i += 1) {
        setTypedText(fullText.slice(0, i + 1));
        await new Promise((resolve) => setTimeout(resolve, 55));
      }

      // Keep showing for a bit after typing completes
      setTimeout(() => setIsLoading(false), 1000);
    };

    runTyping();
  }, [fullText]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex items-center justify-center gap-3 md:gap-8">
          <div className="shrink-0">
            <Image
              src="/Logo.png"
              alt="Portfolio Logo"
              width={460}
              height={460}
              className="w-full h-8 md:w-full md:h-16"
              priority
            />
          </div>
          <div className="text-left">
            <h1 className="text-xl md:text-4xl font-normal text-white mb-2 min-h-6 md:min-h-12 flex items-center justify-center">
              {typedText}
              <span className="animate-pulse text-white">|</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
