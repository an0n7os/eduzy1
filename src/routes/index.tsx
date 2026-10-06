import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, animate, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import mentorLuxury from "@/assets/mentor_luxury.jpg";
import { courses, contact } from "@/lib/site";
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

function Hero() {
  return (
    <section className="relative min-h-[92svh] bg-background text-foreground pt-28 sm:pt-36 pb-12 overflow-hidden flex flex-col justify-center">
      {/* Background Cinematic Lighting & Floating Light Orbs — dark mode only */}
      <div className="bg-glow absolute inset-0 opacity-0 dark:opacity-70 pointer-events-none transition-opacity duration-500" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 -top-24 h-[650px] w-[650px] rounded-full bg-transparent dark:bg-primary/15 blur-[140px] transition-all duration-500"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-1/4 h-[550px] w-[550px] rounded-full bg-transparent dark:bg-accent/10 blur-[130px] transition-all duration-500"
      />

      {/* Orbit Rings with Continuous Ambient Rotation */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 top-16 h-[500px] w-[500px] rounded-full border border-transparent dark:border-primary/20"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-16 top-32 h-[380px] w-[380px] rounded-full border border-dashed border-transparent dark:border-primary/25"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 my-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Interactive Animated Course Pills, CTA, Brand Statement */}
          <div className="flex flex-col items-start z-10">
            {/* Clear, High-Impact Ultra-Premium Headline with Animated Gradient Shimmer */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-foreground"
            >
              Build A Career That
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
                className="block mt-2 bg-gradient-to-r from-primary via-[#FFB356] via-accent to-primary bg-clip-text text-transparent drop-shadow-sm"
              >
                Leads The World.
              </motion.span>
            </motion.h1>

            {/* Premium Brand Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Kerala's benchmark institution for career-defining higher education. Internationally accredited diplomas, hands-on corporate software labs, and <span className="text-foreground font-semibold">100% placement assurance</span> across India & UAE.
            </motion.p>

            {/* CTA Buttons with Sweep Shimmer Light Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <Link
                to="/courses"
                className="relative overflow-hidden shadow-glow group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 text-base"
              >
                {/* Subtle Luxury Sheen Sweep Effect */}
                <motion.div
                  aria-hidden
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />
                <span>Explore All Courses</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-7 py-4 font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/60 hover:bg-card active:scale-95 text-base shadow-sm"
              >
                Free Career Counselling
              </Link>
            </motion.div>

            {/* Trust Social Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-border/60"
            >
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-xs font-bold text-foreground">4.9/5 Rating</span>
                <span className="text-xs text-muted-foreground">(2,000+ Alumni)</span>
              </div>
              <span className="hidden sm:inline-block h-4 w-px bg-border" />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground font-semibold">100% Placement Support</span>
              </div>
              <span className="hidden md:inline-block h-4 w-px bg-border" />
              <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">14+ Years</span> Excellence
              </div>
            </motion.div>
          </div>

          {/* Right Column: Ultra-Luxurious Mentor Portrait with Breathing Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px] lg:max-w-[460px] aspect-[3/3.8] flex items-center justify-center"
            >
              {/* Ambient Pulsing Glowing Aura — dark mode only */}
              <motion.div
                aria-hidden
                animate={{ opacity: [0.6, 0.85, 0.6], scale: [0.98, 1.03, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-primary/35 dark:via-primary/10 dark:to-transparent blur-2xl"
              />

              {/* Decorative Subtle Outer Border — dark mode only */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[2.5rem] border border-transparent dark:border-primary/25 opacity-60"
              />

              {/* Luxury Framed Studio Portrait */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem] border border-border/80 bg-gradient-to-b from-card/90 to-background shadow-2xl">
                <img
                  src={mentorLuxury}
                  alt="Eduzy Career Mentor & Brand Ambassador"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Smooth Dark Gradient Fade at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent pointer-events-none" />

                {/* Refined Floating Micro-Badge */}
                <div className="absolute bottom-5 inset-x-5 z-20 rounded-2xl border border-border/80 bg-card/90 p-3.5 shadow-2xl backdrop-blur-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-primary font-bold text-sm">
                      ✦
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Meet Our Founder</p>
                      <p className="text-[10px] text-muted-foreground">Visionary Behind Eduzy Academy</p>
                    </div>
                  </div>
                  <Link to="/founder" className="text-xs font-bold text-primary hover:underline">
                    View Profile →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "International Accounting",
    "Logistics & Global SCM",
    "Aviation & Airport Operations",
    "UI/UX & Digital Design",
    "Strategic Digital Marketing",
    "Executive Grooming",
    "100% Placement Pathway",
  ];
  return (
    <div className="overflow-hidden border-y border-border py-5 bg-card/40">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl font-bold md:text-4xl">
            <span className={i % 2 ? "text-outline" : "text-foreground"}>{t}</span>
            <span className="text-primary text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-12 overflow-hidden">
      {/* Subtle Background Radial Glow — dark mode only */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[900px] bg-transparent dark:bg-primary/10 blur-[150px] rounded-full" />

      {/* Header with High-Impact Ultra-Premium Typography */}
      <div className="relative z-10 max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary backdrop-blur-md mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          The Eduzy Prestige
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
          Where ambition meets{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            global excellence.
          </span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We combine internationally accredited diplomas, industry-grade practical labs, and executive career mentorship to ensure you launch directly into the top tier of your chosen industry.
        </p>
      </div>

      {/* Minimal Glass Stats Bar / Horizontal Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card/75 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
      >
        {/* Subtle Top Gradient Sheen */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        {/* 4-Item Horizontal Divider Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🏛️",
              badge: "Est. 2012",
              number: 14,
              suffix: "+",
              title: "Years of Legacy",
              subtitle: "South India's Pioneer",
              action: "Track Record",
            },
            {
              icon: "🌐",
              badge: "Global Reach",
              number: 20,
              suffix: "K+",
              title: "Global Alumni",
              subtitle: "UAE, Qatar, Oman & UK",
              action: "Global Footprint",
            },
            {
              icon: "💼",
              badge: "Verified Pathway",
              number: 100,
              suffix: "%",
              title: "Placement Support",
              subtitle: "Dedicated Career Cell",
              action: "Career Assurance",
              featured: true,
            },
            {
              icon: "🤝",
              badge: "Industry Leaders",
              number: 97,
              suffix: "+",
              title: "Corporate Partners",
              subtitle: "Airlines, Logistics & MNCs",
              action: "Partner Network",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className={`group relative p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:bg-muted/30 flex flex-col justify-between border-border/70 ${
                idx % 2 === 0 ? "border-r" : ""
              } ${
                idx < 2 ? "border-b lg:border-b-0" : ""
              } ${
                idx === 1 ? "lg:border-r" : ""
              } ${
                idx === 2 ? "lg:border-r" : ""
              }`}
            >
              {/* Spotlight Hover Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Top Row: Mini Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-muted/60 border border-border/80 text-sm shadow-inner group-hover:border-primary/40 transition-colors">
                    {item.icon}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      item.featured
                        ? "border border-primary/60 bg-primary/20 text-primary"
                        : "border border-border/80 bg-muted/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Animated Stat Number */}
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                      item.featured
                        ? "text-primary drop-shadow-[0_0_15px_rgba(255,85,0,0.35)]"
                        : "text-foreground group-hover:text-primary transition-colors"
                    }`}
                  >
                    <Counter to={item.number} suffix={item.suffix} />
                  </span>
                </div>

                {/* Title */}
                <div className="mt-2 text-sm sm:text-base font-bold text-foreground leading-snug">
                  {item.title}
                </div>

                {/* Compact Subtitle */}
                <p className="mt-1 text-xs text-muted-foreground leading-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="relative z-10 mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                <span>{item.action}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
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
                <div className="flex min-w-0 flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-14">
                  <div className="min-w-0">
                    <p className="hidden font-display text-sm text-primary md:block">{c.no} / {String(courses.length).padStart(2, "0")}</p>
                    <h3 className="text-2xl font-bold leading-tight break-words tracking-tight sm:text-3xl md:mt-6 md:text-4xl lg:text-5xl">{c.title}</h3>
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
