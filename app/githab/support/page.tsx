import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support – GitHab",
  description: "Get help with GitHab – Habit Tracker.",
};

const ACCENT = "#22C55E";

export default function GitHabSupport() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-6 py-8 flex items-center gap-3">
          <a href="/" className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">
            Mapp Studio
          </a>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400 text-sm">GitHab</span>
          <span className="text-zinc-700">/</span>
          <span className="text-white text-sm">Support</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">Support</h1>
        <p className="text-zinc-400 text-lg mb-12">We&apos;re here to help.</p>

        {/* Quick Help */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Quick Help
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "My habits are not saving?",
                a: "All data is stored locally on your device. Make sure you have enough storage space available. Restarting the app usually resolves temporary issues.",
              },
              {
                q: "I lost my habit data after reinstalling?",
                a: "GitHab stores all data locally on your device. Data is not backed up to iCloud or any server, so reinstalling the app will reset your data.",
              },
              {
                q: "Notifications are not working?",
                a: "Check that you have granted notification permissions in your device's system settings under Notifications > GitHab.",
              },
              {
                q: "App crashes or bugs?",
                a: "Please update to the latest version from the App Store. If the issue persists, contact us with steps to reproduce.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.06]"
              >
                <p className="font-semibold text-white mb-2">{q}</p>
                <p className="text-zinc-400 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Data */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Privacy &amp; Data
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-2">
            You can review how we handle data on our{" "}
            <a
              href="/githab/privacy"
              className="hover:text-white transition-colors duration-200"
              style={{ color: ACCENT }}
            >
              Privacy Policy
            </a>{" "}
            page.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            GitHab does not collect any personal data. All data lives on your device.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Contact Us
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-2">
            We aim to respond within 1 week.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Please include your device model, OS version, and app version.
          </p>
          <a
            href="mailto:contact@mapp.studio"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-6 py-3 rounded-full
                       hover:opacity-80 transition-opacity duration-200"
            style={{ background: ACCENT }}
          >
            Contact
          </a>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-zinc-600 text-sm">© 2026 Mapp Studio</p>
        </div>
      </div>
    </main>
  );
}
