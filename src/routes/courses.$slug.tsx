import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { courses, contact } from "@/lib/site";
import { Reveal, SplitWords } from "@/components/Reveal";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { slug: course.slug };
  },
  head: ({ loaderData }) => {
    const c = courses.find((x) => x.slug === loaderData?.slug);
    if (!c) return { meta: [{ title: "Course not found — Eduzy" }, { name: "robots", content: "noindex" }] };
    const t = `${c.title} Course — Syllabus, Duration & Careers | Eduzy Academy`;
    return {
      meta: [
        { title: t },
        { name: "description", content: c.overview.slice(0, 155) },
        { property: "og:title", content: t },
        { property: "og:description", content: c.desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CourseNotFound,
  component: CourseDetail,
});

function CourseNotFound() {
  return (
    <div className="px-6 pb-32 pt-44 text-center">
      <h1 className="text-4xl font-bold">Course not found</h1>
      <Link to="/courses" className="mt-6 inline-block text-primary">View all courses →</Link>
    </div>
  );
}

function CourseDetail() {
  const { slug } = Route.useLoaderData();
  const c = courses.find((x) => x.slug === slug)!;
  const idx = courses.indexOf(c);
  const next = courses[(idx + 1) % courses.length] ?? courses[0]!;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const wa = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${c.title} course.`)}`;

  return (
    <>
      <section ref={ref} className="relative min-h-[90svh] overflow-hidden">
        <motion.img src={c.image} alt={c.title} style={{ scale }} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
        <div className="bg-glow absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-12">
          <Reveal><Link to="/courses" className="mb-8 inline-block text-sm text-muted-foreground hover:text-primary">← All courses</Link></Reveal>
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Course {c.no}</p></Reveal>
          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.95] md:text-8xl"><SplitWords text={c.title} /></h1>
          <Reveal delay={0.3}><p className="mt-6 text-2xl text-accent">{c.tagline}</p></Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {[["Duration", c.duration], ["Mode", c.mode], ["Modules", String(c.syllabus.length)]].map(([k, v]) => (
                <div key={k} className="bg-card/80 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
                  <p className="mt-2 font-display text-lg font-semibold md:text-xl">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.5fr] md:px-12">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Overview</p></Reveal>
        <div>
          <Reveal><p className="text-2xl leading-relaxed md:text-3xl">{c.overview}</p></Reveal>
          <Reveal delay={0.1}><p className="mt-8 text-muted-foreground"><span className="text-foreground">Eligibility:</span> {c.eligibility}</p></Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold md:text-6xl"><SplitWords text="What you'll learn" /></h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {c.syllabus.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60">
                  <p className="font-display text-5xl font-black text-outline">0{i + 1}</p>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <ul className="mt-5 space-y-2 text-muted-foreground">
                    {s.points.map((p) => <li key={p} className="flex gap-3"><span className="text-primary">✦</span>{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl"><SplitWords text="Career opportunities" /></h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {c.careers.map((r, i) => (
                <Reveal key={r} delay={i * 0.05}>
                  <span className="inline-block rounded-full border border-border px-5 py-2.5 transition-colors hover:border-primary hover:text-primary">{r}</span>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold md:text-5xl"><SplitWords text="Course highlights" /></h2>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {c.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.06}><li className="flex justify-between py-4 text-lg"><span>{h}</span><span className="text-primary">→</span></li></Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground md:py-28">
            <h2 className="mx-auto max-w-3xl text-4xl font-black md:text-6xl">Ready to start {c.title}?</h2>
            <p className="mx-auto mt-5 max-w-lg opacity-80">Talk to a counsellor about fees, batches and scholarships.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-background px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105">Enquire on WhatsApp</a>
              <Link to="/contact" className="rounded-full border border-primary-foreground/40 px-8 py-4 font-semibold transition-colors hover:bg-primary-foreground/10">Book free counselling</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <Link to="/courses/$slug" params={{ slug: next.slug }} className="group flex items-end justify-between border-t border-border pt-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next course</p>
            <p className="mt-3 text-4xl font-bold transition-colors group-hover:text-primary md:text-6xl">{next.title}</p>
          </div>
          <span className="text-4xl transition-transform group-hover:translate-x-2">→</span>
        </Link>
      </section>
    </>
  );
}
