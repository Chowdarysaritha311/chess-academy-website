import { stats } from "@/lib/data";

export default function SuccessMetrics() {
  return (
    <section className="section-pad border-t border-gold-muted/20">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-semibold text-gold md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 font-body text-sm text-ivory/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
