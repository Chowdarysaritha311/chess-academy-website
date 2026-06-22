export const site = {
  name: "Sankar Chess Academy",
  founder: "Sankar Balaga",
  city: "Visakhapatnam",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "hello@sankarchessacademy.in",
  address: "MVP Colony, Visakhapatnam, Andhra Pradesh, India",
  mapsEmbedQuery: "Visakhapatnam, Andhra Pradesh",
  instagram: "https://instagram.com/sankarchessacademy",
  youtube: "https://youtube.com/@sankarchessacademy",
};

export type Program = {
  slug: string;
  name: string;
  forWhom: string;
  ageRange: string;
  duration: string;
  fee: string;
  batchTimings: string;
  seatsAvailable: number;
  description: string;
  topics: string[];
  outcome: string;
};

export const programs: Program[] = [
  {
    slug: "beginner",
    name: "Beginner program",
    forWhom: "First-time players, ages 5+",
    ageRange: "5 – 9 years",
    duration: "3 months",
    fee: "₹2,499 / month",
    batchTimings: "Mon, Wed, Fri — 5:00–6:00 PM",
    seatsAvailable: 6,
    description:
      "Builds the foundation: how each piece moves, board vision, and the checkmate patterns every strong player relies on for life.",
    topics: ["Piece movement & rules", "Board vision drills", "Basic checkmate patterns", "Chess etiquette & notation"],
    outcome: "Plays a complete, rule-correct game with confidence.",
  },
  {
    slug: "intermediate",
    name: "Intermediate program",
    forWhom: "Players who know the rules and want real strength",
    ageRange: "8 – 14 years",
    duration: "4 months",
    fee: "₹3,499 / month",
    batchTimings: "Tue, Thu, Sat — 6:00–7:15 PM",
    seatsAvailable: 8,
    description:
      "Where most casual players plateau — and where this program pushes through. Openings, tactical calculation, and endgame technique.",
    topics: ["Opening principles", "Tactical patterns & calculation", "Endgame technique", "Annotated game review"],
    outcome: "Reads a position and calculates 2–3 moves ahead reliably.",
  },
  {
    slug: "advanced",
    name: "Advanced program",
    forWhom: "Competitive players preparing for rated events",
    ageRange: "10 – 18 years",
    duration: "6 months",
    fee: "₹4,999 / month",
    batchTimings: "Mon–Fri — 7:00–8:30 PM (flexible)",
    seatsAvailable: 5,
    description:
      "Tournament-grade preparation: opening repertoires, FIDE-rating readiness, and the strategic depth needed to win district and state events.",
    topics: ["Personal opening repertoire", "FIDE norm & rating preparation", "Advanced strategic planning", "Tournament simulation"],
    outcome: "Tournament-ready with a personal opening repertoire and a clear rating roadmap.",
  },
  {
    slug: "elite",
    name: "Elite training",
    forWhom: "Serious competitors aiming for state & national level",
    ageRange: "Any age, by evaluation",
    duration: "Ongoing, 1:1",
    fee: "On request",
    batchTimings: "Scheduled around the student",
    seatsAvailable: 3,
    description:
      "One-on-one coaching directly with Coach Sankar — personal game analysis, performance tracking, and tournament-specific preparation.",
    topics: ["1:1 personalised coaching", "Post-tournament game analysis", "Performance & rating tracking", "Mental preparation for events"],
    outcome: "A custom development plan built entirely around the student's games.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Lakshmi Prasanna",
    role: "Parent of an U-10 student",
    quote:
      "My son went from not knowing how a knight moves to winning his first district medal in eight months. Coach Sankar explains patiently and the kids genuinely look forward to class.",
    rating: 5,
  },
  {
    name: "Ravi Teja K.",
    role: "Parent of an U-14 student",
    quote:
      "What stood out is the discipline it built beyond the board — better focus at school, better patience at home. The FIDE-rating roadmap Coach Sankar gave us was clear from day one.",
    rating: 5,
  },
  {
    name: "Ananya M.",
    role: "Student, Advanced program",
    quote:
      "The endgame sessions changed how I see the whole board, not just the next move. I went from losing on time pressure to actually winning won positions.",
    rating: 5,
  },
  {
    name: "Srinivas Rao",
    role: "Parent of two students",
    quote:
      "Both my kids train here. The batch timings work around school, and the WhatsApp updates after every class mean we always know how they're progressing.",
    rating: 5,
  },
];

export const stats = [
  { label: "Students trained", value: "350+" },
  { label: "FIDE-rated students", value: "12+" },
  { label: "Tournament wins", value: "40+" },
  { label: "Years coaching", value: "5+" },
];

export type Achievement = {
  title: string;
  student: string;
  detail: string;
};

export const achievements: Achievement[] = [
  { title: "District Champion, U-13", student: "A. Varshith", detail: "Gold medal, Visakhapatnam District Chess Championship 2025" },
  { title: "State-level Bronze, U-15", student: "K. Hemanth", detail: "Andhra Pradesh State Chess Championship 2025" },
  { title: "FIDE Rating Debut — 1340", student: "M. Sai Charan", detail: "First official FIDE rating earned within 14 months of training" },
  { title: "National Qualifier, U-11", student: "P. Devansh", detail: "Qualified for nationals via state-ranked performance" },
  { title: "Best Newcomer Trophy", student: "R. Sanvi", detail: "Vizag School Chess Meet 2025, first competitive tournament" },
  { title: "FIDE Rating Debut — 1290", student: "T. Akhil", detail: "Earned FIDE rating after 10 months in the Intermediate program" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Does my child need to know how to play chess already?",
    a: "No. The Beginner program assumes zero prior knowledge — most students join not knowing how the pieces move and are playing full, rule-correct games within a few weeks.",
  },
  {
    q: "Are classes online, offline, or both?",
    a: "Both. The academy runs in-person batches in Visakhapatnam and live online batches for students anywhere — the curriculum and attention are identical in either mode.",
  },
  {
    q: "How is this different from free chess apps or YouTube?",
    a: "Apps teach moves; a coach corrects thinking. Coach Sankar reviews each student's actual games, spots the specific habits holding them back, and adjusts the plan to that student — something no app does.",
  },
  {
    q: "Will my child actually get a FIDE rating?",
    a: "Students in the Advanced and Elite tracks are prepared specifically for FIDE-rated events, and several current students have already earned their first official ratings. It depends on consistency and tournament participation, which the academy helps plan for.",
  },
  {
    q: "What if chess becomes \"one more thing\" competing with studies?",
    a: "Most parents report the opposite — the focus and patience chess builds tends to carry over into schoolwork. Batch timings are also deliberately scheduled around typical school hours.",
  },
  {
    q: "Is there a trial before we commit to a program?",
    a: "Yes — every student starts with a free demo class. There's no obligation to continue, and it's the best way to see if the teaching style is the right fit.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: "Chess Strategies" | "Opening Theory" | "Endgames" | "Tournament News" | "Academy Updates";
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-the-italian-game-is-perfect-for-beginners",
    title: "Why the Italian Game is the perfect first opening",
    category: "Opening Theory",
    excerpt:
      "Most beginners learn openings by memorising moves. Here's why the Italian Game teaches the principles behind the moves instead — and why that matters more.",
    date: "2026-04-12",
    readTime: "5 min read",
    content: [
      "Most beginners are handed a long list of opening moves to memorise, without ever being told why those moves matter. The Italian Game (1. e4 e5 2. Nf3 Nc6 3. Bc4) is different — every single move teaches a transferable principle.",
      "1. e4 claims the centre immediately. 2. Nf3 develops a piece while attacking, rather than just developing for the sake of it. 3. Bc4 aims straight at the weakest square in Black's position, f7, before Black has even finished developing.",
      "What we emphasise with students at the academy isn't the move order itself — it's the question behind each move: what does this actually accomplish? Once a student can answer that for the Italian Game, they can ask the same question of any opening they encounter, which is the real skill being built.",
      "This is also why it's the first opening taught in the Beginner program: it rewards good principles immediately, and punishes the kind of passive, purposeless moves new players tend to make.",
    ],
  },
  {
    slug: "the-one-endgame-pattern-every-student-must-know",
    title: "The one endgame pattern every student must know",
    category: "Endgames",
    excerpt:
      "King and pawn endgames decide more amateur games than any opening trap. Here's the single pattern — the rule of the square — that resolves most of them.",
    date: "2026-03-02",
    readTime: "4 min read",
    content: [
      "Ask most club-level players why they lost a winning position, and the answer is almost always the same: a king and pawn endgame they misjudged. Not a tactic. Not an opening trap. A simple race they got wrong.",
      "The rule of the square is the fastest way to resolve this. To check if a pawn can outrun the enemy king to promotion, draw an imaginary square from the pawn to the promotion square, with the pawn's file and rank as one side. If the defending king is inside that square, it catches the pawn. If it's outside, the pawn promotes.",
      "It sounds almost too simple to matter, but in live games, under time pressure, this single check prevents the majority of endgame miscalculations we see from intermediate students. It's one of the first concrete tools taught once a student moves into the Intermediate program's endgame block.",
    ],
  },
  {
    slug: "what-a-fide-rating-actually-measures",
    title: "What a FIDE rating actually measures (and what it doesn't)",
    category: "Tournament News",
    excerpt:
      "Parents often ask what a FIDE rating really represents. Here's a clear, honest explanation — including what it can't tell you about a young player.",
    date: "2026-01-20",
    readTime: "6 min read",
    content: [
      "A FIDE rating is a number derived from results against other rated players, calculated through the Elo system. In plain terms: it measures how consistently a player gets results against opponents of known strength, accumulated over real, rated games.",
      "What it does measure well is tournament performance over time. What it doesn't measure is potential, creativity, or how a player handles non-competitive learning — which is why we never treat a student's rating, or absence of one, as the full picture of their progress.",
      "For young players specifically, earning a first FIDE rating typically requires playing a minimum number of rated games in an officially rated event. This is part of why the Advanced program is structured around actual tournament participation, not just classroom training — the rating only comes from playing.",
    ],
  },
];
