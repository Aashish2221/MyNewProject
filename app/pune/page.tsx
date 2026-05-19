import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Makeup Artist in Pune | Bridal & Party Makeup | Poonam",
  description: "Looking for the best makeup artist in Pune? Poonam is Pune's top-rated bridal, airbrush & party makeup artist. 10+ years experience, 2500+ happy clients. Book now!",
  keywords: [
    "makeup artist Pune",
    "best makeup artist Pune",
    "bridal makeup artist Pune",
    "makeup artist in Pune",
    "wedding makeup artist Pune",
    "airbrush makeup Pune",
    "party makeup Pune",
    "Marathi bridal makeup Pune",
    "professional makeup artist Pune",
    "makeup artist Baner Pune",
    "makeup artist Kothrud Pune",
    "makeup artist Wakad Pune",
    "bridal makeup Pune price",
    "nauvari saree makeup Pune",
  ],
  alternates: {
    canonical: "https://poonammakeupartist.vercel.app/pune",
  },
  openGraph: {
    title: "Best Makeup Artist in Pune | Poonam Beauty",
    description: "Pune's top-rated bridal & party makeup artist. 10+ years experience. Serving Baner, Kothrud, Wakad, Hinjewadi, Koregaon Park & all of Pune.",
    url: "https://poonammakeupartist.vercel.app/pune",
  },
};

const services = [
  { name: "Bridal Makeup Pune", price: "₹8,000+", desc: "Traditional Marathi & modern bridal looks for Pune weddings" },
  { name: "Airbrush Makeup Pune", price: "₹6,000+", desc: "16-hour waterproof finish perfect for Pune's climate" },
  { name: "Party Makeup Pune", price: "₹3,500+", desc: "Sangeet, Ganesh Chaturthi, Gudi Padwa & all celebrations" },
  { name: "Natural Glow Makeup", price: "₹2,500+", desc: "Effortless pre-wedding & engagement looks" },
];

const areas = [
  "Baner", "Kothrud", "Wakad", "Hinjewadi", "Koregaon Park",
  "Viman Nagar", "Kalyani Nagar", "Aundh", "Hadapsar", "Shivajinagar",
  "Magarpatta", "Pimpri-Chinchwad", "Kharadi", "Bavdhan", "Deccan",
];

const faqs = [
  {
    q: "What is the cost of bridal makeup in Pune?",
    a: "Poonam's bridal makeup in Pune starts at ₹8,000 and includes trial session, day-of application, touch-up kit, and reception look. Airbrush bridal makeup starts at ₹10,000.",
  },
  {
    q: "Does Poonam do home visits in Pune?",
    a: "Yes, Poonam offers home visits across all Pune areas including Baner, Kothrud, Wakad, Koregaon Park, Viman Nagar, Aundh, Hinjewadi and more. Travel is included within Pune city limits.",
  },
  {
    q: "How far in advance should I book a makeup artist in Pune?",
    a: "For bridal makeup in Pune, book at least 3–6 months in advance, especially for peak season (October–February). For party makeup, 1–2 weeks is usually sufficient.",
  },
  {
    q: "What areas in Pune does Poonam serve?",
    a: "Poonam serves all Pune areas including Baner, Kothrud, Wakad, Hinjewadi, Koregaon Park, Viman Nagar, Kalyani Nagar, Aundh, Hadapsar, Shivajinagar, Magarpatta, Pimpri-Chinchwad and more.",
  },
];

export default function PunePage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">

      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a2e 50%, #0d0d0d 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4">Pune&apos;s Trusted Makeup Artist</p>
          <h1
            className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Makeup Artist in Pune
          </h1>
          <div className="w-32 h-px mx-auto mb-6" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97e)" }} />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Award-winning professional makeup artist in Pune specializing in Marathi bridal, airbrush,
            editorial & party makeup. Serving all Pune areas with home visits available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-[#1a1a1a]"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
            >
              Book in Pune
            </Link>
            <Link
              href="https://wa.me/917767986666?text=Hi%20Poonam!%20I%20am%20from%20Pune%20and%20would%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-white border border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
            >
              WhatsApp Now
            </Link>
          </div>
          <div className="flex justify-center gap-12 mt-12">
            {[["10+", "Years in Pune"], ["2500+", "Happy Clients"], ["4.9★", "Google Rating"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-[#c9a84c]" style={{ fontFamily: "var(--font-cormorant)" }}>{val}</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] text-center mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
            Makeup Services in Pune
          </h2>
          <div className="w-20 h-px mx-auto mb-12" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97e)" }} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="p-6 border border-gray-100 hover:border-[#c9a84c]/40 transition-all">
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-1">{s.name}</h3>
                <p className="text-[#c9a84c] font-medium mb-2">{s.price}</p>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-16 px-6 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
            Areas Covered in Pune
          </h2>
          <div className="w-20 h-px mx-auto mb-8" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97e)" }} />
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="px-4 py-2 border border-[#c9a84c]/30 text-sm text-gray-600 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-[#1a1a1a] text-center mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-px mx-auto mb-10" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97e)" }} />
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="font-medium text-[#1a1a1a] mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a1a1a, #2d1a2e)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light text-white mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            Book Your Pune Session
          </h2>
          <p className="text-gray-400 mb-8">Call or WhatsApp: +91 77679 86666 · Mon–Sat, 10am–7pm</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-[#1a1a1a]" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}>
              Book Now
            </Link>
            <Link href="/" className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-white border border-white/30 hover:border-[#c9a84c] transition-all">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Poonam Beauty - Makeup Artist in Pune",
            description: "Best makeup artist in Pune specializing in bridal, airbrush, party and editorial makeup. Serving all Pune areas.",
            url: "https://poonammakeupartist.vercel.app/pune",
            telephone: "+917767986666",
            address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "250", bestRating: "5" },
          }),
        }}
      />
    </main>
  );
}
