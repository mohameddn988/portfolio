"use client";

import { useI18n } from "@/i18n/useI18n";

const IntroSection = () => {
  const { t } = useI18n();

  return (
    <section className="h-[60vh] flex flex-col justify-center px-16 md:px-24 lg:px-32 bg-(--bg-primary) text-(--color-text-primary)">
      <div className="w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl tracking-[0.2em] text-[#71717a] font-medium uppercase">
            {t("intro.greeting")}
          </span>
          <span className="text-4xl animate-wave origin-bottom-right inline-block">
            👋
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white block w-full min-h-90 text-justify line-clamp-4">
          {t("intro.description")}
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
