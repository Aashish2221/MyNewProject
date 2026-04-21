"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a detailed conversation about your vision, skin type, outfit, venue, and occasion. Understanding you is the foundation of a perfect look.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Skin Preparation",
    description:
      "I start every session with a professional skin prep routine — cleansing, toning, targeted serums, and priming — to ensure makeup applies smoothly and lasts longer.",
    icon: "✨",
  },
  {
    number: "03",
    title: "Custom Look Creation",
    description:
      "Using premium products matched to your skin tone and undertone, I craft your look layer by layer — from flawless base to final lash. Every detail is intentional.",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Reveal & Refinement",
    description:
      "You see the final look and we refine together until it's exactly what you envisioned. Your satisfaction is non-negotiable.",
    icon: "🪞",
  },
  {
    number: "05",
    title: "Touch-up Kit & Tips",
    description:
      "I provide a touch-up kit and personalized advice on maintaining your look throughout the event so you stay picture-perfect all day.",
    icon: "💼",
  },
];

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="process"
      className="py-24 md:py-32"
      style={{ background: "#fdf9f4" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">How I Work</p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            My Process
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm">
            A seamless, professional experience from first contact to final reveal.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#c9a84c]/20" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`inline-block glass-card p-6 rounded-sm shadow-sm max-w-md ${
                      i % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3
                      className="text-2xl font-light text-[#1a1a1a] mb-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Step number circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e)" }}
                >
                  <span
                    className="text-[#1a1a1a] text-lg font-bold"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
