"use client";

import Image from "next/image";
import { MessageCircle, Mail, User } from "lucide-react";

const BUSINESS_NAME = "[Nama Bisnis Anda]";
const WHATSAPP_NUMBER = "8xx-xxxx-xxxx";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  whatsapp?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "[Nama Founder/Owner]",
    role: "Founder & CEO",
    avatar: "/",
    whatsapp: WHATSAPP_NUMBER,
  },
  {
    id: 2,
    name: "[Nama Tour Manager]",
    role: "Tour Manager",
    avatar: "/",
  },
  {
    id: 3,
    name: "[Nama Guide 1]",
    role: "Tour Guide - Jawa & Bali",
    avatar: "/",
  },
  {
    id: 4,
    name: "[Nama Guide 2]",
    role: "Tour Guide - NTT & Lombok",
    avatar: "/",
  },
];

export default function TeamCTA() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo ${BUSINESS_NAME}, saya ingin konsultasi tentang paket wisata.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace(/-/g, "")}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="section-spacing bg-warm-cloud">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-ocean-deep/10 text-ocean-deep px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <User className="w-4 h-4" />
            Tim Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-4">
            Orang-Orang di Balik <span className="text-sunset-amber">Perjalanan</span> Anda
          </h2>
          <p className="text-slate-navy-light max-w-2xl mx-auto">
            {/* PLACEHOLDER: ganti dengan deskripsi tim */}
            Tim profesional dan berpengalaman yang siap membantu Anda dari
            perencanaan hingga akhir perjalanan.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 text-center card-hover"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-warm-cloud">
                <Image
                  src={member.avatar}
                  alt={`Foto ${member.name} — placeholder, ganti dengan foto asli`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="font-semibold text-lg text-slate-navy mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-slate-navy-light mb-3">{member.role}</p>
              <div className="flex justify-center gap-2">
                {member.whatsapp && (
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(
                        `Halo ${member.name}, saya ingin info tentang paket wisata.`
                      );
                      window.open(
                        `https://wa.me/${member.whatsapp?.replace(/-/g, "")}?text=${msg}`,
                        "_blank"
                      );
                    }}
                    className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#20bd5a] transition-colors"
                    aria-label={`Hubungi ${member.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                )}
                {member.email && (
                  <button
                    onClick={() => {
                      window.location.href = `mailto:${member.email}`;
                    }}
                    className="w-9 h-9 bg-ocean-deep rounded-full flex items-center justify-center text-white hover:bg-ocean-deep-dark transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Maps - Should Have */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="p-4 border-b border-warm-cloud">
              <h3 className="font-semibold text-lg text-slate-navy">
                Kunjungi Kantor Kami
              </h3>
              <p className="text-sm text-slate-navy-light">
                {/* Alamat */}
                [Jl. Gamprit 2 No.12]
              </p>
            </div>
            <div className="aspect-video relative">
              {/* Google Maps embed iframe */}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=JL.%20Gamprit%202%20Ujung%20No.12&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi kantor di peta"
                className="grayscale"
              />
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-ocean-deep to-ocean-deep-dark rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Siap Memulai Petualangan Anda?
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {/* PLACEHOLDER: ganti dengan CTA copy */}
              Jangan tunda lagi. Konsultasi gratis dengan tim kami dan wujudkan
              perjalanan impian Anda bersama {BUSINESS_NAME}.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-sm">Konsultasi gratis tanpa komitmen</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-sm">Respon cepat dalam 1x24 jam</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <span className="text-sm">Itinerary custom sesuai kebutuhan</span>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat via WhatsApp Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
