"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/blogData";

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">
            Beauty Journal
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Tips, Trends & Tutorials
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Expert beauty advice, bridal guidance, and trend reports — straight from my kit to
            your screen. Great for SEO too!
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block cursor-pointer">
                <article>
                  {/* Thumbnail */}
                  <div
                    className={`bg-gradient-to-br ${post.gradient} rounded-sm mb-4 flex items-center justify-center overflow-hidden`}
                    style={{ aspectRatio: "16/9" }}
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {post.emoji}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-1">
                    <span className="text-xs tracking-widest uppercase text-[#c9a84c] mb-2 block">
                      {post.category}
                    </span>
                    <h3
                      className="text-lg font-light text-[#1a1a1a] mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-[#c9a84c] group-hover:gap-2 transition-all duration-200">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SEO note — hidden visually but helps crawlers */}
        <p className="sr-only">
          Professional makeup tips, bridal makeup guide, wedding makeup artist blog, airbrush
          makeup tutorial, how to choose makeup artist, 2025 makeup trends India
        </p>
      </div>
    </section>
  );
}
