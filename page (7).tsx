import Link from "next/link";

export const metadata = { title: "Ganesh Utsav" };

// Replace with a query against the `years` table.
const years = [
  { year: 2026, theme: "Current celebration", status: "upcoming" },
  { year: 2025, theme: "Archived", status: "past" },
  { year: 2024, theme: "Archived", status: "past" },
];

export default function UtsavIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">Ganesh Utsav</h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Every festival year at Sunshine Youth Association, in one place.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {years.map((y) => (
          <Link
            key={y.year}
            href={`/utsav/${y.year}`}
            className="rounded-2xl border border-brass/25 bg-clothdeep p-6 transition-colors hover:border-vermillion"
          >
            <p className="font-display text-3xl text-ink">{y.year}</p>
            <p className="mt-1 text-sm text-ink/60">{y.theme}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
