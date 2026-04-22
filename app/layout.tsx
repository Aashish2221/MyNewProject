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
    default: "Poonam | Professional Makeup Artist | Bridal & Editorial Makeup in Maharashtra",
    template: "%s | Poonam Makeup Artist Maharashtra",
  },
  description:
    "Transform your look with Poonam, award-winning professional makeup artist in Maharashtra specializing in Marathi bridal, editorial, airbrush & special effects makeup. Serving Mumbai, Pune, Nashik, Nagpur, Thane & all of Maharashtra. Book your appointment today.",
  keywords: [
    "professional makeup artist Maharashtra",
    "bridal makeup artist Pune",
    "makeup artist Pune",
    "wedding makeup artist Maharashtra",
    "Marathi bridal makeup",
    "makeup artist Nashik",
    "makeup artist Nagpur",
    "makeup artist Thane",
    "makeup artist Aurangabad",
    "airbrush makeup Pune",
    "special effects makeup Maharashtra",
    "nauvari saree bridal makeup",
    "Ganesh Chaturthi makeup",
    "luxury makeup artist Pune",
    "best makeup artist Maharashtra",
  ],
  authors: [{ name: "Poonam", url: "https://www.poonambeauty.com" }],
  creator: "Poonam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.poonambeauty.com",
    siteName: "Poonam Beauty",
    title: "Poonam | Professional Makeup Artist in Maharashtra",
    description:
      "Award-winning makeup artist in Maharashtra specializing in Marathi bridal, editorial & special occasions. Serving Mumbai, Pune, Nashik, Nagpur & more.",
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
    title: "Poonam | Professional Makeup Artist in Maharashtra",
    description: "Award-winning makeup artist in Maharashtra. Book your Marathi bridal & editorial looks today.",
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
              name: "Poonam Beauty - Professional Makeup Artist Maharashtra",
              image: "https://www.poonambeauty.com/og-image.jpg",
              description:
                "Professional makeup artist in Maharashtra specializing in Marathi bridal, editorial and special occasion makeup. Serving Mumbai, Pune, Nashik, Nagpur, Thane, Aurangabad and all of Maharashtra.",
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
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "State", name: "Maharashtra" },
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Pune" },
                { "@type": "City", name: "Nashik" },
                { "@type": "City", name: "Nagpur" },
                { "@type": "City", name: "Thane" },
                { "@type": "City", name: "Aurangabad" },
                { "@type": "City", name: "Navi Mumbai" },
                { "@type": "City", name: "Kolhapur" },
              ],
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
