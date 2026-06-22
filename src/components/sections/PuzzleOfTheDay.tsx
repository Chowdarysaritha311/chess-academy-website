"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const board = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "♚", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "♛", "", ""],
  ["", "", "", "", "♔", "", "", ""],
];

export default function PuzzleOfTheDay() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="section-pad border-t border-gold-muted/20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            move="Qg5"
            kicker="Puzzle of the day"
            title="White to move. Mate in 2 — can you find it?"
            subtitle="A new puzzle is set for students every day across all skill levels. This one's rated beginner-friendly."
          />
          <button
            onClick={() => setRevealed((v) => !v)}
            className="btn-outline mt-7"
          >
            {revealed ? "Hide solution" : "Reveal solution"}
          </button>
          {revealed && (
            <p className="mt-4 font-body text-sm text-ivory/65">
              1. Qg8+ Kxg8 is illegal — instead, <span className="text-gold">1. Qg7+</span> forces
              the king into a corner, and <span className="text-gold">2. Qg8#</span> delivers
              checkmate with no escape square.
            </p>
          )}
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="grid grid-cols-8 overflow-hidden rounded-sm border border-gold-muted/30">
            {board.flatMap((row, r) =>
              row.map((piece, c) => {
                const dark = (r + c) % 2 === 0;
                return (
                  <div
                    key={`${r}-${c}`}
                    className={`flex aspect-square items-center justify-center text-xl ${
                      dark ? "bg-charcoal2" : "bg-ivory2/90"
                    }`}
                  >
                    <span className={dark ? "text-ivory" : "text-onyx"}>{piece}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
