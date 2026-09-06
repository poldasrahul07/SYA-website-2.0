import Link from "next/link";

export const metadata = { title: "Gallery" };

const years = [2026, 2025, 2024, 2023, 2022];

export default function GalleryIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">Gallery</h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Photos, videos, and banners from every year of Ganesh Utsav.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {years.map((year) => (
          <Link
            key={year}
            href={`/gallery/${year}`}
            className="rounded-full border border-brass/30 bg-clothdeep px-6 py-2.5 font-display text-lg text-ink transition-colors hover:border-vermillion hover:text-vermillion"
          >
            {year}
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-ink/50">
        This page should render a responsive masonry grid of the latest
        approved <code>media</code> rows (thumbnails only — never original
        files) once Supabase storage is connected.
      </p>
    </div>
  );
}
