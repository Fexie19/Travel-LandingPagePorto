import {
  Shield,
  Wallet,
  Users,
  Clock,
  CheckCircle,
  Headphones,
} from "lucide-react";

const values = [
  {
    icon: Wallet,
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga yang Anda bayar, termasuk semua pajak dan biaya tambahan.",
  },
  {
    icon: Users,
    title: "Guide Berpengalaman",
    description:
      "Tim guide bersertifikat dan berpengalaman akan menemani perjalanan Anda dengan pengetahuan lokal yang mendalam.",
  },
  {
    icon: Shield,
    title: "Legalitas Resmi",
    description:
      "Terdaftar resmi sebagai biro perjalanan wisata dengan izin usaha yang lengkap dan terjamin.",
  },
  {
    icon: CheckCircle,
    title: "Garansi Keberangkatan",
    description:
      "Paket akan berangkat sesuai jadwal yang dijanjikan. Jika dibatalkan oleh kami, uang Anda 100% dikembalikan.",
  },
  {
    icon: Headphones,
    title: "Layanan Cepat Respons",
    description:
      "Tim customer service kami siap membantu 7 hari seminggu melalui WhatsApp, telepon, dan email.",
  },
  {
    icon: Clock,
    title: "Fleksibel & Customizable",
    description:
      "Tidak menemukan paket yang sesuai? Kami siap membuatkan itinerary custom sesuai kebutuhan dan budget Anda.",
  },
];

const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "5.000+", label: "Pelanggan Puas" },
  { value: "50+", label: "Destinasi" },
  { value: "4.8/5", label: "Rating Google" },
];

export default function ValueProposition() {
  return (
    <section id="tentang" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sunset-amber/10 text-sunset-amber px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Keunggulan Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-4">
            Kenapa Memilih <span className="text-ocean-deep">{`FTravel`}</span>?
          </h2>
          <p className="text-slate-navy-light max-w-2xl mx-auto">
            {/* PLACEHOLDER: ganti dengan deskripsi final */}
            Kami berkomitmen memberikan pengalaman perjalanan terbaik dengan
            standar layanan profesional dan penuh dedikasi.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-warm-cloud rounded-2xl p-6 md:p-8 card-hover"
            >
              <div className="w-14 h-14 bg-ocean-deep/10 rounded-xl flex items-center justify-center mb-5">
                <value.icon className="w-7 h-7 text-ocean-deep" />
              </div>
              <h3 className="font-semibold text-xl text-slate-navy mb-3">
                {value.title}
              </h3>
              <p className="text-slate-navy-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats - Passport Stamp Style */}
        <div className="bg-ocean-deep rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4"
              >
                <div className="passport-stamp mx-auto w-28 h-28 md:w-32 md:h-32 mb-3">
                  <span className="text-2xl md:text-3xl font-bold text-ocean-deep">
                    {stat.value}
                  </span>
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
