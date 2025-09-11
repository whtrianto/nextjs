"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // Top hero section with headline, pitch, and primary CTAs
    <section className="py-10 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">Portfolio</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
            Hi, I&apos;m <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="mt-4 max-w-prose text-gray-600">
            Frontend developer focused on building delightful, accessible interfaces with
            React, Next.js, and TypeScript.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
              data-bs-toggle="tooltip"
              data-bs-title="Scroll to featured projects"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 transition-colors"
              data-bs-toggle="tooltip"
              data-bs-title="Get in touch via email"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          {/* Avatar placeholder. Replace /public/next.svg with your own photo */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-gray-200 md:h-56 md:w-56">
            <Image src="/next.svg" alt="Avatar" fill priority className="object-contain bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}


