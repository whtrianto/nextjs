import Link from "next/link";

// Minimal project shape used in the homepage grid
type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Card with light glassmorphism and subtle hover
    <div className="group rounded-lg border border-gray-200 p-5 shadow-sm transition-all hover:shadow-md bg-white/50 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.href ? (
          <Link href={project.href} className="text-sm text-blue-600 hover:underline">
            Visit →
          </Link>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}


