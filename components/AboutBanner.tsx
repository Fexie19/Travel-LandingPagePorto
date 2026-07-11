import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

export default function AboutBanner() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/70 to-ocean-deep/90 z-10" />
        <Image
          src="https://wallpapercave.com/wp/wp12194806.jpg" // Ganti dengan path gambar asli
          alt="Tim travel agent profesional — placeholder, ganti dengan foto asli"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-16 pb-20">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-warm-cloud/80">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home className="w-4 h-4" />
                Beranda
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="text-white font-medium" aria-current="page">
              Tentang Kami
            </li>
          </ol>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Abous Us
        </h1>
        <p className="text-xl text-warm-cloud/90 max-w-2xl">
          {/* PLACEHOLDER: ganti dengan tagline tentang halaman */}
          Kenali kami di balik perjalanan impian Anda
        </p>
      </div>

      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Beranda",
                item: "https://namabisnis.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tentang Kami",
                item: "https://namabisnis.com/tentang-kami",
              },
            ],
          }),
        }}
      />
    </section>
  );
}
