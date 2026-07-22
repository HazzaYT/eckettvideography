import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow">404</p>
        <h1 className="mt-4 text-display text-5xl text-foreground">Off frame.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for isn't in this reel.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-transparent hover:text-primary"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-transparent hover:text-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Harry Eckett — Freelance Videographer & Editor" },
      {
        name: "description",
        content:
          "Harry Eckett — freelance videographer and editor crafting cinematic films, commercials and aerial work.",
      },
      { name: "author", content: "Harry Eckett" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Harry Eckett — Freelance Videographer & Editor" },
      {
        property: "og:description",
        content:
          "Harry Eckett — freelance videographer and editor crafting cinematic films, commercials and aerial work.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harry Eckett — Freelance Videographer & Editor" },
      { name: "twitter:description", content: "Harry Eckett — freelance videographer and editor crafting cinematic films, commercials and aerial work." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b2756f0-69eb-4f74-9b85-45351a699f19/id-preview-22500f55--1ce0c80c-fa5a-4486-8731-5b007c1961a7.lovable.app-1784653695597.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b2756f0-69eb-4f74-9b85-45351a699f19/id-preview-22500f55--1ce0c80c-fa5a-4486-8731-5b007c1961a7.lovable.app-1784653695597.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navLinks = [
  { to: "/", label: "Work" },
  { to: "/kit", label: "Kit" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="text-display text-lg text-foreground">Harry Eckett</span>
          <span className="hidden text-eyebrow md:inline">DP · Editor</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-display text-2xl">Let's make something.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Available for commissions, commercials and collaborations.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-eyebrow mb-3">Contact</p>
          <a href="mailto:harryeckett@gmail.com" className="block text-foreground hover:text-primary">
            harryeckett@gmail.com
          </a>
          <a
            href="https://instagram.com/harryeckettmedia"
            target="_blank"
            rel="noreferrer"
            className="block text-foreground hover:text-primary"
          >
            @harryeckettmedia
          </a>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          <p className="text-eyebrow mb-3 md:justify-end">Studio</p>
          <p>Freelance · United Kingdom</p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} Harry Eckett</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
