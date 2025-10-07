"use client"

// import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Wrench, Cog, Zap, Settings, PenToolIcon as Tool, Cpu } from "lucide-react"

export default function DarkServices() {
  // const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: <Wrench className="h-8 w-8" />,
      title: "Metallic Assembly",
      description: "Expert metallic assembly services for industrial applications with precision engineering.",
    },
    {
      id: 2,
      icon: <Cog className="h-8 w-8" />,
      title: "Mechanical Solutions",
      description: "Comprehensive mechanical solutions for industrial machinery and equipment.",
    },
    {
      id: 3,
      icon: <Zap className="h-8 w-8" />,
      title: "Electrical Assembly",
      description: "Professional electrical assembly and installation for industrial facilities.",
    },
    {
      id: 4,
      icon: <Settings className="h-8 w-8" />,
      title: "Automation",
      description: "Cutting-edge automation solutions to improve efficiency and productivity.",
    },
    {
      id: 5,
      icon: <Tool className="h-8 w-8" />,
      title: "Maintenance",
      description: "Regular maintenance services to ensure optimal performance of your equipment.",
    },
    {
      id: 6,
      icon: <Cpu className="h-8 w-8" />,
      title: "Engineering",
      description: "Custom engineering solutions for complex industrial challenges.",
    },
  ]

  return (
    <section className="relative py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We provide comprehensive industrial solutions to optimize your operations and infrastructure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
              // onMouseEnter={() => setHoveredService(service.id)}
              // onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gray-800 border border-gray-700 rounded-xl transition-all duration-300 hover:bg-gray-750 hover:border-gray-600 hover:transform hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="inline-flex p-4 bg-blue-500 rounded-xl text-white group-hover:bg-blue-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/services">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore All Services
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
