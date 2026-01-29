"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { technicalSkills } from "@/data/skills";
import { achievements } from "@/data/achievements";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-zinc-400">Loading skills cloud...</div>
    </div>
  ),
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary px-16 md:px-24 lg:px-32">
      <SectionTitle
        title="Get to Know Me!"
        backgroundText="HELLO"
        subtitle="Let me introduce myself briefly"
      />

      {/* Bio Section */}
      <section className="max-w-355 mx-auto px-4 md:px-6 mt-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-12 lg:gap-x-6 items-start">
            {/* Left Column - Bio Text */}
            <div className="space-y-6 lg:col-span-1">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Hi, I'm{" "}
                  <span className="text-secondary">Deneche Mohamed</span>
                </h2>
                <p className="text-xl text-zinc-400 font-light">
                  Full Stack & Mobile Developer
                </p>
              </div>

              <div className="space-y-4 text-zinc-300 leading-relaxed text-justify">
                <p>
                  I'm a fullstack and mobile developer passionate about creating
                  elegant solutions to complex problems. With expertise in both
                  frontend and backend technologies, I build seamless, scalable
                  applications that make a real impact.
                </p>
                <p>
                  Driven by curiosity and continuous learning, I specialize in
                  architecting APIs, optimizing databases, and developing
                  cross-platform mobile apps. I value clean code, collaboration,
                  and innovative thinking in creating meaningful digital
                  solutions.
                </p>
                <p>
                  Outside of coding, I stay updated with emerging technologies,
                  contribute to open-source projects, and mentor aspiring
                  developers, always aiming to deliver user-friendly,
                  high-quality products.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">19+</div>
                  <div className="text-sm text-zinc-500 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">6+</div>
                  <div className="text-sm text-zinc-500 mt-1">Months Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-zinc-500 mt-1">
                    Contributions
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Images */}
            <div className="space-y-6 lg:col-span-1 self-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                {/* Left inside images block: square image */}
                <div className="relative w-55 h-55 aspect-square justify-self-end rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-primary z-70">
                  <Image
                    src="/About/Myself.png"
                    alt="Myself - Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Right inside images block: stacked images */}
                <div className="flex flex-col gap-4">
                  {/* Top-right: rectangle with same height as left image */}
                  <div className="relative w-75 h-55 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-primary z-70">
                    <Image
                      src="/About/MyselfHackathon.png"
                      alt="Myself - Work"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom-right: same size as left image and aligned to start */}
                  <div className="relative w-55 h-55 self-start rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-primary z-70">
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
      </section>

      {/* Skills Icon Cloud */}
      <SectionTitle
        title="Technical Skills Cloud"
        subtitle="Technologies I work with"
        backgroundText="SKILLS"
      />
      <section className="max-w-250 mx-auto px-4 md:px-6 -mt-16 pb-16">
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
      <section className="py-10 bg-primary">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
            {/* Left Column - Title (Sticky) */}
            <div className="flex flex-col justify-start sticky top-35 md:col-span-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                ACHIEVEMENTS & MILESTONES
              </h2>
              <div className="h-[1vh]"></div>
            </div>

            {/* Right Column - Achievements List */}
            <div className="md:col-span-3">
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`sticky bg-primary top-35 z-[${index + 1}]`}
                  >
                    <div className="bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] border border-white/10 rounded-3xl p-5 md:p-6">
                      <div className="flex gap-8 items-center">
                        {/* Year */}
                        <div className="shrink-0">
                          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                            <span className="text-2xl font-bold text-secondary/50">
                              {achievement.year}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-base text-zinc-400">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="h-[4vh]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
