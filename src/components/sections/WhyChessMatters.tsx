import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Sharper focus",
    detail:
      "Every game demands sustained attention. Students carry that same focus into homework, exams, and long tasks they used to abandon halfway through.",
  },
  {
    title: "Real consequences for decisions",
    detail:
      "Chess doesn't soften outcomes. A rushed move loses the game — and that honest feedback loop builds judgment faster than almost anything else at this age.",
  },
  {
    title: "Confidence earned, not given",
    detail:
      "Winning a hard-fought game builds a kind of self-belief that compliments can't manufacture. It's confidence the student knows they earned.",
  },
  {
    title: "Discipline that transfers",
    detail:
      "Studying openings, reviewing losses, showing up to practice — the habits that make a strong player are the same habits that make a strong student.",
  },
];

export default function WhyChessMatters() {
  return (
    <section className="section-pad">
      <SectionHeading
        move="Nc3"
        kicker="Why chess matters"
        title="It's not just a game. It's how your child learns to think."
        subtitle="Parents don't enrol their children for the trophies. They enrol because of what chess quietly builds underneath them."
      />
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="card-luxe p-6">
            <h3 className="font-display text-base font-semibold text-ivory">{r.title}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ivory/60">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
