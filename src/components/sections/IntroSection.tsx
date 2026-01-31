"use client";

import { useI18n } from "@/i18n/useI18n";

const IntroSection = () => {
  const { t } = useI18n();

  return (
    <section className="h-[48vh] mt-[2.4rem] flex flex-col justify-center px-[3.2rem] md:px-[4.8rem] lg:px-[6.4rem] bg-(--bg-primary) text-(--color-text-primary)">
      <div className="w-full">
        <div className="flex items-center gap-[0.6rem] mb-[1.2rem]">
          <span className="text-[1.8rem] tracking-[0.16em] text-[#71717a] font-medium uppercase">
            {t("intro.greeting")}
          </span>
          <span className="text-[1.8rem] animate-wave origin-bottom-right inline-block">
            👋
          </span>
        </div>

        <h1 className="text-[1.8rem] md:text-[3rem] lg:text-[3.6rem] font-normal leading-[1.1] tracking-tight text-white block w-full min-h-72 text-justify line-clamp-4">
          {t("intro.description")}
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
