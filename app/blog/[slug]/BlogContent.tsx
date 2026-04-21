"use client";

import { motion } from "framer-motion";
import { Lightbulb, Quote } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";

type Section = BlogPost["content"][number];

export default function BlogContent({ content }: { content: Section[] }) {
  return (
    <article className="prose-custom">
      {content.map((section, i) => {
        switch (section.type) {
          case "intro":
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-lg text-gray-300 leading-relaxed mb-8 border-l-2 border-[#c9a84c] pl-5 italic"
              >
                {section.text}
              </motion.p>
            );

          case "h2":
            return (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl md:text-3xl font-light text-white mt-10 mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <span className="text-[#c9a84c] mr-2">—</span>
                {section.text}
              </motion.h2>
            );

          case "h3":
            return (
              <motion.h3
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-xl font-light text-[#e8c97e] mt-6 mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {section.text}
              </motion.h3>
            );

          case "p":
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-gray-400 leading-relaxed mb-5 text-[15px]"
              >
                {section.text}
              </motion.p>
            );

          case "list":
            return (
              <motion.ul
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="mb-6 space-y-3"
              >
                {section.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-400 text-[15px]">
                    <span
                      className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-[#1a1a1a]"
                      style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e)" }}
                    >
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            );

          case "tip":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="my-8 flex gap-4 p-5 border border-[#c9a84c]/40 bg-[#c9a84c]/5"
              >
                <Lightbulb size={20} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-[#c9a84c]">Pro Tip: </strong>
                  {section.text?.replace(/^Pro Tip:\s*/i, "")}
                </p>
              </motion.div>
            );

          case "quote":
            return (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="my-10 relative px-8 py-6 border-l-4 border-[#c9a84c]"
                style={{ background: "rgba(201,168,76,0.05)" }}
              >
                <Quote
                  size={32}
                  className="absolute top-4 right-4 text-[#c9a84c]/20"
                />
                <p
                  className="text-xl font-light text-white leading-relaxed italic"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  &ldquo;{section.text}&rdquo;
                </p>
                <p className="mt-3 text-xs tracking-widest uppercase text-[#c9a84c]">
                  — Poonam
                </p>
              </motion.blockquote>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
