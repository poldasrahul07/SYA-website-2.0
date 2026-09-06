export const metadata = { title: "Events" };

const events = [
  { title: "Ganesh Prathisthapana", date: "27 Aug 2026", venue: "Main Pandal", status: "Upcoming" },
  { title: "Cultural Program", date: "31 Aug 2026", venue: "Community Grounds", status: "Upcoming" },
  { title: "Annadanam", date: "1 Sep 2026", venue: "Main Pandal", status: "Upcoming" },
  { title: "Visarjan", date: "6 Sep 2026", venue: "Mangalpally Lake", status: "Upcoming" },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">Events</h1>

      <ul className="mt-10 divide-y divide-brass/15 border-y border-brass/15">
        {events.map((event) => (
          <li key={event.title} className="flex items-center justify-between gap-4 py-5">
            <div>
              <p className="font-display text-xl text-ink">{event.title}</p>
              <p className="text-sm text-ink/55">{event.venue}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-ink/70">{event.date}</p>
              <span className="mt-1 inline-block rounded-full bg-leaf/15 px-3 py-0.5 text-xs font-medium text-leaf">
                {event.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
