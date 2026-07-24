import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Harry Eckett" },
      {
        name: "description",
        content:
          "Get in touch with Harry Eckett — freelance videographer and editor. Email harryeckett@gmail.com or DM @harryeckettmedia on Instagram.",
      },
      { property: "og:title", content: "Contact — Harry Eckett" },
      {
        property: "og:description",
        content: "Email harryeckett@gmail.com or DM @harryeckettmedia on Instagram.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-eyebrow">Contact</p>
          <h1 className="text-display mt-4 text-5xl md:text-7xl">
            Let's shoot <span className="italic text-primary">something good.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Commercials, music videos, weddings, brand films or drone work —
            drop a line with dates, location and a sentence about what you're
            making. I reply within a day.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <a
              href="mailto:harryeckett@gmail.com"
              className="group block rounded-2xl border border-border bg-surface p-6 transition hover:border-primary"
            >
              <p className="text-eyebrow">Email</p>
              <p className="text-display mt-3 text-xl text-foreground group-hover:text-primary">
                harryeckett@gmail.com
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Best for briefs & quotes</p>
            </a>
            <a
              href="https://instagram.com/harryeckettmedia"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-border bg-surface p-6 transition hover:border-primary"
            >
              <p className="text-eyebrow">Instagram</p>
              <p className="text-display mt-3 text-xl text-foreground group-hover:text-primary">
                @harryeckettmedia
              </p>
              <p className="mt-2 text-xs text-muted-foreground">DMs open · behind the scenes</p>
            </a>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="text-eyebrow">Currently</p>
            <p className="text-display mt-4 text-3xl">
              Open books — taking on new clients as I build the roster.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-muted-foreground">Based</dt>
                <dd>Cardiff, UK</dd>
              </div>

              <div className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-muted-foreground">Travel</dt>
                <dd>UK-wide</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-muted-foreground">Rates</dt>
                <dd>Day / project</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Turnaround</dt>
                <dd>2–4 weeks</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
