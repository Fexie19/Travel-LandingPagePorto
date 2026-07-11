"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Putri",
    location: "Jakarta",
    avatar: "/",
    rating: 5,
    text: "Pengalaman honeymoon ke Lombok bersama suami sangat memorable! Villas-nya bagus, itinerary-nya lengkap, dan guide-nya sangat helpful. Highly recommended!",
    trip: "Honeymoon Lombok 4D3N",
  },
  {
    id: 2,
    name: "Budi Santoso",
    location: "Surabaya",
    avatar: "/",
    rating: 5,
    text: "Open trip Bromo bareng tim kantor jadi pengalaman seru. Semua terorganisir dengan baik, busnya nyaman, dan sunrise di Bromo gak ada duanya. Terima kasih!",
    trip: "Open Trip Bromo",
  },
  {
    id: 3,
    name: "Dewi Rahayu",
    location: "Bandung",
    avatar: "/",
    rating: 5,
    text: "Liburan keluarga ke Bali 3D2N super menyenangkan. Anak-anak happy banget. Harga bersaing, hotel bintang 4 strategis, dan tour guidenya sabar banget ngurusin anak-anak.",
    trip: "Paket Hemat Bali 3D2N",
  },
  {
    id: 4,
    name: "Ahmad Rizki",
    location: "Yogyakarta",
    avatar: "/",
    rating: 4,
    text: "Tour ke Labuan Bajo bersama {[Nama Bisnis]} luar biasa! diving-nya seru, pantainya cantik, kapal phinisi-nya nyaman. Worth every penny!",
    trip: "Petualangan Labuan Bajo",
  },
  {
    id: 5,
    name: "Lisa Permata",
    location: "Semarang",
    avatar: "/",
    rating: 5,
    text: "Booking honeymoon ke Maldives impian dari dulu. {[Nama Bisnis]} bantu full dari planning sampai selesai. Super profesional dan komunikatif!",
    trip: "Romantic Maldives Escape",
  },
  {
    id: 6,
    name: "Hendra Wijaya",
    location: "Medan",
    avatar: "/",
    rating: 5,
    text: "Family trip ke Yogyakarta asik banget! Driver-nya ramah, mobilnya nyaman, dan itinerary-nya pas untuk anak-anak. Pasti balik lagi!",
    trip: "Family Trip Yogyakarta",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.clientWidth || 0;
      const gap = 24; // gap-6 = 1.5rem = 24px
      trackRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const goNext = () => {
    const nextIndex = Math.min(currentIndex + 1, testimonials.length - 1);
    scrollToIndex(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      scrollToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section-spacing bg-warm-cloud overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-ocean-deep/10 text-ocean-deep px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-4">
            Apa Kata <span className="text-sunset-amber">Pelanggan</span> Kami
          </h2>
          <p className="text-slate-navy-light max-w-2xl mx-auto">
            {/* PLACEHOLDER: ganti dengan deskripsi final */}
            Lebih dari 5.000 pelanggan telah merasakan layanan kami. Ini
            pengalaman nyata dari mereka yang sudah traveled bersama kami.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-ocean-deep hover:bg-ocean-deep hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed -ml-2 md:ml-0"
            aria-label="Testimoni sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex === testimonials.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-ocean-deep hover:bg-ocean-deep hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed -mr-2 md:mr-0"
            aria-label="Testimoni selanjutnya"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="testimonial-track px-4 md:px-12"
            role="region"
            aria-label="Koleksi testimoni"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card w-[300px] sm:w-[350px] md:w-[400px] bg-white rounded-2xl p-6 md:p-8 shadow-md"
                role="group"
                aria-label={`Testimoni dari ${testimonial.name}`}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-ocean-deep/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-sunset-amber fill-sunset-amber"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-navy leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Trip Badge */}
                <div className="inline-block bg-warm-cloud text-ocean-deep text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.trip}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-warm-cloud">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar ${testimonial.name} — placeholder`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-navy-light">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-ocean-deep"
                    : "bg-ocean-deep/30 hover:bg-ocean-deep/50"
                }`}
                aria-label={`Pindah ke testimoni ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* Google Rating Badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="text-left">
              <p className="text-sm font-medium text-slate-navy">
                Rating Google
              </p>
              <p className="text-xs text-slate-navy-light">
                4.8 dari 5 (500+ ulasan)
              </p>
            </div>
            <div className="flex gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-sunset-amber fill-sunset-amber"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Schema.org Review markup - visible for crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "[Nama Bisnis Anda] - Paket Wisata Indonesia",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "500",
              },
              review: testimonials.slice(0, 3).map((t) => ({
                "@type": "Review",
                author: t.name,
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: t.rating.toString(),
                },
                reviewBody: t.text,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
