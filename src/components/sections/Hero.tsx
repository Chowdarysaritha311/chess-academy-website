"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gold-muted/20">
      <div className="absolute inset-0 bg-coord-grid bg-coord-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-onyx to-onyx" aria-hidden="true" />

      <div className="relative section-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5">
            <span className="text-gold">e4</span> — FIDE-rated coaching in Visakhapatnam
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ivory md:text-5xl lg:text-6xl">
            Master the game.
            <br />
            Master your mind.
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg text-ivory/70">
            Learn from {site.founder}, a FIDE-rated coach with 5+ years of experience, and build
            the strategic thinking, discipline, and confidence that outlasts the board.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#demo" className="btn-gold">
              Book free demo <ArrowRight size={16} />
            </Link>
            <Link href="/programs" className="btn-outline">
              Join the academy
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 py-3.5 font-body text-sm text-ivory/70 transition-colors hover:text-gold"
            >
              <MessageCircle size={16} /> WhatsApp us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-body text-sm text-ivory/55">
            <span>No prior experience needed</span>
            <span>Online & offline batches</span>
            <span>Ages 5–18</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-sm border border-gold-muted/30 bg-charcoal/60" />
          <div className="grid h-full w-full grid-cols-8 grid-rows-8 overflow-hidden rounded-sm">
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const dark = (row + col) % 2 === 0;
              return (
                <div
                  key={i}
                  className={dark ? "bg-charcoal2" : "bg-ivory2/90"}
                />
              );
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              ♞
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
