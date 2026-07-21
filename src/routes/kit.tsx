import { createFileRoute } from "@tanstack/react-router";
import bmpccAsset from "@/assets/kit-bmpcc.jpg.asset.json";
import r6Asset from "@/assets/kit-r6.jpg.asset.json";
import droneAsset from "@/assets/kit-drone.jpg.asset.json";

const bmpcc = bmpccAsset.url;
const r6 = r6Asset.url;
const drone = droneAsset.url;

export const Route = createFileRoute("/kit")({
  head: () => ({
    meta: [
      { title: "Kit — Harry Eckett" },
      {
        name: "description",
        content:
          "The cameras and gear I shoot with: Blackmagic 6K Pro, Canon R6 Mark II, DJI Mini 4 Pro.",
      },
      { property: "og:title", content: "Kit — Harry Eckett" },
      {
        property: "og:description",
        content: "Blackmagic 6K Pro, Canon R6 Mark II, DJI Mini 4 Pro.",
      },
    ],
  }),
  component: KitPage,
});

const kit = [
  {
    n: "01",
    name: "Blackmagic Pocket Cinema Camera 6K Pro",
    role: "A-cam · Cinema",
    img: bmpcc,
    pos: "center 60%",
    body: "Super 35 sensor, dual native ISO and 12-bit Blackmagic RAW. My go-to for narrative, commercial and music video work where the grade has to hold up.",
    specs: ["6K Super 35", "13 stops DR", "BRAW · ProRes", "EF mount"],
  },
  {
    n: "02",
    name: "Canon EOS R6 Mark II",
    role: "B-cam · Run & gun",
    img: r6,
    pos: "center center",
    body: "Full-frame hybrid that keeps up anywhere. Beautiful low light, class-leading autofocus and internal 10-bit — perfect for documentary, weddings and second angles.",
    specs: ["Full-frame", "4K 60p 10-bit", "IBIS", "Dual Pixel AF II"],
  },
  {
    n: "03",
    name: "DJI Mini 4 Pro",
    role: "Aerial",
    img: drone,
    pos: "center 40%",
    body: "Sub-250g cinematic aerial platform. 4K/100p, D-Log M and omnidirectional obstacle sensing — travel-friendly and legal in tight airspace where bigger rigs can't fly.",
    specs: ["4K/100p", "D-Log M", "<250g", "OcuSync 4"],
  },
];

function KitPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <p className="text-eyebrow">The kit</p>
      <h1 className="text-display mt-4 text-5xl md:text-7xl">
        Tools I trust <span className="italic text-primary">on set.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        A lean, versatile package built to cover everything from cinematic
        commercial work to weddings and aerials — without excuses.
      </p>

      <div className="mt-20 space-y-24">
        {kit.map((item, i) => (
          <article
            key={item.n}
            className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
          >
            <figure className="relative overflow-hidden border border-border bg-surface">
              <img
                src={item.img}
                alt={item.name}
                width={1600}
                height={1200}
                loading="lazy"
                style={{ objectPosition: item.pos }}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div>
              <p className="text-eyebrow">
                {item.n} — {item.role}
              </p>
              <h2 className="text-display mt-3 text-3xl md:text-4xl">{item.name}</h2>
              <p className="mt-4 text-muted-foreground">{item.body}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 font-mono text-xs text-foreground/80">
                {item.specs.map((s) => (
                  <li key={s} className="border-l-2 border-primary/70 pl-3 py-1">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 grid gap-8 border border-border bg-surface p-8 md:grid-cols-[auto,1fr] md:gap-12 md:p-12">
        <p className="text-eyebrow md:pt-3">Also in the bag</p>
        <p className="text-display text-2xl leading-relaxed md:text-3xl md:leading-snug">
          A curated set of <span className="italic text-primary">Canon RF glass</span> covering
          wide to tele, paired with an <span className="italic text-primary">Ankerwork M650</span>{" "}
          wireless system for clean, broadcast-ready sound on the move. Every frame is finished in{" "}
          <span className="italic text-primary">DaVinci Resolve Studio</span> — edit, colour and
          delivery under one roof.
        </p>
      </div>
    </div>
  );
}
