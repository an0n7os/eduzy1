import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import accounting from "@/assets/accounting.jpg";
import aviation from "@/assets/aviation.jpg";
import business from "@/assets/business.jpg";
import designing from "@/assets/designing.jpg";
import digital from "@/assets/digital.jpg";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Life at Eduzy Academy" },
      { name: "description", content: "Photos of classrooms, training sessions, events and student life at Eduzy Academy." },
      { property: "og:title", content: "Gallery — Life at Eduzy Academy" },
      { property: "og:description", content: "A look inside our classrooms, labs and events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  [hero, "Classroom sessions", "md:col-span-2 md:row-span-2"],
  [aviation, "Aviation training", ""],
  [accounting, "Accounting lab", ""],
  [logistics, "Logistics field visit", "md:row-span-2"],
  [digital, "Digital marketing workshop", ""],
  [designing, "Design studio", ""],
  [business, "Business seminar", "md:col-span-2"],
] as const;

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at Eduzy." sub="Classes, workshops, events and celebrations — a glimpse of what learning here looks like." />
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {photos.map(([src, label, cls], i) => (
            <Reveal key={label} delay={(i % 4) * 0.08} className={cls}>
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-border">
                <img src={src} alt={label} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/90 to-transparent p-5 text-sm font-semibold">{label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
