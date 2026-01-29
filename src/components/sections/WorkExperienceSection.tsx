"use client";

import React from "react";
import { workExperiences } from "@/data/workExperience";

const WorkExperienceSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Title and View Resume */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
              WORK EXPERIENCE
            </h2>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">
              My journey so far
            </p>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-semibold text-lg group"
          >
            View resume
            <span className="text-2xl transition-transform group-hover:translate-x-1">
              👈
            </span>
          </a>
        </div>

        {/* Sticky Experience Cards */}
        <div className="relative space-y-8">
          {workExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="sticky bg-primary"
              style={{
                top: `${80 + index * 20}px`,
                zIndex: workExperiences.length - index,
              }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1d] to-[#0f0f11] border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-white/20">
                <div className="flex gap-6 items-start">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      {experience.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={experience.logo}
                          alt={experience.company}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                      ) : (
                        <span className="text-xl md:text-2xl font-bold text-white/20">
                          {experience.company.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Period */}
                    <p className="text-sm text-zinc-500 mb-3 italic">
                      {experience.period}
                    </p>

                    {/* Company & Role Combined */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {experience.company} - {experience.role}
                    </h3>

                    {/* Description */}
                    {experience.description && (
                      <p className="text-zinc-400 mb-6 leading-relaxed">
                        {experience.description}
                      </p>
                    )}

                    {/* Responsibilities */}
                    {experience.responsibilities &&
                      experience.responsibilities.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-zinc-400"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Technologies */}
                    {experience.technologies &&
                      experience.technologies.length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-96"></div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
