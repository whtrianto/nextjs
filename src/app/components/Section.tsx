// Generic section wrapper with spacing and heading
export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}


