import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Poonam Makeup Artist Maharashtra",
  description: "Privacy policy for Poonam Beauty — professional makeup artist in Pune and Mumbai, Maharashtra.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#faf7f2] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs tracking-widest uppercase text-[#c9a84c] hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-light text-[#1a1a1a] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>

        <div className="prose prose-sm text-gray-600 space-y-6">
          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">1. Information We Collect</h2>
            <p>When you submit the contact form on this website, we collect your name, email address, phone number, and the details of your makeup inquiry. This information is used solely to respond to your booking request.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">2. How We Use Your Information</h2>
            <p>Your personal information is used only to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your makeup booking inquiries</li>
              <li>Schedule consultations and appointments</li>
              <li>Send appointment reminders</li>
            </ul>
            <p className="mt-2">We do not sell, rent, or share your personal information with third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">3. Data Storage</h2>
            <p>Your contact details are stored securely. We retain inquiry data for up to 12 months to assist with follow-up and appointment planning. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">4. Cookies</h2>
            <p>This website uses minimal cookies required for basic functionality. We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">5. Contact</h2>
            <p>For any privacy-related queries, please contact us at <a href="mailto:hello@poonambeauty.com" className="text-[#c9a84c]">hello@poonambeauty.com</a> or call <a href="tel:+917767986666" className="text-[#c9a84c]">+91 77679 86666</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
