const items = [
  { label: "FIDE-rated coach", detail: "Personally trained by a rated player" },
  { label: "5+ years experience", detail: "Proven curriculum, not improvised lessons" },
  { label: "Students FIDE-rated", detail: "Several current students hold official ratings" },
  { label: "Tournament winners", detail: "District & state-level medals every season" },
];

export default function Highlights() {
  return (
    <section className="border-b border-gold-muted/20 bg-charcoal/40">
      <div className="grid grid-cols-2 gap-px md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="px-6 py-10 text-center md:px-4 border-t border-gold-muted/10 first:border-t-0"
          >
            <p className="font-display text-sm font-semibold text-gold md:text-base">
              {item.label}
            </p>
            <p className="mt-2 font-body text-xs text-ivory/55 md:text-sm">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
