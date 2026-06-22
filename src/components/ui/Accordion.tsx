"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/data";

export default function Accordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gold-muted/20 border-y border-gold-muted/20">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-ivory md:text-lg"
            >
              {item.q}
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="-mt-1 max-w-3xl pb-5 font-body text-sm leading-relaxed text-ivory/65 md:text-base">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
