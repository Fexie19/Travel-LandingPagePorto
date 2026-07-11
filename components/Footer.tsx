import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BUSINESS_NAME = "FTravel";
const ADDRESS = "Jl. Gamprit 2 No.12";
const PHONE = "+62 8xx-xxxx-xxxx";
const EMAIL = "info@namabisnis.com";
const OPERATIONAL_HOURS = "Senin - Sabtu: 08.00 - 20.00 WIB";

// Instagram Icon SVG
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Facebook Icon SVG
const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-navy text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-sunset-amber" />
              <span className="font-bold text-xl">{BUSINESS_NAME}</span>
            </div>
            <p className="text-warm-cloud-dark mb-6 leading-relaxed">
              {/* PLACEHOLDER: ganti dengan deskripsi bisnis final */}
              Partner perjalanan wisata terpercaya Anda. Wujudkan
              petualangan impian bersama tim profesional yang berpengalaman.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/namabisnis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-deep flex items-center justify-center hover:bg-sunset-amber transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/namabisnis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-deep flex items-center justify-center hover:bg-sunset-amber transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-sunset-amber">
              Navigasi
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-warm-cloud-dark hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#destinasi"
                  className="text-warm-cloud-dark hover:text-white transition-colors"
                >
                  Paket Wisata
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-warm-cloud-dark hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontak"
                  className="text-warm-cloud-dark hover:text-white transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-sunset-amber">
              Destinasi Populer
            </h3>
            <ul className="space-y-3">
              <li className="text-warm-cloud-dark">Bali & Lombok</li>
              <li className="text-warm-cloud-dark">Yogyakarta & Jawa</li>
              <li className="text-warm-cloud-dark">NTT (Labuan Bajo)</li>
              <li className="text-warm-cloud-dark">Sumatera Utara</li>
              {/* PLACEHOLDER: ganti dengan destinasi aktual */}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-sunset-amber">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunset-amber flex-shrink-0 mt-0.5" />
                <span className="text-warm-cloud-dark">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sunset-amber flex-shrink-0" />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-warm-cloud-dark hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunset-amber flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-warm-cloud-dark hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sunset-amber flex-shrink-0" />
                <span className="text-warm-cloud-dark">{OPERATIONAL_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-navy-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-cloud-dark">
            <p>&copy; {currentYear} {BUSINESS_NAME}. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <Link
                href="/syarat-ketentuan"
                className="hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/kebijakan-privasi"
                className="hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
            </div>
          </div>
          <p className="text-xs text-warm-cloud-dark/60 mt-4 text-center md:text-left">
            {/* PLACEHOLDER: teks boilerplate ini bukan naskah hukum final */}
            Teks Syarat & Ketentuan serta Kebijakan Privasi pada link di atas
            adalah boilerplate generik. Wajib direview oleh pengacara/legal
            sebelum publish ke produksi.
          </p>
        </div>
      </div>
    </footer>
  );
}
