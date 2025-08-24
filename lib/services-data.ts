

export interface GalleryImage {
  id: string
  url: string
  title: string
  description: string
  category: string
  projectName?: string
  location?: string
  date?: string
}

export interface Service {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  applications: string[]
  image: string
  icon: string
  category: string
  relatedServices: string[]
  gallery: GalleryImage[]
}


export const servicesData: Service[] = [
  {
    slug: "metallic-assembly",
    title: "Metallic Assembly",
    shortDescription: "Professional metallic structure assembly and fabrication services for industrial applications.",
    fullDescription:
      "Our metallic assembly services encompass the complete design, fabrication, and installation of metal structures for industrial facilities. We specialize in structural steelwork, piping systems, and custom metallic solutions that meet the highest industry standards. Our experienced team uses advanced welding techniques and quality materials to ensure durability and safety in all projects.",
    features: [
      "Structural steel fabrication and erection",
      "Custom metallic framework design",
      "Precision welding and joining",
      "Quality control and testing",
      "On-site assembly and installation",
      "Compliance with international standards",
    ],
    benefits: [
      "Enhanced structural integrity",
      "Cost-effective solutions",
      "Reduced project timelines",
      "Long-lasting durability",
      "Expert craftsmanship",
      "Comprehensive project management",
    ],
    applications: [
      "Industrial buildings and warehouses",
      "Manufacturing facilities",
      "Oil and gas installations",
      "Power plants",
      "Chemical processing plants",
      "Infrastructure projects",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Metallic+Assembly",
    icon: "🏗️",
    category: "Assembly",
    relatedServices: ["mechanical-solutions", "electrical-engineering"],
    gallery: [
      {
        id: "ma-1",
        url: "/placeholder.svg?height=600&width=800&text=Steel+Framework+Construction",
        title: "Steel Framework Construction",
        description: "Large-scale steel framework construction for industrial facility",
        category: "Construction",
        projectName: "Industrial Complex Phase 1",
        location: "Casablanca, Morocco",
        date: "2023",
      },
      {
        id: "ma-2",
        url: "/placeholder.svg?height=600&width=800&text=Precision+Welding+Work",
        title: "Precision Welding Work",
        description: "High-precision welding of structural steel components",
        category: "Welding",
        projectName: "Manufacturing Plant Expansion",
        location: "Rabat, Morocco",
        date: "2023",
      },
      {
        id: "ma-3",
        url: "/placeholder.svg?height=600&width=800&text=Metallic+Structure+Assembly",
        title: "Metallic Structure Assembly",
        description: "Complete metallic structure assembly and installation",
        category: "Assembly",
        projectName: "Warehouse Complex",
        location: "Tangier, Morocco",
        date: "2024",
      },
      {
        id: "ma-4",
        url: "/placeholder.svg?height=600&width=800&text=Piping+System+Installation",
        title: "Piping System Installation",
        description: "Industrial piping system design and installation",
        category: "Piping",
        projectName: "Chemical Processing Plant",
        location: "Kenitra, Morocco",
        date: "2024",
      },
      {
        id: "ma-5",
        url: "/placeholder.svg?height=600&width=800&text=Quality+Control+Testing",
        title: "Quality Control Testing",
        description: "Comprehensive quality control and testing procedures",
        category: "Testing",
        projectName: "Oil Refinery Upgrade",
        location: "Mohammedia, Morocco",
        date: "2023",
      },
      {
        id: "ma-6",
        url: "/placeholder.svg?height=600&width=800&text=Final+Installation",
        title: "Final Installation",
        description: "Final installation and commissioning of metallic structures",
        category: "Installation",
        projectName: "Power Generation Facility",
        location: "Agadir, Morocco",
        date: "2024",
      },
    ],
  },
  {
    slug: "mechanical-solutions",
    title: "Mechanical Solutions",
    shortDescription: "Comprehensive mechanical engineering and installation services for industrial equipment.",
    fullDescription:
      "We provide end-to-end mechanical solutions including design, installation, and maintenance of industrial machinery and equipment. Our mechanical engineering expertise covers rotating equipment, conveyor systems, pumps, compressors, and custom mechanical installations tailored to your specific industrial requirements.",
    features: [
      "Mechanical system design and engineering",
      "Equipment installation and commissioning",
      "Precision machining and fabrication",
      "Alignment and balancing services",
      "Performance optimization",
      "Preventive maintenance programs",
    ],
    benefits: [
      "Improved operational efficiency",
      "Reduced downtime",
      "Enhanced equipment reliability",
      "Lower maintenance costs",
      "Extended equipment lifespan",
      "Optimized performance",
    ],
    applications: [
      "Pumping stations",
      "Conveyor systems",
      "Industrial machinery",
      "Process equipment",
      "HVAC systems",
      "Material handling equipment",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Mechanical+Solutions",
    icon: "⚙️",
    category: "Engineering",
    relatedServices: ["automation", "maintenance"],
    gallery: [
      {
        id: "ms-1",
        url: "/placeholder.svg?height=600&width=800&text=Pump+Installation",
        title: "Industrial Pump Installation",
        description: "High-capacity industrial pump installation and commissioning",
        category: "Installation",
        projectName: "Water Treatment Plant",
        location: "Fez, Morocco",
        date: "2023",
      },
      {
        id: "ms-2",
        url: "/placeholder.svg?height=600&width=800&text=Conveyor+System",
        title: "Conveyor System Design",
        description: "Custom conveyor system design and implementation",
        category: "Design",
        projectName: "Mining Operation Facility",
        location: "Khouribga, Morocco",
        date: "2024",
      },
      {
        id: "ms-3",
        url: "/placeholder.svg?height=600&width=800&text=Precision+Machining",
        title: "Precision Machining",
        description: "High-precision machining of industrial components",
        category: "Machining",
        projectName: "Aerospace Components",
        location: "Casablanca, Morocco",
        date: "2023",
      },
      {
        id: "ms-4",
        url: "/placeholder.svg?height=600&width=800&text=Equipment+Alignment",
        title: "Equipment Alignment",
        description: "Precision alignment and balancing of rotating machinery",
        category: "Alignment",
        projectName: "Textile Manufacturing",
        location: "Berrechid, Morocco",
        date: "2024",
      },
    ],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    shortDescription: "Complete electrical design, installation, and maintenance services for industrial facilities.",
    fullDescription:
      "Our electrical engineering services cover the full spectrum of industrial electrical needs, from power distribution systems to control panels and instrumentation. We design and implement safe, efficient, and code-compliant electrical solutions that power your industrial operations reliably and efficiently.",
    features: [
      "Electrical system design and planning",
      "Power distribution installation",
      "Control panel fabrication",
      "Instrumentation and controls",
      "Electrical safety compliance",
      "Testing and commissioning",
    ],
    benefits: [
      "Reliable power distribution",
      "Enhanced safety standards",
      "Energy efficiency optimization",
      "Reduced electrical failures",
      "Code compliance assurance",
      "Professional installation",
    ],
    applications: [
      "Industrial power systems",
      "Motor control centers",
      "Lighting systems",
      "Emergency power systems",
      "Process control systems",
      "Electrical substations",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Electrical+Engineering",
    icon: "⚡",
    category: "Engineering",
    relatedServices: ["automation", "metallic-assembly"],
    gallery: [
      {
        id: "ee-1",
        url: "/placeholder.svg?height=600&width=800&text=Control+Panel+Fabrication",
        title: "Control Panel Fabrication",
        description: "Custom control panel design and fabrication",
        category: "Fabrication",
        projectName: "Food Processing Plant",
        location: "Meknes, Morocco",
        date: "2023",
      },
      {
        id: "ee-2",
        url: "/placeholder.svg?height=600&width=800&text=Power+Distribution+System",
        title: "Power Distribution System",
        description: "Industrial power distribution system installation",
        category: "Installation",
        projectName: "Manufacturing Complex",
        location: "Settat, Morocco",
        date: "2024",
      },
      {
        id: "ee-3",
        url: "/placeholder.svg?height=600&width=800&text=Electrical+Testing",
        title: "Electrical Testing",
        description: "Comprehensive electrical testing and commissioning",
        category: "Testing",
        projectName: "Pharmaceutical Facility",
        location: "Rabat, Morocco",
        date: "2023",
      },
    ],
  },
  {
    slug: "automation",
    title: "Industrial Automation",
    shortDescription: "Advanced automation solutions to optimize industrial processes and increase efficiency.",
    fullDescription:
      "Transform your industrial operations with our cutting-edge automation solutions. We design and implement comprehensive automation systems including PLC programming, SCADA systems, robotics integration, and process control solutions that enhance productivity, reduce costs, and improve safety across your facility.",
    features: [
      "PLC programming and configuration",
      "SCADA system development",
      "HMI design and implementation",
      "Robotics integration",
      "Process control optimization",
      "Remote monitoring capabilities",
    ],
    benefits: [
      "Increased operational efficiency",
      "Reduced labor costs",
      "Improved product quality",
      "Enhanced safety measures",
      "Real-time monitoring and control",
      "Predictive maintenance capabilities",
    ],
    applications: [
      "Manufacturing assembly lines",
      "Process control systems",
      "Material handling automation",
      "Quality control systems",
      "Environmental monitoring",
      "Energy management systems",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Industrial+Automation",
    icon: "🤖",
    category: "Technology",
    relatedServices: ["electrical-engineering", "mechanical-solutions"],
    gallery: [
      {
        id: "auto-1",
        url: "/placeholder.svg?height=600&width=800&text=PLC+Programming",
        title: "PLC Programming",
        description: "Advanced PLC programming and system configuration",
        category: "Programming",
        projectName: "Automotive Assembly Line",
        location: "Kenitra, Morocco",
        date: "2024",
      },
      {
        id: "auto-2",
        url: "/placeholder.svg?height=600&width=800&text=SCADA+System",
        title: "SCADA System Implementation",
        description: "Complete SCADA system design and implementation",
        category: "System Design",
        projectName: "Water Distribution Network",
        location: "Marrakech, Morocco",
        date: "2023",
      },
      {
        id: "auto-3",
        url: "/placeholder.svg?height=600&width=800&text=Robotics+Integration",
        title: "Robotics Integration",
        description: "Industrial robotics integration and programming",
        category: "Robotics",
        projectName: "Electronics Manufacturing",
        location: "Tangier, Morocco",
        date: "2024",
      },
    ],
  },
  {
    slug: "maintenance",
    title: "Industrial Maintenance",
    shortDescription: "Comprehensive maintenance services to ensure optimal performance of industrial equipment.",
    fullDescription:
      "Keep your industrial operations running smoothly with our comprehensive maintenance services. We offer preventive, predictive, and corrective maintenance programs designed to maximize equipment uptime, extend asset life, and minimize unexpected failures. Our experienced technicians provide 24/7 support for critical industrial systems.",
    features: [
      "Preventive maintenance programs",
      "Predictive maintenance using advanced diagnostics",
      "Emergency repair services",
      "Equipment condition monitoring",
      "Maintenance planning and scheduling",
      "Spare parts management",
    ],
    benefits: [
      "Reduced unplanned downtime",
      "Extended equipment lifespan",
      "Lower maintenance costs",
      "Improved safety and reliability",
      "Optimized maintenance schedules",
      "Enhanced operational efficiency",
    ],
    applications: [
      "Manufacturing equipment",
      "Process machinery",
      "Electrical systems",
      "HVAC systems",
      "Pumps and compressors",
      "Conveyor systems",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Industrial+Maintenance",
    icon: "🔧",
    category: "Support",
    relatedServices: ["mechanical-solutions", "spare-parts-supply"],
    gallery: [
      {
        id: "maint-1",
        url: "/placeholder.svg?height=600&width=800&text=Preventive+Maintenance",
        title: "Preventive Maintenance",
        description: "Scheduled preventive maintenance of industrial equipment",
        category: "Maintenance",
        projectName: "Cement Plant Operations",
        location: "Beni Mellal, Morocco",
        date: "2023",
      },
      {
        id: "maint-2",
        url: "/placeholder.svg?height=600&width=800&text=Equipment+Diagnostics",
        title: "Equipment Diagnostics",
        description: "Advanced diagnostic testing and condition monitoring",
        category: "Diagnostics",
        projectName: "Steel Production Facility",
        location: "Nador, Morocco",
        date: "2024",
      },
    ],
  },
  {
    slug: "spare-parts-supply",
    title: "Spare Parts Supply",
    shortDescription: "Reliable supply of genuine spare parts and components for industrial equipment.",
    fullDescription:
      "Ensure continuous operation of your industrial equipment with our comprehensive spare parts supply service. We maintain extensive inventory of genuine parts from leading manufacturers and provide fast, reliable delivery to minimize downtime. Our parts specialists help identify the right components for your specific equipment needs.",
    features: [
      "Extensive spare parts inventory",
      "Genuine manufacturer parts",
      "Fast delivery and logistics",
      "Parts identification and sourcing",
      "Inventory management solutions",
      "Technical support and consultation",
    ],
    benefits: [
      "Reduced equipment downtime",
      "Guaranteed part compatibility",
      "Cost-effective sourcing",
      "Reliable supply chain",
      "Expert technical guidance",
      "Streamlined procurement process",
    ],
    applications: [
      "Manufacturing equipment parts",
      "Process equipment components",
      "Electrical components",
      "Mechanical spare parts",
      "Instrumentation components",
      "Safety and control devices",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Spare+Parts+Supply",
    icon: "📦",
    category: "Supply",
    relatedServices: ["maintenance", "mechanical-solutions"],
    gallery: [
      {
        id: "sp-1",
        url: "/placeholder.svg?height=600&width=800&text=Parts+Inventory",
        title: "Parts Inventory Management",
        description: "Comprehensive spare parts inventory and management system",
        category: "Inventory",
        projectName: "Central Parts Warehouse",
        location: "Casablanca, Morocco",
        date: "2023",
      },
      {
        id: "sp-2",
        url: "/placeholder.svg?height=600&width=800&text=Quality+Control",
        title: "Quality Control Testing",
        description: "Rigorous quality control testing of spare parts",
        category: "Quality Control",
        projectName: "Parts Testing Laboratory",
        location: "Rabat, Morocco",
        date: "2024",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}

export function getRelatedServices(currentSlug: string, relatedSlugs: string[]): Service[] {
  return servicesData.filter((service) => relatedSlugs.includes(service.slug) && service.slug !== currentSlug)
}


