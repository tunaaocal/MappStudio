import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Potential Analyzer AI",
  description: "Privacy policy for Potential Analyzer AI.",
};

const ACCENT = "#DD0000";

export default function MaxPrivacy() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-6 py-8 flex items-center gap-3">
          <a href="/" className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">
            Mapp Studio
          </a>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400 text-sm">Potential Analyzer AI</span>
          <span className="text-zinc-700">/</span>
          <span className="text-white text-sm">Privacy Policy</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">
          Privacy Policy
        </h1>
        <p className="font-semibold mb-2" style={{ color: ACCENT }}>Potential Analyzer AI</p>
        <p className="text-zinc-500 text-sm mb-6">Last Updated: February 2026</p>

        <p className="text-zinc-400 leading-relaxed mb-4">
          Potential Analyzer AI (&ldquo;the App&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your data. This Privacy Policy explains what information we collect, how we use it, how it is shared, and how it is protected.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-12">
          By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <Section title="Information We Collect">
          <SubSection title="Photos and Facial Analysis Data">
            <p className="text-zinc-400 leading-relaxed mb-3">
              The App allows users to upload photos for AI-powered facial analysis.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">
              Photos are used solely to generate analysis results, including aesthetic analysis, facial structure evaluation, and related feedback.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">Photos:</p>
            <List items={[
              "Are used only to provide the requested analysis",
              "Are not used to identify you personally",
              "Are not sold to advertisers or third parties",
              "Are not used for advertising or marketing",
              "Are not used for biometric identification",
              "Are not used to identify real-world individuals",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-4 mb-3">
              With your explicit action and consent, photos are securely transmitted to our AI processing provider:
            </p>
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06] mb-3">
              <p className="text-white font-medium">Fal.ai, Inc.</p>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-3">
              Fal.ai acts as a data processor and processes photos solely on our behalf and only according to our instructions. Fal.ai does not use your photos for advertising, profiling, or independent purposes.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Photos are not permanently stored by Potential Analyzer AI and may be automatically deleted after processing or within a limited retention period required for service reliability, error recovery, or abuse prevention.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Photos are transmitted only after you explicitly initiate analysis within the App.
            </p>
          </SubSection>

          <SubSection title="Voice Data and Voice Analysis">
            <p className="text-zinc-400 leading-relaxed mb-3">
              The App may allow users to record or upload voice audio for AI-powered analysis.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">
              Voice recordings are used solely to generate analysis results, including vocal characteristic analysis, tone analysis, clarity analysis, and related feedback.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">Voice recordings:</p>
            <List items={[
              "Are used only to provide the requested analysis",
              "Are not used to identify you personally",
              "Are not sold to advertisers or third parties",
              "Are not used for advertising or marketing",
              "Are not used for biometric identification",
              "Are not used to identify real-world individuals",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-4 mb-3">
              Voice recordings are securely transmitted to:
            </p>
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06] mb-3">
              <p className="text-white font-medium">Fal.ai, Inc.</p>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Fal.ai processes voice data solely to generate analysis results and does not use voice recordings for advertising, profiling, or independent purposes.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Voice recordings are not permanently stored by Potential Analyzer AI and may be automatically deleted after processing or within a limited retention period required for reliability and security.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Voice data is transmitted only when you explicitly initiate voice analysis.
            </p>
          </SubSection>

          <SubSection title="Subscription and Purchase Information">
            <p className="text-zinc-400 leading-relaxed mb-3">
              Subscriptions and purchases are processed by trusted third-party providers:
            </p>
            <List items={["Apple Inc. (App Store)", "RevenueCat, Inc."]} />
            <p className="text-zinc-400 leading-relaxed mt-4 mb-3">
              We receive limited subscription-related information necessary to manage subscriptions and provide app functionality, including:
            </p>
            <List items={[
              "Anonymous user identifiers (UUID)",
              "Subscription status",
              "Purchase events",
              "Entitlement status",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-4">
              We do not receive, store, or have access to your payment card details or financial account information.
            </p>
          </SubSection>

          <SubSection title="Anonymous User Identifiers and Authentication">
            <p className="text-zinc-400 leading-relaxed mb-3">
              The App uses anonymous user identifiers (UUID) generated through secure authentication services provided by Supabase, Inc.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">These identifiers are used solely to:</p>
            <List items={[
              "Authenticate users",
              "Enable app functionality",
              "Manage subscriptions and entitlements",
              "Maintain service reliability and security",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-4">
              These identifiers do not include your name, email address, or direct personal identity.
            </p>
          </SubSection>

          <SubSection title="Device and Technical Information">
            <p className="text-zinc-400 leading-relaxed mb-3">
              We collect limited technical information necessary to operate and maintain the App, including:
            </p>
            <List items={[
              "Anonymous user identifiers (UUID)",
              "App version",
              "Device type",
              "Operating system version",
              "Diagnostic and crash information",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-4 mb-3">This information is used solely to:</p>
            <List items={[
              "Provide app functionality",
              "Deliver analysis results",
              "Maintain service reliability",
              "Prevent fraud and abuse",
              "Diagnose and fix technical issues",
              "Improve app performance and stability",
            ]} />
            <p className="text-zinc-400 leading-relaxed mt-4">
              This information does not directly identify your real-world identity such as your name or contact details.
            </p>
          </SubSection>
        </Section>

        <Section title="How We Use Your Information">
          <p className="text-zinc-400 leading-relaxed mb-3">We use collected information only to:</p>
          <List items={[
            "Provide facial analysis features",
            "Provide voice analysis features",
            "Deliver analysis results",
            "Operate and maintain the App",
            "Authenticate users",
            "Manage subscriptions and entitlements",
            "Maintain security and prevent fraud",
            "Improve performance and reliability",
            "Provide customer support",
          ]} />
          <p className="text-zinc-400 leading-relaxed mt-4">We do not sell personal data.</p>
        </Section>

        <Section title="Data Sharing">
          <p className="text-zinc-400 leading-relaxed mb-3">
            We do not sell, rent, or trade your personal data.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-3">
            We share data only with trusted service providers necessary to operate the App:
          </p>
          <List items={[
            "Fal.ai, Inc. — AI processing of photos and voice data",
            "Apple Inc. — subscription and payment processing",
            "RevenueCat, Inc. — subscription management and entitlement tracking",
            "Supabase, Inc. — anonymous authentication, secure user identification, and backend services",
            "Secure infrastructure providers — secure hosting, backend services, and data protection",
          ]} />
          <p className="text-zinc-400 leading-relaxed mt-4">
            These providers are contractually obligated to protect your data and use it only to provide services on our behalf.
          </p>
        </Section>

        <Section title="No Tracking">
          <p className="text-zinc-400 leading-relaxed">
            Potential Analyzer AI does not track users across third-party apps or websites. We do not use advertising identifiers such as IDFA, and we do not share personal data with advertising networks, data brokers, or third-party advertisers.
          </p>
        </Section>

        <Section title="User Control and Consent">
          <List items={[
            "Photos and voice recordings are transmitted only when you explicitly initiate analysis within the App.",
            "You control whether to upload photos or record voice data.",
            "You may stop using these features at any time.",
          ]} />
        </Section>

        <Section title="Data Retention">
          <p className="text-zinc-400 leading-relaxed mb-4">
            We retain data only as long as necessary to provide services and maintain security and reliability.
          </p>
          <SubSection title="Photos and voice recordings">
            <List items={[
              "Are not permanently stored by us",
              "May be automatically deleted after processing",
              "May be temporarily retained for reliability, error recovery, or abuse prevention",
            ]} />
          </SubSection>
          <SubSection title="Subscription information">
            <List items={["Retained only as necessary to manage active subscriptions and entitlements"]} />
          </SubSection>
          <SubSection title="Technical and diagnostic information">
            <List items={["Retained only as needed to maintain security, performance, and reliability"]} />
          </SubSection>
        </Section>

        <Section title="Your Rights">
          <p className="text-zinc-400 leading-relaxed mb-3">You have the right to:</p>
          <List items={[
            "Request deletion of your data",
            "Request information about your data",
            "Contact us regarding privacy concerns",
          ]} />
          <p className="text-zinc-400 leading-relaxed mt-4">
            To exercise these rights, contact us using the information below.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <List items={[
            "The App is not intended for children under 13 years of age.",
            "We do not knowingly collect personal data from children under 13.",
            "If you believe a child has provided personal data, please contact us and we will delete it.",
          ]} />
        </Section>

        <Section title="Security">
          <p className="text-zinc-400 leading-relaxed mb-2">
            We implement reasonable administrative, technical, and organizational safeguards to protect your data.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Data is transmitted securely using encryption, secure authentication, and access controls.
          </p>
        </Section>

        <Section title="Changes to This Privacy Policy">
          <p className="text-zinc-400 leading-relaxed mb-2">
            We may update this Privacy Policy periodically.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Updates will be posted with a revised &ldquo;Last Updated&rdquo; date.
          </p>
        </Section>

        <Section title="Contact">
          <p className="text-zinc-400 leading-relaxed mb-6">
            If you have questions or requests regarding this Privacy Policy, contact:
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
          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
          {item}
        </li>
      ))}
    </ul>
  );
}
