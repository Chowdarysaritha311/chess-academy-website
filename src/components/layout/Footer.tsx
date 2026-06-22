import Link from "next/link";
import { site } from "@/lib/data";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gold-muted/20 bg-charcoal">
      <div className="grid gap-10 px-6 py-16 md:grid-cols-4 md:px-12 lg:px-20">
        <div>
          <p className="font-display text-lg font-semibold">
            Sankar<span className="text-gold">Chess</span>
          </p>
          <p className="mt-3 max-w-xs font-body text-sm text-ivory/60">
            FIDE-rated chess coaching in Visakhapatnam. Building intelligence, discipline, and
            confidence — one game at a time.
          </p>
          <div className="mt-4 flex gap-4 text-ivory/60">
            <a href={site.instagram} aria-label="Instagram" className="hover:text-gold">
              <Instagram size={18} />
            </a>
            <a href={site.youtube} aria-label="YouTube" className="hover:text-gold">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 font-body text-sm text-ivory/70">
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/programs" className="hover:text-gold">Programs</Link></li>
            <li><Link href="/achievements" className="hover:text-gold">Achievements</Link></li>
            <li><Link href="/testimonials" className="hover:text-gold">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Resources</p>
          <ul className="space-y-2 font-body text-sm text-ivory/70">
            <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link href="/contact#demo" className="hover:text-gold">Book a free demo</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-3 font-body text-sm text-ivory/70">
            <li className="flex items-center gap-2"><Phone size={15} className="text-gold" /> {site.phone}</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-gold" /> {site.email}</li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 text-gold" /> {site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-muted/20 px-6 py-5 text-center font-body text-xs text-ivory/40 md:px-12 lg:px-20">
        © {new Date().getFullYear()} {site.name}. FIDE-rated coaching · Visakhapatnam, Andhra Pradesh.
      </div>
    </footer>
  );
}
