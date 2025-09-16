import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // Sticky, semi-transparent navbar with blur and anchor links to sections
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="navbar navbar-expand-md">
          {/* Brand */}
          <Link href="/" className="navbar-brand font-semibold d-flex align-items-center gap-2">
            <Image src="https://portofolio-wahyu-trianto.vercel.app/assets/img/logo1.png" alt="Toko Mebel Evas" width={28} height={28} />
            <span>Toko Mebel Evas</span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-2 align-items-center">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link">Layanan</Link>
              </li>
              <li className="nav-item">
                <Link href="#portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link href="/catalog" className="nav-link">Katalog</Link>
              </li>
              <li className="nav-item">
                <Link href="#advantages" className="nav-link">Keunggulan</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">Kontak</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">Tentang</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Hubungi Kami</Link>
              </li>
              <li className="nav-item ms-md-2">
                <Link href="https://wa.me/62899666077720" className="btn btn-primary" target="_blank">WhatsApp</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
