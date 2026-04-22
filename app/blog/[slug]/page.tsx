import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { posts, getPostBySlug } from "@/lib/blogData";
import BlogContent from "./BlogContent";

// Generate static paths for all blog slugs
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic SEO metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      "makeup tips",
      "bridal makeup",
      "makeup artist India",
      "beauty tips",
      "Poonam beauty",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Poonam"],
    },
    alternates: {
      canonical: `https://www.poonambeauty.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Related posts (same category, excluding current)
  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);
  const others = posts.filter(
    (p) => p.slug !== slug && p.category !== post.category
  ).slice(0, 2 - related.length);
  const relatedPosts = [...related, ...others].slice(0, 3);

  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Person", name: "Poonam" },
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "Poonam Beauty",
              url: "https://www.poonambeauty.com",
            },
          }),
        }}
      />

      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)" }}
      >
        {/* Top nav bar */}
        <header className="sticky top-0 z-50 bg-[#1a1a1a]/95 backdrop-blur border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex flex-col leading-tight"
            >
              <span
                className="text-xl font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Poonam
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gray-500 uppercase">
                Makeup Artist
              </span>
            </Link>
            <Link
              href="/#blog"
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-[#c9a84c] transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Hero */}
        <div
          className={`bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
          style={{ minHeight: "340px" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
            <span className="text-6xl mb-6">{post.emoji}</span>
            <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
              {post.category}
            </p>
            <h1
              className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="text-[#c9a84c]">•</span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="text-[#c9a84c]">•</span>
              <span>By Poonam</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <main className="max-w-3xl mx-auto px-6 py-16">
          <BlogContent content={post.content} />

          {/* Author card */}
          <div className="mt-16 p-6 border border-white/10 bg-white/5 flex gap-5 items-start">
            <div
              className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-2xl"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e)" }}
            >
              💄
            </div>
            <div>
              <p className="text-white font-medium mb-1">Poonam</p>
              <p className="text-xs tracking-widest uppercase text-[#c9a84c] mb-2">
                Professional Makeup Artist
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Award-winning makeup artist with 10+ years of experience across bridal, editorial,
                and special effects makeup. Based in Pune, serving clients across Maharashtra.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-10 border border-[#c9a84c]/30 bg-[#c9a84c]/5">
            <p
              className="text-3xl font-light text-white mb-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Ready to Book Your Session?
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Let&apos;s create your perfect look together.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 text-xs tracking-widest uppercase font-medium text-[#1a1a1a] transition-all hover:shadow-lg hover:shadow-[#c9a84c]/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
            >
              Book Now
            </Link>
          </div>
        </main>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 pb-20">
            <div className="gold-divider mb-12" />
            <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-2 text-center">
              Continue Reading
            </p>
            <h2
              className="text-3xl font-light text-white text-center mb-10"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              More from the Beauty Journal
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group border border-white/10 bg-white/5 hover:border-[#c9a84c]/40 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`bg-gradient-to-br ${related.gradient} flex items-center justify-center`}
                    style={{ aspectRatio: "16/9" }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {related.emoji}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-widest uppercase text-[#c9a84c] mb-2">
                      {related.category}
                    </p>
                    <h3
                      className="text-base font-light text-white group-hover:text-[#e8c97e] transition-colors line-clamp-2 mb-3"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {related.title}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-[#c9a84c] transition-colors">
                      Read more <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer strip */}
        <div className="border-t border-white/10 py-8 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Poonam Beauty · All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
