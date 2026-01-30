"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-primary">
      <SectionTitle
        title="All Projects"
        backgroundText="PROJECTS"
        subtitle="A showcase of my work"
      />

      {/* Filter Buttons */}
      <div className="max-w-250 mx-auto px-4 md:px-6 mt-10 flex justify-center gap-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all ${
            filter === "all"
              ? "bg-secondary text-primary shadow-lg shadow-secondary/50"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          ALL PROJECTS ({projects.length})
        </button>
        <button
          onClick={() => setFilter("featured")}
          className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all ${
            filter === "featured"
              ? "bg-secondary text-primary shadow-lg shadow-secondary/50"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          FEATURED ({projects.filter((p) => p.featured).length})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="max-w-350 mx-auto px-4 md:px-6 mt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] rounded-2xl p-6 border border-white/8 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1 flex flex-col min-h-125"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative w-full aspect-16/8 rounded-xl overflow-hidden mb-5 shadow-lg">
                {project.gallery && project.gallery[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.gallery[0]}
                    alt={project.title}
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
                <div className="min-h-12 mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors line-clamp-1 leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description - Fixed height for 3 lines */}
                <div className="min-h-16 mb-4">
                  <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-semibold text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Year and Role */}
                <div className="flex items-center gap-4 mb-4 text-xs text-zinc-500">
                  {project.year && (
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                        width="14"
                        height="14"
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
                      {project.role}
                    </span>
                  )}
                </div>

                {/* View Details Link - Always at bottom */}
                <div className="mt-auto pt-3">
                  <span className="text-secondary/80 text-xs font-bold tracking-[0.3em] uppercase group-hover:text-secondary transition-colors inline-flex items-center gap-2">
                    VIEW DETAILS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No projects found</p>
          </div>
        )}
      </div>
    </main>
  );
}
