import { Target, Eye, Heart, Award, Sparkles } from "lucide-react";

const vision = "Menjadi biro perjalanan wisata terdepan yang menginspirasi masyarakat Indonesia untuk mengeksplorasi keindahan tanah air dengan pengalaman yang tak terlupakan.";

const missions = [
  {
    icon: Target,
    title: "Aksesibel untuk Semua",
    description:
      "Menyediakan paket wisata dengan berbagai range harga sehingga seluruh masyarakat Indonesia bisa menjangkau destinasi impian mereka.",
  },
  {
    icon: Sparkles,
    title: "Layanan Premium",
    description:
      "Memberikan standar layanan profesional dan personal touch di setiap perjalanan, memastikan kenyamanan dan keamanan pelanggan.",
  },
  {
    icon: Heart,
    title: "Pelestarian Lingkungan",
    description:
      "Mendukung turismo berkelanjutan dan bertanggung jawab, berkontribusi pada pelestarian alam dan budaya Indonesia.",
  },
  {
    icon: Award,
    title: "Inovasi Berkelanjutan",
    description:
      "Terus berinovasi dalam layanan dan produk wisata untuk menjawab kebutuhan travelers yang selalu berkembang.",
  },
];

const coreValues = [
  {
    title: "Integritas",
    description: "Jujur dan transparan dalam setiap aspek bisnis",
    color: "bg-ocean-deep",
  },
  {
    title: "Passion",
    description: "Cinta perjalanan yang menular ke setiap pelanggan",
    color: "bg-sunset-amber",
  },
  {
    title: "Profesionalisme",
    description: "Standar layanan tinggi dan bertanggung jawab penuh",
    color: "bg-palm-green",
  },
];

export default function VisionMission() {
  return (
    <section className="section-spacing bg-warm-cloud">
      <div className="container-custom">
        {/* Vision */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ocean-deep/10 text-ocean-deep px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Eye className="w-4 h-4" />
            Visi Kami
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-slate-navy leading-relaxed mb-6">
            &ldquo;{vision}&rdquo;
          </blockquote>
          <div className="w-20 h-1 bg-sunset-amber mx-auto rounded-full" />
        </div>

        {/* Missions */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-navy text-center mb-10">
            Misi Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm card-hover flex gap-5"
              >
                <div className="w-14 h-14 bg-ocean-deep/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <mission.icon className="w-7 h-7 text-ocean-deep" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-slate-navy mb-2">
                    {mission.title}
                  </h4>
                  <p className="text-slate-navy-light leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-navy text-center mb-10">
            Nilai Inti Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm card-hover"
              >
                <div
                  className={`w-16 h-16 ${value.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-2xl font-bold text-white">
                    {value.title[0]}
                  </span>
                </div>
                <h4 className="font-semibold text-xl text-slate-navy mb-2">
                  {value.title}
                </h4>
                <p className="text-slate-navy-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
