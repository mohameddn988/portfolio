"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/useI18n";
import { SupportedLanguage } from "@/i18n/I18nContext";

export default function Header() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useI18n();

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
              className="w-auto h-12"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-16 backdrop-blur-md px-[2.8rem] py-4 rounded-full">
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

          {/* Right side icons */}
          <div className="flex items-center gap-[1.6rem] backdrop-blur-md px-[1.6rem] py-[0.8rem] rounded-full">
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1 text-white/80 hover:text-secondary transition-colors"
              aria-label={t("header.switchLanguageAria")}
            >
              <span
                className="text-sm font-medium"
                style={{ fontFamily: '"Ahrefs", sans-serif' }}
              >
                {language.charAt(0).toUpperCase() + language.slice(1)}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5007 22.9163C18.2536 22.9163 22.9173 18.2526 22.9173 12.4997C22.9173 6.74671 18.2536 2.08301 12.5007 2.08301C6.74768 2.08301 2.08398 6.74671 2.08398 12.4997C2.08398 18.2526 6.74768 22.9163 12.5007 22.9163Z"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M7.95221 3.19434C8.51519 3.31562 9.03372 3.59007 9.4506 3.9874C9.86748 4.38473 10.1665 4.8895 10.3147 5.44601C10.4628 6.00252 10.4544 6.58914 10.2902 7.14115C10.1261 7.69317 9.8127 8.18911 9.38456 8.57428C8.95641 8.95944 8.4302 9.21885 7.86396 9.32388C7.29772 9.42891 6.71347 9.37548 6.17568 9.16948C5.63789 8.96349 5.16745 8.61294 4.81627 8.15651C4.46509 7.70007 4.24682 7.1555 4.18555 6.58288M22.9178 13.5933C22.5126 13.1798 22.0146 12.8688 21.4652 12.686C20.9159 12.5032 20.3309 12.4539 19.7586 12.5421C19.1864 12.6303 18.6434 12.8535 18.1746 13.1933C17.7058 13.5331 17.3247 13.9796 17.0627 14.496C16.8008 15.0123 16.6656 15.5837 16.6684 16.1626C16.6711 16.7416 16.8117 17.3116 17.0785 17.8255C17.3453 18.3393 17.7307 18.7822 18.2027 19.1175C18.6747 19.4528 19.2198 19.6709 19.7928 19.7537"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M15.1048 8.864L15.1152 8.85254M10.4173 17.7077C10.9699 17.7077 11.4998 17.4883 11.8905 17.0976C12.2812 16.7069 12.5007 16.1769 12.5007 15.6244C12.5007 15.0719 12.2812 14.542 11.8905 14.1513C11.4998 13.7606 10.9699 13.5411 10.4173 13.5411C9.86478 13.5411 9.33488 13.7606 8.94418 14.1513C8.55348 14.542 8.33398 15.0719 8.33398 15.6244C8.33398 16.1769 8.55348 16.7069 8.94418 17.0976C9.33488 17.4883 9.86478 17.7077 10.4173 17.7077Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
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
        </div>
      </div>
    </header>
  );
}
