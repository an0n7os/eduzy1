import { createFileRoute } from "@tanstack/react-router";
import { centres, contact } from "@/lib/site";
import { PageHero, Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Eduzy Academy — Ernakulam & Thrissur Centres" },
      { name: "description", content: "Questions about courses, admission, fees or eligibility? Call, WhatsApp, email or visit Eduzy Academy in Ernakulam or Thrissur." },
      { property: "og:title", content: "Contact Eduzy Academy" },
      { property: "og:description", content: "Our team is here to help you choose the right program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    ["Call us", contact.phone, `tel:${contact.phone.replace(/\s/g, "")}`],
    ["WhatsApp", "Message us instantly", `https://wa.me/${contact.whatsapp}`],
    ["Email", contact.email, `mailto:${contact.email}`],
  ] as const;
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's talk about your future." sub="Have questions about our courses, admission process, fees, eligibility or career opportunities? Our team is here to help you choose the right program." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 md:px-12">
        {items.map(([t, v, href], i) => (
          <Reveal key={t} delay={i * 0.1}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="group flex h-full items-end justify-between gap-4 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.3em] opacity-60">{t}</p>
                <p className="mt-6 break-words font-display text-lg font-semibold md:text-xl">{v}</p>
              </div>
              <span className="text-2xl transition-transform group-hover:-rotate-45">→</span>
            </a>
          </Reveal>
        ))}
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-6 pb-32 md:grid-cols-2 md:px-12">
        {centres.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit us</p>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">{c.name}</h2>
              <p className="mt-4 text-muted-foreground">Eduzy Academy</p>
              {c.lines.map((l) => <p key={l} className="text-muted-foreground">{l}</p>)}
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
