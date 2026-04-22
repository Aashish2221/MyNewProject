"use client";

import { Heart } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "./SocialIcons";

const footerLinks = {
  "Quick Links": [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  "Services": [
    { label: "Bridal Makeup", href: "#services" },
    { label: "Party Makeup", href: "#services" },
    { label: "Editorial Makeup", href: "#services" },
    { label: "Airbrush Makeup", href: "#services" },
    { label: "Special Effects", href: "#services" },
  ],
};

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d0d0d] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-cormorant)",
                background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Poonam
            </h2>
            <p className="text-xs tracking-[0.35em] uppercase text-gray-600 mb-4">
              Professional Makeup Artist
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Transforming faces and creating confidence through the art of makeup. Based in
              Pune, serving clients across Maharashtra.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: InstagramIcon, href: "https://instagram.com/poonambeauty", label: "Instagram" },
                { icon: YoutubeIcon, href: "https://youtube.com/poonambeauty", label: "YouTube" },
                { icon: FacebookIcon, href: "https://facebook.com/poonambeauty", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-gray-500"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNav(href)}
                      className="text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Poonam Beauty. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={11} className="text-[#c4576b] fill-[#c4576b]" /> for beautiful stories
          </p>
          <div className="flex gap-4">
            <button className="hover:text-[#c9a84c] transition-colors">Privacy Policy</button>
            <button className="hover:text-[#c9a84c] transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
