export function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="border p-4 rounded-lg shadow">
        <h2 className="font-bold">{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
  