import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays, Eye, MapPin, User } from "lucide-react"
import { articles, News } from "../../data/news"


interface newsPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Return all slugs for static export
  return articles.map((newsItem: News) => ({
    slug: newsItem.slug,
  }));
}

export default async function NewsPage({ params }: newsPageProps) {
  const { slug } =  await params; // 👈 Must await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return notFound()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={`/${article.image}`}
          alt={article.title}
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* HERO TEXT */}
        <div className="absolute bottom-10 left-6 md:left-16 max-w-3xl text-white">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-3 text-lg text-gray-200">{article.subtitle}</p>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 bg-white rounded-t-3xl -mt-8 shadow-lg relative z-10">
        {/* META INFO */}
        <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
            {article.authorRole && (
              <span className="text-gray-400">({article.authorRole})</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>
          {article.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{article.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{article.views?.toLocaleString()} views</span>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div
          className="prose max-w-none prose-lg text-gray-700"
        >
          <p className="font-medium text-xl mb-6">{article.excerpt}</p>
          <div className="whitespace-pre-line leading-relaxed">
            {article.fullDescription}
          </div>
        </div>

        {/* TAGS */}
        {article.tags && (
          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* SHARE BUTTONS */}
        <div className="mt-10 border-t pt-6 flex flex-wrap gap-4 text-sm text-gray-600">
          <a
            href={`https://twitter.com/intent/tweet?url=https://gtis-beta.vercel.app/news/${article.slug}&text=${encodeURIComponent(article.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            Share on Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://gtis-beta.vercel.app/news/${article.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            Share on LinkedIn
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(article.title)} https://gtis-beta.vercel.app/news/${article.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            Share on WhatsApp
          </a>
        </div>
      </div>

      {/* FOOTER SPACING */}
      <div className="py-10" />
    </div>
  )
}
