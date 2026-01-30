"use client";

import React, { use, useState } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // State for the main image
  const [mainImage, setMainImage] = useState(
    project.image || (project.gallery && project.gallery[0]) || "",
  );

  const handleGalleryImageClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-secondary transition-colors mb-12 group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          {/* Project Title and Meta */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-8 mt-8 text-sm">
              {project.year && (
                <div>
                  <span className="text-zinc-500 block mb-1">Year</span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>
              )}
              {project.role && (
                <div>
                  <span className="text-zinc-500 block mb-1">Role</span>
                  <span className="text-white font-medium">{project.role}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold transition-all hover:scale-105"
                >
                  Visit Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold transition-all hover:scale-105 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {mainImage && (
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-primary">
              <Image
                src={mainImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-primary"
                  onClick={() => handleGalleryImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {project.detailedDescription && (
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About the Project
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-[#a78bfa]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#a78bfa]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-linear-to-br from-[#a78bfa]/20 to-[#7c3aed]/20 border border-[#a78bfa]/30 rounded-lg text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solution */}
      {(project.challenges || project.solution) && (
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.challenges && (
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </span>
                    Challenges
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    Solution
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
