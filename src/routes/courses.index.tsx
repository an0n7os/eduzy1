import { createFileRoute, Link } from "@tanstack/react-router";
import { courses } from "@/lib/site";
import { PageHero, Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — Accounting, Logistics, Design, Aviation, Digital Marketing & Business | Eduzy" },
      { name: "description", content: "Explore Eduzy's career courses: Accounting, Logistics, Designing, Aviation, Digital & Influencer Marketing and Entrepreneurship." },
      { property: "og:title", content: "Eduzy Courses" },
      { property: "og:description", content: "Six career streams, one goal — getting you hired." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <PageHero eyebrow="Programmes" title="Six streams. One goal — your career." sub="Every course blends theory, hands-on practice and placement preparation." />
      <section className="mx-auto max-w-7xl space-y-32 px-6 pb-32 md:px-12">
        {courses.map((c, i) => (
          <div key={c.slug} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <Reveal>
              <Link to="/courses/$slug" params={{ slug: c.slug }} className="group block overflow-hidden rounded-[2rem]">
                <img src={c.image} alt={c.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-display text-sm text-primary">{c.no} — {c.duration}</p>
              <h2 className="mt-4 text-5xl font-bold md:text-6xl">{c.title}</h2>
              <p className="mt-3 text-xl text-accent">{c.tagline}</p>
              <p className="mt-6 text-muted-foreground">{c.desc}</p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {c.modules.map((m) => <li key={m} className="flex justify-between py-3"><span>{m}</span><span className="text-primary">✦</span></li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105">View details</Link>
                <Link to="/contact" className="rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary">Enquire</Link>
              </div>
            </Reveal>
          </div>
        ))}
      </section>
    </>
  );
}
