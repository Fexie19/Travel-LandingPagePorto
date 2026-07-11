"use client";

import { useState, FormEvent } from "react";
import { Send, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const BUSINESS_NAME = "FTravel";
const WHATSAPP_NUMBER = "8xx-xxxx-xxxx";
const PHONE = "+62 8xx-xxxx-xxxx";
const EMAIL = "info@namabisnis.com";
const ADDRESS = "Jl. Gamprit 2 No.12";
const OPERATIONAL_HOURS = "Senin - Sabtu: 08.00 - 20.00 WIB";

// Formspree endpoint placeholder - replace with actual Formspree/EmailJS endpoint
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

interface FormData {
  nama: string;
  whatsapp: string;
  destinasi: string;
  pesan: string;
}

interface FormErrors {
  nama?: string;
  whatsapp?: string;
  destinasi?: string;
  pesan?: string;
}

const destinationOptions = [
  "Bali & Lombok",
  "Yogyakarta & Jawa",
  "NTT (Labuan Bajo)",
  "Sumatera",
  "Singapore",
  "Thailand",
  "Maldives",
  "Lainnya",
];

export default function ContactCTA() {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    whatsapp: "",
    destinasi: "",
    pesan: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama harus diisi";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Nomor WhatsApp harus diisi";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "Format nomor WhatsApp tidak valid";
    }

    if (!formData.destinasi) {
      newErrors.destinasi = "Pilih destinasi yang diminati";
    }

    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan tidak boleh kosong";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // In production, replace this with actual form submission
      // For now, simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({ nama: "", whatsapp: "", destinasi: "", pesan: "" });
      setSubmitStatus("success");

      // Open WhatsApp as fallback
      const message = encodeURIComponent(
        `Halo ${BUSINESS_NAME},\n\nPerkenalkan saya:\nNama: ${formData.nama}\nWhatsApp: ${formData.whatsapp}\nDestinasi Minat: ${formData.destinasi}\nPesan: ${formData.pesan}`
      );
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER.replace(/-/g, "")}?text=${message}`,
        "_blank"
      );
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Halo ${BUSINESS_NAME}, saya ingin konsultasi tentang paket wisata.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace(/-/g, "")}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="kontak" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <span className="inline-block bg-palm-green/10 text-palm-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Hubungi Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-navy mb-6">
              Siap Memulai <span className="text-ocean-deep">Perjalanan</span> Anda?
            </h2>
            <p className="text-slate-navy-light mb-8 leading-relaxed">
              {/* PLACEHOLDER: ganti dengan deskripsi final */}
              Konsultasi gratis dengan tim kami. Ceritakan kebutuhan perjalanan
              Anda dan kami bantu wujudkan.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-warm-cloud rounded-xl">
                <div className="w-10 h-10 bg-ocean-deep/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-ocean-deep" />
                </div>
                <div>
                  <p className="font-semibold text-slate-navy">Telepon / WhatsApp</p>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-slate-navy-light hover:text-ocean-deep transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-warm-cloud rounded-xl">
                <div className="w-10 h-10 bg-ocean-deep/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-ocean-deep" />
                </div>
                <div>
                  <p className="font-semibold text-slate-navy">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-slate-navy-light hover:text-ocean-deep transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-warm-cloud rounded-xl">
                <div className="w-10 h-10 bg-ocean-deep/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-ocean-deep" />
                </div>
                <div>
                  <p className="font-semibold text-slate-navy">Alamat</p>
                  <p className="text-slate-navy-light">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-warm-cloud rounded-xl">
                <div className="w-10 h-10 bg-ocean-deep/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-ocean-deep" />
                </div>
                <div>
                  <p className="font-semibold text-slate-navy">Jam Operasional</p>
                  <p className="text-slate-navy-light">{OPERATIONAL_HOURS}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppDirect}
              className="w-full bg-[#25D366] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat Langsung via WhatsApp
            </button>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-warm-cloud rounded-3xl p-6 md:p-8 lg:p-10">
            <h3 className="font-semibold text-2xl text-slate-navy mb-6">
              Kirim Pesan
            </h3>

            {submitStatus === "success" && (
              <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-6">
                <p className="font-medium">Pesan berhasil dikirim!</p>
                <p className="text-sm">Anda akan diarahkan ke WhatsApp untuk konfirmasi.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-100 text-red-800 p-4 rounded-xl mb-6">
                <p className="font-medium">Terjadi kesalahan.</p>
                <p className="text-sm">Silakan coba lagi atau hubungi langsung via WhatsApp.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Nama */}
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-slate-navy mb-2"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.nama
                      ? "border-red-500 focus:ring-red-500"
                      : "border-warm-cloud-dark focus:ring-ocean-deep"
                  } focus:ring-2 focus:border-transparent outline-none transition-colors`}
                  aria-describedby={errors.nama ? "nama-error" : undefined}
                  aria-invalid={errors.nama ? "true" : "false"}
                />
                {errors.nama && (
                  <p id="nama-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.nama}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-slate-navy mb-2"
                >
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Contoh: 0812-3456-7890"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.whatsapp
                      ? "border-red-500 focus:ring-red-500"
                      : "border-warm-cloud-dark focus:ring-ocean-deep"
                  } focus:ring-2 focus:border-transparent outline-none transition-colors`}
                  aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                  aria-invalid={errors.whatsapp ? "true" : "false"}
                />
                {errors.whatsapp && (
                  <p id="whatsapp-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Destinasi */}
              <div>
                <label
                  htmlFor="destinasi"
                  className="block text-sm font-medium text-slate-navy mb-2"
                >
                  Destinasi Minat <span className="text-red-500">*</span>
                </label>
                <select
                  id="destinasi"
                  name="destinasi"
                  value={formData.destinasi}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.destinasi
                      ? "border-red-500 focus:ring-red-500"
                      : "border-warm-cloud-dark focus:ring-ocean-deep"
                  } focus:ring-2 focus:border-transparent outline-none transition-colors bg-white`}
                  aria-describedby={errors.destinasi ? "destinasi-error" : undefined}
                  aria-invalid={errors.destinasi ? "true" : "false"}
                >
                  <option value="">Pilih destinasi...</option>
                  {destinationOptions.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
                {errors.destinasi && (
                  <p id="destinasi-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.destinasi}
                  </p>
                )}
              </div>

              {/* Pesan */}
              <div>
                <label
                  htmlFor="pesan"
                  className="block text-sm font-medium text-slate-navy mb-2"
                >
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ceritakan kebutuhan perjalanan Anda..."
                  className={`w-full px-4 py-3 rounded-xl border resize-none ${
                    errors.pesan
                      ? "border-red-500 focus:ring-red-500"
                      : "border-warm-cloud-dark focus:ring-ocean-deep"
                  } focus:ring-2 focus:border-transparent outline-none transition-colors`}
                  aria-describedby={errors.pesan ? "pesan-error" : undefined}
                  aria-invalid={errors.pesan ? "true" : "false"}
                />
                {errors.pesan && (
                  <p id="pesan-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.pesan}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </>
                )}
              </button>

              <p className="text-xs text-slate-navy-light text-center">
                Dengan mengirim pesan, Anda menyetujui Kebijakan Privasi kami.
                <br />
                {/* PLACEHOLDER: ganti dengan link kebijakan privasi */}
                <a href="/kebijakan-privasi" className="text-ocean-deep hover:underline">
                  Baca Kebijakan Privasi
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
