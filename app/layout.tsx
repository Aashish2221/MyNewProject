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
    creator: "@makeupbypoonamjadhav",
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
              "@type": "WebSite",
              "@id": "https://poonammakeupartist.vercel.app/#website",
              name: "Poonam Beauty",
              alternateName: "Poonam Makeup Artist",
              url: "https://poonammakeupartist.vercel.app",
              description: "Poonam Beauty — Professional Makeup Artist in Pune & Mumbai, Maharashtra",
              publisher: {
                "@type": "Person",
                name: "Poonam Jadhav",
                jobTitle: "Professional Makeup Artist",
                url: "https://poonammakeupartist.vercel.app",
                sameAs: [
                  "https://www.instagram.com/makeupbypoonamjadhav",
                  "https://youtube.com/@poonam-makeupartist-95",
                ],
              },
            }),
          }}
        />
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
                "https://www.instagram.com/makeupbypoonamjadhav",
                "https://youtube.com/@poonam-makeupartist-95",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Makeup Services by Poonam",
              url: "https://poonammakeupartist.vercel.app/#services",
              itemListElement: [
                {
                  "@type": "Service",
                  position: 1,
                  name: "Bridal Makeup",
                  description: "Long-wearing, photogenic bridal looks tailored to your skin tone — from classic Marathi nauvari sari looks to contemporary glam.",
                  provider: { "@type": "LocalBusiness", name: "Poonam Beauty" },
                  areaServed: "Maharashtra",
                  offers: { "@type": "Offer", price: "8000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
                },
                {
                  "@type": "Service",
                  position: 2,
                  name: "Party & Event Makeup",
                  description: "Stunning looks for Ganesh Chaturthi, Gudi Padwa, sangeet, corporate gala and more that last all night.",
                  provider: { "@type": "LocalBusiness", name: "Poonam Beauty" },
                  areaServed: "Maharashtra",
                  offers: { "@type": "Offer", price: "3500", priceCurrency: "INR", availability: "https://schema.org/InStock" },
                },
                {
                  "@type": "Service",
                  position: 3,
                  name: "Airbrush Makeup",
                  description: "Poreless, camera-perfect complexion that is lightweight and lasts 16+ hours — ideal for brides and shoots.",
                  provider: { "@type": "LocalBusiness", name: "Poonam Beauty" },
                  areaServed: "Maharashtra",
                  offers: { "@type": "Offer", price: "6000", priceCurrency: "INR", availability: "https://schema.org/InStock" },
                },
                {
                  "@type": "Service",
                  position: 4,
                  name: "Natural Glow Makeup",
                  description: "Less-is-more artistry that enhances your best features for day events and pre-engagement sessions.",
                  provider: { "@type": "LocalBusiness", name: "Poonam Beauty" },
                  areaServed: "Maharashtra",
                  offers: { "@type": "Offer", price: "2500", priceCurrency: "INR", availability: "https://schema.org/InStock" },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does bridal makeup cost in Pune?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Poonam's bridal makeup starts at ₹8,000 in Pune and Maharashtra. This includes a trial session, day-of application, touch-up kit, and reception look. Airbrush makeup starts at ₹6,000.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Poonam travel across Maharashtra for bridal makeup?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Poonam is available for bridal and event makeup across Maharashtra including Mumbai, Pune, Nashik, Nagpur, Thane, Aurangabad, Navi Mumbai, and Kolhapur.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How far in advance should I book a bridal makeup artist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is recommended to book your bridal makeup artist at least 3–6 months in advance, especially for peak wedding season (October to February). A trial session should be done at least 6 weeks before the wedding day.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is airbrush makeup and is it good for brides?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Airbrush makeup is applied using a fine mist sprayer, creating a flawless, long-lasting, and waterproof finish. It is highly recommended for brides as it lasts 12–16 hours and holds up through tears, heat, and dancing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Poonam offer party and event makeup in Maharashtra?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Poonam offers party and event makeup starting at ₹3,500 for occasions such as sangeet, Ganesh Chaturthi, Gudi Padwa, corporate events, and more across Maharashtra.",
                  },
                },
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
