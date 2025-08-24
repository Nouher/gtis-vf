"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  CheckCircle,
  Wrench,
  Cog,
  Zap,
  Database,
  Settings,
  Shield,
  Phone,
  Mail,
  Award,
  Users,
  Calendar,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { gsap } from "gsap"

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  // Hero background images
  const heroImages = ["/services-slider/services-slider1.jpeg", "/services-slider/services-slider2.jpeg", "/services-slider/services-slider4.jpeg"]

  useEffect(() => {
    setIsLoaded(true)
    gsap.fromTo(lineRef.current, {
       width: 0 
      },
       { 
        width: "240px", 
        duration: 1.5, 
        ease: "power2.out",
        delay: 0.5,
      })
      gsap.fromTo(textRef.current, {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 2,
      })
      gsap.fromTo(titleRef.current, {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 2.5,
      })
      gsap.fromTo(buttonRef.current, {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: "power1.out",
        delay: 3,
      })
  }, [])

  // Auto-change background images
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isPlaying, heroImages.length])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")
            setVisibleCards((prev) => new Set([...prev, cardIndex]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const services = [
    {
      id: 1,
      slug: "flat-bottom",
      title: "Flat-Bottom Grain Silos",
      subtitle: "Assembly & Installation",
      description:
        "GTIS provides full assembly and installation services for flat-bottom grain silos, ideal for high-capacity storage in industrial grain facilities. Our expert teams ensure fast, secure installation aligned with international standards, including integration of aeration, temperature monitoring, and unloading systems.",
      image: "/projects/img1.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 50,
      features: ["Precision TIG/MIG welding", "ISO 9001 quality control", "On-site assembly", "24/7 support"],
      price: "From $50/m²",
    },
    {
      id: 2,
      slug: "hopper-bottom",
      title: "Hopper-Bottom Silos",
      subtitle: "Assembly & Installation",
      description:
        "We offer hopper-bottom silo installation (silos on legs with conical bottoms), designed for gravity discharge, bagging systems, or fast, easy emptying. These silos are ideal for short-term storage or continuous feed operations in both industrial and agricultural settings.",
      image: "/projects/img2.jpg",
      icon: <Cog className="h-8 w-8" />,
      category: "installation",
      rating: 4.8,
      projects: 50,
      features: ["Precision alignment", "Performance testing", "Operator training", "Maintenance programs"],
      price: "From $25/hour",
    },
    {
      id: 3,
      slug: "grain-handling-systems",
      title: "Grain Handling Systems",
      subtitle: "Smart Solutions",
      description:
        "GTIS designs and installs complete grain handling systems: chain conveyors, bucket elevators, screw augers, and more. Our solutions ensure smooth and efficient product flow between reception, storage, and shipment points, with full customization to your site layout and needs.",
      image: "/projects/img3.jpeg",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 50,
      features: ["SCADA systems", "PLC programming", "Motor control", "Energy monitoring"],
      price: "From $30/point",
    },
    {
      id: 4,
      slug: "complete-grain-storage-solutions",
      title: "Complete Grain Storage Solutions",
      subtitle: "Reliability First",
      description:
        "We deliver turnkey grain storage solutions, integrating silos, intake pits, pre-cleaners, handling equipment, control systems, and outloading structures. Our solutions are tailored to meet local climate, capacity, and logistical requirements, whether for farming cooperatives or industrial clients.",
      image: "/projects/img4.jpeg",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.7,
      projects: 50,
      features: ["Custom design", "Climate control", "Inventory management", "Safety systems"],
      price: "Custom Quote",
    },
    {
      id: 5,
      slug: "square-silos",
      title: "Square Silos",
      subtitle: "Modular Storage Systems",
      description:
        "GTIS also installs square silos, an excellent choice for interior spaces or where floor area is limited. Their modular design allows easy adaptation to existing production lines or feed systems. These silos are often used in feed mills",
      image: "/projects/img5.jpeg",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.8,
      projects: 50,
      features: ["Robotics integration", "Process optimization", "Quality control", "Remote monitoring"],
      price: "Custom Quote",
    },
    {
      id: 6,
      slug: "farm-silos-livestock-housing-units",
      title: "Farm Silos & Livestock Housing Units",
      subtitle: "Zero Compromise",
      description:
        "We specialize in farm silos for feed storage and distribution, as well as the full installation of livestock farms (poultry, cattle, sheep). Our systems are designed to optimize hygiene, feed flow, energy efficiency, and overall farm productivity.",
      image: "/projects/img6.jpg",
      icon: <Shield className="h-8 w-8" />,
      category: "maintenance",
      rating: 4.9,
      projects: 50,
      features: ["Preventive maintenance", "Emergency repairs", "Spare parts", "Performance monitoring"],
      price: "From $40/hour",
    },
    {
      id: 7,
      slug: "milling-plants",
      title: "Milling Plants",
      subtitle: "Agro-Industrial Machinery Installation",
      description:
        "GTIS handles the complete assembly and installation of equipment for flour mills, feed mills, and agro-processing units. We offer turnkey solutions covering grain intake, cleaning, grinding, blending, sifting, storage, and packaging. Our experienced team ensures optimal layout planning, mechanical and electrical installation, and full commissioning of your production lines.",
      image: "/projects/img7.jpeg",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.9,
      projects: 50,
      features: ["Layout planning", "Mechanical installation", "Electrical systems", "Full commissioning"],
      price: "Custom Quote",
    },
    {
      id: 8,
      slug: "advanced-pneumatic-unloaders-for-ports",
      title: "Advanced Pneumatic Unloaders for Ports",
      subtitle: "Tailored Solutions",
      description:
        "GTIS installs advanced pneumatic unloading systems, enabling efficient, dust-controlled grain transfer from ships to storage, ensuring minimal losses and enhanced terminal throughput.",
      image: "/projects/img8.jpeg",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 50,
      features: ["Dust control systems", "High throughput", "Minimal losses", "Port integration"],
      price: "Custom Quote",
    },
    {
      id: 9,
      slug: "assembly-and-installation-of-cimat-silos",
      title: "Assembly and Installation of CIMAT Silos",
      subtitle: "Cement Industry Solutions",
      description:
        "GTIS specializes in the assembly and installation of silos for the cement industry, including high-capacity CIMAT silos. Our solutions are designed to ensure efficient storage and handling of cement and other bulk materials with dust control, aeration systems, and robust structural integrity.",
      image: "/projects/img9.jpeg",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.9,
      projects: 50,
      features: ["High-capacity storage", "Dust control", "Aeration systems", "Structural integrity"],
      price: "Custom Quote",
    },
    {
      id: 10,
      slug: "steel-structures",
      title: "Steel Structures",
      subtitle: "Fabrication & Installation",
      description:
        "GTIS designs, fabricates, and installs custom steel structures tailored to the specific needs of agro-industrial and processing facilities. Our services cover catwalks, support towers, service platforms, and industrial buildings built with precision and engineered for strength.",
      image: "/projects/img10.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 50,
      features: ["Custom design", "Precision fabrication", "Safety compliance", "Durability guaranteed"],
      price: "Custom Quote",
    },
  ]

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    { id: "assembly", name: "Assembly", count: services.filter((s) => s.category === "assembly").length },
    { id: "installation", name: "Installation", count: services.filter((s) => s.category === "installation").length },
    { id: "electrical", name: "Electrical", count: services.filter((s) => s.category === "electrical").length },
    { id: "storage", name: "Storage", count: services.filter((s) => s.category === "storage").length },
    { id: "automation", name: "Automation", count: services.filter((s) => s.category === "automation").length },
    { id: "maintenance", name: "Maintenance", count: services.filter((s) => s.category === "maintenance").length },
  ]

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - PCL Style with Blue Accent and Auto-changing Background */}
      <section className="relative h-screen overflow-hidden">
          <div className="absolute bottom-0 right-0 h-auto flex flex-col items-center gap-6 p-8 rounded-lg z-50">
                <a href=""><Image src="/social-media-icons/icon-linkedin-white.svg" alt="LinkedIn" width={24} height={24} className=""/></a>
                <a href=""><Image src="/social-media-icons/icon-facebook-white.svg" alt="Facebook" width={24} height={24} className=""/></a>
                <a href=""><Image src="/social-media-icons/icon-instagram-white.svg" alt="Instagram" width={24} height={24} className=""/></a>
                <a href=""><Image src="/social-media-icons/icon-twitter-white.svg" alt="Twitter" width={24} height={24} className=""/></a>
                <a href=""><Image src="/social-media-icons/icon-youtube-white.svg" alt="Youtube" width={24} height={24} className=""/></a>
    
              </div>
        {/* Background Images with Smooth Transitions */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Industrial Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-700/40" />
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Geometric Accent Elements */}
        <div className="absolute top-0 right-0 w-96 h-96">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 transform rotate-45 translate-x-32 -translate-y-32" />
          <div className="absolute top-32 right-32 w-48 h-48 bg-blue-600/20 transform rotate-45" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center mt-20">
          <div className="max-w-6xl">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex justify-start items-center ">

                {/* Blue Accent Line */}
                <div ref={lineRef} className="w-0 h-1 bg-blue-400 mb-6 mr-3" />

                {/* Subtitle */}
                <div ref={textRef} className="text-blue-400 text-2xl font-semibold tracking-wider uppercase mb-6">
                  INDUSTRIAL EXPERTISE
                </div>
              </div>

              {/* Main Heading */}
              <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold text-white mb-10 leading-tight ">
                Complete Industrial
                <br />
                Solutions Deliver
                <br />
                <span className="text-blue-400">Exceptional Value</span>
              </h1>

              {/* CTA Button */}
              <div className="mb-16">
                <Link href="#services-grid">
                  <Button
                    ref={buttonRef}
                    variant="outline"
                    className=" rounded-xl border-2 border-white text-white hover:bg-white hover:text-slate-900 px-16 py-6 text-2xl bg-transparent transition-all duration-300 "
                  >
                    EXPLORE OUR SERVICES
                    <ArrowRight className="ml-2 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          
          </div>

          {/* Play/Pause Button */}
          <div className="absolute bottom-8 right-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Featured Services
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Most Popular Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our flagship services that have helped hundreds of clients achieve their industrial goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Service */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={services[0].image || "/placeholder.svg"}
                      alt={services[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mr-4">
                        {services[0].icon}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-blue-400 fill-current mr-1" />
                        <span className="text-white font-medium">{services[0].rating}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{services[0].title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{services[0].description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white">
                        <span className="text-2xl font-bold">{services[0].price}</span>
                      </div>
                      <div className="text-slate-300 text-sm">{services[0].projects}+ projects completed</div>
                    </div>
                    <Link href={`/services/${services[0].slug}`}>
                      <Button className="bg-white text-slate-900 hover:bg-slate-100 w-full rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Services */}
            {services.slice(1, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                      {service.icon}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-blue-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-slate-600">{service.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-slate-900">{service.price}</span>
                    <span className="text-slate-500 text-sm">{service.projects}+ projects</span>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-xl">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Categories</h2>
            <p className="text-lg text-slate-600">Filter services by category to find exactly what you need</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-slate-800 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Scroll Animations */}
      <section id="services-grid" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                data-card-index={index}
                className={`bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
                }`}
                style={{
                  transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150}ms` : "0ms",
                  transform: visibleCards.has(index) ? "translateY(0) scale(1)" : "translateY(64px) scale(0.95)",
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      visibleCards.has(index) ? "scale-100 opacity-100" : "scale-110 opacity-80"
                    } hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div
                    className={`absolute top-4 right-4 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div
                    className={`flex items-center justify-between mb-3 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 200}ms` : "0ms" }}
                  >
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-blue-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-slate-600">{service.rating}</span>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 300}ms` : "0ms" }}
                  >
                    <p className="text-slate-600 text-sm mb-2">{service.subtitle}</p>
                    <p className="text-slate-700 mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div
                    className={`space-y-2 mb-6 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 400}ms` : "0ms" }}
                  >
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-slate-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className={`flex items-center justify-between mb-6 text-sm text-slate-500 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 500}ms` : "0ms" }}
                  >
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {service.projects}+ projects
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Premium service
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className={`flex gap-3 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 600}ms` : "0ms" }}
                  >
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="px-4 rounded-xl border-slate-300 hover:bg-slate-50 bg-transparent"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose GTIS Services?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise, quality assurance, and customer focus to deliver exceptional industrial
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Proven Expertise</h3>
              <p className="text-slate-600">15+ years of experience in industrial services across multiple sectors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance</h3>
              <p className="text-slate-600">ISO certified processes ensuring the highest quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Team</h3>
              <p className="text-slate-600">Certified professionals with specialized industrial expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock technical support and emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/services-bg.jpeg" alt="Contact Background" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Industrial Project?</h2>
            <p className="text-xl text-white/90 mb-12">
              Contact our experts to discuss your requirements and get a customized solution for your industrial needs
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>

              <Link href="mailto:contact@gtis.com">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Experts
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>24h Response</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
