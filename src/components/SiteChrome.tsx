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
  return <span className="font-display text-2xl font-black tracking-tight text-primary">EDUZY</span>;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 h-[2px] origin-left bg-primary" />
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled ? "border border-border bg-background/70 backdrop-blur-xl" : "border border-transparent"
        }`}
      >
        <Link to="/"><Logo /></Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 lg:inline-block">
          Enroll Now
        </Link>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 lg:hidden">
          <span className="h-0.5 w-6 bg-foreground" /><span className="h-0.5 w-6 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-border bg-background/95 p-6 backdrop-blur-xl lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">{n.label}</Link>
          ))}
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
