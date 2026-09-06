export default function GalleryYearPage({
  params,
}: {
  params: { year: string };
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">
        Gallery — {params.year}
      </h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Album tabs (Photos / Videos / Banners) and a responsive thumbnail
        grid go here, backed by the <code>media</code> table filtered by{" "}
        <code>year_id</code> and <code>status = &apos;published&apos;</code>.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl border border-dashed border-brass/30 bg-clothdeep"
          />
        ))}
      </div>
    </div>
  );
}
