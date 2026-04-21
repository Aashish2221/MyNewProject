"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876500000?text=Hi%20Poonam!%20I%27d%20like%20to%20book%20a%20makeup%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        style={{ background: "#25d366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-white fill-white" />
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
            style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e)" }}
            aria-label="Back to top"
          >
            <ChevronUp size={20} className="text-[#1a1a1a]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
