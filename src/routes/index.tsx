import { createFileRoute, Link } from "@tanstack/react-router";
import heroImgAsset from "@/assets/20230118_130323.jpg.asset.json";
const heroImg = heroImgAsset.url;
import work1Asset from "@/assets/Screenshot 2026-07-21 at 20.05.55.png.asset.json";
const work1 = work1Asset.url;
import work2Asset from "@/assets/Screenshot 2026-07-21 at 20.01.11.png.asset.json";
const work2 = work2Asset.url;
import featheredAsset from "@/assets/Screenshot 2026-07-22 at 14.15.45.png.asset.json";
const work3 = featheredAsset.url;

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

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">Selected clients</p>
            <h2 className="text-display mt-3 text-4xl md:text-5xl">
              Who I've made
              <br />
              <span className="italic text-primary">content for.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A short list of the brands, broadcasters and production teams I've
            been lucky enough to point a camera at.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "BBC Gardeners' World Live", note: "Broadcast · Event coverage" },
            { name: "Good Food Show Summer", note: "Event · Sponsored content" },
            { name: "University of Hertfordshire", note: "Education · Campus films" },
            { name: "WaterAid", note: "Charity · Campaign films" },
            { name: "RCM Agency", note: "Production · Local partner" },
            { name: "& independent artists", note: "Music video · Short film" },
          ].map((c) => (
            <li
              key={c.name}
              className="group flex min-h-[140px] flex-col justify-between bg-background p-8 transition hover:bg-surface"
            >
              <p className="text-display text-2xl leading-tight text-foreground transition group-hover:text-primary md:text-[28px]">
                {c.name}
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {c.note}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-end">
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary">
            See the work →
          </Link>
        </div>
      </section>

    </div>
  );
}
