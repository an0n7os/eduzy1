import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { centres, contact } from "@/lib/site";
import { useTheme } from "@/lib/theme";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-card hover:scale-105 active:scale-95 shadow-sm"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center text-sm"
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-400"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}

export function Logo() {
  return (
    <span className="flex flex-col select-none group cursor-pointer">
      <span className="font-display text-xl sm:text-[22px] font-black tracking-[0.04em] leading-none text-primary group-hover:brightness-110 transition-all drop-shadow-[0_0_16px_rgba(255,85,0,0.3)]">
        EDUZY
      </span>
      <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.32em] text-muted-foreground uppercase leading-none mt-1 group-hover:text-foreground transition-colors">
        ACADEMY
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Gradient Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 h-[2.5px] origin-left bg-gradient-to-r from-primary via-accent to-primary shadow-glow z-50"
      />

      {/* Full-Width Luxury Frosted Glass Header */}
      <div
        className={`w-full transition-all duration-500 border-b ${
          scrolled
            ? "border-border/80 bg-background/85 shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl py-3.5"
            : "border-border/40 bg-background/60 backdrop-blur-xl py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="outline-none flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative py-1 text-sm font-medium tracking-wide text-foreground/75 transition-all duration-200 hover:text-foreground"
                activeProps={{
                  className: "!text-foreground !font-bold",
                }}
                activeOptions={{ exact: true }}
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-[#FFA63D] transition-all duration-300 group-hover:w-full group-[.!text-foreground]:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Area: Phone, ThemeToggle & Enroll Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-xs font-semibold tracking-wider text-foreground/70 hover:text-primary transition-colors hidden xl:inline-block"
            >
              {contact.phone}
            </a>

            <ThemeToggle />

            {/* Ultra-Premium Glowing Enroll Button */}
            <div className="relative group inline-flex items-center">
              {/* Ambient Pulsing Aura Behind the Button */}
              <span
                aria-hidden="true"
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-[#FFA63D] to-primary opacity-60 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg animate-pulse-aura pointer-events-none"
              />

              {/* Main Interactive Button */}
              <Link
                to="/contact"
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#FF7A1A] to-[#FFA63D] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(255,94,0,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_6px_26px_rgba(255,94,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.7)] active:scale-95 inline-flex items-center gap-2.5"
              >
                {/* Continuous Light Sweep Shimmer */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
                />

                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  Enroll Now
                </span>

                {/* Animated Arrow Badge with Slide & Glow */}
                <span className="relative z-10 grid h-5 w-5 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:translate-x-0.5 group-hover:scale-110 shadow-sm">
                  <svg
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Right Controls: ThemeToggle + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              aria-label="Toggle Navigation Menu"
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 p-1 text-foreground hover:bg-card transition-colors"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-border/80 bg-background/95 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block py-2 font-display text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground">Theme Mode</span>
              <ThemeToggle />
            </div>
            <div className="pt-2">
              <div className="relative group block">
                <span
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-[#FFA63D] to-primary opacity-60 blur-md animate-pulse-aura pointer-events-none"
                />
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#FF7A1A] to-[#FFA63D] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_4px_18px_rgba(255,94,0,0.4),inset_0_1px_1.5px_rgba(255,255,255,0.5)] active:scale-95"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
                  />
                  <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Enroll Now
                  </span>
                  <span className="relative z-10 grid h-5 w-5 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 pt-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Career-focused education in Accounting, Logistics, Designing and Aviation. Practical, industry-oriented training that prepares you for successful careers.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Explore</p>
          {nav.map((n) => <Link key={n.to} to={n.to} className="block hover:text-primary">{n.label}</Link>)}
        </div>
        <div className="space-y-2 text-sm">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Reach us</p>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="block hover:text-primary">{contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="block hover:text-primary">{contact.email}</a>
          {centres.map((c) => <p key={c.name} className="text-muted-foreground"><span className="text-foreground">{c.name.replace(" Centre", "")}:</span> {c.lines.join(", ")}</p>)}
        </div>
      </div>
      <p className="mt-20 select-none text-center font-display text-[22vw] font-black leading-[0.8] text-outline">EDUZY</p>
      <p className="py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Eduzy Academy. All rights reserved.</p>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="shadow-glow fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z"/></svg>
    </a>
  );
}
