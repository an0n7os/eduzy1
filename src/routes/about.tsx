import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import mentorLuxury from "@/assets/mentor_luxury.jpg";
import { PageHero, Reveal, SplitWords } from "@/components/Reveal";
import { careerSupport, coreValues, learningApproach, partners, studentDevelopment } from "@/lib/content";

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

const aboutStats = [
  { value: "14+", label: "Years of Excellence" },
  { value: "2,000+", label: "Students Placed" },
  { value: "6", label: "Career Programmes" },
  { value: "97+", label: "Corporate Partners" },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Eduzy Academy" title="Learn today. Lead tomorrow." sub="Eduzy Academy is a career-focused educational institution offering professional training programs in Accounting, Logistics, Designing and Aviation." />

      {/* Hero Image */}
      <section className="px-4 md:px-8">
        <Reveal>
          <img src={hero} alt="Eduzy classroom" loading="lazy" className="mx-auto h-[50vh] w-full max-w-7xl rounded-[2rem] object-cover md:h-[60vh]" />
        </Reveal>
      </section>

      {/* Stats Strip */}
      <section className="mt-12 border-y border-border bg-card/40 px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {aboutStats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-4xl font-black text-primary md:text-5xl">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About paragraph */}
      <section className="mx-auto max-w-4xl px-6 pt-24 md:px-12">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Our programs combine strong theoretical knowledge with practical, industry-oriented learning. We focus on helping students develop technical skills, professional confidence, communication abilities and workplace readiness. With experienced trainers, practical learning methods, industry exposure, career guidance and placement assistance, we create an environment where students can learn, grow and prepare for real-world career opportunities.
          </p>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2 md:px-12">
        {[
          ["Our Mission", "To provide quality, practical and career-oriented education that helps students develop relevant professional skills and achieve their career goals."],
          ["Our Vision", "To become a trusted career education provider by preparing students to adapt to changing industry requirements and build successful professional futures."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.12}>
            <div className="h-full rounded-3xl border border-border bg-card p-10 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
              <p className="font-display text-sm text-primary">0{i + 1}</p>
              <h2 className="mt-8 text-3xl font-bold">{t}</h2>
              <p className="mt-4 text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What We Stand For</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl"><SplitWords text="Our core values" /></h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {coreValues.map((v, i) => (
            <Reveal key={v} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1">
                <p className="font-display text-xs text-primary">0{i + 1}</p>
                <p className="mt-4 font-semibold">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Learning Approach, Student Dev, Career Support */}
      <section className="bg-secondary/40 px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <Reveal><ListBlock eyebrow="Learning approach" title="Beyond textbooks" intro="Effective education should go beyond textbooks. Our approach combines:" items={learningApproach} /></Reveal>
          <Reveal delay={0.1}><ListBlock eyebrow="Student development" title="More than technical skills" intro="Our professional development activities help students improve:" items={studentDevelopment} /></Reveal>
          <Reveal delay={0.2}><ListBlock eyebrow="Career support" title="Ready for the professional world" intro="Starting a career takes more than completing a course. We help through:" items={careerSupport} /></Reveal>
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="border-y border-border py-8 overflow-hidden bg-card/30">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Our Alumni Work At</p>
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span key={i} className="font-display text-lg font-bold text-muted-foreground/50 hover:text-primary transition-colors duration-300">{p}</span>
          ))}
        </div>
      </section>

      {/* Meet Our Founder CTA Card */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 transition-all duration-500 hover:border-primary/40">
            {/* Glow — dark only */}
            <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] bg-transparent dark:bg-primary/8 blur-[100px] rounded-full" />

            {/* Founder photo */}
            <div className="relative shrink-0 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl">
              <img src={mentorLuxury} alt="Eduzy Founder" className="w-full h-full object-cover object-top" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Visionary</p>
              <h3 className="mt-3 text-3xl font-black md:text-4xl">Meet Our Founder</h3>
              <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                Discover the story behind Eduzy Academy — a career education pioneer with 14+ years of experience who turned a single classroom into a multi-campus institution placing 2,000+ students across India and the GCC.
              </p>
              <Link
                to="/founder"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-105"
              >
                View Full Profile →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Closing Quote */}
      <section className="mx-auto max-w-5xl px-6 pb-20 text-center md:px-12">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            <SplitWords text="Experienced trainers. Practical learning. Real careers. That's the Eduzy difference." />
          </h2>
        </Reveal>
      </section>

      {/* Orange CTA */}
      <section className="px-4 pb-32 md:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-24 text-center text-primary-foreground md:py-32">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <h2 className="relative mx-auto max-w-3xl text-4xl font-black md:text-6xl">
              Your career journey starts here.
            </h2>
            <p className="relative mx-auto mt-6 max-w-lg opacity-80">
              Join thousands of students who transformed their careers with Eduzy Academy's industry-first education.
            </p>
            <Link
              to="/contact"
              className="relative mt-10 inline-block rounded-full bg-background px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105"
            >
              Book Free Counselling
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
