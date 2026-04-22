"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    emoji: "👰",
    title: "Bridal Makeup",
    tagline: "Your perfect wedding look",
    description:
      "Your wedding day deserves perfection. I craft long-wearing, photogenic bridal looks tailored to your skin tone, outfit, and personal style — from classic Marathi nauvari sari looks to contemporary glam.",
    includes: ["Trial session", "Day-of application", "Touch-up kit", "Reception look"],
    price: "Starting ₹8,000",
    popular: true,
  },
  {
    emoji: "🎉",
    title: "Party & Event Makeup",
    tagline: "Glamour for every celebration",
    description:
      "Whether it's a Ganesh Chaturthi celebration, Gudi Padwa puja, sangeet, or corporate gala — I create stunning looks that last all night and photograph beautifully under any lighting.",
    includes: ["Consultation", "Custom look", "Long-lasting formula", "Touch-up tips"],
    price: "Starting ₹3,500",
    popular: false,
  },
  {
    emoji: "📸",
    title: "Editorial & Shoot Makeup",
    tagline: "Magazine-ready artistry",
    description:
      "Concept-driven makeup for fashion shoots, ad campaigns, and lookbooks. I work closely with photographers and art directors to realize bold creative visions.",
    includes: ["Creative consultation", "On-set touch-ups", "Multiple looks", "Color test shots"],
    price: "Starting ₹5,000",
    popular: false,
  },
  {
    emoji: "✨",
    title: "Airbrush Makeup",
    tagline: "Flawless, featherlight finish",
    description:
      "Using professional airbrush technology, I achieve a poreless, camera-perfect complexion that's lightweight and lasts 16+ hours — ideal for brides and shoots.",
    includes: ["HD formula", "Waterproof finish", "Custom foundation mix", "Full-face coverage"],
    price: "Starting ₹6,000",
    popular: false,
  },
  {
    emoji: "🌿",
    title: "Natural Glow Makeup",
    tagline: "Effortlessly beautiful",
    description:
      "Less-is-more artistry that enhances your best features. Perfect for day events, pre-engagement sessions, and clients who prefer a no-makeup makeup look.",
    includes: ["Skin prep", "Luminous finish", "Minimal coverage", "Fresh look"],
    price: "Starting ₹2,500",
    popular: false,
  },
  {
    emoji: "🎭",
    title: "Special Effects (SFX)",
    tagline: "Theatrical & avant-garde",
    description:
      "From Bollywood productions to Halloween events — prosthetics, wounds, aging effects, and character transformations using industry-grade SFX materials.",
    includes: ["Prosthetic application", "Body paint", "Character design", "On-set support"],
    price: "Starting ₹10,000",
    popular: false,
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #1a1a1a 0%, #2d1a2e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">What I Offer</p>
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Services & Pricing
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Every service is customized to your needs. All sessions include a pre-consultation to
            ensure we achieve your vision together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-8 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group ${
                service.popular
                  ? "border-[#c9a84c] bg-[#c9a84c]/10"
                  : "border-white/10 bg-white/5 hover:border-[#c9a84c]/50"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] tracking-widest uppercase font-bold text-[#1a1a1a] bg-[#c9a84c]">
                  Most Popular
                </div>
              )}
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3
                className="text-2xl font-light text-white mb-1 group-hover:text-[#e8c97e] transition-colors"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#c9a84c] mb-4">
                {service.tagline}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#c9a84c]">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-[#c9a84c] font-medium">{service.price}</span>
                <button
                  onClick={() =>
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-xs tracking-widest uppercase text-white/60 hover:text-[#c9a84c] transition-colors"
                >
                  Book →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          * Serving Pune, Mumbai, Thane, Navi Mumbai, Nashik, Nagpur, Aurangabad & all of Maharashtra. Travel charges may apply for locations outside Pune. All prices include professional makeup products, tools, and skin preparation.
        </motion.p>
      </div>
    </section>
  );
}
