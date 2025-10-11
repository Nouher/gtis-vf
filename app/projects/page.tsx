"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Award,
  Star,
  Filter,
  Search,
  Eye,
  Clock,
  CheckCircle,
  Building2,
  Factory,
  Truck,
  Zap,
  Warehouse,
  GrapeIcon as Grain,
  HardHat,
  Ship,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../components/ui/select"
import { projects } from "../data/projects"




const categories = [
  {
    id: "all",
    name: "All Projects",
    count: projects.length,
    icon: <Building2 className="w-4 h-4" />,
    description: "View all completed projects",
  },
  {
    id: "port-facilities",
    name: "Port Facilities",
    count: projects.filter((p) => p.category === "port-facilities").length,
    icon: <Ship className="w-4 h-4" />,
    description: "Maritime terminal and port infrastructure",
  },
  {
    id: "feed-mills",
    name: "Feed Mills",
    count: projects.filter((p) => p.category === "feed-mills").length,
    icon: <Factory className="w-4 h-4" />,
    description: "Animal feed processing facilities",
  },
  {
    id: "flour-mills",
    name: "Flour Mills",
    count: projects.filter((p) => p.category === "flour-mills").length,
    icon: <Grain className="w-4 h-4" />,
    description: "Wheat and grain processing plants",
  },
  {
    id: "livestock",
    name: "Livestock",
    count: projects.filter((p) => p.category === "livestock").length,
    icon: <Truck className="w-4 h-4" />,
    description: "Modern livestock farming facilities",
  },
  {
    id: "cement-storage",
    name: "Cement Storage",
    count: projects.filter((p) => p.category === "cement-storage").length,
    icon: <HardHat className="w-4 h-4" />,
    description: "Industrial cement storage systems",
  },
  {
    id: "grain-elevators",
    name: "Grain Elevators",
    count: projects.filter((p) => p.category === "grain-elevators").length,
    icon: <Warehouse className="w-4 h-4" />,
    description: "Agricultural storage and handling",
  },
  {
    id: "steel-structures",
    name: "Steel Structures",
    count: projects.filter((p) => p.category === "steel-structures").length,
    icon: <HardHat className="w-4 h-4" />,
    description: "Custom industrial steel construction",
  },
  {
    id: "port-equipment",
    name: "Port Equipment",
    count: projects.filter((p) => p.category === "port-equipment").length,
    icon: <Zap className="w-4 h-4" />,
    description: "Specialized port handling equipment",
  },
]

const sortOptions = [
  { id: "year", name: "Latest Projects", icon: <Calendar className="w-4 h-4" /> },
  { id: "value", name: "Highest Value", icon: <Award className="w-4 h-4" /> },
  { id: "rating", name: "Top Rated", icon: <Star className="w-4 h-4" /> },
  { id: "alphabetical", name: "A-Z", icon: <Filter className="w-4 h-4" /> },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("year")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  // Trigger animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = projects
    .filter((project) => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "year":
          return Number.parseInt(b.year) - Number.parseInt(a.year)
        case "value":
          return Number.parseFloat(b.value.replace(/[$M]/g, "")) - Number.parseFloat(a.value.replace(/[$M]/g, ""))
        case "rating":
          return b.rating - a.rating
        case "alphabetical":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

 
  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="min-h-screen bg-white mt-0  lg:">
      {/* Hero Section with Background Image */}
      <section className="relative h-[65vh] flex items-end pb-16 justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg-projects.jpeg"
            alt="Projects Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-secondary/40 via-gray-700/70 to-gray-800/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">

            {/* Title */}
            <h1
              className={`text-5xl md:text-8xl uppercase font-black leading-tight mb-6 transform transition-all duration-700 delay-200 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              
                Our Works
            </h1>

            {/* Description */}
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-700 delay-400 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Discover our industrial projects completed across Africa and the Middle East, showcasing our expertise in
              assembly and installation of industrial equipment.
            </p>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "150+", label: "Projets Réalisés", icon: <Building2 className="h-10 w-10 text-white" />,delay: "delay-500" },
                { number: "15+", label: "Pays", icon: <Globe className="h-10 w-10 text-white" /> ,delay: "delay-600"},
                { number: "$200M+", label: "Valeur Totale", icon: <Banknote className="h-10 w-10 text-white" /> ,delay: "delay-700"},
                { number: "98%", label: "Satisfaction Client", icon: <Star className="h-10 w-10 text-white" /> ,delay: "delay-800"},
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform ${stat.delay} ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="text-2xl mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
     

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transform transition-all duration-700 delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore All Our <span className="text-gray-800">Projects</span>
              </h2>
              <p className="text-lg text-gray-600">Filter by category or search for a specific project</p>
            </div>

            {/* Enhanced Search and Filter Bar */}
            <div
              className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 mb-12 shadow-lg border border-gray-200 transform transition-all duration-700 delay-500 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                {/* Search Bar */}
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Projects</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search by name, location, or type..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-4 py-4 text-base border-2 border-gray-200 rounded-2xl focus:border-gray-500 focus:ring-0 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Category Filter Dropdown */}
                <div className="md:col-span-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="py-4 px-4 text-base border-2 border-gray-200 rounded-2xl focus:border-gray-500 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        {selectedCategoryData?.icon}
                        <span className="ml-2">{selectedCategoryData?.name}</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-2 border-gray-200 shadow-2xl bg-white">
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id}
                          className="py-4 px-4 hover:bg-gray-50 focus:bg-gray-50 rounded-xl m-1 cursor-pointer transition-all duration-200"
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              {category.icon}
                              <div className="ml-3">
                                <div className="font-medium text-gray-900">{category.name}</div>
                                <div className="text-xs text-gray-500">{category.description}</div>
                              </div>
                            </div>
                            <Badge className="bg-gray-100 text-gray-600 text-xs ml-2">{category.count}</Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort Dropdown */}
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="py-4 px-4 text-base border-2 border-gray-200 rounded-2xl focus:border-gray-500 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        {sortOptions.find((opt) => opt.id === sortBy)?.icon}
                        <span className="ml-2">{sortOptions.find((opt) => opt.id === sortBy)?.name}</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-2 border-gray-200 shadow-2xl bg-white">
                      {sortOptions.map((option) => (
                        <SelectItem
                          key={option.id}
                          value={option.id}
                          className="py-3 px-4 hover:bg-gray-50 focus:bg-gray-50 rounded-xl m-1 cursor-pointer transition-all duration-200"
                        >
                          <div className="flex items-center">
                            {option.icon}
                            <span className="ml-2 font-medium">{option.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-2" />
                    <span>
                      Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> of{" "}
                      <span className="font-semibold text-gray-900">{projects.length}</span> projects
                    </span>
                  </div>
                  {(searchTerm || selectedCategory !== "all") && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("all")
                        setSortBy("year")
                      }}
                      className="text-gray-600 border-gray-300 hover:bg-gray-50 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-105 transform ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-98 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white px-3 py-1 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {project.status.toLowerCase() === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs font-medium">{project.location}</span>
                      </div>
                      {/* <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 text-yellow-400" />
                        <span className="text-xs font-medium">{project.rating}</span>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-gray-600 border-gray-200 text-xs">
                      {project.subtitle}
                    </Badge>
                    <div className="text-sm text-gray-500">{project.year}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-primary/10 rounded-lg">
                      <div className="text-sm font-bold text-gray-800">{project.stats.capacity}</div>
                      <div className="text-xs text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center p-2 bg-primary/10  rounded-lg">
                      <div className="text-sm font-bold text-gray-800">{project.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600">{project.value}</div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button
                        size="sm"
                        className="bg-gray-800 hover:bg-gray-900 text-white group-hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div
              className={`text-center py-16 transform transition-all duration-700 delay-500 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try modifying your search or filter criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="mt-4 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:scale-105"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transform transition-all duration-700 delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Badge className="bg-secondary/20 text-primary px-4 py-2 text-sm font-medium mb-4">
                Excellence Guaranteed
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Our <span className="text-gray-800">Projects</span> Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every project we complete reflects our commitment to excellence, innovation, and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12 text-primary" />,
                  title: "Certified Quality",
                  description:
                    "All our projects comply with international ISO 9001 standards and the most demanding industrial standards.",
                },
                {
                  icon: <Clock className="w-12 h-12 text-primary" />,
                  title: "On-Time Delivery",
                  description:
                    "98% of our projects are delivered on schedule, thanks to our rigorous planning and expertise.",
                },
                {
                  icon: <Users className="w-12 h-12 text-primary" />,
                  title: "Expert Team",
                  description:
                    "Our engineers and technicians have over 15 years of combined experience in the agro-industrial sector.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`text-center p-8 rounded-2xl bg-secondary/15 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center text-white transform transition-all duration-700 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-secondary">Project</span>{` ?`}
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Contact us today to discuss your needs and get a personalized quote for your industrial project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                  <Users className="w-5 h-5 mr-2" />
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white hover:text-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl font-semibold bg-transparent transition-all duration-300 hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
