import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Site configuration - PLACEHOLDER values
const SITE_URL = "https://namabisnis.com";
const SITE_NAME = "FTravel";
const SITE_DESCRIPTION =
  "Biro perjalanan wisata terpercaya dengan paket wisata Domestik & Luar Negeri. Guide berpengalaman, harga transparan, garansi keberangkatan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Paket Wisata Indonesia Terpercaya`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "paket wisata",
    "travel agent",
    "tour wisata Indonesia",
    "open trip",
    "honeymoon",
    "family trip",
    "Bali",
    "Yogyakarta",
    "Labuan Bajo",
    "[kota Anda]",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Paket Wisata Indonesia Terpercaya`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/img/og-image.jpg", // PLACEHOLDER: replace with actual OG image
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Banner Website`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Paket Wisata Indonesia Terpercaya`,
    description: SITE_DESCRIPTION,
    images: ["/img/og-image.jpg"], // PLACEHOLDER
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // PLACEHOLDER
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${fraunces.variable}`}
    >
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://placehold.co" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/img/logo.png`, // PLACEHOLDER
              description: SITE_DESCRIPTION,
              telephone: "+62 8xx-xxxx-xxxx", // PLACEHOLDER
              email: "info@namabisnis.com", // PLACEHOLDER
              address: {
                "@type": "PostalAddress",
                addressLocality: "[Kota]", // PLACEHOLDER
                addressRegion: "[Provinsi]", // PLACEHOLDER
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-6.200000", // PLACEHOLDER
                longitude: "106.816666", // PLACEHOLDER
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://instagram.com/namabisnis", // PLACEHOLDER
                "https://facebook.com/namabisnis", // PLACEHOLDER
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
