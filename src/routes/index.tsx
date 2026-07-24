import { createFileRoute, Link } from "@tanstack/react-router";
import { Lightbulb, Camera, Scissors, Compass } from "lucide-react";

import heroImgAsset from "@/assets/20250603_191954.jpg.asset.json";
import aboutHarryAsset from "@/assets/about-harry.jpg.asset.json";
import btsClarinetAsset from "@/assets/bts-clarinet.jpg.asset.json";
import rcmLogoAsset from "@/assets/logo-rcm.webp.asset.json";
import gardenersLogoAsset from "@/assets/logo-gardeners-world.jpeg.asset.json";
import goodFoodLogoAsset from "@/assets/logo-good-food.jpeg.asset.json";
import wateraidLogoAsset from "@/assets/logo-wateraid.jpeg.asset.json";
import hertsLogoAsset from "@/assets/logo-herts.jpg.asset.json";
import abrsmLogoAsset from "@/assets/logo-abrsm.jpeg.asset.json";
const heroImg = heroImgAsset.url;
const aboutHarry = aboutHarryAsset.url;
const btsClarinet = btsClarinetAsset.url;
const rcmLogo = rcmLogoAsset.url;
const gardenersLogo = gardenersLogoAsset.url;
const goodFoodLogo = goodFoodLogoAsset.url;
const wateraidLogo = wateraidLogoAsset.url;
const hertsLogo = hertsLogoAsset.url;
const abrsmLogo = abrsmLogoAsset.url;






export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="grain relative isolate mx-auto mt-4 max-w-[95rem] overflow-hidden rounded-3xl md:mt-6">
        <img
          src={heroImg}
          alt="Cinema camera on a tripod overlooking a UK coastal village at dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/85 via-background/55 to-background/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/30 to-background" />

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
              className="inline-flex items-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-transparent hover:text-primary"
            >
              View portfolio →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="grain relative isolate mx-auto mt-6 max-w-[95rem] overflow-hidden rounded-3xl">
        <img
          src={aboutHarry}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-background/55 to-background/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/30 to-background/70" />


        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
            <div>
              <p className="text-eyebrow">About</p>
              <h2 className="text-display mt-3 text-4xl md:text-5xl">
                Hi, I'm Harry.
                <br />
                <span className="italic text-primary">Cardiff-based.</span>
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I'm a videographer and editor with a First Class Honours degree in
                Film & Television Production, specialising in camera operation and
                editing. Five years behind the camera, four of them on commercial
                work, and a lot of quiet hours in the grade.
              </p>
              <p>
                I spent several years with a local production agency covering
                BBC <em>Gardeners' World Live</em> and the <em>BBC Good Food Show
                Summer</em> in 2024 and 2025, alongside university films for
                Southampton and Winchester and a longer list of brand and event work.
              </p>
              <p>
                I'm also a travel videographer at heart — I've filmed across the
                USA, Canada, Australia, Iceland and Czechia, and I'm always looking
                for the next country to point a lens at.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="relative isolate mx-auto mt-16 max-w-[95rem] overflow-hidden rounded-3xl">
        <img
          src={btsClarinet}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

        <div className="grid grid-cols-1 md:grid-cols-4">
          {[
            {
              t: "Commercial",
              Icon: Clapperboard,
              d: "I work to a tight brief or shape the creative from scratch — brand films, spots and social cutdowns finished to broadcast standard.",
              accent: false,
              bg: "bg-background",
            },
            {
              t: "Short Films",
              Icon: Film,
              d: "Narrative work from concept and camera through to a fully colour-graded master, treated with the same care as any commercial job.",
              accent: true,
              bg: "bg-surface",
            },
            {
              t: "Weddings",
              Icon: Heart,
              d: "Cinematic, unhurried wedding films — the day as it actually felt, cut into something you'll want to sit down and watch again.",
              accent: false,
              bg: "bg-background",
            },
            {
              t: "Aerial",
              Icon: Plane,
              d: "CAA-registered and fully insured drone work, flown safely in complex environments and delivered in the same graded pipeline.",
              accent: true,
              bg: "bg-primary text-primary-foreground",
            },
          ].map((s) => (
            <div
              key={s.t}
              className={`flex flex-col items-center px-8 py-14 text-center md:px-10 md:py-20 ${s.bg}`}
            >
              <s.Icon
                strokeWidth={1.25}
                className={`h-14 w-14 ${s.bg.includes("bg-primary") ? "text-primary-foreground" : "text-foreground"}`}
              />
              <p
                className={`text-display mt-8 text-lg uppercase tracking-[0.28em] ${
                  s.bg.includes("bg-primary")
                    ? "text-primary-foreground"
                    : s.accent
                      ? "text-primary"
                      : "text-foreground"
                }`}
              >
                {s.t}
              </p>
              <p
                className={`mt-5 max-w-[22ch] text-sm leading-relaxed ${
                  s.bg.includes("bg-primary")
                    ? "text-primary-foreground/85"
                    : "text-muted-foreground"
                }`}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Approach */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">How I shoot</p>
            <h2 className="text-display mt-3 text-4xl md:text-5xl">
              Industry kit,
              <br />
              <span className="italic text-primary">quietly held.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every project is captured and finished to a professional standard —
            insured, legal, and built to hold up on any screen.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              k: "Capture",
              t: "Cinema-grade cameras",
              d: "Full-frame and Super 35 sensors with a filmic latitude and shallow depth of field.",
            },
            {
              k: "Aerial",
              t: "Licensed drone platform",
              d: "CAA-registered and fully insured aerial work, flown safely in complex environments.",
            },
            {
              k: "Finish",
              t: "Colour-graded in a pro suite",
              d: "Every deliverable finished on a calibrated pipeline, broadcast-ready out of the box.",
            },
          ].map((a) => (
            <div key={a.k} className="rounded-2xl border border-border/60 bg-surface p-8">
              <p className="text-eyebrow">{a.k}</p>
              <p className="text-display mt-3 text-2xl">{a.t}</p>
              <p className="mt-3 text-sm text-muted-foreground">{a.d}</p>
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

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {[
            { name: "BBC Gardeners' World Live", note: "Broadcast · Event coverage", logo: gardenersLogo },
            { name: "BBC Good Food Show Summer", note: "Event · Sponsored content", logo: goodFoodLogo },
            { name: "University of Hertfordshire", note: "Education · Campus films", logo: hertsLogo },
            { name: "WaterAid", note: "Charity · Campaign films", logo: wateraidLogo },
            { name: "RCM Agency", note: "Production · Local partner", logo: rcmLogo },
            { name: "ABRSM", note: "Music education · Event coverage", logo: abrsmLogo },
          ].map((c) => {
            const bg =
              c.name === "RCM Agency"
                ? "bg-[#12294a]"
                : c.name === "ABRSM"
                  ? "bg-[#f6f1e7]"
                  : "bg-white";
            return (
              <li
                key={c.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 transition hover:border-primary"
              >
                <div className={`flex aspect-[4/3] w-full items-center justify-center p-6 ${bg}`}>

                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="border-t border-border/60 bg-surface px-4 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.note}
                </p>
              </li>
            );
          })}
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
