"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/useI18n";
import { SupportedLanguage } from "@/i18n/I18nContext";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageSwitch = () => {
    const nextLang: SupportedLanguage = language === "fr" ? "en" : "fr";
    setLanguage(nextLang);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-5xl mx-auto px-[1.6rem]">
        <div className="flex items-center justify-between h-20 py-[1.6rem]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center backdrop-blur-md px-[1.6rem] py-[0.8rem] rounded-full"
          >
            <Image
              src="/Logo.png"
              alt={t("header.logoAlt")}
              width={1148}
              height={1148}
              className="w-auto h-8 md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-16 backdrop-blur-md px-[2.8rem] py-4 rounded-full">
            <Link
              href="/"
              className={`w-[5.6rem] text-center transition-colors text-[0.9rem] font-medium tracking-[0.12em] uppercase ${
                pathname === "/"
                  ? "text-secondary"
                  : "text-white/90 hover:text-secondary"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/projects"
              className={`w-[5.6rem] text-center transition-colors text-[0.9rem] font-medium tracking-[0.12em] uppercase ${
                pathname === "/projects" || pathname?.startsWith("/projects/")
                  ? "text-secondary"
                  : "text-white/90 hover:text-secondary"
              }`}
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="/about"
              className={`w-[5.6rem] text-center transition-colors text-[0.9rem] font-medium tracking-[0.12em] uppercase ${
                pathname === "/about"
                  ? "text-secondary"
                  : "text-white/90 hover:text-secondary"
              }`}
            >
              {t("nav.about")}
            </Link>
          </nav>

          {/* Desktop Right side icons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-[1.6rem] backdrop-blur-md px-[1.6rem] py-[0.8rem] rounded-full">
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1 text-white/80 hover:text-secondary transition-colors"
              aria-label={t("header.switchLanguageAria")}
            >
              <span
                className="text-sm font-medium"
                style={{ fontFamily: '"Ahrefs", sans-serif' }}
              >
                {language.toUpperCase()}
              </span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <Link
              href="mailto:msideneche@gmail.com"
              className="text-white/80 hover:text-secondary transition-colors"
              aria-label={t("header.emailAria")}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center backdrop-blur-md px-[1.2rem] py-[0.8rem] rounded-full text-white/80 hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Visible only when open */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md rounded-3xl p-6 absolute top-full left-0 right-0 z-40 bg-primary/70 border border-white/10">
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-3 transition-colors text-[0.9rem] font-medium tracking-[0.12em] uppercase ${
                  pathname === "/"
                    ? "text-secondary"
                    : "text-white/90 hover:text-secondary"
                }`}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-3 transition-colors text-[0.9rem] font-medium tracking-[0.12em] uppercase ${
                  pathname === "/projects" || pathname?.startsWith("/projects/")
                    ? "text-secondary"
                    : "text-white/90 hover:text-secondary"
                }`}
              >
                {t("nav.projects")}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-center py-3 transition-colors text-[0.9rem] font-medium tracking-[0.12em] uppercase ${
                  pathname === "/about"
                    ? "text-secondary"
                    : "text-white/90 hover:text-secondary"
                }`}
              >
                {t("nav.about")}
              </Link>
            </nav>

            <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
              <button
                onClick={handleLanguageSwitch}
                className="flex items-center gap-1 text-white/80 hover:text-secondary transition-colors"
                aria-label={t("header.switchLanguageAria")}
              >
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: '"Ahrefs", sans-serif' }}
                >
                  {language.toUpperCase()}
                </span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <Link
                href="mailto:msideneche@gmail.com"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label={t("header.emailAria")}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
