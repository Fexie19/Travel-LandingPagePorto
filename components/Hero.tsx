"use client";

import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";

const BUSINESS_NAME = "FTravel";
const WHATSAPP_NUMBER = "8xx-xxxx-xxxx";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo ${BUSINESS_NAME}, saya ingin konsultasi tentang paket wisata.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace(/-/g, "")}?text=${message}`,
      "_blank"
    );
  };

  const scrollToDestinations = () => {
    const element = document.getElementById("destinasi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/80 z-10"
        />
        <Image
          src="https://wallpapercave.com/wp/wp12194792.jpg"
          alt="Pemandangan destinasi wisata Indonesia yang indah — placeholder, ganti dengan foto asli"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white pt-24 pb-16">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-sunset-amber fill-sunset-amber"
              />
            ))}
          </div>
          <span className="text-sm font-medium">
            Dipercaya 5.000+ Wisatawan
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Jelajahi Indonesia,<br className="hidden sm:block" />
          <span className="text-sunset-amber">Wujudkan Impian</span> Perjalananmu
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-warm-cloud mb-10 max-w-2xl mx-auto leading-relaxed">
          {/* PLACEHOLDER: ganti dengan tagline final */}
          Paket wisata terpercaya dengan harga transparan, guide berpengalaman,
          dan layanan penuh perhatian untuk keluarga Indonesia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsAppClick}
            className="btn-cta text-lg px-8 py-4 flex items-center gap-3 shadow-lg w-full sm:w-auto justify-center"
            aria-label="Konsultasi gratis via WhatsApp"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konsultasi Gratis via WhatsApp
          </button>
          <button
            onClick={scrollToDestinations}
            className="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ocean-deep transition-colors w-full sm:w-auto flex items-center gap-2 justify-center"
            aria-label="Lihat paket wisata"
          >
            Lihat Paket Wisata
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Row - Passport Stamp Style */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="passport-stamp w-32 h-32">
            <span className="text-3xl font-bold text-ocean-deep">10+</span>
            <span className="text-xs text-ocean-deep/70 font-medium mt-1">
              Tahun
            </span>
          </div>
          <div className="passport-stamp w-32 h-32">
            <span className="text-3xl font-bold text-ocean-deep">50+</span>
            <span className="text-xs text-ocean-deep/70 font-medium mt-1">
              Destinasi
            </span>
          </div>
          <div className="passport-stamp w-32 h-32">
            <span className="text-3xl font-bold text-ocean-deep">5K+</span>
            <span className="text-xs text-ocean-deep/70 font-medium mt-1">
              Pelanggan
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToDestinations}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white animate-bounce hidden md:block"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
