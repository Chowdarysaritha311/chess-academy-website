"use client";

import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";

const categories = [
  "All",
  "Classroom sessions",
  "Online classes",
  "Tournaments",
  "Summer camps",
  "Award ceremonies",
] as const;

const photos = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  category: categories[(i % (categories.length - 1)) + 1],
  label: `${categories[(i % (categories.length - 1)) + 1]} ${Math.floor(i / (categories.length - 1)) + 1}`,
}));

export default function GalleryPage() {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      <section className="section-pad border-b border-gold-muted/20">
        <SectionHeading move="g4" kicker="Gallery" title="Inside the academy" />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-sm border px-4 py-2 font-body text-sm transition-colors ${
                active === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-gold-muted/30 text-ivory/60 hover:border-gold-muted/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setLightbox(p.id)}
              className="group flex aspect-square items-center justify-center rounded-sm border border-gold-muted/20 bg-charcoal text-center transition-colors hover:border-gold-muted/50"
            >
              <span className="px-3 font-body text-xs text-ivory/40 group-hover:text-gold-light/70">
                {p.label}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-10 font-body text-sm text-ivory/45">
          Follow along for more on{" "}
          <a href="https://instagram.com" className="text-gold hover:text-gold-light">
            Instagram
          </a>
          .
        </p>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-onyx/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 text-ivory/70 hover:text-gold"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div className="flex aspect-video w-full max-w-3xl items-center justify-center rounded-sm border border-gold-muted/30 bg-charcoal">
            <span className="font-body text-ivory/40">{photos[lightbox].label}</span>
          </div>
        </div>
      )}

      <FinalCTA />
    </>
  );
}
