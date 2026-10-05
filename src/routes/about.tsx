import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { PageHero, Reveal, SplitWords } from "@/components/Reveal";
import { careerSupport, coreValues, learningApproach, studentDevelopment } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eduzy Academy — Mission, Vision & Values" },
      { name: "description", content: "Eduzy Academy is a career-focused institution offering professional training in Accounting, Logistics, Designing and Aviation." },
      { property: "og:title", content: "About Eduzy Academy" },
      { property: "og:description", content: "Quality, practical and career-oriented education that helps students achieve their goals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function ListBlock({ eyebrow, title, intro, items }: { eyebrow: string; title: string; intro: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-bold md:text-3xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{intro}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((x) => <span key={x} className="rounded-full border border-border px-3 py-1.5 text-xs">{x}</span>)}
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <PageHero eyebrow="About Eduzy Academy" title="Learn today. Lead tomorrow." sub="Eduzy Academy is a career-focused educational institution offering professional training programs in Accounting, Logistics, Designing and Aviation." />
      <section className="px-4 md:px-8">
        <Reveal><img src={hero} alt="Eduzy classroom" loading="lazy" className="mx-auto h-[50vh] w-full max-w-7xl rounded-[2rem] object-cover md:h-[60vh]" /></Reveal>
      </section>
      <section className="mx-auto max-w-4xl px-6 pt-24 md:px-12">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Our programs combine strong theoretical knowledge with practical, industry-oriented learning. We focus on helping students develop technical skills, professional confidence, communication abilities and workplace readiness. With experienced trainers, practical learning methods, industry exposure, career guidance and placement assistance, we create an environment where students can learn, grow and prepare for real-world career opportunities.
          </p>
        </Reveal>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2 md:px-12">
        {[
          ["Our Mission", "To provide quality, practical and career-oriented education that helps students develop relevant professional skills and achieve their career goals."],
          ["Our Vision", "To become a trusted career education provider by preparing students to adapt to changing industry requirements and build successful professional futures."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.12}>
            <div className="h-full rounded-3xl border border-border bg-card p-10">
              <p className="font-display text-sm text-primary">0{i + 1}</p>
              <h2 className="mt-8 text-3xl font-bold">{t}</h2>
              <p className="mt-4 text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <h2 className="text-3xl font-bold md:text-5xl">Our core values</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {coreValues.map((v, i) => (
            <Reveal key={v} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                <p className="font-display text-xs text-primary">0{i + 1}</p>
                <p className="mt-4 font-semibold">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3 md:px-12">
        <Reveal><ListBlock eyebrow="Learning approach" title="Beyond textbooks" intro="Effective education should go beyond textbooks. Our approach combines:" items={learningApproach} /></Reveal>
        <Reveal delay={0.1}><ListBlock eyebrow="Student development" title="More than technical skills" intro="Our professional development activities help students improve:" items={studentDevelopment} /></Reveal>
        <Reveal delay={0.2}><ListBlock eyebrow="Career support" title="Ready for the professional world" intro="Starting a career takes more than completing a course. We help through:" items={careerSupport} /></Reveal>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-32 text-center md:px-12">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl"><SplitWords text="Experienced trainers. Practical learning. Real careers. That's the Eduzy difference." /></h2>
      </section>
    </>
  );
}
