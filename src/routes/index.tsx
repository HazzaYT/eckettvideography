import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="grain relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Videographer operating a cinema camera under warm and cool cinematic lighting"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-36">
          <p className="text-eyebrow">Freelance videographer & editor</p>
          <h1 className="text-display mt-6 text-5xl text-foreground md:text-8xl">
            Stories told
            <br />
            <span className="italic text-primary">in motion.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            I'm Harry — a UK-based videographer shooting cinematic films,
            commercials and aerial work, then cutting them into pieces people
            actually finish watching.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-transparent hover:text-primary"
            >
              View portfolio →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="border-y border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-border md:grid-cols-4">
          {[
            { k: "01", t: "Commercial", d: "Brand films & spots" },
            { k: "02", t: "Music Video", d: "Concept to colour" },
            { k: "03", t: "Weddings", d: "Cinematic edits" },
            { k: "04", t: "Aerial", d: "Licensed drone work" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-8">
              <p className="text-eyebrow">{s.k}</p>
              <p className="text-display mt-3 text-2xl">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-eyebrow">Selected work</p>
            <h2 className="text-display mt-3 text-4xl md:text-5xl">Recent frames.</h2>
          </div>
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary">
            All projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-6">
          <figure className="group relative overflow-hidden md:col-span-4">
            <img
              src={work2}
              alt="Aerial coastal landscape at golden hour"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <p className="text-eyebrow">Aerial · 2025</p>
              <p className="text-display mt-1 text-xl">Coastal Study</p>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden md:col-span-2">
            <img
              src={work1}
              alt="Musician on stage under warm concert lighting"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <p className="text-eyebrow">Music · 2025</p>
              <p className="text-display mt-1 text-xl">Live Set</p>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden md:col-span-6">
            <img
              src={work3}
              alt="Wedding couple silhouetted at sunset"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-[420px] w-full object-cover object-[50%_35%] transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <p className="text-eyebrow">Wedding · 2024</p>
              <p className="text-display mt-1 text-xl">Golden Hour</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
