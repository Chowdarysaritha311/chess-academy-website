import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="section-pad">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow mb-4 text-gold-light/70">{post.category}</p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-ivory md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 font-body text-sm text-ivory/45">
          {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
        </p>

        <div className="mt-10 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-ivory/75">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-gold-muted/20 pt-10">
          <p className="eyebrow mb-5">Related reading</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="card-luxe p-5 hover:border-gold-muted/50"
              >
                <p className="font-display text-sm font-semibold text-ivory">{r.title}</p>
                <p className="mt-2 font-body text-xs text-ivory/50">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
