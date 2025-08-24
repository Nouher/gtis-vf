"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  CheckCircle,
  Wheat,
  Building2,
  Factory,
  Cog,
  Heart,
  Phone,
  Mail,
  Award,
  Calendar,
  TrendingUp,
  Globe,
  Shield,
  Search,
  Grid,
  List,
  ChevronDown,
  ChevronRight,
  Target,
  Briefcase,
  Clock,
  Users,
  Droplets,
  TreePine,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

export default function SectorsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("list")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedSector, setExpandedSector] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sectors = [
    {
      id: 1,
      slug: "flour-mills",
      title: "Flour Mills",
      subtitle: "Turnkey Milling Solutions",
      description:
        "We provide turnkey solutions for flour milling operations, including installation of automated systems, preventive & corrective maintenance, and supply of customized spare parts. Our expertise ensures continuous, optimized production of flour with minimized downtime.",
      image: "/projects/img1.jpeg",
      icon: <Wheat className="h-8 w-8" />,
      category: "food-processing",
      rating: 4.9,
      projects: 150,
      features: [
        "Installation of automated systems",
        "Preventive & corrective maintenance",
        "Supply of customized spare parts",
        "Continuous production optimization",
      ],
      marketSize: "$2.5B+ Market",
      growth: "+12% annually",
      clients: ["MillCorp", "GrainTech", "FlourCo"],
      timeline: "3-8 months",
      complexity: "High",
    },
    {
      id: 2,
      slug: "animal-feed-factories",
      title: "Animal Feed Factories",
      subtitle: "Complete Feed Production Systems",
      description:
        "GTIS supports the animal feed industry with design & installation of grinding, mixing, and packaging systems. Process optimization to reduce waste and energy consumption with full maintenance and spare parts service. Our goal: maximize productivity and product quality.",
      image: "/projects/img6.jpg",
      icon: <Heart className="h-8 w-8" />,
      category: "agriculture",
      rating: 4.8,
      projects: 120,
      features: [
        "Design & installation of grinding systems",
        "Mixing and packaging systems",
        "Process optimization for waste reduction",
        "Full maintenance and spare parts service",
      ],
      marketSize: "$2.8B+ Market",
      growth: "+13% annually",
      clients: ["FeedTech", "AnimalCorp", "NutriCo"],
      timeline: "4-10 months",
      complexity: "High",
    },
    {
      id: 3,
      slug: "pasta-rice-factories",
      title: "Pasta & Rice Factories",
      subtitle: "Advanced Processing Lines",
      description:
        "We specialize in pasta line setup: mixing, extrusion, drying, and packaging. Rice factory automation: milling, sorting, and packaging systems. GTIS solutions improve production speed, product consistency, and energy efficiency.",
      image: "/projects/img7.jpeg",
      icon: <Factory className="h-8 w-8" />,
      category: "food-processing",
      rating: 4.9,
      projects: 85,
      features: [
        "Pasta line setup: mixing, extrusion, drying",
        "Rice factory automation systems",
        "Milling, sorting, and packaging",
        "Production speed optimization",
      ],
      marketSize: "$1.8B+ Market",
      growth: "+15% annually",
      clients: ["PastaCorp", "RiceTech", "ProcessCo"],
      timeline: "6-12 months",
      complexity: "Very High",
    },
    {
      id: 4,
      slug: "cement-plants",
      title: "Cement Plants",
      subtitle: "Industrial Cement Solutions",
      description:
        "Our services for cement production include kiln and mechanical equipment maintenance, system upgrades and modernization, fabrication and installation of conveyors, silos, and structural components. We help clients boost output while reducing downtime and operational costs.",
      image: "/projects/img9.jpeg",
      icon: <Building2 className="h-8 w-8" />,
      category: "construction",
      rating: 4.7,
      projects: 65,
      features: [
        "Kiln and mechanical equipment maintenance",
        "System upgrades and modernization",
        "Fabrication of conveyors and silos",
        "Structural components installation",
      ],
      marketSize: "$3.2B+ Market",
      growth: "+8% annually",
      clients: ["CementCorp", "BuildTech", "InfraCo"],
      timeline: "8-15 months",
      complexity: "Very High",
    },
    {
      id: 5,
      slug: "beverage-water-filling",
      title: "Beverage & Water Filling Systems",
      subtitle: "Complete Filling Line Solutions",
      description:
        "GTIS delivers complete filling lines for water, juices, and carbonated beverages, oils and industrial liquids. Our solutions include precision filling, capping, labeling, and hygiene control systems for high-speed production.",
      image: "/projects/img8.jpeg",
      icon: <Droplets className="h-8 w-8" />,
      category: "beverage",
      rating: 4.8,
      projects: 95,
      features: [
        "Water, juices, and carbonated beverages",
        "Oils and industrial liquids filling",
        "Precision filling and capping systems",
        "Hygiene control for high-speed production",
      ],
      marketSize: "$2.1B+ Market",
      growth: "+10% annually",
      clients: ["BevCorp", "WaterTech", "DrinkCo"],
      timeline: "3-12 months",
      complexity: "High",
    },
    {
      id: 6,
      slug: "wood-transformation",
      title: "Wood Transformation Plants",
      subtitle: "Wood Processing Solutions",
      description:
        "We assist wood-processing businesses with equipment for cutting, drying, and treatment, production line automation, and ongoing maintenance services. GTIS ensures quality control, reliability, and efficiency in wood transformation.",
      image: "/projects/img4.jpeg",
      icon: <TreePine className="h-8 w-8" />,
      category: "manufacturing",
      rating: 4.9,
      projects: 75,
      features: [
        "Equipment for cutting, drying, and treatment",
        "Production line automation",
        "Ongoing maintenance services",
        "Quality control and reliability systems",
      ],
      marketSize: "$1.5B+ Market",
      growth: "+7% annually",
      clients: ["WoodTech", "TimberCorp", "ForestCo"],
      timeline: "4-10 months",
      complexity: "Medium",
    },
    {
      id: 7,
      slug: "metal-structures",
      title: "Metal Structures & Other Industries",
      subtitle: "Custom Industrial Frameworks",
      description:
        "GTIS designs and builds industrial metal frameworks and custom structures for warehouses and factories. We also support cross-sector needs with tailored mechanical and automation services.",
      image: "/projects/img10.jpeg",
      icon: <Cog className="h-8 w-8" />,
      category: "manufacturing",
      rating: 4.8,
      projects: 110,
      features: [
        "Industrial metal frameworks design",
        "Custom structures for warehouses",
        "Factory structural solutions",
        "Cross-sector mechanical services",
      ],
      marketSize: "$4.5B+ Market",
      growth: "+11% annually",
      clients: ["MetalCorp", "SteelTech", "StructureCo"],
      timeline: "2-8 months",
      complexity: "Medium",
    },
  ]

  const categories = [
    { id: "all", name: "All Sectors", count: sectors.length },
    {
      id: "food-processing",
      name: "Food Processing",
      count: sectors.filter((s) => s.category === "food-processing").length,
    },
    {
      id: "agriculture",
      name: "Agriculture",
      count: sectors.filter((s) => s.category === "agriculture").length,
    },
    {
      id: "construction",
      name: "Construction",
      count: sectors.filter((s) => s.category === "construction").length,
    },
    {
      id: "beverage",
      name: "Beverage",
      count: sectors.filter((s) => s.category === "beverage").length,
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      count: sectors.filter((s) => s.category === "manufacturing").length,
    },
  ]

  const filteredSectors = sectors.filter((sector) => {
    const matchesCategory = selectedCategory === "all" || sector.category === selectedCategory
    const matchesSearch =
      sector.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sector.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stats = {
    totalProjects: sectors.reduce((sum, sector) => sum + sector.projects, 0),
    averageRating: (sectors.reduce((sum, sector) => sum + sector.rating, 0) / sectors.length).toFixed(1),
    totalSectors: sectors.length,
    countries: "12+",
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image - Light Blue Gray Theme */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/industrial-landscape.png"
            alt="Industrial Sectors Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-slate-700/80 to-blue-gray-700/70" />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-slate-500/20 to-blue-gray-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-gray-600/20 to-slate-600/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-slate-500/20 backdrop-blur-sm border border-slate-400/30 text-slate-100 rounded-full text-sm font-medium mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Sectors of Activity
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Industrial{" "}
                <span className="bg-gradient-to-r from-slate-300 to-blue-gray-300 bg-clip-text text-transparent">
                  Engineering Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-100 mb-8 leading-relaxed">
                GTIS operates across multiple industrial sectors, offering tailor-made engineering and maintenance
                solutions to support infrastructure development, process automation, and performance optimization.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-4 bg-slate-500/20 backdrop-blur-sm rounded-2xl border border-slate-400/30 hover:bg-slate-500/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.totalProjects}+</div>
                  <div className="text-slate-200 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-slate-500/20 backdrop-blur-sm rounded-2xl border border-slate-400/30 hover:bg-slate-500/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.averageRating}</div>
                  <div className="text-slate-200 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-slate-500/20 backdrop-blur-sm rounded-2xl border border-slate-400/30 hover:bg-slate-500/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.totalSectors}</div>
                  <div className="text-slate-200 text-sm">Industry Sectors</div>
                </div>
                <div className="text-center p-4 bg-slate-500/20 backdrop-blur-sm rounded-2xl border border-slate-400/30 hover:bg-slate-500/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.countries}</div>
                  <div className="text-slate-200 text-sm">Countries Served</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <Phone className="mr-2 h-5 w-5" />
                    Discuss Your Project
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-slate-300/50 text-slate-100 hover:bg-slate-500/20 px-8 py-4 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                  onClick={() => document.getElementById("sectors-grid")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Sectors
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sectors Section - Light Blue Gray Theme */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Leading Sectors
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{`
              Discover the industries where we've built our reputation through exceptional project delivery and
              innovation
            `}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Sector */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={sectors[0].image || "/placeholder.svg"}
                      alt={sectors[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-slate-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        #1 Sector
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-500/30 rounded-2xl flex items-center justify-center text-white mr-4">
                        {sectors[0].icon}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-slate-300 fill-current mr-1" />
                        <span className="text-white font-medium">{sectors[0].rating}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{sectors[0].title}</h3>
                    <p className="text-slate-200 mb-6 leading-relaxed">{sectors[0].description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white">
                        <span className="text-2xl font-bold">{sectors[0].marketSize}</span>
                        <div className="text-sm text-slate-300 flex items-center mt-1">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {sectors[0].growth}
                        </div>
                      </div>
                      <div className="text-slate-300 text-sm">{sectors[0].projects}+ projects completed</div>
                    </div>
                    <Link href={`/sectors/${sectors[0].slug}`}>
                      <Button className="bg-slate-600 hover:bg-slate-700 text-white w-full rounded-xl">
                        Explore Sector
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Sectors */}
            {sectors.slice(1, 3).map((sector, index) => (
              <div
                key={sector.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={sector.image || "/placeholder.svg"} alt={sector.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Top Sector
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600">
                      {sector.icon}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-slate-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-600">{sector.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{sector.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-slate-600">{sector.marketSize}</span>
                    <span className="text-gray-500 text-sm">{sector.projects}+ projects</span>
                  </div>
                  <Link href={`/sectors/${sector.slug}`}>
                    <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Categories - Light Blue Gray Theme */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Categories</h2>
            <p className="text-lg text-gray-600">Filter sectors by category to find your industry focus</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-slate-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-slate-100 hover:text-slate-700 border border-slate-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Search and View Controls */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search sectors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-50 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid" ? "bg-slate-600 text-white shadow-md" : "hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list" ? "bg-slate-600 text-white shadow-md" : "hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Display - Light Blue Gray Theme */}
      <section id="sectors-grid" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className={`bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Sector Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={sector.image || "/placeholder.svg"}
                      alt={sector.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-slate-500/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                        {sector.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-slate-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                        {sector.complexity}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-slate-300 fill-current mr-1" />
                          <span className="text-sm font-medium">{sector.rating}</span>
                        </div>
                        <div className="text-sm">{sector.projects}+ projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Sector Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{sector.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-slate-500 fill-current mr-1" />
                        <span className="text-sm font-medium text-gray-600">{sector.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-2">{sector.subtitle}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{sector.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {sector.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-slate-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {sector.projects}+ projects
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {sector.growth}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link href={`/sectors/${sector.slug}`} className="flex-1">
                        <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="px-4 rounded-xl border-slate-300 hover:bg-slate-50 bg-transparent text-slate-600"
                        onClick={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
                      >
                        {expandedSector === sector.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    {/* Expandable Details */}
                    {expandedSector === sector.id && (
                      <div className="mt-6 pt-6 border-t border-slate-200 animate-in slide-in-from-top duration-300">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Clients</h4>
                            <div className="flex flex-wrap gap-2">
                              {sector.clients.map((client, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">
                                  {client}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">All Features</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {sector.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="h-3 w-3 text-slate-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredSectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="relative h-48 lg:h-32 rounded-xl overflow-hidden">
                        <Image
                          src={sector.image || "/placeholder.svg"}
                          alt={sector.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <div className="w-8 h-8 bg-slate-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                            {sector.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{sector.title}</h3>
                          <p className="text-slate-600 font-medium">{sector.subtitle}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-slate-500 fill-current mr-1" />
                          <span className="font-medium">{sector.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-2">{sector.description}</p>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center text-gray-500">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {sector.projects}+ projects
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          {sector.timeline}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          {sector.growth}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Target className="h-4 w-4 mr-2" />
                          {sector.complexity}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {sector.features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Link href={`/sectors/${sector.slug}`}>
                          <Button className="bg-slate-600 hover:bg-slate-700 text-white rounded-xl">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us - Light Blue Gray Theme */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose GTIS for Your Industry?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring deep industry knowledge, proven methodologies, and innovative solutions to every sector we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">15+ years of specialized experience across diverse industrial sectors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h3>
              <p className="text-gray-600">ISO certified processes ensuring compliance with industry regulations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">International presence with local expertise in key markets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
              <p className="text-gray-600">Cutting-edge solutions that drive industry transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Blue Gray Theme */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/industrial-facility-sectors.png" alt="Contact Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-slate-700/80 to-blue-gray-700/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-xl text-slate-100 mb-12">
              Connect with our industry specialists to discuss how we can optimize your sector-specific challenges with
              proven solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-slate-600 hover:bg-slate-700 text-white px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Discuss Your Sector
                </Button>
              </Link>

              <Link href="mailto:contact@gtis.com">
                <Button
                  variant="outline"
                  className="border-2 border-slate-300/50 text-slate-100 hover:bg-slate-500/20 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Industry Consultation
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-slate-200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Industry Expertise</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Proven Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
