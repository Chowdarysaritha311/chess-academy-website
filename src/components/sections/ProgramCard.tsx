import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import type { Program } from "@/lib/data";

export default function ProgramCard({ program, compact = false }: { program: Program; compact?: boolean }) {
  return (
    <div className="card-luxe flex h-full flex-col p-6">
      <p className="eyebrow text-gold-light/70">{program.ageRange}</p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ivory">{program.name}</h3>
      <p className="mt-2 font-body text-sm text-ivory/60">{program.forWhom}</p>

      {!compact && (
        <ul className="mt-4 space-y-1.5 font-body text-sm text-ivory/55">
          {program.topics.slice(0, 3).map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-gold">·</span> {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-body text-xs text-ivory/50">
        <span>{program.duration}</span>
        <span>{program.fee}</span>
        <span className="flex items-center gap-1">
          <Users size={12} /> {program.seatsAvailable} seats left
        </span>
      </div>

      <Link
        href={`/programs#${program.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-gold hover:text-gold-light"
      >
        Enroll now <ArrowRight size={14} />
      </Link>
    </div>
  );
}
