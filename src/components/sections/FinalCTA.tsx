import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-gold-muted/20 bg-gradient-to-b from-charcoal to-onyx">
      <div className="section-pad text-center">
        <p className="eyebrow mb-4">Checkmate the hesitation</p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-ivory md:text-4xl">
          The first move is the easiest one. Book a free demo class today.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-ivory/60">
          No cost, no obligation — just a real class with Coach Sankar to see if it's the right
          fit for your child.
        </p>
        <Link href="/contact#demo" className="btn-gold mt-8 inline-flex">
          Book free demo <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
