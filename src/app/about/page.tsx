export default function About() {
    return (
      // Company profile page
      <main className="prose max-w-2xl">
        <h1 className="text-3xl font-semibold">Tentang Toko Mebel</h1>
        <p className="mt-4 text-gray-700">
          Toko Mebel adalah perusahaan furnitur yang berfokus pada pembuatan dan pengadaan
          mebel berkualitas untuk rumah, kantor, dan proyek komersial. Kami menawarkan layanan
          custom sesuai kebutuhan dengan material pilihan dan standar kualitas tinggi.
        </p>
        <p className="mt-4 text-gray-700">
          Dengan tim berpengalaman, kami mengutamakan ketepatan waktu, detail pengerjaan,
          serta layanan purna jual yang responsif. Tujuan kami adalah menghadirkan furnitur
          yang fungsional, estetis, dan tahan lama.
        </p>
        <a href="mailto:mebel@example.com" className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Hubungi Kami
        </a>
      </main>
    );
  }
  