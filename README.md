# Website Landing Page - Biro Perjalanan Wisata

Website landing page untuk biro perjalanan wisata Indonesia, dibangun dengan Next.js dan Tailwind CSS.

## Demo

Buka [https://namabisnis.com](#) (placeholder) untuk melihat demo.

---

## Daftar Isi

- [Quick Start](#quick-start)
- [Struktur Project](#struktur-project)
- [Konfigurasi Penting](#konfigurasi-penting)
- [Sebelum Go-Live](#sebelum-go-live)
- [Deploy ke Vercel](#deploy-ke-vercel)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Lisensi](#lisensi)

---

## Quick Start

### 1. Clone / Download

```bash
git clone https://github.com/username/travel-landing-page.git
cd travel-landing-page
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk Production

```bash
npm run build
npm start
```

---

## Struktur Project

```
/
├── app/
│   ├── layout.tsx              # Root layout (Navigation, Footer, Floating WA)
│   ├── page.tsx                # Halaman Beranda
│   ├── globals.css              # Global styles & Tailwind
│   └── tentang-kami/
│       └── page.tsx            # Halaman Tentang Kami
├── components/
│   ├── Navigation.tsx           # Navigasi sticky + hamburger mobile
│   ├── Footer.tsx               # Footer dengan legal links
│   ├── FloatingWhatsApp.tsx     # Tombol WA floating persistent
│   ├── Hero.tsx                 # Section 1 Beranda
│   ├── Destinations.tsx         # Section 2 Beranda (paket wisata)
│   ├── ValueProposition.tsx     # Section 3 Beranda (kenapa pilih kami)
│   ├── Testimonials.tsx         # Section 4 Beranda (testimoni)
│   ├── ContactCTA.tsx           # Section 5 Beranda (form kontak)
│   ├── AboutBanner.tsx          # Section 1 Tentang Kami
│   ├── OurStory.tsx             # Section 2 Tentang Kami
│   ├── VisionMission.tsx        # Section 3 Tentang Kami
│   ├── AchievementsLegal.tsx    # Section 4 Tentang Kami
│   └── TeamCTA.tsx             # Section 5 Tentang Kami
├── public/
│   ├── sitemap.xml             # Sitemap untuk SEO
│   ├── robots.txt              # robots.txt
│   └── img/                    # Folder untuk gambar assets
├── next.config.ts              # Konfigurasi Next.js
├── tailwind.config.ts          # Konfigurasi Tailwind (Tailwind v4)
├── postcss.config.mjs          # Konfigurasi PostCSS
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json
```

---

## Konfigurasi Penting

### 1. Nama Bisnis

Ganti semua instances berikut dengan nama bisnis Anda:

| File | Placeholder | Contoh |
|------|-------------|--------|
| `app/layout.tsx` | `[Nama Bisnis Anda]` | `Jelajah Indonesia Tour` |
| `components/Footer.tsx` | `[Nama Bisnis Anda]` | `Jelajah Indonesia Tour` |
| `components/Hero.tsx` | `[Nama Bisnis Anda]` | `Jelajah Indonesia Tour` |
| `components/ValueProposition.tsx` | `{Nama Bisnis}` | `Jelajah Indonesia` |
| `components/TeamCTA.tsx` | `[Nama Bisnis Anda]` | `Jelajah Indonesia Tour` |
| `components/ContactCTA.tsx` | `[Nama Bisnis Anda]` | `Jelajah Indonesia Tour` |
| `public/sitemap.xml` | `namabisnis.com` | `jelajahindonesia.com` |

### 2. Nomor WhatsApp

Ganti semua instances berikut:

| File | Placeholder | Contoh |
|------|-------------|--------|
| `components/Navigation.tsx` | `8xx-xxxx-xxxx` | `812-3456-7890` |
| `components/FloatingWhatsApp.tsx` | `8xx-xxxx-xxxx` | `812-3456-7890` |
| `components/Hero.tsx` | `8xx-xxxx-xxxx` | `812-3456-7890` |
| `components/Destinations.tsx` | `8xx-xxxx-xxxx` | `812-3456-7890` |
| `components/ContactCTA.tsx` | `8xx-xxxx-xxxx` | `812-3456-7890` |
| `components/TeamCTA.tsx` | `8xx-xxxx-xxxx` | `812-3456-7890` |
| `app/layout.tsx` (schema) | `+62 8xx-xxxx-xxxx` | `+62 812-3456-7890` |

**Format:** Gunakan format `812-3456-7890` (tanpa `+62` di URL wa.me)

### 3. Alamat & Lokasi

| File | Placeholder | Contoh |
|------|-------------|--------|
| `components/Footer.tsx` | `[Alamat Kantor - PLACEHOLDER]` | `Jl. Sudirman No. 123, Jakarta` |
| `components/ContactCTA.tsx` | `[Alamat Kantor - PLACEHOLDER]` | `Jl. Sudirman No. 123, Jakarta` |
| `components/TeamCTA.tsx` | `[Alamat Kantor - PLACEHOLDER]` | `Jl. Sudirman No. 123, Jakarta` |
| `app/layout.tsx` (schema) | `[Kota]`, `[Provinsi]` | `Jakarta`, `DKI Jakarta` |

### 4. Koordinat GPS (untuk Google Maps)

| File | Placeholder | Contoh |
|------|-------------|--------|
| `app/layout.tsx` (schema) | `-6.200000`, `106.816666` | Koordinat kantor Anda |

### 5. Meta Tags & SEO

| File | Placeholder | Lokasi |
|------|-------------|--------|
| `app/layout.tsx` | `SITE_URL` | `https://namabisnis.com` |
| `app/layout.tsx` | `SITE_NAME` | `[Nama Bisnis Anda]` |
| `app/layout.tsx` | `SITE_DESCRIPTION` | Deskripsi bisnis Anda |
| `app/layout.tsx` | `googleVerification` | Kode dari Google Search Console |
| `public/sitemap.xml` | `namabisnis.com` | Domain Anda |
| Schema JSON-LD | Social media links | Instagram & Facebook |

### 6. Form Kontak

Form menggunakan placeholder endpoint Formspree. Untuk production:

1. Daftar di [Formspree.io](https://formspree.io)
2. Buat form baru dan copy Form ID
3. Ganti `FORM_ENDPOINT` di `components/ContactCTA.tsx`:

```tsx
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
// becomes
const FORM_ENDPOINT = "https://formspree.io/f/xyzabcde";
```

Alternatif lain: EmailJS, Web3Forms, atau backend custom.

---

## Sebelum Go-Line

### Checklist Wajib - Lakukan Semua sebelum Launch

#### Informasi Bisnis
- [ ] Ganti nama bisnis di semua file
- [ ] Ganti nomor WhatsApp di semua file
- [ ] Update alamat kantor
- [ ] Update email resmi
- [ ] Update jam operasional
- [ ] Update koordinat GPS

#### Konten & Copy
- [ ] Review & replace semua `{/* PLACEHOLDER: ... */}` comments
- [ ] Ganti tagline hero dengan tagline final
- [ ] Update deskripsi paket wisata dengan konten asli
- [ ] Update testimoni dengan testimoni pelanggan nyata
- [ ] Update cerita perusahaan di halaman Tentang Kami
- [ ] Update visi & misi jika ada perubahan
- [ ] Review & replace milestone di OurStory.tsx
- [ ] Update info tim (nama, foto, role)

#### Gambar & Media
- [ ] Ganti semua placeholder images dengan foto asli:
  - Hero background
  - Foto paket wisata (8 paket)
  - Foto tim/staff
  - About banner background
  - Our story image
- [ ] Buat dan upload logo PNG
- [ ] Buat og-image.jpg (1200x630px)
- [ ] Optimasi semua gambar (WebP, < 200KB per image)

#### Legalitas
- [ ] Update nomor izin usaha di AchievementsLegal.tsx
- [ ] Update detail keanggotaan ASITA
- [ ] Review & replace Syarat & Ketentuan dengan teks final
- [ ] Review & replace Kebijakan Privasi dengan teks final
- [ ] Konsultasi dengan pengacara untuk legal documents

#### SEO & Technical
- [ ] Update sitemap.xml dengan URL final
- [ ] Update canonical URLs
- [ ] Update Google Search Console verification code
- [ ] Submit sitemap ke Google Search Console
- [ ] Setup Google Analytics 4 (G-XXXXXXXXXX)
- [ ] Setup Google Business Profile (di luar scope coding)

#### Domain & Hosting
- [ ] Configure domain di Vercel/Netlify
- [ ] Setup SSL certificate
- [ ] Test semua links dan forms
- [ ] Test di mobile device
- [ ] Lighthouse audit (target > 90)

---

## Deploy ke Vercel

### Option 1: Via Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Pilih account Anda
# - Link to existing project? No
# - Project name? travel-landing-page
# - Directory? ./
# - Override settings? No
```

### Option 2: Via GitHub Integration

1. Push kode ke GitHub repository
2. Buka [vercel.com/new](https://vercel.com/new)
3. Import repository dari GitHub
4. Configure project settings
5. Deploy

### Option 3: Static Export (Shared Hosting)

```bash
# Edit next.config.ts
# Tambahkan: output: 'export'

# Build
npm run build

# Upload .next/static folder dan out/ folder ke hosting
```

---

## Fitur

### Must Have (Diimplementasi)
- ✅ Navigasi responsif (sticky header, hamburger mobile)
- ✅ Floating WhatsApp Button (persistent, pre-filled message)
- ✅ Contact form dengan validasi
- ✅ Smooth scroll & anchor links
- ✅ Image lazy loading
- ✅ SEO meta tags & schema markup
- ✅ Google Maps embed (Tentang Kami)

### Should Have (Diimplementasi)
- ✅ Filter kategori paket wisata
- ✅ Carousel testimoni
- ✅ Mobile horizontal scroll untuk paket

### Out of Scope
- ❌ Multi-language support
- ❌ Live chat widget
- ❌ Blog/Artikel
- ❌ Booking & payment online
- ❌ CMS/Admin dashboard

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Fraunces, Plus Jakarta Sans)
- **Hosting:** Vercel (recommended) / Netlify / Static hosting

---

## Catatan Penting

### Hak Cipta Gambar
**PENTING:** Jangan gunakan gambar yang dilindungi hak cipta. Gunakan:
- Foto asli Anda sendiri
- Stock photos dengan lisensi yang sesuai (Unsplash, Pexels)
- Placeholder images (sudah dikonfigurasi dengan alt text deskriptif)

### Konten Placeholder
Semua data placeholder ditandai jelas. Wajib diganti dengan data asli sebelum go-live.

### Legal Documents
Teks Syarat & Ketentuan serta Kebijakan Privasi adalah **boilerplate generik**. Wajib direview oleh pengacara sebelum digunakan di production.

---

## Kontribusi

Pull requests diterima. Untuk perubahan besar, buka issue terlebih dahulu.

---

## Lisensi

ISC - lihat file LICENSE untuk detail.

---

## Credits

Dibuat dengan Next.js + Tailwind CSS. Desain mengikuti brief PRD dengan design tokens yang ditentukan.

---

*Last updated: July 2026*
#   T r a v e l - L a n d i n g P a g e P o r t o  
 