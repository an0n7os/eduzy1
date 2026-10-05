import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { centres, contact } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <span className="flex flex-col select-none group cursor-pointer">
      <span className="font-display text-xl sm:text-[22px] font-black tracking-[0.04em] leading-none text-[#FF5500] group-hover:brightness-110 transition-all drop-shadow-[0_0_16px_rgba(255,85,0,0.3)]">
        EDUZY
      </span>
      <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.32em] text-white/70 uppercase leading-none mt-1 group-hover:text-white transition-colors">
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
            ? "border-white/[0.08] bg-background/85 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl py-3.5"
            : "border-white/[0.05] bg-background/50 backdrop-blur-xl py-4 sm:py-5"
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
                className="group relative py-1 text-sm font-medium tracking-wide text-white/70 transition-all duration-200 hover:text-white"
                activeProps={{
                  className: "!text-white !font-bold",
                }}
                activeOptions={{ exact: true }}
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-[#FFA63D] transition-all duration-300 group-hover:w-full group-[.!text-white]:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Area: Phone & Enroll Button */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-xs font-semibold tracking-wider text-white/60 hover:text-primary transition-colors hidden xl:inline-block"
            >
              {contact.phone}
            </a>
            <Link
              to="/contact"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#FFA63D] to-primary bg-[length:200%_auto] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-primary/45 active:scale-95 inline-flex items-center gap-2"
            >
              <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-[shimmer_3s_infinite] pointer-events-none" />
              <span>Enroll Now</span>
              <span className="grid h-4 w-4 place-items-center rounded-full bg-white/25 text-[10px]">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 p-1 lg:hidden text-foreground hover:bg-white/10 transition-colors"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-white/10 bg-background/95 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block py-2 font-display text-xl font-medium text-white/80 hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-primary py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20"
              >
                Enroll Now →
              </Link>
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
