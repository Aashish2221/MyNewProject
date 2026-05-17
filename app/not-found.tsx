import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Poonam Makeup Artist Maharashtra",
  description: "The page you are looking for does not exist. Return to Poonam's portfolio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a2e 40%, #1a1a2e 70%, #0d0d0d 100%)",
      }}
    >
      <div className="text-center max-w-lg">
        <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase mb-4">404 — Page Not Found</p>

        <h1
          className="text-7xl md:text-9xl font-light text-white mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Oops
        </h1>

        <div className="w-24 h-px mx-auto mb-6" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97e)" }} />

        <p className="text-gray-400 text-base mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the portfolio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 text-sm tracking-[0.25em] uppercase font-medium text-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 text-sm tracking-[0.25em] uppercase font-medium text-white border border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </main>
  );
}
