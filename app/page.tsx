"use client";

import React from "react";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = ["Work", "Services", "About", "Contact"];

const services = [
  {
    icon: <IOSIcon />,
    title: "iOS Development",
    description:
      "Native Swift and SwiftUI applications built to Apple's exacting standards. From concept to App Store.",
  },
  {
    icon: <AndroidIcon />,
    title: "Android Development",
    description:
      "Kotlin-first Android apps with Material You design, optimized for the full diversity of Android devices.",
  },
  {
    icon: <CrossPlatformIcon />,
    title: "Cross-Platform",
    description:
      "React Native and Flutter solutions that deliver truly native performance across both platforms simultaneously.",
  },
  {
    icon: <DesignIcon />,
    title: "UI/UX Design",
    description:
      "Interface design that prioritizes user clarity and delight. Figma prototypes to pixel-perfect implementation.",
  },
];

const projects = [
  {
    name: "Potential Analyzer",
    subtitle: "MAX AI",
    category: "Lifestyle & AI",
    platform: "iOS",
    description:
      "Discover your true potential with AI-powered face symmetry and personality analysis. See how you measure up.",
    colorFrom: "#DD0000",
    colorTo: "#FF6666",
    accent: "#DD0000",
    icon: "/images/max-icon.png",
    screenshot: "/images/max-screenshot.png",
    released: true,
    tag: "Available on App Store",
    appStoreUrl: "https://apps.apple.com/us/app/potential-analyzer-ai/id6757166626?ppid=0f0ffa50-24d6-4cc6-b026-7654298a6906",
  },
  {
    name: "Wardrobe AI",
    subtitle: "Outfit Maker",
    category: "Fashion & AI",
    platform: "iOS",
    description:
      "Your personal AI stylist. Get daily outfit suggestions tailored to your wardrobe and try on looks instantly.",
    colorFrom: "#FF3A5C",
    colorTo: "#FF8FAA",
    accent: "#FF3A5C",
    icon: "/images/wardrobe-icon.png",
    screenshot: "/images/wardrobe-screenshot.png",
    released: true,
    tag: "Available on App Store",
    appStoreUrl: "https://apps.apple.com/us/app/wardrobe-ai-outfit-maker/id6752615624?ppid=b667d076-f3bd-4a28-a832-2868ad586112",
  },
  {
    name: "Dog Translator",
    subtitle: "Woofy",
    category: "Pets & Fun",
    platform: "iOS",
    description:
      "Translate your dog's barks and speak their language. A fun and playful experience for the whole family.",
    colorFrom: "#FD7C02",
    colorTo: "#FFB347",
    accent: "#FD7C02",
    icon: null,
    screenshot: "/images/dog-screenshot.png",
    released: false,
    tag: "Coming Soon",
    appStoreUrl: null,
  },
];

const stats = [
  { value: "3", label: "Apps Launched" },
  { value: "500K+", label: "Downloads" },
  { value: "4.8", label: "Avg App Store Rating" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="#7B2FFF" />
      <path
        d="M7 20V9l7 5.5L21 9v11"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46 790.7 0 663.5 0 541.8c0-207.4 135.4-316.9 269-316.9 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.1-49 192.5-49 30.8 0 133.7 2.6 198.8 99.2zM554 161.1c29.2-35.2 50.1-83.8 50.1-132.4 0-6.4-.6-13.3-1.9-18.5-47.7 1.9-104.6 31.4-138.4 70.5-26.3 30.8-51.3 79.3-51.3 128.6 0 7.1.6 14.2 1.9 20.7 3.8.6 10.3 1.9 16.8 1.9 43.4 0 97-28.5 122.8-70.8z"/>
    </svg>
  );
}

function IOSIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="8" y="2" width="16" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="26" r="1.5" fill="currentColor" />
      <line x1="13" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8 14h16v9a2 2 0 01-2 2H10a2 2 0 01-2-2v-9z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 14V10a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="16" x2="5" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="16" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CrossPlatformIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="6" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="6" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="3" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="3" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="18" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="23.5" cy="23.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AppStoreBadge({ href = "#" }: { href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit hover:opacity-80 transition-opacity duration-200">
      <Image
        src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
        alt="Download on the App Store"
        width={140}
        height={47}
      />
    </a>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Components ───────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-semibold text-white tracking-tight">Mapp Studio</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex bg-[#7B2FFF] text-white text-sm font-semibold px-5 py-2 rounded-full
                     hover:bg-[#9B4FFF] transition-colors duration-200"
        >
          Start a Project
        </button>
        <button className="md:hidden text-white" aria-label="Menu">
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
}

// Single phone shell with a real screenshot inside
function PhoneShell({
  screenshot,
  accent,
  width,
  height,
  comingSoon = false,
}: {
  screenshot: string;
  accent: string;
  width: number;
  height: number;
  comingSoon?: boolean;
}) {
  const radius = Math.round(width * 0.13);
  return (
    <div className="relative flex-shrink-0" style={{ width }}>
      {/* Glow */}
      <div
        className="absolute inset-0 blur-3xl rounded-full scale-75 opacity-50"
        style={{ background: accent }}
      />
      {/* Shell */}
      <div
        className="relative overflow-hidden"
        style={{
          width,
          height,
          borderRadius: radius,
          border: "2px solid rgba(255,255,255,0.14)",
          background: "#000",
          boxShadow: `0 0 60px ${accent}55`,
        }}
      >
        {/* Screenshot fills entire frame — it already includes status bar */}
        <Image
          src={screenshot}
          alt="App screenshot"
          fill
          className="object-cover object-top"
          sizes={`${width}px`}
        />

        {/* Coming soon overlay */}
        {comingSoon && (
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px] flex items-center justify-center z-10">
            <div
              className="px-4 py-2 rounded-full text-xs font-bold tracking-[0.15em] border"
              style={{ background: `${accent}25`, borderColor: `${accent}70`, color: accent }}
            >
              COMING SOON
            </div>
          </div>
        )}

        {/* Home indicator on top of screenshot */}
        <div className="absolute bottom-2 inset-x-0 z-10 flex justify-center">
          <div className="h-1 rounded-full bg-white/30" style={{ width: Math.round(width * 0.35) }} />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const [max, wardrobe, dog] = projects;
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-dot-grid overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(123,47,255,0.08),transparent)]" />

      {/* Copy */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 mb-28">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
          Mobile-First. World-Class.
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-white max-w-3xl">
          We Build Apps <span className="text-gradient-accent">People</span> Actually Use.
        </h1>
        <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
          Mapp Studio crafts iOS experiences that drive engagement, retention, and real-world results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-1">
          <button
            onClick={() => scrollTo("work")}
            className="bg-[#7B2FFF] text-white font-semibold px-7 py-3.5 rounded-full
                       hover:bg-[#9B4FFF] transition-colors duration-200"
            style={{ boxShadow: "0 0 40px rgba(123,47,255,0.3)" }}
          >
            See Our Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-white/20 text-white px-7 py-3.5 rounded-full
                       hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Three phones — fanned */}
      <div className="relative z-10 flex items-end justify-center" style={{ height: "480px", gap: 0 }}>

        {/* Left — Wardrobe AI */}
        <div style={{ transform: "rotate(-10deg) translateX(32px) translateY(10px)", zIndex: 1 }}>
          <PhoneShell screenshot={wardrobe.screenshot} accent={wardrobe.accent} width={185} height={390} />
          <div className="mt-3 flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1.5">
              {wardrobe.icon && (
                <div className="w-5 h-5 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={wardrobe.icon} alt={wardrobe.name} width={20} height={20} className="object-cover" />
                </div>
              )}
              <span className="text-white/75 text-sm font-semibold">{wardrobe.subtitle}</span>
            </div>
            <span className="text-zinc-600 text-xs">{wardrobe.category}</span>
          </div>
        </div>

        {/* Center — MAX AI (featured) */}
        <div style={{ zIndex: 3 }}>
          <div className="relative">
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap z-10"
              style={{ background: max.accent }}
            >
              #1 App
            </div>
            <PhoneShell screenshot={max.screenshot} accent={max.accent} width={220} height={460} />
          </div>
          <div className="mt-3 flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1.5">
              {max.icon && (
                <div className="w-5 h-5 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={max.icon} alt={max.name} width={20} height={20} className="object-cover" />
                </div>
              )}
              <span className="text-white font-semibold">{max.subtitle}</span>
            </div>
            <span className="text-zinc-500 text-xs">{max.category}</span>
          </div>
        </div>

        {/* Right — Dog Translator (coming soon) */}
        <div style={{ transform: "rotate(10deg) translateX(-32px) translateY(10px)", zIndex: 1 }}>
          <PhoneShell screenshot={dog.screenshot} accent={dog.accent} width={185} height={390} comingSoon={!dog.released} />
          <div className="mt-3 flex flex-col items-center gap-0.5">
            <span className="text-white/75 text-sm font-semibold">{dog.subtitle}</span>
            <span className="text-zinc-600 text-xs">{dog.category}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [max, wardrobe, dog] = projects;
  return (
    <section id="work" className="py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
            Our Apps
          </span>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter text-white">
            Apps That Perform
          </h2>
        </div>

        {/* Featured: MAX AI */}
        <div
          className="group rounded-3xl border border-white/[0.06] overflow-hidden mb-5
                     hover:border-white/15 transition-all duration-300"
          style={{ background: "linear-gradient(135deg, rgba(221,0,0,0.07), rgba(255,102,102,0.03))" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <div className="flex flex-col justify-center p-10 lg:p-14">
              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
                  <Image src={max.icon!} alt="MAX AI" width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{max.name}</div>
                  <div className="text-zinc-500 text-sm">{max.subtitle}</div>
                </div>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)" }}
                >
                  <AppleIcon /> iOS
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full text-zinc-400 bg-white/5 border border-white/[0.06]">
                  {max.category}
                </span>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full border"
                  style={{ color: max.accent, borderColor: `${max.accent}40`, background: `${max.accent}15` }}
                >
                  Available on App Store
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg max-w-sm">{max.description}</p>
              <AppStoreBadge href={max.appStoreUrl!} />
            </div>
            {/* Phone */}
            <div
              className="relative flex items-end justify-center pt-12 min-h-[420px] overflow-hidden"
              style={{ background: "linear-gradient(160deg, rgba(221,0,0,0.12), rgba(255,102,102,0.05))" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_85%,rgba(221,0,0,0.12),transparent)]" />
              <div className="relative" style={{ transform: "translateY(20px)" }}>
                <PhoneShell screenshot={max.screenshot} accent={max.accent} width={240} height={500} />
              </div>
            </div>
          </div>
        </div>

        {/* Wardrobe + Dog side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[wardrobe, dog].map((project) => (
            <div
              key={project.name}
              className="group rounded-3xl border border-white/[0.06] overflow-hidden
                         hover:border-white/15 transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${project.colorFrom}0A, ${project.colorTo}05)` }}
            >
              {/* Phone preview */}
              <div
                className="relative flex items-end justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${project.colorFrom}14, ${project.colorTo}08)`,
                  minHeight: "340px",
                  paddingTop: "32px",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_90%,rgba(0,0,0,0.3),transparent)]" />
                <div
                  className="absolute top-3 right-4 w-20 h-20 rounded-full blur-3xl opacity-35"
                  style={{ background: project.colorFrom }}
                />
                <div className="relative" style={{ transform: "translateY(12px)" }}>
                  <PhoneShell
                    screenshot={project.screenshot}
                    accent={project.accent}
                    width={175}
                    height={365}
                    comingSoon={!project.released}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="p-7">
                {/* Icon + name header */}
                <div className="flex items-center gap-3 mb-4">
                  {project.icon ? (
                    <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                      <Image src={project.icon} alt={project.name} width={44} height={44} className="object-cover" />
                    </div>
                  ) : (
                    <div
                      className="w-11 h-11 rounded-xl flex-shrink-0 border border-white/10 flex items-center justify-center text-lg"
                      style={{ background: `${project.accent}20` }}
                    >
                      🐾
                    </div>
                  )}
                  <div>
                    <div className="text-white font-bold leading-tight">{project.name}</div>
                    <div className="text-zinc-500 text-xs">{project.subtitle}</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={{ color: "#fff", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)" }}
                  >
                    <AppleIcon /> iOS
                  </span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      color: project.released ? project.accent : project.accent,
                      borderColor: `${project.accent}40`,
                      background: `${project.accent}12`,
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                <p className="text-zinc-400 leading-relaxed text-sm mb-5">{project.description}</p>

                {project.released ? (
                  <AppStoreBadge href={project.appStoreUrl!} />
                ) : (
                  <span className="text-sm font-medium text-zinc-600 flex items-center gap-2">
                    In development
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
            What We Do
          </span>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter text-white">
            End-to-End Mobile
            <br />
            Development
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06]
                         hover:border-[#7B2FFF]/40 hover:bg-[#0D0D0D] transition-all duration-300 cursor-default"
            >
              <div className="text-[#7B2FFF] mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
            About the Studio
          </span>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter text-white mb-8">
            Built by Makers,
            <br />
            for Makers
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-5">
            Mapp Studio was founded on a simple belief: great mobile apps require equal
            parts engineering rigor and design obsession. We&apos;re a focused team of
            engineers, designers, and strategists who have shipped products loved by
            hundreds of thousands of people worldwide.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            We specialize in AI-powered iOS apps — blending cutting-edge machine learning
            with intuitive, polished interfaces. Every pixel, every interaction, every
            millisecond of load time matters to us — because it matters to your users.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:pt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] flex items-center gap-6"
            >
              <div className="text-4xl font-bold text-[#7B2FFF] font-mono tracking-tighter flex-shrink-0">
                {stat.value}
              </div>
              <div className="h-8 w-px bg-white/10 flex-shrink-0" />
              <div className="text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <>
      <section id="contact" className="py-32 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
            {"Let's Build"}
          </span>
          <h2 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 max-w-2xl mx-auto">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
            Tell us about your idea. We&apos;ll be straight with you about timelines,
            scope, and fit.
          </p>
          <a
            href="mailto:contact@mapp.studio"
            className="inline-flex bg-[#7B2FFF] text-white font-semibold px-8 py-4 rounded-full text-lg
                       hover:bg-[#9B4FFF] transition-colors duration-200"
            style={{ boxShadow: "0 0 50px rgba(123,47,255,0.25)" }}
          >
            Start a Project
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-semibold text-white">Mapp Studio</span>
          </a>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <span className="text-sm text-zinc-600">© 2026 Mapp Studio</span>
        </div>
      </footer>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
