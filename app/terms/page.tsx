import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Poonam Makeup Artist Maharashtra",
  description: "Terms and conditions for booking Poonam Beauty — professional makeup artist in Pune and Mumbai, Maharashtra.",
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#faf7f2] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs tracking-widest uppercase text-[#c9a84c] hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-light text-[#1a1a1a] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: May 2026</p>

        <div className="prose prose-sm text-gray-600 space-y-6">
          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">1. Booking & Deposits</h2>
            <p>A non-refundable booking deposit of 30% is required to confirm your appointment date. This deposit is deducted from your final invoice. Dates are not held without a confirmed deposit.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">2. Cancellations & Rescheduling</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cancellations made 30+ days before the appointment: Deposit forfeited, no additional charge</li>
              <li>Cancellations made 15–29 days before: 50% of total service fee charged</li>
              <li>Cancellations made within 14 days: Full service fee applies</li>
              <li>Rescheduling requests are subject to availability and must be made at least 14 days in advance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">3. Trial Sessions</h2>
            <p>Bridal trial sessions are conducted separately and charged independently. Trial fees are not deducted from the final bridal service fee. A minimum of 6 weeks before the wedding date is recommended for trials.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">4. Travel & Outstation</h2>
            <p>For bookings outside Pune city limits, travel charges apply based on distance. Mumbai bookings include travel + accommodation for events requiring early morning setup. Travel fees are quoted separately and must be agreed upon before booking confirmation.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">5. Allergies & Skin Sensitivities</h2>
            <p>Clients must inform Poonam of any known skin allergies, sensitivities, or conditions prior to the appointment. We are not liable for adverse reactions resulting from undisclosed conditions. A patch test can be arranged on request.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">6. Photography & Portfolio Use</h2>
            <p>Poonam reserves the right to photograph completed looks for portfolio and social media use unless the client explicitly requests otherwise in writing prior to the appointment.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1a1a1a] mb-2">7. Contact</h2>
            <p>For any queries regarding these terms, contact us at <a href="mailto:hello@poonambeauty.com" className="text-[#c9a84c]">hello@poonambeauty.com</a> or <a href="tel:+917767986666" className="text-[#c9a84c]">+91 77679 86666</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
