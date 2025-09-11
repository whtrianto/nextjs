// The homepage composes multiple sections: Hero, Projects, Skills, Contact, and Footer
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

// Sample data driving the projects grid. Replace with your real projects.
const projects = [
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with charts, auth, and responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Landing Page Kit",
    description: "Reusable components for marketing pages and product sites.",
    tags: ["React", "UI", "Accessibility"],
    href: "#",
  },
  {
    title: "E-commerce UX",
    description: "Product listing, cart interactions, and checkout prototype.",
    tags: ["Design", "Next.js"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* Simple skill tags. Consider extracting into a component if it grows */}
      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Accessibility",
            "Testing",
          ].map((s) => (
            <span key={s} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Contact CTA. Swap mailto with your form endpoint if needed */}
      <Section id="contact" title="Contact">
        <div className="max-w-md">
          <p className="text-gray-600">Interested in collaborating or hiring? I’m open to opportunities.</p>
          <a href="mailto:you@example.com" className="btn btn-primary mt-3" data-bs-toggle="tooltip" data-bs-title="Send me an email">
            you@example.com
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}
