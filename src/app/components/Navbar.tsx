import Link from "next/link";

export default function Navbar() {
  return (
    // Sticky, semi-transparent navbar with blur and anchor links to sections
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="navbar navbar-expand-md">
          {/* Brand */}
          <Link href="/" className="navbar-brand font-semibold">Wahyu Trianto</Link>

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
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-2">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="#projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link">Skills</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/memory" className="nav-link">Memory Game</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
