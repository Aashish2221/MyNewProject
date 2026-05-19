"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = ["All", "Marathi Bridal", "Bridal", "Airbrush", "Party", "Natural"];

const portfolioItems = [
  {
    id: 1, category: "Marathi Bridal", title: "Nauvari Saree Bridal", desc: "Traditional Marathi nauvari look with nath & green bangles",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 2, category: "Marathi Bridal", title: "Ganesh Chaturthi Look", desc: "Festive Maharashtrian traditional makeup",
    image: "https://images.unsplash.com/photo-1610173827001-de5ae9f28d78?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 3, category: "Bridal", title: "Modern Bride", desc: "Contemporary minimalist bridal glam",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 4, category: "Airbrush", title: "Airbrush Bridal", desc: "Poreless 16-hour waterproof finish",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 5, category: "Party", title: "Sangeet Night", desc: "Vibrant festive glam for sangeet",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 6, category: "Party", title: "New Year Glam", desc: "Smokey eye & glitter party look",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 7, category: "Natural", title: "Dewy Glass Skin", desc: "No-makeup makeup glow look",
    image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 10, category: "Natural", title: "Pre-Wedding Glow", desc: "Fresh & radiant engagement session",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&crop=face&q=80",
  },
  {
    id: 12, category: "Airbrush", title: "HD Reception Look", desc: "Camera-perfect airbrush reception glam",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=800&fit=crop&crop=face&q=80",
  },
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
                <Image
                  src={item.image}
                  alt={`${item.title} - Poonam Makeup Artist Pune`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

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
            href="https://www.instagram.com/makeupbypoonamjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-xs tracking-widest uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a1a] transition-all duration-300"
          >
            <span>@makeupbypoonamjadhav</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
