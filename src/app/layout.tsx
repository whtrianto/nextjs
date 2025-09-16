import "bootstrap/dist/css/bootstrap.min.css";
// Global CSS for tokens, base styles, and Tailwind setup
import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import BootstrapClient from "./components/BootstrapClient";

// Load Google Font and expose as CSS variable used in globals.css
const Inter_import = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

// Default SEO metadata applied to every page
export const metadata: Metadata = {
  title: "Toko Mebel Evas | Perusahaan Furnitur Profesional",
  description: "Toko Mebel Evas: katalog furnitur, layanan custom, dan konsultasi. Hubungi kami di 0899666077720.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Apply font variable at the html root
    <html lang="en" className={Inter_import.variable}>
      {/* Body sets base theme tokens and ensures full-height */}
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <BootstrapClient />
        <Navbar />
        {/* Constrain page to a comfortable reading width */}
        <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">{children}</main>
      </body>
    </html>
  );
}
