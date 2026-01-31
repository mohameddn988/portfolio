"use client";

import { workExperiences } from "@/data/workExperience";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";

const WorkExperienceSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-8 bg-primary">
      <div className="px-[3.2rem] md:px-[4.8rem] lg:px-[6.4rem]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[2.4rem] md:gap-16 items-start">
          {/* Left Column - Title and Resume (Sticky) */}
          <div className="flex flex-col justify-start sticky top-28 md:col-span-2">
            <h2 className="text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-bold text-white -my-2 ">
              {t("workExperience.title")}
            </h2>
            <a
              href="/Deneche_Mohamed_CV.pdf"
              download="Deneche_Mohamed_CV.pdf"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-semibold text-lg group w-fit"
            >
              {t("workExperience.viewResume")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="h-[6.5vh]"></div>
          </div>

          {/* Right Column - Sticky Experience List */}
          <div className="md:col-span-3">
            <div className="space-y-[2.4rem]">
              {workExperiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`sticky bg-primary top-28 z-[${index + 1}]`}
                >
                  <div className="bg-linear-to-br from-[#1a1a1d] to-[#0f0f11] border border-white/10 rounded-[0.8rem] p-4 md:p-[1.2rem]">
                    <div className="flex gap-[1.6rem] items-center">
                      {/* Company Logo */}
                      <div className="shrink-0">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[0.8rem] flex items-center justify-center">
                          {experience.logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={experience.logo}
                              alt={t(experience.company)}
                              className={`object-contain filter brightness-0 invert w-full ${experience.height}`}
                            />
                          ) : (
                            <span className="text-[1.2rem] font-bold text-white/20">
                              {t(experience.company).charAt(0)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Period */}
                        <p className="text-[0.8rem] text-zinc-500 mb-[0.6rem]">
                          {t(experience.period)}
                        </p>

                        {/* Company & Role Combined */}
                        <h3 className="text-[1.5rem] font-bold text-white">
                          {t(experience.company)} - {t(experience.role)}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-[3.2vh]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
