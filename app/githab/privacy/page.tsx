import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – GitHab",
  description: "Privacy policy for GitHab.",
};

const ACCENT = "#22C55E";

export default function GitHabPrivacy() {
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
          <span className="text-white text-sm">Privacy Policy</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">
          Privacy Policy
        </h1>
        <p className="font-semibold mb-2" style={{ color: ACCENT }}>GitHab</p>
        <p className="text-zinc-500 text-sm mb-12">Last updated: March 7, 2026</p>

        <Section title="Overview">
          <p className="text-zinc-400 leading-relaxed">
            GitHab is a habit tracking app. This policy explains what data the app handles and how.
          </p>
        </Section>

        <Section title="Data Collection">
          <p className="text-zinc-400 leading-relaxed mb-5 font-semibold text-white">
            GitHab does not collect any personal data.
          </p>
          <List items={[
            "No account registration is required.",
            "No information is transmitted to any server.",
            "No analytics, crash reporting, or advertising SDKs are used.",
          ]} />
        </Section>

        <Section title="Data Storage">
          <p className="text-zinc-400 leading-relaxed">
            All data created in the app — habit cards, completion records, and preferences — is stored{" "}
            <span className="text-white font-semibold">exclusively on your device</span> using Apple&apos;s
            standard local storage (UserDefaults / AppStorage).
          </p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            This data never leaves your device and is not accessible to the developer or any third party.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p className="text-zinc-400 leading-relaxed">
            GitHab does not integrate any third-party services, SDKs, or APIs.
          </p>
        </Section>

        <Section title="iCloud">
          <p className="text-zinc-400 leading-relaxed">
            GitHab does not use iCloud sync. Your data is local to the device it was created on.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p className="text-zinc-400 leading-relaxed">
            GitHab does not collect data from anyone, including children under 13.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p className="text-zinc-400 leading-relaxed">
            If this policy changes in a future version, the updated policy will be available in the App Store listing and in this document.
          </p>
        </Section>

        <Section title="Contact">
          <p className="text-zinc-400 leading-relaxed mb-6">
            For questions about this privacy policy, contact:
          </p>
          <a
            href="mailto:contact@mapp.studio"
            className="inline-flex items-center gap-2.5 text-white font-semibold px-6 py-3 rounded-full
                       hover:opacity-80 transition-opacity duration-200"
            style={{ background: ACCENT }}
          >
            Contact
          </a>
        </Section>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-zinc-400 leading-relaxed">
          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
          {item}
        </li>
      ))}
    </ul>
  );
}
