export const metadata = { title: "Chandha / Donations" };

// Replace with a live aggregate query against `donations` and `expenses`.
const stats = [
  { label: "Target", value: "₹ 5,00,000" },
  { label: "Collected", value: "₹ 3,42,000" },
  { label: "Expenses", value: "₹ 1,10,000" },
  { label: "Remaining", value: "₹ 3,32,000" },
];

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">Chandha / Donations</h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Ganesh Utsav {new Date().getFullYear()} — every contribution and
        expense is recorded here for the community.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-brass/20 bg-clothdeep p-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl text-vermillion">{s.value}</p>
            <p className="mt-1 text-sm text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-brass/20 p-8 text-center">
        <div className="h-44 w-44 rounded-xl border border-dashed border-brass/40 bg-cloth" />
        <p className="font-medium text-ink">Scan the QR code to contribute</p>
        <p className="text-sm text-ink/60">
          UPI ID: sunshineyouth@upi (placeholder — replace via Site Settings)
        </p>
      </div>
    </div>
  );
}
