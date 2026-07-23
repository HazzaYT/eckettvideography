import { createFileRoute } from "@tanstack/react-router";
import work1Asset from "@/assets/Screenshot 2026-07-21 at 20.05.55.png.asset.json";
import work2Asset from "@/assets/Screenshot 2026-07-21 at 20.01.11.png.asset.json";
import everythingAsset from "@/assets/Screenshot 2026-07-22 at 14.09.03.png.asset.json";
import featheredAsset from "@/assets/Screenshot 2026-07-22 at 14.15.45.png.asset.json";
const work6 = everythingAsset.url;
const work3 = featheredAsset.url;

const work1 = work1Asset.url;
const work2 = work2Asset.url;

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Harry Eckett" },
      {
        name: "description",
        content:
          "Selected videography and editing work by Harry Eckett — commercial, music, wedding, aerial and documentary.",
      },
      { property: "og:title", content: "Portfolio — Harry Eckett" },
      {
        property: "og:description",
        content: "Selected commercial, music, wedding and documentary work.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "Milky Way", cat: "Astrophotography", year: "2026", img: work1, span: "md:col-span-4 md:row-span-2", h: "h-[560px]" },
  { title: "Australia Tour", cat: "Aerial", year: "2026", img: work2, span: "md:col-span-8", h: "h-[280px]" },
  { title: "Feathered Fate", cat: "Short Film", year: "2024", img: work3, span: "md:col-span-6", h: "h-[420px]" },
  { title: "Everything I Hate About Us", cat: "Short Film", year: "2026", img: work6, span: "md:col-span-6", h: "h-[420px]" },
];

function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-eyebrow">Portfolio</p>
          <h1 className="text-display mt-4 text-5xl md:text-7xl">
            Selected <span className="italic text-primary">work.</span>
          </h1>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          A rotating selection across commercial, music, weddings, aerial and
          documentary. Full reels available on request.
        </p>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-12">
        {projects.map((p) => (
          <figure
            key={p.title}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 ${p.span}`}
          >
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              className={`w-full object-cover transition duration-700 group-hover:scale-105 ${p.h}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <p className="text-eyebrow">
                  {p.cat} · {p.year}
                </p>
                <p className="text-display mt-1 text-2xl">{p.title}</p>
              </div>
              <span className="translate-x-2 text-primary opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
