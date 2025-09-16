"use client";
import { useMemo, useState } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  category: string;
  price?: string;
  imageUrl: string;
};

const sampleProducts: Product[] = [
  { id: "1", name: "Meja Kayu Minimalis", category: "Meja", price: "Rp 1.850.000", imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop" },
  { id: "2", name: "Kursi Rotan Modern", category: "Kursi", price: "Rp 750.000", imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" },
  { id: "3", name: "Lemari Pakaian 3 Pintu", category: "Lemari", price: "Rp 4.250.000", imageUrl: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop" },
  { id: "4", name: "Sofa L-Shape", category: "Sofa", price: "Rp 6.900.000", imageUrl: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop" },
  { id: "5", name: "Meja TV Scandinavian", category: "Meja", price: "Rp 1.650.000", imageUrl: "https://images.unsplash.com/photo-1582582621959-48d520114356?q=80&w=1200&auto=format&fit=crop" },
  { id: "6", name: "Kabinet Dapur", category: "Lemari", price: "Rp 8.500.000", imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop" },
];

export default function ProductGallery() {
  const [active, setActive] = useState<string>("Semua");
  const categories = useMemo(() => ["Semua", ...Array.from(new Set(sampleProducts.map(p => p.category)))], []);
  const filtered = useMemo(() => active === "Semua" ? sampleProducts : sampleProducts.filter(p => p.category === active), [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-3 py-1 text-sm ${active === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <div key={p.id} className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm reveal-up ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}>
            <div className="relative h-44 w-full">
              <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-base font-semibold">{p.name}</h4>
                {p.price ? <span className="text-sm text-blue-700 font-medium">{p.price}</span> : null}
              </div>
              <p className="mt-1 text-xs text-gray-500">Kategori: {p.category}</p>
              <div className="mt-3 flex gap-2">
                <a href="https://wa.me/62899666077720" target="_blank" className="btn btn-sm btn-primary">Pesan</a>
                <a href="#contact" className="btn btn-sm btn-outline-primary">Konsultasi</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


