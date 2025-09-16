import ProductGallery from "../components/ProductGallery";

export default function CatalogPage() {
  return (
    <main>
      <h1 className="text-3xl font-semibold">Katalog Produk</h1>
      <p className="mt-2 text-gray-600">Jelajahi pilihan furnitur kami. Gunakan filter untuk menemukan produk yang sesuai.</p>
      <div className="mt-8">
        <ProductGallery />
      </div>
    </main>
  );
}


