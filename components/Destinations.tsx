"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "8xx-xxxx-xxxx";

interface Package {
  id: number;
  name: string;
  destination: string;
  duration: string;
  price: string;
  category: "domestik" | "luar-negeri";
  type: "keluarga" | "honeymoon" | "open-trip";
  image: string;
  highlight: string;
}

const packages: Package[] = [
  {
    id: 1,
    name: "Paket Hemat Bali 3D2N",
    destination: "Bali",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.850.000",
    category: "domestik",
    type: "keluarga",
    image: "/",
    highlight: "Nikmati pantai, pura, dan kuliner khas Bali",
  },
  {
    id: 2,
    name: "Open Trip Bromo Sunrise",
    destination: "Jawa Timur",
    duration: "2 Hari 1 Malam",
    price: "Rp 650.000",
    category: "domestik",
    type: "open-trip",
    image: "/",
    highlight: "Matahari terbit di puncak Bromo yang ikonik",
  },
  {
    id: 3,
    name: "Honeymoon Lombok 4D3N",
    destination: "Lombok",
    duration: "4 Hari 3 Malam",
    price: "Rp 4.500.000",
    category: "domestik",
    type: "honeymoon",
    image: "/",
    highlight: "Momen spesial di pantai Gili&Tenganan",
  },
  {
    id: 4,
    name: "Petualangan Labuan Bajo",
    destination: "NTT",
    duration: "4 Hari 3 Malam",
    price: "Rp 3.200.000",
    category: "domestik",
    type: "open-trip",
    image: "/",
    highlight: "Kelingking Beach, Komodo, snorkeling",
  },
  {
    id: 5,
    name: "Family Trip Yogyakarta",
    destination: "Yogyakarta",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.400.000",
    category: "domestik",
    type: "keluarga",
    image: "/",
    highlight: "Candi Borobudur, Prambanan, Malioboro",
  },
  {
    id: 6,
    name: "City Break Singapore",
    destination: "Singapura",
    duration: "3 Hari 2 Malam",
    price: "Rp 4.800.000",
    category: "luar-negeri",
    type: "keluarga",
    image: "/",
    highlight: "Marina Bay, Gardens by the Bay, Clarke Quay",
  },
  {
    id: 7,
    name: "Romantic Maldives Escape",
    destination: "Maladewa",
    duration: "5 Hari 4 Malam",
    price: "Rp 18.500.000",
    category: "luar-negeri",
    type: "honeymoon",
    image: "/",
    highlight: "Villa mengapung, snorkeling premium",
  },
  {
    id: 8,
    name: "Adventure Thailand",
    destination: "Thailand",
    duration: "5 Hari 4 Malam",
    price: "Rp 5.900.000",
    category: "luar-negeri",
    type: "open-trip",
    image: "/",
    highlight: "Bangkok, Ayutthaya, Pattaya",
  },
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "domestik", label: "Domestik" },
  { id: "luar-negeri", label: "Luar Negeri" },
];

const types = [
  { id: "all", label: "Semua Tipe" },
  { id: "keluarga", label: "Keluarga" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "open-trip", label: "Open Trip" },
];

export default function Destinations() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredPackages = packages.filter((pkg) => {
    const categoryMatch =
      categoryFilter === "all" || pkg.category === categoryFilter;
    const typeMatch = typeFilter === "all" || pkg.type === typeFilter;
    return categoryMatch && typeMatch;
  });

  const handleWhatsAppClick = (pkg: Package) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan paket "${pkg.name}" (${pkg.duration}) - ${pkg.price}. Mohon info lebih lanjut.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace(/-/g, "")}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="destinasi" className="section-spacing bg-warm-cloud">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-palm-green/10 text-palm-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Paket Wisata
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-4">
            Pilihan Destinasi <span className="text-ocean-deep">Terpopuler</span>
          </h2>
          <p className="text-slate-navy-light max-w-2xl mx-auto">
            {/* PLACEHOLDER: ganti dengan deskripsi final */}
            Temukan paket wisata yang sesuai dengan kebutuhan dan budget Anda.
            Semua paket sudah termasuk akomodasi, transport, dan makan.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  categoryFilter === cat.id
                    ? "bg-ocean-deep text-white"
                    : "bg-white text-slate-navy hover:bg-ocean-deep/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {types.map((type) => (
              <button
                key={type.id}
                onClick={() => setTypeFilter(type.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  typeFilter === type.id
                    ? "bg-sunset-amber text-slate-navy"
                    : "bg-white text-slate-navy hover:bg-sunset-amber/20"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 flex-shrink-0">
                <Image
                  src={pkg.image}
                  alt={`Paket wisata ${pkg.name} — placeholder, ganti dengan foto asli`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Category Badge */}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    pkg.category === "domestik"
                      ? "bg-palm-green text-white"
                      : "bg-ocean-deep text-white"
                  }`}
                >
                  {pkg.category === "domestik" ? "🏠 Domestik" : "✈️ Luar Negeri"}
                </span>
                {/* Type Badge */}
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-sunset-amber text-slate-navy">
                  {pkg.type === "keluarga" && "👨‍👩‍👧 Keluarga"}
                  {pkg.type === "honeymoon" && "💑 Honeymoon"}
                  {pkg.type === "open-trip" && "🎒 Open Trip"}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-navy-light mb-2">
                  <MapPin className="w-4 h-4 text-palm-green" />
                  <span>{pkg.destination}</span>
                </div>
                <h3 className="font-semibold text-lg text-slate-navy mb-2 line-clamp-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-slate-navy-light mb-3 line-clamp-2 flex-grow">
                  {pkg.highlight}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-navy-light mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-warm-cloud">
                  <div>
                    <p className="text-xs text-slate-navy-light">Mulai dari</p>
                    <p className="font-bold text-lg text-ocean-deep">
                      {pkg.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(pkg)}
                    className="btn-primary text-sm flex items-center gap-1"
                    aria-label={`Tanya tentang ${pkg.name}`}
                  >
                    Tanya WA
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="scroll-container pb-4">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="w-72 bg-white rounded-2xl overflow-hidden shadow-md flex-shrink-0"
              >
                {/* Image */}
                <div className="relative h-40 flex-shrink-0">
                  <Image
                    src={pkg.image}
                    alt={`Paket wisata ${pkg.name} — placeholder`}
                    fill
                    className="object-cover"
                    sizes="288px"
                  />
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      pkg.category === "domestik"
                        ? "bg-palm-green text-white"
                        : "bg-ocean-deep text-white"
                    }`}
                  >
                    {pkg.category === "domestik" ? "Domestik" : "Luar Negeri"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-slate-navy-light mb-1">
                    <MapPin className="w-3 h-3 text-palm-green" />
                    <span>{pkg.destination}</span>
                  </div>
                  <h3 className="font-semibold text-base text-slate-navy mb-1">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-navy-light mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-bold text-ocean-deep">{pkg.price}</p>
                    <button
                      onClick={() => handleWhatsAppClick(pkg)}
                      className="btn-primary text-xs py-2 px-3"
                      aria-label={`Tanya tentang ${pkg.name}`}
                    >
                      Tanya WA
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-navy-light">
              Tidak ada paket yang sesuai dengan filter.
            </p>
            <button
              onClick={() => {
                setCategoryFilter("all");
                setTypeFilter("all");
              }}
              className="mt-4 text-ocean-deep font-medium hover:underline"
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
