import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support – Wardrobe AI",
  description: "Get help with Wardrobe AI – Outfit Maker.",
};

export default function WardrobeSupport() {
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
                q: "Can't upload a photo?",
                a: "Ensure you granted photo access in system settings and that your connection is stable. Restarting the app often resolves temporary issues.",
              },
              {
                q: "Outfit preview is slow or stuck?",
                a: "Large images and poor connections can slow things down. Try a smaller photo and check your network.",
              },
              {
                q: "Subscription not recognized?",
                a: 'Open the app\'s Settings and tap "Restore Purchases". Make sure you\'re signed in with the same Apple ID used to buy the subscription.',
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

        {/* Billing & Refunds */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Billing &amp; Refunds
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            All subscriptions are managed by Apple through the App Store.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "To manage or cancel a subscription, use your Apple ID settings.",
              "For refunds, please submit a request via Apple's reportaproblem.apple.com.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-zinc-400 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#FF3A5C] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Privacy & Data */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Privacy &amp; Data
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-2">
            You can review how we handle data on our{" "}
            <a
              href="/wardrobe-ai/privacy"
              className="text-[#FF3A5C] hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            page.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            To request data deletion, contact us via email below.
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
            className="inline-flex items-center gap-2.5 bg-[#FF3A5C] text-white font-semibold px-6 py-3 rounded-full
                       hover:bg-[#FF6080] transition-colors duration-200"
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
