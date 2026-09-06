export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-4xl text-ink">Contact</h1>
      <p className="mt-3 text-ink/70">
        Sunshine Youth Association
        <br />
        Mangalpally, Hyderabad, Telangana
      </p>

      <form className="mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-1 w-full rounded-lg border border-brass/30 bg-cloth px-3 py-2 text-ink outline-none focus:border-vermillion"
          />
        </div>
        <div>
          <label htmlFor="contact" className="text-sm font-medium text-ink">
            Email or phone
          </label>
          <input
            id="contact"
            name="contact"
            className="mt-1 w-full rounded-lg border border-brass/30 bg-cloth px-3 py-2 text-ink outline-none focus:border-vermillion"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full rounded-lg border border-brass/30 bg-cloth px-3 py-2 text-ink outline-none focus:border-vermillion"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-vermillion px-6 py-3 font-medium text-cloth transition-colors hover:bg-vermillion-dark"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
