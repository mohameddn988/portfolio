import React from "react";

interface SectionTitleProps {
  title?: string;
  backgroundText: string;
  subtitle?: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  backgroundText,
  subtitle,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full py-12 md:py-[6.4rem] overflow-hidden flex flex-col items-start justify-center ${className}`}
    >
      {/* Background Text */}
      <span
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[10vw] md:text-[12vw] font-bold text-white/4 uppercase whitespace-nowrap select-none pointer-events-none z-0 tracking-widest hidden md:block"
        aria-hidden="true"
      >
        {backgroundText}
      </span>

      {/* Foreground Content */}
      <div className="relative z-10 text-left flex flex-col items-start justify-center gap-[0.2rem] md:gap-[0.4rem] px-8 md:px-[4.8rem] lg:px-[6.4rem]">
        {title && (
          <h2 className="text-[1.6rem] md:text-[2.4rem] lg:text-[3rem] font-semibold text-[#e4e4e7] tracking-wider capitalize">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-[0.6rem] md:text-[0.9rem] text-[#a1a1aa] flex items-center gap-2 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
