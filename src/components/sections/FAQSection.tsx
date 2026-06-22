import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  return (
    <section className="section-pad border-t border-gold-muted/20 bg-charcoal/30">
      <SectionHeading
        move="h5"
        kicker="Common questions"
        title="Before you book — answers parents usually ask for"
      />
      <div className="mt-10 max-w-3xl">
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
