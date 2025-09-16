import Link from "next/link";

export default function Footer() {
  return (
    // Global footer with social links
    <footer className="mt-16 border-t border-gray-200 py-8 text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Toko Mebel Evas. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#portfolio" className="hover:text-foreground">Portfolio</Link>
          <Link href="#services" className="hover:text-foreground">Layanan</Link>
          <Link href="https://wa.me/62899666077720" target="_blank" className="hover:text-foreground">WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}


