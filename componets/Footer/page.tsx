"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle background pattern/overlay for beauty */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
          <defs>
            <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/LOGOIMAGE.webp" // Use your logo path
                  alt="Sparshrekha Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-gray-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-white">Sparshrekha</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              At Sparshrekha, we create handcrafted resin art that reflects
              emotions and memories. From custom keychains and jewelry to
              heartfelt gifts, every piece is made with love and care. Our
              unique designs add a personal touch to your special moments,
              making them truly unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { href: '/about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { href: '/services', label: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { href: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              ].map((item, index) => (
                <li key={item.href} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-all duration-300 group-hover:pl-2"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for exclusive offers and new arrivals.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-200"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-slate-700 to-gray-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              {[
                { href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', label: 'Facebook' },
                { href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', label: 'Twitter' },
                { href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.981-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 text-gray-400 hover:bg-gradient-to-r hover:from-slate-700 hover:to-gray-600 hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-600"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Divider */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Sparshrekha. All rights reserved. | Made with ❤️ for unforgettable moments.
          </p>
        </div>
      </div>

      {/* Fade-in Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}