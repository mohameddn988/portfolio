"use client";

import { useEffect, useState, useMemo, type CSSProperties } from "react";
import Image from "next/image";
import { skills } from "../../data/skills";
import { useI18n } from "@/i18n/useI18n";
import BlueBananaIcon from "../ui/BlueBananaIcon";
import PurpleBananaIcon from "../ui/PurpleBananaIcon";
import GreenBananaIcon from "../ui/GreenBananaIcon";

export default function HeroSection() {
  const [heroScale, setHeroScale] = useState(1);
  const [skillOffsets] = useState<
    Record<string, { x: number; y: number; duration: number; delay: number }>
  >(() => {
    const xOffsets = [8, -6.4, 9.6, -8, 7.2, -5.6, 8.8, -7.2];
    const yOffsets = [-5.6, 7.2, -8, 6.4, -7.2, 8.8, -4.8, 8];
    const durations = [3.2, 2.8, 3.0];
    const delays = [0, 0.2, 0.1];

    const initialOffsets: Record<
      string,
      { x: number; y: number; duration: number; delay: number }
    > = {};
    skills.forEach((skill, index) => {
      initialOffsets[skill.label] = {
        x: xOffsets[index % xOffsets.length],
        y: yOffsets[index % yOffsets.length],
        duration: durations[index % durations.length],
        delay: delays[index % delays.length],
      };
    });
    return initialOffsets;
  });
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { t } = useI18n();

  const headlineLines = useMemo(
    () => [
      { text: t("hero.line1"), muted: true },
      { text: t("hero.line2"), muted: false },
      { text: t("hero.line3"), muted: true },
      { text: t("hero.line4"), muted: false },
    ],
    [t],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const maxScroll = 560;
    const minScale = 0.5;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const nextScale = 1 - progress * (1 - minScale);
      setHeroScale(nextScale);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const typingSpeed = 55;
    const lineDelay = 220;

    const runTyping = async () => {
      if (reduceMotion) {
        setTypedLines(headlineLines.map((line) => line.text));
        return;
      }

      setTypedLines(headlineLines.map(() => ""));

      for (let i = 0; i < headlineLines.length; i += 1) {
        const fullText = headlineLines[i].text;
        for (let j = 0; j < fullText.length; j += 1) {
          if (isCancelled) return;
          setTypedLines((prev) => {
            const next = [...prev];
            next[i] = fullText.slice(0, j + 1);
            return next;
          });
          await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        }
        await new Promise((resolve) => setTimeout(resolve, lineDelay));
      }
    };

    runTyping();
    return () => {
      isCancelled = true;
    };
  }, [reduceMotion, headlineLines]);

  return (
    <div className="relative">
      <section className="sticky top-12 flex flex-col items-center justify-center pb-[3.2rem] pt-[1.6rem] z-0">
        {" "}
        {/* top-25 is the ideal*/}{" "}
        <div
          className="flex flex-col items-center gap-[1.2rem] will-change-transform"
          style={{
            transform: `scale(${heroScale})`,
            transformOrigin: "center",
          }}
        >
          <span className="text-white/40 tracking-[0.24em] text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] uppercase font-bold">
            {t("hero.name")}
          </span>
          <h1 className="flex flex-col items-center leading-[0.85] font-bold text-center tracking-tight">
            {headlineLines.map((line, index) => (
              <span
                key={line.text}
                className={`text-[4rem] sm:text-[5.6rem] md:text-[7.2rem] lg:text-[8.8rem] ${
                  line.muted ? "text-white/30" : "text-white"
                } relative inline-block`}
              >
                <span className="opacity-0" aria-hidden="true">
                  {line.text}
                </span>
                <span className="absolute inset-0">
                  {typedLines[index] ?? ""}
                </span>
              </span>
            ))}
          </h1>
        </div>
      </section>

      <section className="relative z-10 flex flex-col items-center justify-center pb-4 pt-[1.6rem] mt-[4vh]">
        <div className="relative flex items-center justify-center">
          <div className="relative h-104 w-80 sm:h-124 sm:w-96">
            <div className="absolute -inset-[0.7rem] rounded-[33.6px] bg-primary" />
            <div className="relative h-full w-full overflow-hidden rounded-[28.8px]">
              <Image
                src="/Myself.png"
                alt={t("hero.portraitAlt")}
                fill
                className="object-cover"
                priority
              />
            </div>

            {skills.map((skill) => (
              <div
                key={skill.label}
                className={`floating-skill absolute ${skill.position} flex flex-col items-start gap-1`}
                style={
                  {
                    "--float-x": `${skillOffsets[skill.label]?.x ?? 0}px`,
                    "--float-y": `${skillOffsets[skill.label]?.y ?? 0}px`,
                    animationDuration: `${skillOffsets[skill.label]?.duration ?? 6}s`,
                    animationDelay: `${skillOffsets[skill.label]?.delay ?? 0}s`,
                  } as CSSProperties
                }
              >
                {skill.label === "Web Dev" && (
                  <BlueBananaIcon className="h-8 w-8" />
                )}
                {skill.label === "Mobile Dev" && (
                  <PurpleBananaIcon className="h-8 w-8" />
                )}
                {skill.label === "Cloud & DevOps" && (
                  <GreenBananaIcon className="h-8 w-8" />
                )}
                <span
                  className={`translate-x-6 -translate-y-2 rounded-full px-[1.4rem] py-[0.6rem] text-[1rem] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${skill.color}`}
                >
                  {t(skill.label)}
                </span>
              </div>
            ))}
            <div className="absolute -bottom-4 -right-[0.8rem] flex items-center gap-[0.6rem] rounded-full bg-[#3A3A3A] px-[1.2rem] py-[0.6rem] shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
              <Image
                src="/Logo.png"
                alt={t("hero.logoAlt")}
                width={548}
                height={548}
                className="h-[2.8rem] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
