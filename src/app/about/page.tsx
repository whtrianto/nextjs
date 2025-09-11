export default function About() {
    return (
      // About page with short bio and contact CTA
      <main className="prose max-w-2xl">
        <h1 className="text-3xl font-semibold">About Me</h1>
        <p className="mt-4 text-gray-700">
          I’m a frontend developer passionate about building clean, accessible, and performant
          user interfaces. I enjoy working with modern stacks like Next.js and TypeScript.
        </p>
        <p className="mt-4 text-gray-700">
          Beyond coding, I like learning about design systems and UX. I’m currently open to
          freelance work and full-time roles.
        </p>
        <a href="mailto:you@example.com" className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Get in Touch
        </a>
      </main>
    );
  }
  