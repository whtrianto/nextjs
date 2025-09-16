import Link from "next/link";
import Image from "next/image";

// Minimal project shape used in the homepage grid
type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  imageUrl?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Card with cover image and subtle hover
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {project.imageUrl ? (
        <div className="relative h-44 w-full">
          <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
        </div>
      ) : null}
      <div className="p-5">
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
    </div>
  );
}


