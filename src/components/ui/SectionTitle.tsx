import React from 'react';

interface SectionTitleProps {
  title?: string;
  backgroundText: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  backgroundText, 
  subtitle,
  className = ""
}) => {
  return (
    <div
      className={`relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-start justify-center ${className}`}
    >
      {/* Background Text */}
      <span
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[12vw] font-bold text-white/4 uppercase whitespace-nowrap select-none pointer-events-none z-0 tracking-widest"
        aria-hidden="true"
      >
        {backgroundText}
      </span>

      {/* Foreground Content */}
      <div className="relative z-10 text-left flex flex-col items-start justify-center gap-3 md:gap-4 px-16 md:px-24 lg:px-32">
        {title && (
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#e4e4e7] tracking-wider capitalize">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-sm md:text-lg text-[#a1a1aa] flex items-center gap-2 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
