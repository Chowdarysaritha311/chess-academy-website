type Props = {
  move: string;
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ move, kicker, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow mb-3">
        <span className="text-gold">{move}</span> — {kicker}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-ivory md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-base text-ivory/65 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
