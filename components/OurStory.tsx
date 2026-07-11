import Image from "next/image";
import { Calendar, Compass, Users } from "lucide-react";

const BUSINESS_NAME = "[Nama Bisnis Anda]";

const milestones = [
  {
    year: "2014",
    title: "Awal Perjalanan",
    description:
      "Berawal dari kecintaan terhadap alam Indonesia, founder memulai bisnis travel dari modal kecil namun semangat besar.",
  },
  {
    year: "2017",
    title: "Tim Guide Profesional",
    description:
      "Resmi membentuk tim guide bersertifikat dan memperluas jaringan partner hotel di berbagai destinasi populer.",
  },
  {
    year: "2020",
    title: "Layanan Tour Online",
    description:
      "Meluncurkan layanan booking online dan paket tour custom untuk menjawab kebutuhan travelers di era digital.",
  },
  {
    year: "2024",
    title: "5.000+ Pelanggan",
    description:
      "Mencapai milestone 5.000+ pelanggan yang puas dan terus berinovasi dengan paket-paket wisata baru.",
  },
];

export default function OurStory() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/our-story.jpg" // Ganti dengan path gambar asli
                alt="Ilustrasi perjalanan bisnis travel — placeholder, ganti dengan foto tim/kantor asli"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-sunset-amber text-slate-navy rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-medium">Tahun Pengalaman</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-ocean-deep/10 text-ocean-deep px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Compass className="w-4 h-4" />
              Cerita Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-6">
              Dari Impian Menjadi <span className="text-ocean-deep">Kenyataan</span>
            </h2>

            {/* PLACEHOLDER: ganti dengan cerita bisnis asli */}
            <div className="prose prose-lg max-w-none text-slate-navy-light mb-8">
              <p>
                Didirikan pada tahun 2014, {BUSINESS_NAME} lahir dari kecintaan
                mendalam terhadap keindahan alam Indonesia. Kami percaya bahwa setiap
                orang berhak merasakan keajaiban tanah air, dari pantai eksotis Bali
                hingga savana spektakuler NTT.
              </p>
              <p>
                Berawal dari layanan tour sederhana, kini kami telah melayani lebih
                dari 5.000 pelanggan dari berbagai kalangan — mulai dari keluarga muda
                yang ingin quality time, pasangan suami istri yang merencanakan
                honeymoon romantis, hingga komunitas yang ingin berbagi petualangan.
              </p>
              <p>
                Filosofi kami sederhana: memberikan pengalaman perjalanan yang tak
                terlupakan dengan standar layanan profesional, harga transparan, dan
                kehangatan hospitality Indonesia.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-warm-cloud rounded-xl">
                <Calendar className="w-6 h-6 text-ocean-deep mx-auto mb-2" />
                <p className="text-2xl font-bold text-ocean-deep">2014</p>
                <p className="text-xs text-slate-navy-light">Berdiri</p>
              </div>
              <div className="text-center p-4 bg-warm-cloud rounded-xl">
                <Users className="w-6 h-6 text-ocean-deep mx-auto mb-2" />
                <p className="text-2xl font-bold text-ocean-deep">5.000+</p>
                <p className="text-xs text-slate-navy-light">Pelanggan</p>
              </div>
              <div className="text-center p-4 bg-warm-cloud rounded-xl">
                <Compass className="w-6 h-6 text-ocean-deep mx-auto mb-2" />
                <p className="text-2xl font-bold text-ocean-deep">50+</p>
                <p className="text-xs text-slate-navy-light">Destinasi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-navy text-center mb-12">
            Perjalanan Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative bg-warm-cloud rounded-2xl p-6 card-hover"
              >
                {/* Year Badge */}
                <div className="absolute -top-4 left-6 bg-ocean-deep text-white px-4 py-1.5 rounded-full text-sm font-bold">
                  {milestone.year}
                </div>
                <h4 className="font-semibold text-lg text-slate-navy mt-4 mb-3">
                  {milestone.title}
                </h4>
                <p className="text-sm text-slate-navy-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
