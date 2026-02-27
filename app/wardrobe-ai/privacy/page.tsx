import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Wardrobe AI",
  description: "Privacy policy for Wardrobe AI – Outfit Maker.",
};

export default function WardrobePrivacy() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-6 py-8 flex items-center gap-3">
          <a href="/" className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">
            Mapp Studio
          </a>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400 text-sm">Wardrobe AI</span>
          <span className="text-zinc-700">/</span>
          <span className="text-white text-sm">Privacy Policy</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-[#FF3A5C] font-semibold mb-2">Wardrobe AI</p>
        <p className="text-zinc-500 text-sm mb-12">Last Updated: February 2026</p>

        <p className="text-zinc-400 leading-relaxed mb-12">
          Wardrobe AI respects your privacy and is committed to protecting your personal data.
          This policy explains what information we collect, how we use it, and how it is handled.
        </p>

        <Section title="Information We Collect">
          <SubSection title="Photos & User Content">
            <ul className="space-y-2 text-zinc-400 leading-relaxed">
              <li>Photos you upload are used solely to generate AI-powered outfit previews and styling results.</li>
              <li>Photos are never sold, shared with advertisers, or used for tracking.</li>
            </ul>
          </SubSection>

          <SubSection title="Account & Identifiers">
            <p className="text-zinc-400 leading-relaxed mb-3">
              We may generate a unique user or device identifier to:
            </p>
            <List items={[
              "manage subscriptions",
              "enable app features",
              "restore purchases",
              "prevent fraud",
              "provide customer support",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-3">
              These identifiers are used only for app functionality and are not used for advertising tracking.
            </p>
          </SubSection>

          <SubSection title="Subscription & Purchase Data">
            <p className="text-zinc-400 leading-relaxed mb-3">
              Subscription and purchase information is processed securely by:
            </p>
            <List items={["Apple App Store", "RevenueCat"]} />
            <p className="text-zinc-400 leading-relaxed mt-3">
              We receive only the minimum data required to verify subscription status and unlock premium features.
            </p>
          </SubSection>

          <SubSection title="Usage & Analytics Data">
            <p className="text-zinc-400 leading-relaxed mb-3">
              We may collect limited usage and technical information such as:
            </p>
            <List items={[
              "app interactions",
              "feature usage",
              "crashes",
              "performance metrics",
              "device model and OS version",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-3 mb-3">
              This data is used strictly to:
            </p>
            <List items={[
              "improve performance",
              "fix bugs",
              "measure feature effectiveness",
              "enhance user experience",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-3">
              We do <strong className="text-white">NOT</strong> use this data for cross-app tracking or third-party advertising.
            </p>
          </SubSection>
        </Section>

        <Section title="How We Use Your Data">
          <p className="text-zinc-400 leading-relaxed mb-3">We use collected data only to:</p>
          <List items={[
            "generate outfit previews",
            "provide subscription access",
            "maintain app functionality",
            "improve reliability and performance",
            "provide support",
          ]} />
          <p className="text-zinc-400 leading-relaxed mt-4">
            We do not sell personal information.
          </p>
        </Section>

        <Section title="Data Sharing">
          <p className="text-zinc-400 leading-relaxed mb-3">
            We do not share your personal data with advertisers or data brokers.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-3">
            Limited data may be processed by trusted service providers strictly for app operations, including:
          </p>
          <List items={[
            "Apple (payments & subscriptions)",
            "RevenueCat (subscription management)",
            "Backend infrastructure providers (e.g., hosting/servers)",
          ]} />
          <p className="text-zinc-400 leading-relaxed mt-3">
            These providers process data only on our behalf.
          </p>
        </Section>

        <Section title="Tracking">
          <p className="text-zinc-400 leading-relaxed mb-2">
            Wardrobe AI does not use cross-app tracking, advertising identifiers, or third-party data brokers.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            We do not track users across apps or websites for targeted advertising.
          </p>
        </Section>

        <Section title="Data Retention">
          <ul className="space-y-2 text-zinc-400 leading-relaxed">
            <li>Photos may be temporarily stored to generate results and then automatically deleted.</li>
            <li>Analytics data is retained only as long as necessary for performance improvement.</li>
            <li>Account or identifier data is retained while your account or subscription is active.</li>
            <li>You may request deletion at any time.</li>
          </ul>
        </Section>

        <Section title="Your Rights">
          <p className="text-zinc-400 leading-relaxed mb-3">You may:</p>
          <List items={[
            "request deletion of your data",
            "request information about stored data",
            "contact us regarding privacy concerns",
          ]} />
        </Section>

        <Section title="Contact">
          <p className="text-zinc-400 leading-relaxed mb-6">
            For privacy questions or deletion requests:
          </p>
          <a
            href="mailto:contact@mapp.studio"
            className="inline-flex items-center gap-2.5 bg-[#FF3A5C] text-white font-semibold px-6 py-3 rounded-full
                       hover:bg-[#FF6080] transition-colors duration-200"
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white/80 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-zinc-400 leading-relaxed">
          <span className="mt-2 w-1 h-1 rounded-full bg-[#FF3A5C] flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
