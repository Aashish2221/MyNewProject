"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = ["All", "Bridal", "Editorial", "Party", "Natural", "SFX"];

const portfolioItems = [
  { id: 1, category: "Bridal", title: "Rajasthani Bridal", desc: "Traditional lehenga bridal look", gradient: "from-rose-900 via-pink-800 to-red-700", emoji: "👰" },
  { id: 2, category: "Editorial", title: "Vogue Editorial", desc: "High-fashion avant-garde", gradient: "from-purple-900 via-violet-800 to-indigo-700", emoji: "📸" },
  { id: 3, category: "Party", title: "Sangeet Night", desc: "Vibrant festive glam", gradient: "from-orange-900 via-amber-700 to-yellow-600", emoji: "🎉" },
  { id: 4, category: "Natural", title: "Dewy Skin", desc: "Glass skin no-makeup look", gradient: "from-green-900 via-emerald-700 to-teal-600", emoji: "🌿" },
  { id: 5, category: "Bridal", title: "Modern Bride", desc: "Contemporary minimalist bridal", gradient: "from-slate-800 via-gray-700 to-zinc-600", emoji: "💍" },
  { id: 6, category: "SFX", title: "Fantasy Character", desc: "Theatrical SFX transformation", gradient: "from-blue-900 via-cyan-800 to-teal-700", emoji: "🎭" },
  { id: 7, category: "Editorial", title: "Bold Lip Campaign", desc: "Product launch editorial", gradient: "from-red-900 via-rose-800 to-pink-700", emoji: "💄" },
  { id: 8, category: "Natural", title: "Fresh & Radiant", desc: "Pre-wedding session look", gradient: "from-yellow-800 via-amber-600 to-orange-500", emoji: "☀️" },
  { id: 9, category: "Party", title: "New Year Glam", desc: "Smokey eye & glitter", gradient: "from-indigo-900 via-purple-800 to-violet-700", emoji: "✨" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">My Work</p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Portfolio Gallery
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Every look tells a story. Browse my curated collection of artistry across different
            styles and occasions.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#c9a84c] text-[#1a1a1a] shadow-md"
                  : "border border-gray-300 text-gray-500 hover:border-[#c9a84c] hover:text-[#c9a84c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-item group relative cursor-pointer overflow-hidden rounded-sm shadow-md"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Gradient placeholder — replace with <Image /> */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center`}
                >
                  <span className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-500">
                    {item.emoji}
                  </span>
                  <p className="text-white/30 text-xs tracking-widest">Add your photo here</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <span className="text-[#c9a84c] text-xs tracking-widest uppercase mb-1">
                    {item.category}
                  </span>
                  <h3
                    className="text-white text-xl font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            See more of my work on Instagram
          </p>
          <a
            href="https://www.instagram.com/poonambeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-xs tracking-widest uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a1a] transition-all duration-300"
          >
            <span>@poonambeauty</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
