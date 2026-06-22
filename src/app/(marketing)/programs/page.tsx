import type { Metadata } from "next";
import { CalendarDays, IndianRupee, Users, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chess Programs — Beginner to Elite Training in Visakhapatnam",
  description:
    "Explore Beginner, Intermediate, Advanced, and Elite chess programs at Sankar Chess Academy, Visakhapatnam. Batch timings, fees, and seats available.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="section-pad border-b border-gold-muted/20">
        <SectionHeading
          move="Nf3"
          kicker="Programs & courses"
          title="A program for every stage, from first move to FIDE rating"
          subtitle="Each program is built on the one before it — students typically progress from Beginner through to Advanced as their rating and confidence grow."
        />
      </section>

      <section className="section-pad space-y-10 border-b border-gold-muted/20">
        {programs.map((p) => (
          <div key={p.slug} id={p.slug} className="card-luxe scroll-mt-24 p-8 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow text-gold-light/80">{p.ageRange}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-ivory">{p.name}</h2>
                <p className="mt-1 font-body text-sm text-ivory/55">{p.forWhom}</p>
                <p className="mt-4 font-body text-ivory/70">{p.description}</p>

                <p className="mt-6 font-body text-sm font-medium text-gold">Outcome</p>
                <p className="mt-1 font-body text-sm text-ivory/65">{p.outcome}</p>

                <p className="mt-6 font-body text-sm font-medium text-gold">What's covered</p>
                <ul className="mt-2 space-y-1.5">
                  {p.topics.map((t) => (
                    <li key={t} className="flex gap-2 font-body text-sm text-ivory/65">
                      <span className="text-gold">·</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex-shrink-0 rounded-sm border border-gold-muted/20 bg-onyx/60 p-6 lg:w-72">
                <dl className="space-y-4 font-body text-sm">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-gold" />
                    <div>
                      <dt className="text-ivory/45">Duration</dt>
                      <dd className="text-ivory">{p.duration}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee size={16} className="text-gold" />
                    <div>
                      <dt className="text-ivory/45">Fee</dt>
                      <dd className="text-ivory">{p.fee}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays size={16} className="text-gold" />
                    <div>
                      <dt className="text-ivory/45">Batch timing</dt>
                      <dd className="text-ivory">{p.batchTimings}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-gold" />
                    <div>
                      <dt className="text-ivory/45">Seats available</dt>
                      <dd className="text-ivory">{p.seatsAvailable} remaining</dd>
                    </div>
                  </div>
                </dl>
                <a href={`/register?program=${p.slug}`} className="btn-gold mt-6 w-full">
                  Enroll now
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <FinalCTA />
    </>
  );
}
