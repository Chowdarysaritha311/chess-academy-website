import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/lib/data";

export default function TestimonialsSection({
  items,
  showHeading = true,
}: {
  items: Testimonial[];
  showHeading?: boolean;
}) {
  return (
    <section className="section-pad border-t border-gold-muted/20 bg-charcoal/30">
      {showHeading && (
        <SectionHeading
          move="O-O"
          kicker="Parent & student voices"
          title="What families say after a season at the academy"
          align="center"
        />
      )}
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="card-luxe flex flex-col p-6">
            <div className="flex gap-1 text-gold" aria-hidden="true">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="mt-4 font-body text-sm leading-relaxed text-ivory/70">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 border-t border-gold-muted/15 pt-4">
              <p className="font-display text-sm font-semibold text-ivory">{t.name}</p>
              <p className="font-body text-xs text-ivory/50">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
