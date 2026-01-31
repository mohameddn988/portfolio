import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import CustomCursor from "@/components/ui/CustomCursor";
import Contact from "@/components/Layout/Contact";
import { I18nProvider } from "@/i18n/I18nProvider";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import LoadingWrapper from "@/components/ui/LoadingWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-deneche-portfolio.vercel.app/"), // Replace with your actual domain
  title: "Deneche Mohamed | Full-Stack & Mobile Developer Portfolio",
  description:
    "Explore the portfolio of Deneche Mohamed, a passionate full-stack and mobile developer specializing in modern web technologies, mobile apps, innovative projects, and creative solutions.",
  keywords: [
    "full-stack developer",
    "mobile developer",
    "web developer",
    "app developer",
    "portfolio",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Deneche Mohamed" }],
  creator: "Deneche Mohamed",
  icons: {
    icon: [
      { url: "/Logo.png", sizes: "any" },
      { url: "/Logo.png", sizes: "16x16", type: "image/png" },
      { url: "/Logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "Deneche Mohamed | Full-Stack & Mobile Developer Portfolio",
    description:
      "Explore the portfolio of Deneche Mohamed, a passionate full-stack and mobile developer specializing in modern web technologies and mobile apps.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/LinkPreviewImage.png",
        width: 1200,
        height: 630,
        alt: "Deneche Mohamed - Full-Stack & Mobile Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deneche Mohamed | Full-Stack & Mobile Developer Portfolio",
    description:
      "Explore the portfolio of Deneche Mohamed, a passionate full-stack and mobile developer specializing in modern web technologies and mobile apps.",
    images: ["/LinkPreviewImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-secondary`}
      >
        <I18nProvider initialLanguage="en" messages={{ en, fr }}>
          <LoadingWrapper>
            <CustomCursor />
            <Header />
            {children}
            <Contact />
          </LoadingWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
