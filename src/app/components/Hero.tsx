"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // Company hero section with value proposition and CTAs
    <section className="relative overflow-hidden rounded-2xl bg-gray-900 py-14 md:py-20">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop"
          alt="Workshop Mebel"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>
      <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_.8fr] mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-white max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-gray-300">Toko Mebel Evas</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl text-white">
            Solusi Mebel Profesional untuk Rumah dan Bisnis Anda
          </h1>
          <p className="mt-4 max-w-prose text-gray-200">
            Kami memproduksi dan menyediakan furnitur custom dengan material pilihan, desain
            modern, dan pengerjaan rapi untuk hunian, kantor, dan proyek komersial.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="btn btn-primary"
              data-bs-toggle="tooltip"
              data-bs-title="Lihat layanan kami"
            >
              Lihat Layanan
            </Link>
            <Link
              href="https://wa.me/62899666077720"
              className="btn btn-ghost-light"
              data-bs-toggle="tooltip"
              data-bs-title="Hubungi via WhatsApp"
              target="_blank"
            >
              <span className="me-2">💬</span> WhatsApp 0899-6660-77720
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          {/* Showcase image */}
          <div className="relative h-48 w-80 overflow-hidden rounded-xl ring-2 ring-white/20 md:h-64 md:w-[28rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop"
              alt="Showroom Mebel"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


