"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "My Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col leading-tight cursor-pointer"
        >
          <span
            className="text-2xl font-bold tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-cormorant)",
              background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Poonam
          </span>
          <span className="text-[10px] tracking-[0.35em] text-gray-400 uppercase">
            Makeup Artist
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[#c9a84c] ${
                  active === link.href ? "text-[#c9a84c]" : scrolled ? "text-gray-300" : "text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden lg:block px-6 py-2 text-xs tracking-widest uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a1a] transition-all duration-300"
        >
          Book Now
        </button>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${scrolled ? "text-white" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a1a]/98 backdrop-blur-md border-t border-[#c9a84c]/20"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left text-sm tracking-widest uppercase text-gray-300 hover:text-[#c9a84c] transition-colors py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-2 w-full py-3 text-xs tracking-widest uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a1a] transition-all"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
