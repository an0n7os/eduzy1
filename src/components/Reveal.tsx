import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, y = 40 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-44 md:px-12">
      <div className="bg-glow pointer-events-none absolute inset-x-0 -top-40 h-[600px] opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal><p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p></Reveal>
        <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] md:text-8xl"><SplitWords text={title} /></h1>
        <Reveal delay={0.3}><p className="mt-8 max-w-xl text-lg text-muted-foreground">{sub}</p></Reveal>
      </div>
    </section>
  );
}
