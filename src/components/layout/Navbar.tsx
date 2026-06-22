"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/register", label: "Register" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-muted/20 bg-onyx/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="font-display text-lg font-semibold tracking-wide">
          Sankar<span className="text-gold">Chess</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-ivory/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact#demo" className="btn-gold">
            Book free demo
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ivory lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold-muted/20 bg-onyx px-6 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 font-body text-sm text-ivory/85 hover:bg-charcoal hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact#demo"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 w-full"
          >
            Book free demo
          </Link>
        </nav>
      )}
    </header>
  );
}
