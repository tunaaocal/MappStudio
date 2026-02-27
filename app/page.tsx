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
    name: "Pulse",
    category: "Health & Fitness",
    platform: "iOS",
    description:
      "A beautiful workout tracker that gets out of your way and lets you focus on training.",
    colorFrom: "#7B2FFF",
    colorTo: "#00BFFF",
    accent: "#7B2FFF",
    tag: "1.2M Downloads",
    screens: ["dashboard", "stats", "workout"],
  },
  {
    name: "Orbit",
    category: "Social",
    platform: "iOS & Android",
    description:
      "Location-aware social discovery connecting people through shared interests and proximity.",
    colorFrom: "#FF2D78",
    colorTo: "#7B2FFF",
    accent: "#FF2D78",
    tag: "4.8 ★ App Store",
    screens: ["feed", "map", "profile"],
  },
  {
    name: "Vault",
    category: "Finance",
    platform: "Cross-Platform",
    description:
      "Personal finance made elegant. Budget, save, and invest from one unified dashboard.",
    colorFrom: "#00C896",
    colorTo: "#7B2FFF",
    accent: "#00C896",
    tag: "Top Finance App",
    screens: ["balance", "chart", "cards"],
  },
];

const stats = [
  { value: "50+", label: "Apps Launched" },
  { value: "8M+", label: "Users Reached" },
  { value: "4.9", label: "Avg App Store Rating" },
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

// App-specific phone screens
function PulseScreen() {
  return (
    <div className="mt-10 px-3 py-3 flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-1">
        <div>
          <div className="w-12 h-2 bg-white/30 rounded-full mb-1" />
          <div className="w-20 h-3.5 bg-white/80 rounded-full" />
        </div>
        <div className="w-9 h-9 rounded-full bg-[#7B2FFF]/30 border border-[#7B2FFF]/50 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#7B2FFF]/70" />
        </div>
      </div>
      {/* Heart rate card */}
      <div className="rounded-2xl p-3 border border-white/8" style={{ background: "linear-gradient(135deg, rgba(123,47,255,0.35), rgba(0,191,255,0.2))" }}>
        <div className="w-14 h-2 bg-white/40 rounded-full mb-2" />
        <div className="text-white font-bold text-2xl leading-none mb-1" style={{ fontFamily: "monospace" }}>
          <span className="opacity-90">142</span>
          <span className="text-xs font-normal opacity-50 ml-1">bpm</span>
        </div>
        {/* Mini waveform */}
        <svg viewBox="0 0 100 24" className="w-full h-6 mt-1">
          <polyline points="0,12 10,12 15,4 20,20 25,12 35,12 40,6 45,18 50,12 60,12 65,3 70,21 75,12 85,12 90,7 95,17 100,12" fill="none" stroke="rgba(123,47,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-1.5">
        {[["2.4k", "Steps"], ["380", "Cal"], ["6.2", "km"]].map(([v, l]) => (
          <div key={l} className="rounded-xl bg-[#111] border border-white/5 py-2 flex flex-col items-center gap-0.5">
            <span className="text-[#7B2FFF] text-sm font-bold leading-none">{v}</span>
            <span className="text-white/30 text-[9px]">{l}</span>
          </div>
        ))}
      </div>
      {/* Workout list */}
      {[["Morning Run", "32 min"], ["Strength", "45 min"], ["Yoga", "20 min"]].map(([name, dur]) => (
        <div key={name} className="flex items-center gap-2.5 py-0.5">
          <div className="w-8 h-8 rounded-xl flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(123,47,255,0.5), rgba(0,191,255,0.3))" }} />
          <div className="flex-1">
            <div className="w-full h-2 bg-white/25 rounded-full mb-1" />
            <div className="w-10 h-1.5 bg-white/12 rounded-full" />
          </div>
          <div className="w-8 h-2 bg-white/15 rounded-full" />
        </div>
      ))}
    </div>
  );
}

function OrbitScreen() {
  return (
    <div className="mt-10 px-3 py-3 flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-1">
        <div className="w-20 h-3.5 bg-white/80 rounded-full" />
        <div className="flex gap-1.5">
          <div className="w-7 h-7 rounded-full bg-[#FF2D78]/20 border border-[#FF2D78]/40" />
          <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10" />
        </div>
      </div>
      {/* Map card */}
      <div className="h-28 rounded-2xl relative overflow-hidden border border-white/8" style={{ background: "linear-gradient(135deg, rgba(255,45,120,0.2), rgba(123,47,255,0.25))" }}>
        {/* Map grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="25" y1="0" x2="25" y2="100" stroke="white" strokeWidth="0.5"/>
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5"/>
          <line x1="75" y1="0" x2="75" y2="100" stroke="white" strokeWidth="0.5"/>
          <line x1="0" y1="33" x2="100" y2="33" stroke="white" strokeWidth="0.5"/>
          <line x1="0" y1="66" x2="100" y2="66" stroke="white" strokeWidth="0.5"/>
        </svg>
        {/* Location pins */}
        <div className="absolute top-4 left-8 w-4 h-4 rounded-full bg-[#FF2D78] border-2 border-white/80" />
        <div className="absolute top-8 right-10 w-3 h-3 rounded-full bg-[#7B2FFF] border-2 border-white/60" />
        <div className="absolute bottom-5 left-12 w-3 h-3 rounded-full bg-white/60 border border-white/40" />
      </div>
      {/* People nearby */}
      <div className="flex items-center gap-2 px-1">
        <div className="flex -space-x-2">
          {["#FF2D78", "#7B2FFF", "#00C896", "#FF8C00"].map((c) => (
            <div key={c} className="w-7 h-7 rounded-full border-2 border-black" style={{ background: c }} />
          ))}
        </div>
        <div className="w-20 h-2 bg-white/20 rounded-full" />
      </div>
      {/* Feed items */}
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: `hsl(${i * 80 + 320}, 80%, 55%)` }} />
          <div className="flex-1 pt-0.5">
            <div className="w-full h-2 bg-white/25 rounded-full mb-1.5" />
            <div className="w-4/5 h-1.5 bg-white/12 rounded-full mb-1.5" />
            <div className="flex gap-2">
              <div className="w-6 h-1.5 bg-[#FF2D78]/50 rounded-full" />
              <div className="w-6 h-1.5 bg-white/15 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VaultScreen() {
  return (
    <div className="mt-10 px-3 py-3 flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between px-1 mb-1">
        <div>
          <div className="w-10 h-2 bg-white/30 rounded-full mb-1" />
          <div className="w-24 h-3.5 bg-white/80 rounded-full" />
        </div>
        <div className="w-8 h-8 rounded-full bg-[#00C896]/20 border border-[#00C896]/40" />
      </div>
      {/* Balance card */}
      <div className="rounded-2xl p-3 border border-white/8" style={{ background: "linear-gradient(135deg, rgba(0,200,150,0.3), rgba(123,47,255,0.2))" }}>
        <div className="w-12 h-1.5 bg-white/30 rounded-full mb-1" />
        <div className="font-bold text-xl text-white mb-2 leading-none" style={{ fontFamily: "monospace" }}>
          $24,891
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#00C896" : "rgba(0,200,150,0.3)" }} />
          ))}
        </div>
      </div>
      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-1.5">
        {[["Income", "+$3,240", "#00C896"], ["Spending", "-$1,180", "#FF2D78"]].map(([label, val, color]) => (
          <div key={label} className="rounded-xl bg-[#111] border border-white/5 p-2.5">
            <div className="w-10 h-1.5 bg-white/20 rounded-full mb-1.5" />
            <div className="text-sm font-bold" style={{ color }}>{val}</div>
          </div>
        ))}
      </div>
      {/* Transactions */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex-shrink-0 bg-[#111] border border-white/5" />
          <div className="flex-1">
            <div className="w-20 h-2 bg-white/25 rounded-full mb-1" />
            <div className="w-12 h-1.5 bg-white/12 rounded-full" />
          </div>
          <div className="w-10 h-2 bg-white/20 rounded-full" />
        </div>
      ))}
    </div>
  );
}

function AppPhone({
  screen,
  colorFrom,
  colorTo,
  glowColor,
  rotate = 0,
  scale = 1,
  zIndex = 0,
}: {
  screen: React.ReactNode;
  colorFrom: string;
  colorTo: string;
  glowColor: string;
  rotate?: number;
  scale?: number;
  zIndex?: number;
}) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ transform: `rotate(${rotate}deg) scale(${scale})`, zIndex, transformOrigin: "bottom center" }}
    >
      <div
        className="absolute inset-0 blur-2xl rounded-full scale-75 opacity-60"
        style={{ background: glowColor }}
      />
      <div
        className="relative w-[200px] h-[420px] rounded-[34px] border border-white/15 bg-[#0A0A0A] overflow-hidden"
        style={{ boxShadow: `0 0 60px ${glowColor}40` }}
      >
        {/* Dynamic status bar gradient */}
        <div className="absolute top-0 inset-x-0 h-9 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="w-16 h-4 rounded-b-xl" style={{ background: "rgba(0,0,0,0.8)" }} />
        </div>
        {screen}
        {/* Home indicator */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center">
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
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
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:flex bg-[#7B2FFF] text-white text-sm font-semibold px-5 py-2 rounded-full
                     hover:bg-[#9B4FFF] transition-colors duration-200"
        >
          Start a Project
        </a>
        <button className="md:hidden text-white" aria-label="Menu">
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-dot-grid overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(123,47,255,0.1),transparent)]" />

      {/* Copy — centered */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 mb-16">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
          Mobile-First. World-Class.
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-white max-w-3xl">
          We Build Apps <span className="text-gradient-accent">People</span> Actually Use.
        </h1>
        <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
          Mapp Studio crafts iOS, Android, and cross-platform experiences that drive
          engagement, retention, and real-world results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-1">
          <a
            href="#work"
            className="bg-[#7B2FFF] text-white font-semibold px-7 py-3.5 rounded-full
                       hover:bg-[#9B4FFF] transition-colors duration-200"
            style={{ boxShadow: "0 0 40px rgba(123,47,255,0.3)" }}
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white px-7 py-3.5 rounded-full
                       hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Three phones — fanned */}
      <div className="relative z-10 flex items-end justify-center gap-0" style={{ height: "460px" }}>
        {/* Left phone — Pulse */}
        <div className="relative" style={{ transform: "rotate(-10deg) translateX(30px)", zIndex: 1 }}>
          <div className="absolute inset-0 blur-2xl rounded-full scale-75 opacity-50" style={{ background: "#7B2FFF" }} />
          <div
            className="relative w-[185px] h-[390px] rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden"
            style={{ boxShadow: "0 0 50px rgba(123,47,255,0.3)" }}
          >
            <div className="absolute top-0 inset-x-0 h-8 bg-black/60 flex items-center justify-center">
              <div className="w-14 h-3.5 bg-black/80 rounded-b-xl" />
            </div>
            <PulseScreen />
            <div className="absolute bottom-2 inset-x-0 flex justify-center">
              <div className="w-16 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
          {/* App label */}
          <div className="mt-3 flex flex-col items-center gap-1">
            <span className="text-white/80 text-sm font-semibold">Pulse</span>
            <span className="text-zinc-600 text-xs">Health & Fitness</span>
          </div>
        </div>

        {/* Center phone — Orbit (featured, largest) */}
        <div className="relative" style={{ zIndex: 3 }}>
          <div className="absolute inset-0 blur-3xl rounded-full scale-90 opacity-60" style={{ background: "#FF2D78" }} />
          <div
            className="relative w-[215px] h-[450px] rounded-[38px] border-2 border-white/15 bg-[#0A0A0A] overflow-hidden"
            style={{ boxShadow: "0 0 80px rgba(255,45,120,0.25), 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            <div className="absolute top-0 inset-x-0 h-9 bg-black/60 flex items-center justify-center">
              <div className="w-16 h-4 bg-black/80 rounded-b-xl" />
            </div>
            <OrbitScreen />
            <div className="absolute bottom-2 inset-x-0 flex justify-center">
              <div className="w-20 h-1 bg-white/25 rounded-full" />
            </div>
          </div>
          {/* Featured badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF2D78] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
            Featured
          </div>
          <div className="mt-3 flex flex-col items-center gap-1">
            <span className="text-white font-semibold">Orbit</span>
            <span className="text-zinc-500 text-xs">Social Discovery</span>
          </div>
        </div>

        {/* Right phone — Vault */}
        <div className="relative" style={{ transform: "rotate(10deg) translateX(-30px)", zIndex: 1 }}>
          <div className="absolute inset-0 blur-2xl rounded-full scale-75 opacity-50" style={{ background: "#00C896" }} />
          <div
            className="relative w-[185px] h-[390px] rounded-[32px] border border-white/10 bg-[#0A0A0A] overflow-hidden"
            style={{ boxShadow: "0 0 50px rgba(0,200,150,0.25)" }}
          >
            <div className="absolute top-0 inset-x-0 h-8 bg-black/60 flex items-center justify-center">
              <div className="w-14 h-3.5 bg-black/80 rounded-b-xl" />
            </div>
            <VaultScreen />
            <div className="absolute bottom-2 inset-x-0 flex justify-center">
              <div className="w-16 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center gap-1">
            <span className="text-white/80 text-sm font-semibold">Vault</span>
            <span className="text-zinc-600 text-xs">Personal Finance</span>
          </div>
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

function PortfolioSection() {
  return (
    <section id="work" className="py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7B2FFF]">
            Selected Work
          </span>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter text-white">
            Apps That Perform
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl bg-[#0A0A0A] border border-white/[0.06]
                         hover:border-white/20 overflow-hidden transition-all duration-300"
            >
              <div
                className="h-52 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.colorFrom}22, ${project.colorTo}22)`,
                }}
              >
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-25"
                  style={{ background: project.colorFrom }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-36 rounded-[14px] border border-white/10 bg-black/60
                                flex flex-col items-center justify-center gap-2 px-2"
                  >
                    <div className="w-full h-2 bg-white/20 rounded-full" />
                    <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
                    <div
                      className="mt-1 w-10 h-10 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5
                                text-zinc-400 border border-white/[0.06]"
                  >
                    {project.platform}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{project.description}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-[#7B2FFF] hover:text-white transition-colors duration-200
                             flex items-center gap-2"
                >
                  View Case Study <span>→</span>
                </a>
              </div>
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
            engineers, designers, and strategists who have shipped products used by
            millions of people worldwide.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            We work with founders, growth-stage startups, and established brands who
            understand that their mobile app is their primary touchpoint with the world.
            Every pixel, every interaction, every millisecond of load time matters to us
            — because it matters to your users.
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
            href="mailto:hello@mappstudio.com"
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
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <span className="text-sm text-zinc-600">© 2026 Mapp Studio</span>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-200" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Nav />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
