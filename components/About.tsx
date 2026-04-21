"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  "Certified by Schwarzkopf Professional",
  "L'Oréal Paris Makeup Academy Graduate",
  "MAC Cosmetics Pro Artist Certified",
  "10+ years of industry experience",
  "Featured in Vogue India & Femina",
  "Worked with top Bollywood productions",
  "International bridal shows — Dubai & London",
  "Trained in Prosthetics & SFX Makeup",
];

const brands = ["MAC", "Charlotte Tilbury", "NARS", "Huda Beauty", "Pat McGrath", "Bobbi Brown"];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">About Me</p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Artistry Born from Passion
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c9a84c]/30"
              style={{ borderRadius: "2px" }}
            />
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", borderRadius: "2px" }}
            >
              {/* Placeholder gradient (replace with actual photo) */}
              <div
                className="w-full h-full flex items-end justify-center"
                style={{
                  background:
                    "linear-gradient(160deg, #2d1a2e 0%, #4a2040 30%, #6b3050 60%, #c4576b 100%)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">💄</div>
                  <p className="text-white/60 text-sm tracking-widest">Your Photo Here</p>
                </div>
                {/* Gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
              </div>
            </div>
            {/* Experience badge */}
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 flex flex-col items-center justify-center shadow-xl"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97e)",
                borderRadius: "50%",
              }}
            >
              <span className="text-3xl font-bold text-[#1a1a1a]" style={{ fontFamily: "var(--font-cormorant)" }}>
                10+
              </span>
              <span className="text-[9px] tracking-widest uppercase text-[#1a1a1a]/80 text-center">
                Years
                <br />
                Expert
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3
              className="text-3xl font-light text-[#1a1a1a] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Hello, I&apos;m Poonam —<br />
              <em className="text-[#c9a84c]">Your Story is My Canvas</em>
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              With over a decade of experience in the beauty industry, I have had the privilege of
              enhancing the natural beauty of thousands of women across India. From intimate
              weddings in Rajasthan to high-fashion shoots in Mumbai, every look I create is
              a reflection of my client's inner radiance — elevated.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              I believe makeup is not about masking — it's about <strong>empowering</strong>. My
              approach blends classic technique with contemporary artistry, using only premium,
              skin-friendly products that respect your unique features and complexion.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 gap-2 mb-8">
              {credentials.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#c9a84c] flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">
                Trusted Brands I Work With
              </p>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 text-xs tracking-widest uppercase border border-[#c9a84c]/40 text-[#c9a84c]"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
