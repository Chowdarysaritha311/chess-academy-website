import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "@/components/sections/ProgramCard";
import { programs } from "@/lib/data";

export default function ProgramsOverview() {
  return (
    <section className="section-pad border-t border-gold-muted/20 bg-charcoal/30">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          move="Nf3"
          kicker="Programs"
          title="A clear path from first move to tournament-ready"
        />
        <Link href="/programs" className="btn-outline">
          View all programs
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => (
          <ProgramCard key={p.slug} program={p} compact />
        ))}
      </div>
    </section>
  );
}
