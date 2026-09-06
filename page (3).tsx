export const metadata = { title: "Volunteer" };

const interests = [
  "Event management",
  "Decoration",
  "Crowd management",
  "Food / Prasadam",
  "Photography",
  "Video",
  "Social media",
  "General volunteering",
];

export default function VolunteerPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">
        Be Part of the Celebration
      </h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Sunshine Youth Association runs on volunteers. Tell us how you&apos;d
        like to help this year.
      </p>

      {/* Wire this up to POST /volunteers (see supabase/migrations) with
          rate limiting and spam protection before going live. */}
      <form className="mt-10 space-y-6">
        <Field label="Name" name="name" />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Locality" name="locality" />

        <fieldset>
          <legend className="text-sm font-medium text-ink">
            What would you like to help with?
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {interests.map((interest) => (
              <label
                key={interest}
                className="flex items-center gap-2 rounded-lg border border-brass/25 px-3 py-2 text-sm text-ink/80"
              >
                <input type="checkbox" name="interests" value={interest} />
                {interest}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 w-full rounded-lg border border-brass/30 bg-cloth px-3 py-2 text-ink outline-none focus:border-vermillion"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-vermillion px-6 py-3 font-medium text-cloth transition-colors hover:bg-vermillion-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1 w-full rounded-lg border border-brass/30 bg-cloth px-3 py-2 text-ink outline-none focus:border-vermillion"
      />
    </div>
  );
}
