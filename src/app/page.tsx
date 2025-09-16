// The homepage composes multiple sections: Hero, Projects, Skills, Contact, and Footer
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ProductGallery from "./components/ProductGallery";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Project list (single entry for company furniture website)
const projects = [
  {
    title: "Website Perusahaan Toko Mebel",
    description:
      "Situs profil perusahaan mebel dengan katalog produk, halaman kontak, dan informasi profil bisnis.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Bootstrap"],
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1582582621959-48d520114356?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="services" title="Layanan">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            { title: "Pembuatan Furnitur Custom", desc: "Desain sesuai kebutuhan rumah, kantor, dan retail." },
            { title: "Renovasi & Built-in", desc: "Kitchen set, lemari, partisi, dan interior built-in." },
            { title: "Pengadaan Proyek", desc: "Pengadaan massal untuk proyek komersial dan institusi." }
          ].map((s) => (
            <div key={s.title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="portfolio" title="Portfolio">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div key={p.title} className={`reveal-up ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="advantages" title="Keunggulan">
        <div className="grid gap-6 md:grid-cols-3">
          {[ 
            { title: "Material Terbaik", desc: "Kayu pilihan, finishing rapi, dan hardware berkualitas." },
            { title: "Desain Modern", desc: "Estetika fungsional yang menyesuaikan ruang dan brand Anda." },
            { title: "Tepat Waktu", desc: "Produksi terjadwal dan pemasangan yang efisien." }
          ].map((i) => (
            <div key={i.title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="catalog" title="Katalog Produk">
        <ProductGallery />
      </Section>

      <Section id="testimonials" title="Testimoni Klien">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Budi, Jakarta", quote: "Kualitas dan waktu pengerjaan sangat memuaskan." },
            { name: "Sari, Bandung", quote: "Desainnya modern, hasil pemasangan rapi." },
            { name: "Rina, Surabaya", quote: "Komunikasi cepat dan profesional." }
          ].map((t, idx) => (
            <div key={t.name} className={`rounded-lg border border-gray-200 bg-white p-5 shadow-sm reveal-up ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}>
              <p className="italic text-gray-700">“{t.quote}”</p>
              <p className="mt-3 text-sm text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="my-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between reveal-up">
          <div>
            <h3 className="text-2xl font-semibold">Siap wujudkan furnitur impian Anda?</h3>
            <p className="opacity-90">Konsultasikan kebutuhan Anda, kami bantu dari desain hingga pemasangan.</p>
          </div>
          <a href="mailto:mebel@example.com" className="rounded-md bg-white px-5 py-2 font-medium text-blue-700 hover:bg-gray-100">Hubungi Kami</a>
        </div>
      </section>

      <Section id="clients" title="Klien Kami">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop"
          ].map((src, idx) => (
            <div key={src} className={`reveal-up ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}>
              <img src={src} alt="Logo Klien" className="h-14 w-full rounded-md object-cover opacity-80 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </Section>

      <Section id="process" title="Proses Produksi">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { t: "Konsultasi", d: "Diskusi kebutuhan, ukuran, dan preferensi desain." },
            { t: "Desain", d: "Sketsa dan visualisasi, pemilihan material dan finishing." },
            { t: "Produksi", d: "Pembuatan di workshop dengan kontrol kualitas." },
            { t: "Instalasi", d: "Pengiriman dan pemasangan di lokasi klien." }
          ].map((s, idx) => (
            <div key={s.t} className={`rounded-lg border border-gray-200 bg-white p-5 shadow-sm reveal-up ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : idx === 3 ? "reveal-delay-3" : ""}`}>
              <div className="text-2xl font-bold text-blue-600">{idx + 1}</div>
              <h4 className="mt-2 text-lg font-semibold">{s.t}</h4>
              <p className="mt-1 text-sm text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA. Swap mailto with your form endpoint if needed */}
      <Section id="contact" title="Kontak">
        <div className="max-w-md">
          <p className="text-gray-600">Butuh penawaran atau konsultasi produk mebel? Hubungi kami.</p>
          <div className="mt-3 flex gap-3">
            <a href="https://wa.me/62899666077720" target="_blank" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Chat WhatsApp">
              WhatsApp 0899-6660-77720
            </a>
            <a href="mailto:mebel@example.com" className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-title="Kirim email ke kami">
              Email
            </a>
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
