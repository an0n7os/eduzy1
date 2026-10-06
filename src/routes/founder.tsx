import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal, SplitWords } from "@/components/Reveal";
import mentorLuxury from "@/assets/mentor_luxury.jpg";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Meet Our Founder — Eduzy Academy" },
      { name: "description", content: "Meet the visionary founder of Eduzy Academy — the driving force behind Kerala's benchmark career education institution." },
      { property: "og:title", content: "Meet Our Founder — Eduzy Academy" },
      { property: "og:description", content: "Discover the story, mission and vision of the founder who built Eduzy Academy into a career-defining institution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FounderPage,
});

const timeline = [
  { year: "2008", label: "The Beginning", desc: "Started teaching career skills to small groups of students in Ernakulam — passionate about bridging the gap between education and employment." },
  { year: "2012", label: "Eduzy is Born", desc: "Founded Eduzy Academy with a single classroom and a clear mission: to provide practical, career-ready education to every student in Kerala." },
  { year: "2016", label: "First 500 Placements", desc: "Celebrated a landmark of 500+ successful placements across India and GCC countries, validating the institution's industry-aligned curriculum." },
  { year: "2019", label: "Multi-Centre Expansion", desc: "Opened the second campus in Thrissur — growing Eduzy into a multi-city institution with an expanded team of certified industry trainers." },
  { year: "2023", label: "2000+ Alumni Network", desc: "Eduzy Alumni now hold leadership positions at top companies across accounting, logistics, aviation and design industries globally." },
  { year: "2025", label: "Next Chapter", desc: "Launching new-age programmes in Digital Marketing, AI-assisted Design and Entrepreneurship — empowering the next generation of Kerala's workforce." },
];

const values = [
  { icon: "🎯", title: "Career First", desc: "Every programme is designed with one goal — getting students into the right job, faster." },
  { icon: "🤝", title: "Mentor-Led", desc: "Industry practitioners who've worked at the highest levels guide students through real-world skills." },
  { icon: "🌏", title: "Global Mindset", desc: "Curriculum aligned with international standards, preparing students for India and GCC markets." },
  { icon: "💡", title: "Constant Innovation", desc: "Programmes evolve with industry — what we teach today is what employers demand tomorrow." },
];

const stats = [
  { value: "14+", label: "Years of Excellence" },
  { value: "2000+", label: "Alumni Placed" },
  { value: "6", label: "Specialised Programmes" },
  { value: "2", label: "State-of-Art Campuses" },
];

const storyCards = [
  {
    title: "The Problem We Saw",
    body: "Thousands of graduates in Kerala were academically qualified but professionally unprepared. The gap between what colleges taught and what employers wanted was enormous — that's the problem Eduzy set out to solve.",
  },
  {
    title: "Why Eduzy Exists",
    body: "Built on a simple but powerful idea: every student deserves access to real, practical career education. Not just textbooks, not just theory — but actual industry skills, mentorship and placement support.",
  },
  {
    title: "Our Teaching Philosophy",
    body: "We hire trainers who've worked in the industries they teach. Every module maps to real job roles. Students practice on the same software employers use. That's why our placement record speaks for itself.",
  },
  {
    title: "The Road Ahead",
    body: "As industries evolve, so does Eduzy. Expanding into AI-assisted design, digital entrepreneurship and international certification tracks — always one step ahead of where the job market is heading.",
  },
];

function FounderPage() {
  return (
    <main className="bg-background text-foreground">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pb-0 pt-28 sm:pt-36 md:px-12">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] bg-transparent dark:bg-primary/10 blur-[160px] rounded-full" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            The Visionary
          </motion.p>

          <div className="mt-8 grid gap-16 lg:grid-cols-[1fr_400px] lg:items-end">
            {/* Left */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
              >
                <SplitWords text="Built on a Dream, Driven by Purpose." />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
              >
                A career education pioneer with over 14 years of experience transforming how students in Kerala prepare for the professional world. With a relentless belief in practical, industry-first education, Eduzy grew from a single classroom into a multi-campus institution that has placed 2,000+ students across India and the GCC.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-105"
                >
                  Book a Counselling Session →
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  About Eduzy
                </Link>
              </motion.div>
            </div>

            {/* Right: Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[400px] lg:mx-0"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-transparent dark:bg-primary/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl aspect-[3/4]">
                <img
                  src={mentorLuxury}
                  alt="Eduzy Academy Founder"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border/60 bg-card/90 p-4 backdrop-blur-xl">
                  <p className="font-display text-base font-black">Founder, Eduzy Academy</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Career Education Pioneer · Kerala</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="mt-20 border-y border-border bg-card/40 px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-4xl font-black text-primary md:text-5xl">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Story</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            <SplitWords text="From a classroom dream to 2,000 careers." />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {storyCards.map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-secondary/40 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Journey</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              <SplitWords text="Milestones that shaped Eduzy." />
            </h2>
          </Reveal>

          <div className="relative mt-16">
            {/* Centre line */}
            <div className="absolute left-[18px] bottom-0 top-0 w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-14">
              {timeline.map(({ year, label, desc }, i) => (
                <Reveal key={year} delay={i * 0.08}>
                  <div className={`relative flex flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-[11px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                    {/* Content */}
                    <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-display text-sm font-bold text-primary">{year}</span>
                      <h3 className="mt-3 text-xl font-bold">{label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Founding Principles</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            <SplitWords text="Values that drive every decision." />
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
                <span className="text-4xl">{icon}</span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 pb-32 md:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-24 text-center text-primary-foreground md:py-32">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <h2 className="relative mx-auto max-w-3xl text-4xl font-black md:text-6xl">
              Ready to build your career with Eduzy?
            </h2>
            <p className="relative mx-auto mt-6 max-w-lg opacity-80">
              Get personalised guidance from our team and find the course that's right for you.
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
    </main>
  );
}
