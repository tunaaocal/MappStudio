import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support – Potential Analyzer AI",
  description: "Get help with Potential Analyzer AI.",
};

const ACCENT = "#DD0000";

export default function MaxSupport() {
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
          <span className="text-white text-sm">Support</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">Support</h1>
        <p className="text-lg text-zinc-400 mb-4">How Can We Help?</p>
        <p className="text-zinc-400 leading-relaxed mb-12">
          Welcome to Potential Analyzer AI Support. We&apos;re here to help you get the most out of our app.
        </p>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Frequently Asked Questions
          </h2>

          <SubSection title="General">
            <div className="space-y-4">
              <FAQ
                q="How does the face analysis work?"
                a="Our app uses advanced AI technology to analyze your facial features. Simply upload a photo or take a selfie, and our AI will provide detailed insights about various aspects of your face."
              />
              <FAQ
                q="Is my photo stored on your servers?"
                a="Your photos are only temporarily processed for analysis and are not permanently stored on our servers. Your privacy is our priority."
              />
              <FAQ
                q="How accurate is the analysis?"
                a="Our AI provides reliable analysis based on established facial proportion standards. Results should be viewed as informative insights rather than definitive assessments."
              />
            </div>
          </SubSection>

          <SubSection title="Account & Subscription">
            <div className="space-y-4">
              <FAQ
                q="How do I restore my purchase?"
                a='Go to the subscription screen and tap "Restore" at the bottom. This will restore any active subscriptions linked to your Apple ID.'
              />
              <FAQ
                q="How do I cancel my subscription?"
                a={
                  <div>
                    <p className="text-zinc-400 leading-relaxed mb-3">
                      Subscriptions are managed through your Apple ID:
                    </p>
                    <List items={[
                      "Open Settings on your iPhone",
                      'Tap your name at the top',
                      'Tap "Subscriptions"',
                      'Find Potential Analyzer AI and tap "Cancel Subscription"',
                    ]} />
                  </div>
                }
              />
              <FAQ
                q="What happens to my credits if I cancel?"
                a="Your remaining credits will stay available until your current subscription period ends."
              />
              <FAQ
                q="How do credits work?"
                a="Each face analysis uses 2 credits. Weekly subscribers receive 40 credits, and yearly subscribers receive 240 credits."
              />
            </div>
          </SubSection>

          <SubSection title="Troubleshooting">
            <div className="space-y-4">
              <FAQ
                q="The app won't analyze my photo"
                a={
                  <div>
                    <p className="text-zinc-400 leading-relaxed mb-3">Please ensure:</p>
                    <List items={[
                      "Your photo clearly shows your face",
                      "There is good lighting",
                      "Your face is not obscured",
                      "You have sufficient credits",
                    ]} />
                  </div>
                }
              />
              <FAQ
                q="My purchase isn't showing up"
                a={
                  <div>
                    <p className="text-zinc-400 leading-relaxed mb-3">Try these steps:</p>
                    <List items={[
                      "Make sure you're connected to the internet",
                      'Tap "Restore" on the subscription screen',
                      "Restart the app",
                      "If the issue persists, contact us",
                    ]} />
                  </div>
                }
              />
              <FAQ
                q="The app is running slowly"
                a={
                  <div>
                    <p className="text-zinc-400 leading-relaxed mb-3">Try these solutions:</p>
                    <List items={[
                      "Close and reopen the app",
                      "Make sure your device has available storage",
                      "Update to the latest version of the app",
                      "Restart your device",
                    ]} />
                  </div>
                }
              />
            </div>
          </SubSection>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Contact Us
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            If you couldn&apos;t find the answer to your question, please reach out to us.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We typically respond within 1 week. When contacting support, please include:
          </p>
          <List items={[
            "Your device model (e.g., iPhone 15 Pro)",
            "iOS version (e.g., iOS 17.2)",
            "App version (found in Settings)",
            "A detailed description of your issue",
            "Screenshots if applicable",
          ]} />
        </section>

        {/* Feedback */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Feedback
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            We&apos;re always looking to improve! If you have suggestions or feedback, please reach out.
          </p>
        </section>

        {/* Report a Bug */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
            Report a Bug
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Found a bug? Help us fix it by sending the following details:
          </p>
          <List items={[
            "Steps to reproduce the issue",
            "What you expected to happen",
            "What actually happened",
            "Screenshots or screen recordings",
          ]} />
          <div className="mt-6">
            <ContactButton />
          </div>
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

function ContactButton() {
  return (
    <a
      href="mailto:contact@mapp.studio"
      className="inline-flex items-center gap-2.5 text-white font-semibold px-6 py-3 rounded-full
                 hover:opacity-80 transition-opacity duration-200"
      style={{ background: ACCENT }}
    >
      Contact
    </a>
  );
}

function FAQ({ q, a }: { q: string; a: string | React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.06]">
      <p className="font-semibold text-white mb-2">Q: {q}</p>
      {typeof a === "string" ? (
        <p className="text-zinc-400 leading-relaxed text-sm">A: {a}</p>
      ) : (
        <div className="text-sm">{a}</div>
      )}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-semibold text-white/70 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
        {title}
      </h3>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-zinc-400 leading-relaxed text-sm">
          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
          {item}
        </li>
      ))}
    </ul>
  );
}
