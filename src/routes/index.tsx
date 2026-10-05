import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, animate, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import { courses } from "@/lib/site";
import { Reveal, SplitWords } from "@/components/Reveal";
import { features, partners, faqs, stats, testimonials, blogPosts } from "@/lib/content";
import { FaqList } from "./faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduzy Academy — Accounting, Logistics, Design & Aviation Courses in Kerala" },
      { name: "description", content: "Premium career training in Accounting, Logistics, Designing and Aviation with 100% placement support. Learn from industry experts at Eduzy." },
      { property: "og:title", content: "Eduzy Academy — Build a career that takes off" },
      { property: "og:description", content: "Career-focused courses in Accounting, Logistics, Designing and Aviation with placement support." },
    ],
  }),
  component: Index,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function RotatingWord() {
  const words = ["Accounting", "Logistics", "Designing", "Aviation", "Marketing", "Business"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative block h-[1.25em] w-full overflow-hidden text-[min(1em,10vw)]">
      <AnimatePresence initial={false}>
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          className="absolute inset-x-0 top-0 block whitespace-nowrap bg-linear-to-r from-primary to-accent bg-clip-text pb-[0.1em] text-transparent will-change-transform"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[760px] overflow-hidden">
      <motion.img src={hero} alt="Eduzy students in class" width={1600} height={1008} style={{ scale }} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      <div className="bg-glow absolute inset-0 opacity-60" />
      <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-primary/20" />
      <motion.div aria-hidden animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-20 top-40 h-[360px] w-[360px] rounded-full border border-dashed border-primary/30" />

      <motion.div style={{ y, opacity }} className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
          Admissions open 2026
        </motion.div>
        <h1 className="text-[11vw] font-black leading-[1] sm:text-[9vw] md:text-[7.5vw]">
          <SplitWords text="Build a career in" />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="block"><RotatingWord /></motion.span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <p className="max-w-md text-lg text-muted-foreground">
              Learn today. Lead tomorrow. Build your career with industry-focused education, practical training, expert guidance and placement support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="shadow-glow group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105">
                Explore courses <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-border bg-card/40 px-8 py-4 font-semibold backdrop-blur transition-colors hover:border-primary">
                Free counselling
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {[["14+", "Years"], ["20K+", "Students"], ["97+", "Partners"]].map(([n, l]) => (
              <div key={l} className="bg-card/70 px-6 py-5 backdrop-blur">
                <p className="font-display text-2xl font-bold text-primary md:text-3xl">{n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-10 hidden text-xs uppercase tracking-[0.3em] text-muted-foreground md:block">Scroll ↓</motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Accounting", "Logistics", "Designing", "Aviation", "Digital Marketing", "Entrepreneurship", "Placement Support"];
  return (
    <div className="overflow-hidden border-y border-border py-6">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl font-bold md:text-5xl">
            <span className={i % 2 ? "text-outline" : ""}>{t}</span><span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why Eduzy</p></Reveal>
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            <SplitWords text="Career-oriented programs that build the knowledge, practical skills and confidence to succeed." />
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map(([n, s, l], i) => (
              <Reveal key={l as string} delay={i * 0.1}>
                <p className="font-display text-4xl font-bold text-primary md:text-5xl"><Counter to={n as number} suffix={s as string} /></p>
                <p className="mt-2 text-sm text-muted-foreground">{l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseStack() {
  return (
    <section className="px-4 pb-32 md:px-8">
      <div className="mx-auto mb-16 flex max-w-7xl items-end justify-between px-2 md:px-4">
        <h2 className="text-4xl font-bold md:text-7xl"><SplitWords text="Our courses" /></h2>
        <Link to="/courses" className="hidden text-sm text-muted-foreground hover:text-primary md:block">View all →</Link>
      </div>
      <div className="mx-auto max-w-7xl">
        {courses.map((c, i) => (
          <div key={c.slug} className="mb-6 md:sticky md:mb-8" style={{ top: `${96 + i * 24}px` }}>
            <Reveal y={50}>
              <Link to="/courses/$slug" params={{ slug: c.slug }} className="group grid overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/60 md:h-[560px] md:grid-cols-2 md:rounded-[2rem]">
                <div className="relative order-first h-52 overflow-hidden sm:h-64 md:order-last md:h-full">
                  <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-display text-xs text-primary backdrop-blur md:hidden">{c.no}</span>
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-14">
                  <div>
                    <p className="hidden font-display text-sm text-primary md:block">{c.no} / {String(courses.length).padStart(2, "0")}</p>
                    <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:mt-6 md:text-6xl">{c.title}</h3>
                    <p className="mt-2 text-base text-accent md:mt-3 md:text-xl">{c.tagline}</p>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:mt-6 md:line-clamp-none md:max-w-md md:text-base">{c.desc}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
                    {c.modules.slice(0, 3).map((m) => <span key={m} className="rounded-full border border-border px-3 py-1 text-xs">{m}</span>)}
                  </div>
                  <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground md:mt-8 md:w-fit">
                    View course details <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        ))}
        <Link to="/courses" className="mt-4 block rounded-full border border-border py-4 text-center text-sm font-semibold md:hidden">View all courses →</Link>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Counselling", "A one-to-one session to find the stream that fits your goals."],
    ["Training", "Hands-on classes with live projects and industry software."],
    ["Grooming", "Soft skills, communication and interview readiness."],
    ["Placement", "Dedicated support until you land the right role."],
  ];
  return (
    <section className="bg-secondary/40 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-4xl font-bold md:text-6xl"><SplitWords text="Your journey, step by step" /></h2>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.12} className="bg-background">
              <div className="group h-full p-8 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground">
                <p className="font-display text-6xl font-black text-outline group-hover:[-webkit-text-stroke-color:currentColor]">0{i + 1}</p>
                <h3 className="mt-10 text-2xl font-semibold">{t}</h3>
                <p className="mt-3 text-sm opacity-70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = testimonials;
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 md:px-12">
      <h2 className="text-4xl font-bold md:text-6xl"><SplitWords text="Students who took off" /></h2>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.map(([n, c, q], i) => (
          <Reveal key={n} delay={i * 0.15}>
            <figure className="h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
              <p className="font-display text-5xl text-primary">"</p>
              <blockquote className="mt-2 text-lg">{q}</blockquote>
              <figcaption className="mt-8 text-sm"><span className="font-semibold">{n}</span> <span className="text-muted-foreground">· {c}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 pb-32 md:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-24 text-center text-primary-foreground md:py-32">
          <h2 className="mx-auto max-w-4xl text-4xl font-black md:text-7xl">Start your career journey.</h2>
          <p className="mx-auto mt-6 max-w-lg opacity-80">Your career begins with the right skills, knowledge and guidance. Learn from experienced trainers and prepare yourself for the future.</p>
          <Link to="/contact" className="mt-10 inline-block rounded-full bg-background px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105">Book free counselling</Link>
        </div>
      </Reveal>
    </section>
  );
}

function Features() {
  return (
    <section className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The Eduzy advantage</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl"><SplitWords text="Everything you need to get hired" /></h2>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 4) * 0.08}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 font-display text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-24">
      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Our students work at</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-6">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="rounded-full border border-border bg-card px-8 py-4 font-display text-lg font-semibold text-muted-foreground">{p}</span>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center"><Link to="/placements" className="text-sm text-primary hover:underline">See our placements →</Link></div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 md:grid-cols-[1fr_1.6fr] md:px-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">Common questions</h2>
        <Link to="/faq" className="mt-6 inline-block text-sm text-primary hover:underline">View all questions →</Link>
      </div>
      <FaqList items={faqs.slice(0, 4)} />
    </section>
  );
}

function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Blog</p>
      <h2 className="mt-4 text-4xl font-bold md:text-6xl"><SplitWords text="Explore our latest articles" /></h2>
      <p className="mt-4 max-w-xl text-muted-foreground">Stay informed about courses, career opportunities, professional skills, industry trends and educational guidance.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {blogPosts.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.06}>
            <article className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60">
              <div>
                <p className="font-display text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-6 text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
              <span className="mt-6 text-sm text-primary">Read more →</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <CourseStack />
      <Features />
      <Process />
      <Partners />
      <Testimonials />
      <FaqPreview />
      <Blog />
      <CTA />
    </>
  );
}
