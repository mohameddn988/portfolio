"use client";

import React, { use, useState } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  const { t } = useI18n();

  if (!project) {
    notFound();
  }

  // State for the main image
  const [mainImage, setMainImage] = useState(
    (project.gallery && project.gallery[0]) || "",
  );

  const handleGalleryImageClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-16 px-[1.6rem] md:px-[1.6rem] overflow-hidden">
        <div className="max-w-[57.6rem] mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-[0.6rem] md:gap-[0.4rem] text-zinc-400 hover:text-secondary transition-colors mb-[2.4rem] group"
          >
            <svg
              className="w-5 h-5 md:w-4 md:h-4 transition-transform group-hover:-translate-x-1"
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
            {t("projectDetail.backToProjects")}
          </Link>

          <h1 className="text-[2rem] md:text-[3rem] font-bold text-white mb-[1.2rem]">
            {t(project.title)}
          </h1>

          <p className="text-[1.1rem] md:text-[1.2rem] text-zinc-400 leading-relaxed max-w-184 text-justify min-h-62">
            {t(project.description)}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-[1.6rem] mt-[1.6rem] text-[0.9rem] md:text-[0.8rem]">
            {project.year && (
              <div>
                <span className="text-zinc-500 block mb-[0.2rem]">
                  {t("projectDetail.year")}
                </span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
            )}
            {project.role && (
              <div>
                <span className="text-zinc-500 block mb-[0.2rem]">
                  {t("projectDetail.role")}
                </span>
                <span className="text-white font-medium">
                  {t(project.role)}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-[0.8rem] mt-[1.6rem]">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[1.8rem] md:px-[1.6rem] py-4 md:py-[0.8rem] bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold text-[0.9rem] md:text-[0.8rem] transition-all hover:scale-105"
              >
                {t("projectDetail.visitLiveSite")}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[1.4rem] md:px-[1.2rem] py-[0.8rem] md:py-[0.6rem] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold text-[0.9rem] md:text-[0.8rem] transition-all hover:scale-105 flex items-center gap-[0.6rem] md:gap-[0.4rem]"
              >
                <svg
                  className="w-5 h-5 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t("projectDetail.viewSourceCode")}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      {mainImage && (
        <section className="hidden md:block px-[1.6rem] md:px-[1.6rem] mb-16">
          <div className="max-w-[57.6rem] mx-auto">
            <div className="relative w-full aspect-16/8 rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-primary">
              <Image
                src={mainImage}
                alt={t(project.title)}
                fill
                className="object-fill"
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-[1.6rem] md:px-[1.6rem] mb-16">
          <div className="max-w-[57.6rem] mx-auto">
            <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-white mb-[1.6rem]">
              {t("projectDetail.projectGallery")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[1.2rem]">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-16/8 rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-primary"
                  onClick={() => handleGalleryImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`${t(project.title)} - ${t("projectDetail.imageLabel")} ${index + 1}`}
                    fill
                    className="object-fill"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="px-[1.6rem] md:px-[1.6rem] mb-16">
          <div className="max-w-[44.8rem] mx-auto">
            <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-white mb-[1.6rem]">
              {t("projectDetail.keyFeatures")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.8rem] md:gap-[0.8rem]">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[0.8rem] md:gap-[0.6rem] p-4 md:p-[0.8rem] bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="w-4 h-4 md:w-[1.2rem] md:h-[1.2rem] rounded-full bg-[#a78bfa]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 md:w-[0.8rem] md:h-[0.8rem] text-[#a78bfa]"
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
                  <span className="text-zinc-300 text-[0.9rem] md:text-[0.8rem]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="px-[1.6rem] md:px-[1.6rem] mb-16">
          <div className="max-w-[44.8rem] mx-auto">
            <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-white mb-[1.6rem]">
              {t("projectDetail.technologiesUsed")}
            </h2>
            <div className="flex flex-wrap gap-[0.8rem] md:gap-[0.6rem]">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 md:px-[0.8rem] py-[0.6rem] md:py-[0.4rem] bg-linear-to-br from-[#a78bfa]/20 to-[#7c3aed]/20 border border-[#a78bfa]/30 rounded-lg text-white font-medium text-[0.9rem] md:text-[0.8rem]"
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
        <section className="px-[1.6rem] md:px-[1.6rem] mb-16">
          <div className="max-w-[44.8rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.2rem] md:gap-[1.6rem]">
              {project.challenges && (
                <div className="p-[1.4rem] md:p-[1.6rem] bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-[1.4rem] md:text-[1.5rem] font-bold text-white mb-[0.4rem] flex items-center gap-[0.6rem]">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-red-400"
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
                    {t("projectDetail.challenges")}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-justify text-[0.9rem] md:text-[0.8rem] min-h-37">
                    {t(project.challenges!)}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-[1.4rem] md:p-[1.6rem] bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-[1.4rem] md:text-[1.5rem] font-bold text-white mb-[0.4rem] flex items-center gap-[0.6rem]">
                    <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-400"
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
                    {t("projectDetail.solution")}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-justify text-[0.9rem] md:text-[0.8rem]">
                    {t(project.solution!)}
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
