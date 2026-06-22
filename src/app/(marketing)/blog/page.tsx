import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chess Blog — Strategy, Openings & Academy News",
  description:
    "Articles on chess strategy, opening theory, endgames, and tournament news from Sankar Chess Academy, Visakhapatnam.",
};

export default function BlogPage() {
  return (
    <section className="section-pad">
      <SectionHeading move="c4" kicker="Blog" title="Notes from the board" />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-luxe flex flex-col p-6 hover:border-gold-muted/50"
          >
            <p className="eyebrow text-gold-light/70">{post.category}</p>
            <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-ivory">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 font-body text-sm text-ivory/60">{post.excerpt}</p>
            <p className="mt-5 font-body text-xs text-ivory/40">
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
