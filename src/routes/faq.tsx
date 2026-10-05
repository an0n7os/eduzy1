import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Eduzy Academy" },
      { name: "description", content: "Answers to common questions about Eduzy courses, fees, placements, batches and certificates." },
      { property: "og:title", content: "Frequently asked questions — Eduzy Academy" },
      { property: "og:description", content: "Everything you need to know before joining an Eduzy course." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

export function FaqList({ items = faqs }: { items?: readonly (readonly [string, string])[] }) {
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card">
      {items.map(([q, a], i) => (
        <Reveal key={q} delay={i * 0.05}>
          <details className="group p-6 md:p-8">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold md:text-xl">
              {q}
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-3xl text-muted-foreground">{a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions? We have answers." sub="Everything students and parents usually ask us before joining." />
      <section className="mx-auto max-w-4xl px-6 pb-32 md:px-12">
        <FaqList />
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Still have a question?</p>
          <Link to="/contact" className="mt-4 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105">Talk to a counsellor</Link>
        </div>
      </section>
    </>
  );
}
