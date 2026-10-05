import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Reveal";
import { partners, placements } from "@/lib/content";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — Eduzy Academy" },
      { name: "description", content: "See where Eduzy students work today. 120+ hiring partners across aviation, accounting, logistics and design." },
      { property: "og:title", content: "Placements — Eduzy Academy" },
      { property: "og:description", content: "Our students work at leading airlines, logistics firms and accounting companies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlacementsPage,
});

const steps = [
  ["Resume building", "We help you create a strong, professional resume."],
  ["Mock interviews", "Practise with experts until you feel confident."],
  ["Job referrals", "We share your profile directly with hiring partners."],
  ["Career follow-up", "We stay in touch and support your growth after placement."],
];

function PlacementsPage() {
  return (
    <>
      <PageHero eyebrow="Placements" title="Our students are already flying high." sub="From airlines to global logistics firms, Eduzy graduates work with leading companies in India and abroad." />

      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[["5000+", "Students trained"], ["98%", "Placement support"], ["120+", "Hiring partners"], ["15+", "Countries"]].map(([n, l]) => (
            <div key={l} className="bg-card p-8">
              <p className="font-display text-3xl font-bold text-primary md:text-5xl">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12">
        <h2 className="text-3xl font-bold md:text-5xl">Recent placements</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placements.map(([n, r, c], i) => (
            <Reveal key={n} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">{n[0]}</div>
                <p className="mt-6 font-display text-lg font-semibold">{n}</p>
                <p className="text-sm text-muted-foreground">{r}</p>
                <p className="mt-4 text-sm font-semibold text-accent">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-5xl">How we get you placed</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <p className="font-display text-5xl font-black text-outline">0{i + 1}</p>
                <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12">
        <h2 className="text-3xl font-bold md:text-5xl">Our hiring partners</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div key={p} className="grid h-24 place-items-center rounded-2xl border border-border bg-card font-display text-lg font-semibold text-muted-foreground transition-colors hover:text-primary">{p}</div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105">Start your career journey</Link>
        </div>
      </section>
    </>
  );
}
