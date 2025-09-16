"use client";
import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/62899666077720"
      target="_blank"
      className="fixed bottom-6 right-6 z-[60] rounded-full bg-green-500 px-4 py-3 text-white shadow-lg hover:bg-green-600"
      aria-label="Chat WhatsApp"
    >
      WhatsApp
    </Link>
  );
}


