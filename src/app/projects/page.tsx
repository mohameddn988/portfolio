"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const { t } = useI18n();

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-primary">
      <SectionTitle
        title={t("projects.title")}
        backgroundText={t("projects.backgroundText")}
        subtitle={t("projects.subtitle")}
      />

      {/* Filter Buttons */}
      <div className="max-w-200 mx-auto px-[0.8rem] md:px-[1.2rem] mt-8 flex justify-center gap-[0.8rem]">
        <button
          onClick={() => setFilter("all")}
          className={`w-[7.2rem] px-[1.2rem] py-2 rounded-full text-[0.6rem] font-extrabold tracking-wider transition-all ${
            filter === "all"
              ? "bg-secondary text-primary shadow-lg shadow-secondary/50"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          {t("projects.filterAll")}
        </button>
        <button
          onClick={() => setFilter("featured")}
          className={`w-[7.2rem] px-[1.2rem] py-2 rounded-full text-[0.6rem] font-bold tracking-wider transition-all ${
            filter === "featured"
              ? "bg-secondary text-primary shadow-lg shadow-secondary/50"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          {t("projects.filterFeatured")}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="max-w-280 mx-auto px-[1.6rem] md:px-[1.2rem] mt-[2.4rem] pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem] md:gap-[1.6rem]">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] rounded-[0.8rem] p-[1.2rem] border border-white/8 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1 flex flex-col min-h-100"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-[0.8rem] right-[0.8rem] z-10">
                  <span className="bg-secondary text-primary text-[0.6rem] font-bold px-[0.6rem] py-[0.2rem] rounded-full">
                    {t("projectDetail.featured")}
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative w-full aspect-16/8 rounded-xl overflow-hidden mb-4 shadow-lg">
                {project.gallery && project.gallery[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.gallery[0]}
                    alt={t(project.title)}
                    className="w-full h-full object-fill"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-[#7c3aed] via-[#8b5cf6] to-[#6366f1] flex items-center justify-center relative overflow-hidden">
                    {/* Gradient circles */}
                    <div
                      className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] rounded-full blur-md"
                      style={{
                        background:
                          "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
                        transform:
                          "translateX(-50%) perspective(500px) rotateX(60deg)",
                      }}
                    />
                    <div
                      className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[80%] h-[35%] rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #fbbf24 0%, #fb923c 50%, #f472b6 100%)",
                        transform:
                          "translateX(-50%) perspective(500px) rotateX(68deg)",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-col grow">
                {/* Title - Fixed height for 1 line */}
                <div className="min-h-[2.4rem] mb-[0.6rem]">
                  <h3 className="text-[1.2rem] font-bold text-white group-hover:text-secondary transition-colors line-clamp-1 leading-tight">
                    {t(project.title)}
                  </h3>
                </div>

                {/* Description - Fixed height for 3 lines */}
                <div className="min-h-[3.2rem] mb-[0.8rem]">
                  <p className="text-zinc-400 text-[0.7rem] line-clamp-3 leading-relaxed text-justify">
                    {t(project.description)}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex gap-[0.4rem] mb-[0.8rem] overflow-hidden">
                  {project.tags
                    .sort((a, b) => t(a).length - t(b).length)
                    .slice(0, 2)
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="text-[0.6rem] font-semibold text-zinc-500 bg-white/5 px-[0.6rem] py-[0.2rem] rounded-full border border-white/10 whitespace-nowrap"
                      >
                        {t(tag)}
                      </span>
                    ))}
                  {project.tags.length > 2 && (
                    <span className="text-[0.6rem] font-semibold text-zinc-500 bg-white/5 px-[0.6rem] py-[0.2rem] rounded-full border border-white/10 whitespace-nowrap">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Year and Role */}
                <div className="flex items-center gap-[0.8rem] mb-[0.8rem] text-[0.6rem] text-zinc-500">
                  {project.year && (
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.12rem"
                        height="1.12rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      {project.year}
                    </span>
                  )}
                  {project.role && (
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.12rem"
                        height="1.12rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {t(project.role)}
                    </span>
                  )}
                </div>

                {/* View Details Link - Always at bottom */}
                <div className="mt-auto pt-[0.6rem]">
                  <span className="text-secondary/80 text-[0.6rem] font-bold tracking-[0.3em] uppercase group-hover:text-secondary transition-colors inline-flex items-center gap-[0.4rem]">
                    {t("projects.viewDetails")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.12rem"
                      height="1.12rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-[0.9rem]">
              {t("projects.noProjectsFound")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
