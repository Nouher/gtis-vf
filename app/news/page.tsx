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
  Award,
  Phone,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import HeroSlider from "@/Components/HeroSlider"

export default function NewsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const articles = [
    {
      id: 1,
      slug: "gtis-grain-milling-expo-casablanca",
      title: "GTIS to Present Cutting-Edge Industrial Solutions at the Grain & Milling Expo Casablanca",
      subtitle: "Leading innovation in the grain and milling industry",
      excerpt: "Explore the latest trends in industrial automation including AI integration, IoT connectivity, and smart manufacturing solutions that are transforming industries across Africa and the Middle East.",
      content: "The industrial automation landscape is rapidly evolving with new technologies emerging every year. In 2024, we're seeing unprecedented growth in AI-powered systems, IoT integration, and smart manufacturing solutions...",
      image: "/news/gtis-grain-milling-expo-casablanca.jpg",
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

  const trendingArticles = articles.filter((article) => article.trending)
  // const latestArticles = articles.slice(0, 4)


  return (
    <div className="min-h-screen bg-white  ">
      {/* Flat Hero Section */}
      <HeroSlider/>



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
              
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover object-top  transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {article.category}
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
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.publishDate}
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
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
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
