"use client";

import { workExperiences } from "@/data/workExperience";
import { ArrowRight } from 'lucide-react';

const WorkExperienceSection = () => {
  return (
    <section className="py-10 bg-primary">
      <div className="px-16 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
          {/* Left Column - Title and Resume (Sticky) */}
          <div className="flex flex-col justify-start sticky top-35 md:col-span-2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              WORK EXPERIENCE
            </h2>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-semibold text-xl group w-fit"
            >
              View resume
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="h-[5vh]"></div>
          </div>

          {/* Right Column - Sticky Experience List */}
          <div className="md:col-span-3">
            <div className="space-y-12">
              {workExperiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`sticky bg-primary top-35 z-[${index + 1}]`}
                >
                  <div className="bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] border border-white/10 rounded-3xl p-5 md:p-6">
                    <div className="flex gap-8 items-center">
                      {/* Company Logo */}
                      <div className="shrink-0">
                        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                          {experience.logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={experience.logo}
                              alt={experience.company}
                              className="w-10 h-10 object-contain"
                            />
                          ) : (
                            <span className="text-2xl font-bold text-white/20">
                              {experience.company.charAt(0)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Period */}
                        <p className="text-base text-zinc-500 mb-3">
                          {experience.period}
                        </p>

                        {/* Company & Role Combined */}
                        <h3 className="text-3xl font-bold text-white">
                          {experience.company} - {experience.role}
                        </h3>
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
  );
};

export default WorkExperienceSection;
