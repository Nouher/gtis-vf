import Image from "next/image"
import { Button } from "@/Components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      title: "Mechanical, Electrical, and Automation Assembly",
      description:
        "We design and assemble advanced mechanical and electrical systems tailored to each client's needs. From industrial machines to control panels and automation setups, our team ensures every component is perfectly integrated.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Preventive & Corrective Maintenance",
      description:
        "GTIS provides robust maintenance services to maximize the lifespan and reliability of your equipment:",
      details: [
        "Preventive maintenance to avoid breakdowns",
        "Rapid corrective actions for emergency issues",
        "Continuous monitoring and optimization",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Industrial Automation",
      description:
        "We develop and implement automation systems to optimize production lines, reduce human error, and increase throughput. Our expertise covers:",
      details: ["PLC programming", "SCADA systems", "Sensor integration", "Process control optimization"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Spare Parts Supply",
      description: "We ensure your operations never stop by providing:",
      details: [
        "Fast access to high-quality industrial spare parts",
        "Custom fabrication of non-standard components",
        "Inventory management support",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Engineering & Project Management",
      description: "From initial concept to implementation, our engineering team delivers complete project support:",
      details: [
        "Feasibility studies",
        "Layout and infrastructure planning",
        "Equipment specification",
        "On-site coordination and technical supervision",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Turnkey Industrial Solutions",
      description:
        "GTIS offers end-to-end solutions, managing every stage of industrial projects—from design and procurement to installation, testing, and commissioning.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div>
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-[#112847]/100 via-[#0E70B8]/100 to-[#112847]/100 text-white overflow-hidden mt-0 lg:mt-36">
      <Image src="/bg5.jpg" alt="img" width={1000} height={1000} className="absolute object-cover w-full h-full opacity-50"/>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 ">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-blue-300 font-semibold mb-2">GTIS CAPABILITIES</h4>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Our <span className="text-blue-300">Industrial</span> Activities
                </h1>
                <div className="w-20 h-1 bg-blue-400 mb-6"></div>
                <p className="text-lg md:text-xl text-gray-100">
                  GTIS operates at the heart of industrial innovation, offering complete engineering solutions that
                  drive efficiency, safety, and performance across a wide range of industries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#activities">
                  <Button size="lg" className="bg-white text-[#0E70B8] hover:bg-gray-100 hover:scale-105 px-6 transition">
                    Explore Our Activities
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-[#0E70B8] hover:scale-105 transition">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative h-96 w-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform rotate-3 shadow-xl">
                      <h3 className="text-xl font-bold mb-2">Industrial Automation</h3>
                      <p className="text-sm text-gray-200">Optimizing production with advanced control systems</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform -rotate-2 shadow-xl">
                      <h3 className="text-xl font-bold mb-2">Maintenance</h3>
                      <p className="text-sm text-gray-200">
                        Preventive & corrective solutions for equipment reliability
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform -rotate-3 shadow-xl">
                      <h3 className="text-xl font-bold mb-2">Engineering</h3>
                      <p className="text-sm text-gray-200">Complete project support from concept to implementation</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform rotate-2 shadow-xl">
                      <h3 className="text-xl font-bold mb-2">Turnkey Solutions</h3>
                      <p className="text-sm text-gray-200">End-to-end management of industrial projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Activities Section */}
      <div id="activities" className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative">
              {/* Background decoration */}
              {index % 2 === 0 ? (
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-100 hidden md:block"></div>
              ) : (
                <div className="absolute -right-4 top-0 bottom-0 w-1 bg-blue-100 hidden md:block"></div>
              )}

              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{activity.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{activity.description}</p>

                  {activity.details && (
                    <ul className="space-y-3 mb-8">
                      {activity.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <Link href={`/services#${activity.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="bg-blue-600 hover:bg-[#0E70B8] text-white">Request Service</Button>
                    </Link>
                  </div>
                </div>

                <div
                  className={`relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? "order-1 md:order-2" : "order-1"}`}
                >
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industrial Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our comprehensive industrial activities can optimize your
            processes and infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white  text-[#0E70B8]  hover:bg-gray-100 hover:scale-105">Contact Us</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-white text-white bg-transparent hover:text-[#0E70B8] hover:bg-white hover:scale-105">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
