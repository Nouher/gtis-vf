"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Eye,
  Share2,
  BookOpen,
  TrendingUp,
  Globe,
  Award,
  Phone,
  Mail,
  Star,
  Zap,
  Target,
  Users,
  ChevronRight,
  Play,
  Download,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

export default function NewsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const articles = [
    {
      id: 1,
      slug: "industrial-automation-trends-2024",
      title: "Industrial Automation Trends Shaping 2024",
      subtitle: "Technology & Innovation",
      excerpt:
        "Explore the latest trends in industrial automation including AI integration, IoT connectivity, and smart manufacturing solutions that are transforming industries across Africa and the Middle East.",
      content:
        "The industrial automation landscape is rapidly evolving with new technologies emerging every year. In 2024, we're seeing unprecedented growth in AI-powered systems, IoT integration, and smart manufacturing solutions...",
      image: "/placeholder.svg?height=400&width=600",
      category: "technology",
      author: "Dr. Ahmed Hassan",
      authorRole: "Chief Technology Officer",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      views: 2450,
      featured: true,
      trending: true,
      tags: ["Automation", "AI", "IoT", "Manufacturing"],
    },
    {
      id: 2,
      slug: "sustainable-industrial-practices",
      title: "Sustainable Industrial Practices in Modern Manufacturing",
      subtitle: "Sustainability & Environment",
      excerpt:
        "Learn how GTIS is implementing sustainable practices in industrial projects, reducing environmental impact while maintaining operational efficiency and cost-effectiveness.",
      content:
        "Sustainability has become a cornerstone of modern industrial operations. Companies are increasingly adopting green practices not just for environmental benefits, but also for long-term economic advantages...",
      image: "/placeholder.svg?height=400&width=600",
      category: "sustainability",
      author: "Sarah Mitchell",
      authorRole: "Environmental Engineer",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      views: 1890,
      featured: true,
      trending: false,
      tags: ["Sustainability", "Green Technology", "Environment"],
    },
    {
      id: 3,
      slug: "electrical-systems-safety-standards",
      title: "New Safety Standards for Industrial Electrical Systems",
      subtitle: "Safety & Compliance",
      excerpt:
        "Understanding the latest safety standards and compliance requirements for industrial electrical installations, ensuring worker safety and operational reliability.",
      content:
        "Safety in industrial electrical systems has never been more critical. With new international standards being implemented, companies must stay updated on the latest requirements...",
      image: "/placeholder.svg?height=400&width=600",
      category: "safety",
      author: "Mohamed Al-Rashid",
      authorRole: "Safety Director",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      views: 3200,
      featured: true,
      trending: true,
      tags: ["Safety", "Electrical", "Compliance", "Standards"],
    },
    {
      id: 4,
      slug: "middle-east-infrastructure-development",
      title: "Infrastructure Development Boom in the Middle East",
      subtitle: "Market Analysis",
      excerpt:
        "Analyzing the rapid infrastructure development across the Middle East region and the opportunities it presents for industrial service providers and contractors.",
      content:
        "The Middle East is experiencing an unprecedented infrastructure boom, with billions of dollars being invested in industrial facilities, smart cities, and renewable energy projects...",
      image: "/placeholder.svg?height=400&width=600",
      category: "market",
      author: "Fatima Al-Zahra",
      authorRole: "Market Analyst",
      publishDate: "2024-01-05",
      readTime: "12 min read",
      views: 4100,
      featured: false,
      trending: true,
      tags: ["Infrastructure", "Middle East", "Development", "Investment"],
    },
    {
      id: 5,
      slug: "preventive-maintenance-strategies",
      title: "Effective Preventive Maintenance Strategies for Industrial Equipment",
      subtitle: "Maintenance & Operations",
      excerpt:
        "Discover proven preventive maintenance strategies that can extend equipment life, reduce downtime, and optimize operational efficiency in industrial settings.",
      content:
        "Preventive maintenance is the backbone of efficient industrial operations. By implementing strategic maintenance programs, companies can significantly reduce unexpected breakdowns...",
      image: "/placeholder.svg?height=400&width=600",
      category: "maintenance",
      author: "James Thompson",
      authorRole: "Maintenance Manager",
      publishDate: "2024-01-03",
      readTime: "7 min read",
      views: 2800,
      featured: false,
      trending: false,
      tags: ["Maintenance", "Equipment", "Operations", "Efficiency"],
    },
    {
      id: 6,
      slug: "digital-transformation-manufacturing",
      title: "Digital Transformation in Manufacturing: A Complete Guide",
      subtitle: "Digital Innovation",
      excerpt:
        "A comprehensive guide to digital transformation in manufacturing, covering Industry 4.0 technologies, implementation strategies, and success metrics.",
      content:
        "Digital transformation is revolutionizing the manufacturing sector. From smart sensors to predictive analytics, companies are leveraging technology to create more efficient, responsive operations...",
      image: "/placeholder.svg?height=400&width=600",
      category: "technology",
      author: "Dr. Lisa Chen",
      authorRole: "Digital Innovation Lead",
      publishDate: "2024-01-01",
      readTime: "15 min read",
      views: 5200,
      featured: false,
      trending: false,
      tags: ["Digital Transformation", "Industry 4.0", "Manufacturing", "Innovation"],
    },
    {
      id: 7,
      slug: "renewable-energy-industrial-applications",
      title: "Renewable Energy Solutions for Industrial Applications",
      subtitle: "Energy & Sustainability",
      excerpt:
        "Exploring renewable energy solutions specifically designed for industrial applications, including solar, wind, and hybrid systems for manufacturing facilities.",
      content:
        "The industrial sector is increasingly turning to renewable energy sources to power operations. Solar panels, wind turbines, and hybrid systems are becoming more viable...",
      image: "/placeholder.svg?height=400&width=600",
      category: "sustainability",
      author: "Omar Khalil",
      authorRole: "Energy Systems Engineer",
      publishDate: "2023-12-28",
      readTime: "9 min read",
      views: 3600,
      featured: false,
      trending: false,
      tags: ["Renewable Energy", "Solar", "Wind", "Industrial"],
    },
    {
      id: 8,
      slug: "quality-control-modern-manufacturing",
      title: "Advanced Quality Control Systems in Modern Manufacturing",
      subtitle: "Quality Assurance",
      excerpt:
        "Learn about the latest quality control technologies and methodologies that ensure consistent product quality and compliance with international standards.",
      content:
        "Quality control has evolved significantly with the advent of new technologies. Automated inspection systems, AI-powered quality analysis, and real-time monitoring...",
      image: "/placeholder.svg?height=400&width=600",
      category: "quality",
      author: "Anna Rodriguez",
      authorRole: "Quality Assurance Manager",
      publishDate: "2023-12-25",
      readTime: "11 min read",
      views: 2900,
      featured: false,
      trending: false,
      tags: ["Quality Control", "Manufacturing", "Standards", "Technology"],
    },
  ]

  const categories = [
    { id: "all", name: "All News", count: articles.length },
    { id: "technology", name: "Technology", count: articles.filter((a) => a.category === "technology").length },
    {
      id: "sustainability",
      name: "Sustainability",
      count: articles.filter((a) => a.category === "sustainability").length,
    },
    { id: "safety", name: "Safety", count: articles.filter((a) => a.category === "safety").length },
    { id: "market", name: "Market", count: articles.filter((a) => a.category === "market").length },
    { id: "maintenance", name: "Maintenance", count: articles.filter((a) => a.category === "maintenance").length },
    { id: "quality", name: "Quality", count: articles.filter((a) => a.category === "quality").length },
  ]

  const filteredArticles =
    selectedCategory === "all" ? articles : articles.filter((article) => article.category === selectedCategory)

  const featuredArticles = articles.filter((article) => article.featured)
  const trendingArticles = articles.filter((article) => article.trending)
  // const latestArticles = articles.slice(0, 4)

  const stats = {
    totalArticles: articles.length,
    totalViews: articles.reduce((sum, article) => sum + article.views, 0),
    categories: categories.length - 1,
    authors: [...new Set(articles.map((a) => a.author))].length,
  }

  return (
    <div className="min-h-screen bg-white mt-0 lg:mt-28">
      {/* Flat Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8">
                <BookOpen className="h-4 w-4 mr-2" />
                Industry News & Insights Hub
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Latest Industrial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  News & Insights
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
                Stay ahead of the curve with cutting-edge industrial trends, expert analysis, and breakthrough
                technologies shaping the future of manufacturing across Africa and the Middle East.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stats.totalArticles}+</div>
                  <div className="text-white/70 text-sm font-medium">Expert Articles</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{(stats.totalViews / 1000).toFixed(0)}K+</div>
                  <div className="text-white/70 text-sm font-medium">Monthly Readers</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stats.categories}</div>
                  <div className="text-white/70 text-sm font-medium">Specialized Topics</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stats.authors}</div>
                  <div className="text-white/70 text-sm font-medium">Industry Experts</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
                  onClick={() => document.getElementById("featured-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Articles
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent font-semibold"
                  >
                    Subscribe Newsletter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured-section" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              Editor{`'`}s Choice
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked by our editorial team - the most impactful stories shaping industrial innovation today
            </p>
          </div>

          {/* Main Featured Article */}
          <div className="mb-16">
            {featuredArticles.length > 0 && (
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <Image
                      src={featuredArticles[0].image || "/placeholder.svg"}
                      alt={featuredArticles[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-bold">
                        <Star className="h-4 w-4 mr-2" />
                        FEATURED STORY
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {featuredArticles[0].views.toLocaleString()}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {featuredArticles[0].readTime}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                        {featuredArticles[0].subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {featuredArticles[0].title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{featuredArticles[0].excerpt}</p>

                    {/* Author Info */}
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredArticles[0].author}</div>
                        <div className="text-sm text-gray-500">{featuredArticles[0].authorRole}</div>
                      </div>
                      <div className="ml-auto text-sm text-gray-500">
                        {new Date(featuredArticles[0].publishDate).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredArticles[0].tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link href={`/news/${featuredArticles[0].slug}`} className="flex-1">
                        <Button className="w-full bg-gray-900 hover:bg-black text-white rounded-xl py-4 text-lg font-semibold">
                          Read Full Article
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="px-6 rounded-xl border-gray-300 hover:bg-gray-50 bg-transparent"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Secondary Featured Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.slice(1, 3).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-bold">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    FEATURED
                  </div>
                </div>

                {/* Article Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {article.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500 font-medium">{article.subtitle}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link href={`/news/${article.slug}`} className="flex-1">
                      <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="px-4 rounded-xl border-gray-300 hover:bg-gray-50 bg-transparent"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending Now
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What{`'`}s Hot in Industry</h2>
            </div>
            <Link href="#all-articles">
              <Button variant="outline" className="hidden md:flex items-center bg-transparent">
                View All Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingArticles.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Trending Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                    <Zap className="h-3 w-3 mr-1" />
                    TRENDING
                  </div>
                </div>

                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {article.category}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {article.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>

                  {/* Author & Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <Link href={`/news/${article.slug}`}>
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl group-hover:bg-red-600 transition-colors">
                      Read Trending Article
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover specialized content tailored to your industry interests and expertise level
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section id="all-articles" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {selectedCategory === "all"
                ? "All Articles"
                : `${categories.find((c) => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <p className="text-lg text-gray-600">{filteredArticles.length} articles found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div
                key={article.id}
                className={`bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {article.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">{article.subtitle}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link href={`/news/${article.slug}`} className="flex-1">
                      <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="px-4 rounded-xl border-gray-300 hover:bg-gray-50 bg-transparent"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8">
                <Mail className="h-4 w-4 mr-2" />
                Weekly Newsletter
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Never Miss an Update</h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Get the latest industrial insights, technology updates, and expert analysis delivered directly to your
                inbox every week
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Global Coverage</h3>
                  <p className="text-white/80">News and insights from across Africa and the Middle East</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Market Trends</h3>
                  <p className="text-white/80">Latest market analysis and industry trend reports</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Expert Insights</h3>
                  <p className="text-white/80">Exclusive content from industry leaders and experts</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                    <Mail className="mr-2 h-5 w-5" />
                    Subscribe Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Media Kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Connect with our experts to discuss how these innovations can benefit your operations
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-gray-900 hover:bg-black text-white px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Our Experts
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent font-semibold"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Expert Solutions</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
