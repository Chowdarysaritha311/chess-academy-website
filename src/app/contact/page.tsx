import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DemoBookingForm from "@/components/sections/DemoBookingForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Book a Free Demo Class",
  description:
    "Book a free chess demo class with Sankar Chess Academy in Visakhapatnam. Call, WhatsApp, or fill the form to get started.",
};

export default function ContactPage() {
  return (
    <section id="demo" className="section-pad scroll-mt-20">
      <SectionHeading
        move="Qd8+"
        kicker="Contact & demo booking"
        title="Let's get your child on the board"
        subtitle="Fill out the form below for a free, no-obligation demo class — or reach out directly on WhatsApp or phone."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <DemoBookingForm />
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="card-luxe space-y-4 p-6">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-ivory/75 hover:text-gold"
            >
              <MessageCircle size={18} className="text-gold" /> WhatsApp: chat instantly
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 font-body text-sm text-ivory/75 hover:text-gold">
              <Phone size={18} className="text-gold" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-body text-sm text-ivory/75 hover:text-gold">
              <Mail size={18} className="text-gold" /> {site.email}
            </a>
            <p className="flex items-start gap-3 font-body text-sm text-ivory/75">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-gold" /> {site.address}
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-sm border border-gold-muted/20">
            <iframe
              title="Academy location map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsEmbedQuery)}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
