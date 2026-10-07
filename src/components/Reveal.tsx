import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, y = 24 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SplitWords({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{text}</span>;
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-6 pt-24 sm:pb-8 sm:pt-28 md:px-12 md:pb-10 md:pt-32">
      <div className="bg-glow pointer-events-none absolute inset-x-0 -top-40 h-[450px] opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal y={14}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:mb-2.5">{eyebrow}</p>
        </Reveal>
        <Reveal y={18} delay={0.06}>
          <h1 className="max-w-5xl text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
            {title}
          </h1>
        </Reveal>
        <Reveal y={14} delay={0.12}>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}
