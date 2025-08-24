"use client"

import { useState, useEffect } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Star,
  CheckCircle,
  Eye,
  Share2,
  Download,
  Phone,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  Building,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"
import { getProjectBySlug, getRelatedProjects } from "../../data/projects"

// Carousel Component
function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [images.length, isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative group">
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Image overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Image counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {index + 1} / {images.length}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-200"
        >
          {isAutoPlaying ? "⏸️" : "▶️"}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-800 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-6 grid grid-cols-4 md:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-16 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? "border-gray-800 scale-105 shadow-lg"
                : "border-gray-200 hover:border-gray-400 hover:scale-102"
            }`}
          >
            <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            {index === currentIndex && <div className="absolute inset-0 bg-gray-800/20" />}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const [isLoaded, setIsLoaded] = useState(false)

  // Get project data from data file
  const project = getProjectBySlug(params.slug as string)
  const relatedProjects = getRelatedProjects(params.slug as string, 3)

  // Simulate loading and trigger animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100) // Quick delay to ensure smooth animation

    return () => clearTimeout(timer)
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white mt-36">
      {/* Compact Dark & Light Blue Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Dark & Light Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900" />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-slate-400 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div
              className={`mb-8 transform transition-all duration-700 ${
                isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div
                className={`text-white transform transition-all duration-700 delay-200 ${
                  isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
              >
                {/* Status Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {project.status === "completed" ? "Project Completed" : "In Progress"}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {project.title.split(" - ")[0]}
                  <span className="block text-xl md:text-2xl font-medium text-blue-200 mt-1">
                    {project.title.split(" - ")[1]}
                  </span>
                </h1>

                <p className="text-lg text-slate-200 mb-8 leading-relaxed">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Project
                  </Button>
                </div>
              </div>

              {/* Right Metrics */}
              <div
                className={`grid grid-cols-2 gap-4 transform transition-all duration-700 delay-400 ${
                  isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                {[
                  { icon: Award, value: project.value, label: "Project Value", delay: "delay-500" },
                  { icon: Clock, value: project.duration, label: "Duration", delay: "delay-600" },
                  { icon: Building, value: project.stats.capacity, label: "Capacity", delay: "delay-700" },
                  { icon: Star, value: project.rating, label: "Client Rating", delay: "delay-800" },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 transform ${metric.delay} ${
                      isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <metric.icon className="h-5 w-5 text-blue-300" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-slate-300 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Project Overview */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-700 delay-300 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.fullDescription}</p>

                  {/* Key Features */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center transform transition-all duration-500 ${
                          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Project Benefits */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-700 delay-500 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.benefits.map((benefit, index) => {

                      const Icon=benefit.icon
                      return(
                        <div
                        key={index}
                        className={`flex items-start transform transition-all duration-500 hover:scale-105 ${
                          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${800 + index * 150}ms` }}
                      >
                        <div className="bg-gray-100 p-3 rounded-xl mr-4 flex-shrink-0">
                          <div className="text-gray-600">
                            <Icon className="w-6 h-6"/>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                      )
                    }
                      
                    )}
                  </div>
                </div>

                {/* Project Process */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-700 delay-700 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Process</h2>
                  <div className="space-y-8">
                    {project.process.map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-start transform transition-all duration-500 hover:translate-x-2 ${
                          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${1000 + index * 200}ms` }}
                      >
                        <div className="bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                            <Badge variant="outline" className="text-gray-600 border-gray-200">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Gallery Carousel */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-700 delay-900 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
                  <ProjectCarousel images={project.gallery} title={project.title} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Project Details */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-6 mb-8 transform transition-all duration-700 delay-400 ${
                    isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Location", value: project.location },
                      { label: "Client", value: project.client },
                      { label: "Completion", value: project.completionDate },
                      { label: "Project Manager", value: project.projectManager },
                      { label: "Team Size", value: `${project.teamSize} people` },
                    ].map((detail, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between transform transition-all duration-300 ${
                          isLoaded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        <span className="text-gray-600">{detail.label}</span>
                        <span className="font-medium text-gray-900">{detail.value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Category</span>
                      <Badge className="bg-blue-100 text-blue-800">{project.category}</Badge>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div
                  className={`bg-white rounded-2xl shadow-lg p-6 mb-8 transform transition-all duration-700 delay-600 ${
                    isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(project.technicalSpecs).map(([key, value], index) => (
                      <div
                        key={key}
                        className={`flex justify-between transform transition-all duration-300 ${
                          isLoaded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${800 + index * 100}ms` }}
                      >
                        <span className="text-gray-600 text-sm">{key}</span>
                        <span className="font-medium text-gray-900 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div
                  className={`bg-gradient-to-br from-slate-800 to-blue-800 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-700 delay-800 hover:scale-105 ${
                    isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-6">Interested in Similar Project?</h3>
                  <p className="text-slate-200 mb-6">
                    Contact our team to discuss your requirements and get a customized solution.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 text-blue-300" />
                      <span className="text-sm">+216 71 123 456</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-blue-300" />
                      <span className="text-sm">projects@gtis.com</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-300" />
                      <span className="text-sm">www.gtis.com</span>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-slate-800 hover:bg-slate-100 font-semibold transition-all duration-300 hover:scale-105">
                    <Users className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transform transition-all duration-700 delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Projects</h2>
              <p className="text-lg text-gray-600">Explore other successful projects in our portfolio</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <div
                  key={relatedProject.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:scale-105 transform ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-black/50 text-white px-2 py-1 rounded text-xs">
                        <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                        {relatedProject.rating}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="text-gray-600 border-gray-200 mb-3 text-xs">
                      {relatedProject.subtitle}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {relatedProject.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {relatedProject.year}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-green-600">{relatedProject.value}</div>
                      <Link href={`/projects/${relatedProject.slug}`}>
                        <Button
                          size="sm"
                          className="bg-slate-800 hover:bg-slate-900 text-white transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`text-center mt-12 transform transition-all duration-700 delay-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl font-semibold bg-transparent transition-all duration-300 hover:scale-105"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
