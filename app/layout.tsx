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
  metadataBase: new URL("https://poonammakeupartist.vercel.app"),
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
  authors: [{ name: "Poonam", url: "https://poonammakeupartist.vercel.app" }],
  creator: "Poonam",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://poonammakeupartist.vercel.app",
    siteName: "Poonam Beauty",
    title: "Poonam | Professional Makeup Artist in Maharashtra",
    description:
      "Award-winning makeup artist in Maharashtra specializing in Marathi bridal, editorial & special occasions. Serving Mumbai, Pune, Nashik, Nagpur & more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Poonam - Professional Makeup Artist in Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poonam | Professional Makeup Artist in Maharashtra",
    description: "Award-winning makeup artist in Maharashtra. Book your Marathi bridal & editorial looks today.",
    images: ["/opengraph-image"],
    creator: "@poonambeauty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "4e29c7721eacfc4d",
  },
  alternates: {
    canonical: "https://poonammakeupartist.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <meta name="theme-color" content="#c9a84c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://poonammakeupartist.vercel.app",
              name: "Poonam Beauty - Professional Makeup Artist Maharashtra",
              image: "https://poonammakeupartist.vercel.app/opengraph-image",
              description:
                "Professional makeup artist in Maharashtra specializing in Marathi bridal, editorial and special occasion makeup. Serving Mumbai, Pune, Nashik, Nagpur, Thane, Aurangabad and all of Maharashtra.",
              url: "https://poonammakeupartist.vercel.app",
              telephone: "+917767986666",
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
