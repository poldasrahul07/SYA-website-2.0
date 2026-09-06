const albumTemplates = [
  "Prathisthapana",
  "Daily Pooja",
  "Cultural Programs",
  "Annadanam / Prasadam",
  "Decoration",
  "Volunteers",
  "Visarjan",
];

export default function UtsavYearPage({
  params,
}: {
  params: { year: string };
}) {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-vermillion">
        Ganesh Utsav
      </p>
      <h1 className="mt-1 font-display text-4xl text-ink">{params.year}</h1>

      <dl className="mt-6 grid grid-cols-3 gap-6 border-y border-brass/15 py-6 text-sm">
        <div>
          <dt className="text-ink/50">Albums</dt>
          <dd className="font-display text-2xl text-ink">—</dd>
        </div>
        <div>
          <dt className="text-ink/50">Photos</dt>
          <dd className="font-display text-2xl text-ink">—</dd>
        </div>
        <div>
          <dt className="text-ink/50">Videos</dt>
          <dd className="font-display text-2xl text-ink">—</dd>
        </div>
      </dl>

      <h2 className="mt-10 font-display text-2xl text-ink">Albums</h2>
      <p className="mt-2 text-sm text-ink/60">
        Wire this list to the <code>albums</code> table filtered by year once
        Supabase is connected.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {albumTemplates.map((title) => (
          <div
            key={title}
            className="rounded-2xl border border-brass/20 bg-clothdeep p-6"
          >
            <p className="font-medium text-ink">{title}</p>
            <p className="mt-1 text-sm text-ink/50">— items</p>
          </div>
        ))}
      </div>
    </div>
  );
}
