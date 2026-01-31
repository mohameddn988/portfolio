"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { technicalSkills } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { useI18n } from "@/i18n/useI18n";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-zinc-400">Loading skills cloud...</div>
    </div>
  ),
});

const InteractiveCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    setIsPaused(true);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout to resume auto-scroll after 2 seconds of no scrolling
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const handleInteractionStart = () => {
    setIsPaused(true);
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    // Resume auto-scroll after a short delay
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScrollEvent = () => handleScroll();

    carousel.addEventListener("scroll", handleScrollEvent, { passive: true });
    carousel.addEventListener("touchstart", handleInteractionStart, {
      passive: true,
    });
    carousel.addEventListener("touchend", handleInteractionEnd, {
      passive: true,
    });
    carousel.addEventListener("mousedown", handleInteractionStart, {
      passive: true,
    });
    carousel.addEventListener("mouseup", handleInteractionEnd, {
      passive: true,
    });
    carousel.addEventListener("mouseleave", handleInteractionEnd, {
      passive: true,
    });

    return () => {
      carousel.removeEventListener("scroll", handleScrollEvent);
      carousel.removeEventListener("touchstart", handleInteractionStart);
      carousel.removeEventListener("touchend", handleInteractionEnd);
      carousel.removeEventListener("mousedown", handleInteractionStart);
      carousel.removeEventListener("mouseup", handleInteractionEnd);
      carousel.removeEventListener("mouseleave", handleInteractionEnd);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div
        ref={carouselRef}
        className={`flex gap-[1.2rem] ${isPaused ? "" : "animate-carousel"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* First set of images */}
        <div className="relative shrink-0 w-36 h-36 aspect-square rounded-[0.8rem] overflow-hidden border border-white/10 shadow-xl bg-primary">
          <Image
            src="/About/Myself.png"
            alt="Myself - Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative shrink-0 w-48 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/MyselfHackathon.png"
            alt="Myself - Work"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-36 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/IDontKnow.png"
            alt="Myself - Passion"
            fill
            className="object-cover"
          />
        </div>

        {/* Second set of images */}
        <div className="relative shrink-0 w-36 h-36 aspect-square rounded-[0.8rem] overflow-hidden border border-white/10 shadow-xl bg-primary">
          <Image
            src="/About/Myself.png"
            alt="Myself - Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-48 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/MyselfHackathon.png"
            alt="Myself - Work"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-36 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/IDontKnow.png"
            alt="Myself - Passion"
            fill
            className="object-cover"
          />
        </div>

        {/* Third set of images */}
        <div className="relative shrink-0 w-36 h-36 aspect-square rounded-[0.8rem] overflow-hidden border border-white/10 shadow-xl bg-primary">
          <Image
            src="/About/Myself.png"
            alt="Myself - Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-48 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/MyselfHackathon.png"
            alt="Myself - Work"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-36 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/IDontKnow.png"
            alt="Myself - Passion"
            fill
            className="object-cover"
          />
        </div>

        {/* Fourth set of images */}
        <div className="relative shrink-0 w-36 h-36 aspect-square rounded-[0.8rem] overflow-hidden border border-white/10 shadow-xl bg-primary">
          <Image
            src="/About/Myself.png"
            alt="Myself - Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-48 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/MyselfHackathon.png"
            alt="Myself - Work"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative shrink-0 w-36 h-36 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary">
          <Image
            src="/About/IDontKnow.png"
            alt="Myself - Passion"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-primary md:px-[4.8rem] lg:px-[6.4rem]">
      <SectionTitle
        title={t("about.title")}
        backgroundText="HELLO"
        subtitle={t("about.subtitle")}
      />

      {/* Bio Section */}
      <section className="px-[1.6rem] md:px-[4.8rem] lg:px-[6.4rem] mt-8">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem] lg:gap-y-[2.4rem] lg:gap-x-[1.2rem] items-start">
            {/* Left Column - Bio Text */}
            <div className="space-y-[1.2rem] lg:col-span-1 order-2 lg:order-1">
              <div>
                <h2 className="text-[2.2rem] md:text-[2.2rem] font-bold text-white mb-[0.8rem]">
                  {t("about.greeting")}{" "}
                  <span className="text-secondary">{t("about.name")}</span>
                </h2>
                <p className="text-[1.1rem] md:text-[1rem] text-zinc-400 font-light">
                  {t("about.role")}
                </p>
              </div>

              <div className="space-y-[0.8rem] text-zinc-300 leading-relaxed text-justify min-h-88">
                <p className="text-[1rem] md:text-[1rem]">{t("about.bio1")}</p>
                <p className="text-[1rem] md:text-[1rem]">{t("about.bio2")}</p>
                <p className="text-[1rem] md:text-[1rem]">{t("about.bio3")}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-[0.8rem] pt-[1.2rem] border-t border-white/10">
                <div className="text-center">
                  <div className="text-[1.6rem] md:text-[1.5rem] font-bold text-secondary">
                    15+
                  </div>
                  <div className="text-[0.8rem] md:text-[0.7rem] text-zinc-500 mt-[0.2rem]">
                    {t("about.stats.projects")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[1.6rem] md:text-[1.5rem] font-bold text-secondary">
                    6+
                  </div>
                  <div className="text-[0.8rem] md:text-[0.7rem] text-zinc-500 mt-[0.2rem]">
                    {t("about.stats.experience")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[1.6rem] md:text-[1.5rem] font-bold text-secondary">
                    20+
                  </div>
                  <div className="text-[0.8rem] md:text-[0.7rem] text-zinc-500 mt-[0.2rem]">
                    {t("about.stats.contributions")}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Images */}
            <div className="space-y-[1.2rem] lg:col-span-1 self-center order-1 lg:order-2">
              {/* Mobile Carousel */}
              <div className="lg:hidden">
                <InteractiveCarousel />
              </div>

              {/* Desktop Grid */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-[0.8rem] items-center">
                  {/* Left inside images block: square image */}
                  <div className="relative w-44 h-44 aspect-square justify-self-end rounded-[0.8rem] overflow-hidden border border-white/10 shadow-xl bg-primary z-56">
                    <Image
                      src="/About/Myself.png"
                      alt="Myself - Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Right inside images block: stacked images */}
                  <div className="flex flex-col gap-[0.8rem]">
                    {/* Top-right: rectangle with same height as left image */}
                    <div className="relative w-60 h-44 rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary z-56">
                      <Image
                        src="/About/MyselfHackathon.png"
                        alt="Myself - Work"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Bottom-right: same size as left image and aligned to start */}
                    <div className="relative w-44 h-44 self-start rounded-[0.8rem] overflow-hidden border border-white/10 shadow-lg bg-primary z-56">
                      <Image
                        src="/About/IDontKnow.png"
                        alt="Myself - Passion"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Icon Cloud */}
      <SectionTitle
        title={t("skills.title")}
        subtitle={t("skills.subtitle")}
        backgroundText="SKILLS"
      />
      <section className="px-[1.6rem] md:px-[4.8rem] lg:px-[6.4rem] -mt-[3.2rem] pb-[3.2rem]">
        <div className="flex justify-center">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-64">
                <div className="text-zinc-400">Loading skills cloud...</div>
              </div>
            }
          >
            <IconCloud iconSlugs={technicalSkills} />
          </Suspense>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-[1.6rem] md:px-0 py-6 md:py-10 bg-primary">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[1.6rem] md:gap-20 items-start">
            {/* Left Column - Title (Sticky) */}
            <div className="flex flex-col justify-start sticky top-26 md:top-28 md:col-span-2">
              <h2 className="text-[2rem] md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t("about.achievementsTitle")}
              </h2>
              <div className="h-[2vh] md:h-[11vh]"></div>
            </div>

            {/* Right Column - Achievements List */}
            <div className="md:col-span-3">
              <div className="space-y-[1.2rem] md:space-y-[2.4rem]">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`sticky bg-primary top-66 md:top-28 z-[${index + 1}]`}
                  >
                    <div className="bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] border border-white/10 rounded-[0.8rem] p-3 md:p-[1.2rem]">
                      {/* Year */}
                      <p className="text-[0.7rem] md:text-[0.8rem] text-zinc-500 mb-[0.4rem] md:mb-[0.6rem]">
                        {achievement.year}
                      </p>

                      {/* Title */}
                      <h3 className="text-[1.2rem] md:text-[1.5rem] font-bold text-white mb-[0.3rem] md:mb-[0.4rem]">
                        {t(achievement.title)}
                      </h3>
                      <div className="min-h-16 md:min-h-[6.4rem]">
                        <p className="text-[0.8rem] md:text-[0.8rem] text-zinc-400 line-clamp-4 md:line-clamp-5 text-justify">
                          {t(achievement.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="h-[1vh] md:h-[3vh]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
