import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.poonambeauty.com"),
  title: {
    default: "Poonam | Professional Makeup Artist | Bridal & Editorial Makeup",
    template: "%s | Poonam Makeup Artist",
  },
  description:
    "Transform your look with Poonam, award-winning professional makeup artist specializing in bridal, editorial, airbrush & special effects makeup. Book your appointment today.",
  keywords: [
    "professional makeup artist",
    "bridal makeup artist",
    "makeup artist near me",
    "wedding makeup artist",
    "editorial makeup",
    "airbrush makeup",
    "special effects makeup",
    "makeup artist portfolio",
    "luxury makeup artist",
    "celebrity makeup artist",
  ],
  authors: [{ name: "Poonam", url: "https://www.poonambeauty.com" }],
  creator: "Poonam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.poonambeauty.com",
    siteName: "Poonam Beauty",
    title: "Poonam | Professional Makeup Artist",
    description:
      "Award-winning makeup artist specializing in bridal, editorial & special occasions. Your dream look, beautifully realized.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Poonam - Professional Makeup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poonam | Professional Makeup Artist",
    description: "Award-winning makeup artist. Book your bridal & editorial looks today.",
    images: ["/og-image.jpg"],
    creator: "@poonambeauty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.poonambeauty.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="canonical" href="https://www.poonambeauty.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.poonambeauty.com",
              name: "Poonam Beauty - Professional Makeup Artist",
              image: "https://www.poonambeauty.com/og-image.jpg",
              description:
                "Professional makeup artist specializing in bridal, editorial and special occasion makeup.",
              url: "https://www.poonambeauty.com",
              telephone: "+91-XXXXXXXXXX",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "250",
                bestRating: "5",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/poonambeauty",
                "https://www.facebook.com/poonambeauty",
                "https://www.youtube.com/poonambeauty",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: "#1a1a1a", color: "#faf7f2", border: "1px solid #c9a84c" },
            success: { iconTheme: { primary: "#c9a84c", secondary: "#1a1a1a" } },
          }}
        />
      </body>
    </html>
  );
}
