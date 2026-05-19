import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Makeup Artist in Mumbai | Bridal & Party Makeup | Poonam",
  description: "Professional makeup artist in Mumbai for weddings, parties & shoots. Poonam serves Andheri, Bandra, Juhu, Powai & all Mumbai areas. 10+ years experience. Book now!",
  keywords: [
    "makeup artist Mumbai",
    "best makeup artist Mumbai",
    "bridal makeup artist Mumbai",
    "makeup artist in Mumbai",
    "wedding makeup artist Mumbai",
    "airbrush makeup Mumbai",
    "party makeup Mumbai",
    "makeup artist Andheri",
    "makeup artist Bandra",
    "makeup artist Juhu",
    "makeup artist Powai",
    "makeup artist Navi Mumbai",
    "Marathi bridal makeup Mumbai",
    "professional makeup artist Mumbai",
  ],
  alternates: {
    canonical: "https://poonammakeupartist.vercel.app/mumbai",
  },
  openGraph: {
    title: "Best Makeup Artist in Mumbai | Poonam Beauty",
    description: "Mumbai's trusted bridal & party makeup artist. Serving Andheri, Bandra, Juhu, Powai, Thane, Navi Mumbai & all of Mumbai.",
    url: "https://poonammakeupartist.vercel.app/mumbai",
  },
};

const services = [
  { name: "Bridal Makeup Mumbai", price: "₹8,000+", desc: "Traditional & contemporary bridal looks for Mumbai weddings" },
  { name: "Airbrush Makeup Mumbai", price: "₹6,000+", desc: "Camera-perfect finish that survives Mumbai heat & humidity" },
  { name: "Party Makeup Mumbai", price: "₹3,500+", desc: "Bollywood-style glam for Mumbai parties & events" },
  { name: "Engagement Makeup", price: "₹4,500+", desc: "Radiant, long-lasting looks for your engagement ceremony" },
];

const areas = [
  "Andheri", "Bandra", "Juhu", "Powai", "Thane",
  "Navi Mumbai", "Borivali", "Malad", "Goregaon", "Versova",
  "Worli", "Lower Parel", "Dadar", "Kurla", "Ghatkopar",
];

const faqs = [
  {
    q: "Does Poonam travel to Mumbai for makeup?",
    a: "Yes! Poonam regularly travels from Pune to Mumbai for bridal and event bookings. Travel charges of ₹1,500 apply for Mumbai. For early-morning events, accommodation may be required and will be quoted separately.",
  },
  {
    q: "What is the bridal makeup cost in Mumbai?",
    a: "Poonam's bridal makeup in Mumbai starts at ₹8,000 plus ₹1,500 travel from Pune. This includes trial, day-of application, touch-up kit and reception look.",
  },
  {
    q: "How far in advance should I book for a Mumbai wedding?",
    a: "For Mumbai weddings, book at least 4–6 months in advance as travel slots fill up quickly. Early booking is especially important for peak wedding season (October–February).",
  },
  {
    q: "Which Mumbai areas does Poonam cover?",
    a: "Poonam covers all Mumbai areas including Andheri, Bandra, Juhu, Powai, Thane, Navi Mumbai, Borivali, Malad, Goregaon, Worli, Lower Parel, Dadar, Kurla and more.",
  },
];

export default function MumbaiPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">

      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1a2e 50%, #0d0d0d 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4">Mumbai&apos;s Trusted Makeup Artist</p>
          <h1
            className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Makeup Artist in Mumbai
          </h1>
          <div className="w-32 h-px mx-auto mb-6" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97e)" }} />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Professional makeup artist serving Mumbai for bridal, party, airbrush & editorial looks.
            Covering Andheri, Bandra, Juhu, Powai, Thane, Navi Mumbai & beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-[#1a1a1a]"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
            >
              Book in Mumbai
            </Link>
            <Link
              href="https://wa.me/917767986666?text=Hi%20Poonam!%20I%20am%20from%20Mumbai%20and%20would%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-white border border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
            >
              WhatsApp Now
            </Link>
          </div>
          <div className="flex justify-center gap-12 mt-12">
            {[["10+", "Years Experience"], ["2500+", "Happy Clients"], ["4.9★", "Google Rating"]].map(([val, label]) => (
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
            Makeup Services in Mumbai
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
            Areas Covered in Mumbai
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
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1a1a1a, #2d1a2e)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light text-white mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            Book Your Mumbai Session
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Poonam Beauty - Makeup Artist in Mumbai",
            description: "Professional makeup artist serving Mumbai for bridal, airbrush, party and editorial makeup.",
            url: "https://poonammakeupartist.vercel.app/mumbai",
            telephone: "+917767986666",
            address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
            areaServed: areas.map((a) => ({ "@type": "City", name: a })),
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "250", bestRating: "5" },
          }),
        }}
      />
    </main>
  );
}
