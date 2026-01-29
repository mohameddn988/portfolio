"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <section className="pb-35 bg-primary">
      <SectionTitle
        title="Featured Projects"
        backgroundText="FEATURED"
        subtitle="Yeah, I work hard"
      />

      <div className="max-w-250 mx-auto px-4 md:px-6 mt-10 flex flex-col gap-50">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] rounded-4xl p-5 md:p-6 border border-white/8 overflow-visible"
          >
            {/* Background Number */}
            <img
              src={`/Project/Number${["One", "Two", "Three", "Four"][index]}.svg`}
              alt={`Project ${index + 1}`}
              className="absolute top-0 right-0 w-32 md:w-36 lg:w-40 h-auto z-0 select-none pointer-events-none transform -translate-y-1/2 translate-x-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-10 items-center">
              {/* Vertical Tags - Left Side */}
              <div className="hidden md:flex md:col-span-1 h-full items-center justify-start pl-2">
                <div
                  className="text-[10px] font-bold tracking-[0.25em] text-zinc-600 uppercase whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {project.tags.join(" ")}
                </div>
              </div>

              {/* Project Image - Center */}
              <div className="col-span-1 md:col-span-6 flex justify-center py-2 md:py-3">
                <div
                  className={`relative w-full max-w-sm aspect-4/5 rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ${!project.image ? "bg-linear-to-br from-[#7c3aed] via-[#8b5cf6] to-[#6366f1]" : ""}`}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      {/* 3D Floating Shapes */}
                      <div
                        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70%] h-[25%] rounded-full blur-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
                          transform:
                            "translateX(-50%) perspective(800px) rotateX(60deg)",
                          boxShadow: "0 30px 60px rgba(139, 92, 246, 0.4)",
                        }}
                      />

                      <div
                        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[85%] h-[28%] rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #fbbf24 0%, #fb923c 50%, #f472b6 100%)",
                          transform:
                            "translateX(-50%) perspective(800px) rotateX(68deg)",
                          boxShadow: "0 40px 80px rgba(251, 191, 36, 0.5)",
                        }}
                      />

                      <div
                        className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[75%] h-[26%] rounded-full blur-[1px]"
                        style={{
                          background:
                            "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                          transform:
                            "translateX(-50%) perspective(800px) rotateX(65deg)",
                          boxShadow: "0 35px 70px rgba(59, 130, 246, 0.4)",
                        }}
                      />

                      {/* Small accent dots */}
                      <div className="absolute top-[45%] right-[20%] w-4 h-4 rounded-full bg-linear-to-br from-purple-400 to-purple-600 shadow-lg" />
                      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-linear-to-br from-yellow-200 to-yellow-400 shadow-md" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="col-span-1 md:col-span-5 flex flex-col justify-center gap-5 md:pl-4">
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none mb-2">
                    {project.title.split(" ")[0]}
                  </h3>
                  {project.title.split(" ").length > 1 && (
                    <p className="text-lg md:text-xl text-zinc-400 font-light tracking-wide">
                      {project.title.split(" ").slice(1).join(" ")}
                    </p>
                  )}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="relative text-secondary/80 text-xs md:text-sm font-bold tracking-[0.3em] uppercase hover:text-secondary transition-colors w-fit pb-1 border-b-2 border-secondary/80 hover:border-secondary"
                >
                  View Details
                </Link>

                <div className="flex gap-5 mt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-secondary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-secondary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
