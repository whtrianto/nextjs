import Link from "next/link";

export default function Footer() {
  return (
    // Global footer with social links
    <footer className="mt-16 border-t border-gray-200 py-8 text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" className="hover:text-foreground">GitHub</Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-foreground">LinkedIn</Link>
          <Link href="#contact" className="hover:text-foreground">Contact</Link>
        </div>
      </div>
    </footer>
  );
}


