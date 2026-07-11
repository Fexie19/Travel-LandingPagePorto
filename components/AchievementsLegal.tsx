import { Shield, BadgeCheck, Users, Globe, FileCheck, Building } from "lucide-react";

const achievements = [
  {
    icon: Users,
    value: "5.000+",
    label: "Wisatawan Dilayani",
    description: "Jumlah wisatawan yang telah kami layani sejak 2014",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Destinasi",
    description: "Pilihan destinasi Domestik & Internasional",
  },
  {
    icon: BadgeCheck,
    value: "4.8/5",
    label: "Rating Google",
    description: "Rating rata-rata dari 500+ ulasan pelanggan",
  },
  {
    icon: Building,
    value: "Izin Resmi",
    label: "Terdaftar Lengkap",
    description: "Punya izin usaha wisata resmi dari pemerintah",
  },
];

const legalDocs = [
  {
    icon: Shield,
    title: "Izin Usaha Biro Perjalanan Wisata",
    description:
      "Terdaftar resmi sebagai biro perjalanan wisata dengan nomor izin yang valid dan teratur diperpanjang.",
    badge: "Terverifikasi",
  },
  {
    icon: FileCheck,
    title: " Anggota ASITA",
    description:
      "Anggota aktif Asosiasi Travel Agent Indonesia (ASITA) yang menjunjung standar industri pariwisata.",
    badge: "Resmi",
  },
];

export default function AchievementsLegal() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-palm-green/10 text-palm-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <BadgeCheck className="w-4 h-4" />
            Legalitas & Pencapaian
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-4">
            Terpercaya & <span className="text-ocean-deep">Resmi</span>
          </h2>
          <p className="text-slate-navy-light max-w-2xl mx-auto">
            {/* PLACEHOLDER: ganti dengan deskripsi final */}
            Kami bangga dengan legalitas dan pencapaian yang telah kami raih
            selama perjalanan bisnis kami.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-warm-cloud rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-14 h-14 bg-ocean-deep/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-ocean-deep" />
              </div>
              <p className="text-3xl font-bold text-ocean-deep mb-1">
                {item.value}
              </p>
              <p className="font-semibold text-slate-navy mb-2">{item.label}</p>
              <p className="text-sm text-slate-navy-light">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Legal Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalDocs.map((doc, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-ocean-deep to-ocean-deep-dark rounded-2xl p-6 md:p-8 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-xl">{doc.title}</h3>
                    <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full font-medium">
                      {doc.badge}
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {/* PLACEHOLDER: ganti dengan detail legal asli */}
                    {doc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 bg-sunset-amber/10 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-lg text-slate-navy font-medium mb-2">
            Komitmen Kami terhadap Keamanan & Kenyamanan Anda
          </p>
          <p className="text-slate-navy-light max-w-3xl mx-auto">
            {/* PLACEHOLDER: ganti dengan statement trust */}
            Sebagai agen travel yang terdaftar resmi, kami memberikan garansi
            keberangkatan, transparente pricing, dan asuransi perjalanan untuk
            setiap paket yang Anda pilih. Satisfaction guarantee adalah prioritas
            utama kami.
          </p>
        </div>
      </div>
    </section>
  );
}
