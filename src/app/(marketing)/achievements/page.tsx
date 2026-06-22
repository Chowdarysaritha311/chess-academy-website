import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { stats, achievements } from "@/lib/data";

export const metadata: Metadata = {
  title: "Student Achievements — FIDE Ratings & Tournament Wins",
  description:
    "See the district, state, and national-level results from Sankar Chess Academy students in Visakhapatnam, including FIDE rating milestones.",
};

export default function AchievementsPage() {
  return (
    <>
      <section className="section-pad border-b border-gold-muted/20">
        <SectionHeading
          move="O-O"
          kicker="Achievements"
          title="Real results, earned over the board"
          subtitle="Every number here represents a student who started with no rating and no medals — and built both through consistent training."
        />
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gold md:text-5xl">{s.value}</p>
              <p className="mt-2 font-body text-sm text-ivory/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-gold-muted/20 bg-charcoal/30">
        <SectionHeading move="Rxe8" kicker="Hall of fame" title="Student success stories" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="card-luxe p-6">
              <Trophy className="text-gold" size={22} />
              <p className="mt-4 font-display text-base font-semibold text-ivory">{a.title}</p>
              <p className="mt-1 font-body text-sm text-gold-light/80">{a.student}</p>
              <p className="mt-3 font-body text-sm text-ivory/60">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
