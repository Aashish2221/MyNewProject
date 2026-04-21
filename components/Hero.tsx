"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, Award, Users } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a2e 40%, #1a1a2e 70%, #0d0d0d 100%)",
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #c4576b, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #e8c97e, transparent)" }}
        />
      </div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#c9a84c]/40 rounded-full"
        >
          <Star size={12} className="text-[#c9a84c] fill-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
            Award-Winning Makeup Artist
          </span>
          <Star size={12} className="text-[#c9a84c] fill-[#c9a84c]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Poonam
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="gold-divider w-48 mx-auto mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 tracking-[0.2em] uppercase mb-4"
        >
          Professional Makeup Artist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transforming faces, creating confidence. Specializing in Bridal, Editorial,
          Airbrush & Special Effects Makeup across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
          >
            Book Your Session
          </button>
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium text-white border border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            View Portfolio
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-12 md:gap-20"
        >
          {[
            { icon: Award, value: "10+", label: "Years Experience" },
            { icon: Users, value: "2500+", label: "Happy Clients" },
            { icon: Star, value: "4.9★", label: "Average Rating" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon size={18} className="text-[#c9a84c] mb-1" />
              <span
                className="text-3xl font-bold"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  background: "linear-gradient(135deg, #c9a84c, #e8c97e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </span>
              <span className="text-xs tracking-widest uppercase text-gray-500 mt-1">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a84c] flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
