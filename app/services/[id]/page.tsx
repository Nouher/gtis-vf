"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Award,
  Wrench,
  Cog,
  Zap,
  Database,
  Settings,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

export default function ServiceDetailPage() {
  const params = useParams()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // All services data
  const allServices = [
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
      features: [
        "Precision TIG/MIG welding",
        "ISO 9001 quality control",
        "On-site assembly",
        "24/7 support",
        "Temperature monitoring integration",
        "Aeration systems",
      ],
      price: "From $50/m²",
      gallery: ["/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg", "/projects/img4.jpeg"],
      benefits: [
        {
          title: "High Capacity Storage",
          description: "Designed for maximum storage efficiency in industrial facilities",
        },
        {
          title: "International Standards",
          description: "Full compliance with ISO and international grain storage standards",
        },
        {
          title: "Advanced Monitoring",
          description: "Integrated temperature and moisture monitoring systems",
        },
        {
          title: "Expert Installation",
          description: "Professional installation by certified technicians",
        },
      ],
      process: [
        {
          step: "01",
          title: "Site Assessment",
          description: "Complete evaluation of site conditions and requirements",
        },
        {
          step: "02",
          title: "Design & Planning",
          description: "Custom design based on capacity and operational needs",
        },
        {
          step: "03",
          title: "Foundation Work",
          description: "Preparation of concrete foundations and base structures",
        },
        {
          step: "04",
          title: "Silo Assembly",
          description: "Professional assembly of silo components on-site",
        },
        {
          step: "05",
          title: "System Integration",
          description: "Installation of monitoring and control systems",
        },
        {
          step: "06",
          title: "Testing & Commissioning",
          description: "Complete testing and handover with training",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "98%", countries: "10+" },
      testimonials: [
        {
          name: "Ahmed Benali",
          company: "SOFALIM",
          text: "GTIS delivered exceptional work on our grain silo project. Their technical expertise and professionalism are remarkable.",
          rating: 5,
        },
        {
          name: "Maria Santos",
          company: "Agro Solutions",
          text: "Professional team that respects deadlines and quality. Highly recommend their services.",
          rating: 5,
        },
      ],
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
      features: [
        "Gravity discharge design",
        "Conical bottom construction",
        "Bagging system integration",
        "Fast emptying capability",
        "Continuous feed operations",
        "Agricultural applications",
      ],
      price: "From $25/hour",
      gallery: ["/projects/img2.jpg", "/projects/img1.jpeg", "/projects/img3.jpeg", "/projects/img4.jpeg"],
      benefits: [
        {
          title: "Gravity Discharge",
          description: "Efficient gravity-fed discharge system for easy material flow",
        },
        {
          title: "Versatile Applications",
          description: "Suitable for both industrial and agricultural operations",
        },
        {
          title: "Quick Installation",
          description: "Faster installation process with modular design",
        },
        {
          title: "Cost Effective",
          description: "Economical solution for short-term storage needs",
        },
      ],
      process: [
        {
          step: "01",
          title: "Requirements Analysis",
          description: "Assessment of discharge requirements and site conditions",
        },
        {
          step: "02",
          title: "Structural Design",
          description: "Engineering of support legs and conical bottom structure",
        },
        {
          step: "03",
          title: "Foundation Preparation",
          description: "Installation of support foundations and anchor points",
        },
        {
          step: "04",
          title: "Silo Erection",
          description: "Assembly of hopper-bottom silo components",
        },
        {
          step: "05",
          title: "Discharge System",
          description: "Installation of discharge gates and control systems",
        },
        {
          step: "06",
          title: "Final Testing",
          description: "Operational testing and system commissioning",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "96%", countries: "8+" },
      testimonials: [
        {
          name: "Hassan Al-Rashid",
          company: "Gulf Grains",
          text: "Excellent hopper-bottom silo installation. The gravity discharge works perfectly for our operations.",
          rating: 5,
        },
        {
          name: "Sarah Johnson",
          company: "Farm Solutions",
          text: "Professional installation team with great attention to detail. Very satisfied with the results.",
          rating: 4,
        },
      ],
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
      features: [
        "Chain conveyors",
        "Bucket elevators",
        "Screw augers",
        "Custom site layout",
        "Automated control systems",
        "Efficient product flow",
      ],
      price: "From $30/point",
      gallery: ["/projects/img3.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img4.jpeg"],
      benefits: [
        {
          title: "Complete Integration",
          description: "Seamless integration from reception to shipment points",
        },
        {
          title: "Custom Design",
          description: "Tailored solutions for your specific site layout and needs",
        },
        {
          title: "Automated Control",
          description: "Advanced control systems for optimal efficiency",
        },
        {
          title: "Reliable Operation",
          description: "Robust equipment designed for continuous operation",
        },
      ],
      process: [
        {
          step: "01",
          title: "System Design",
          description: "Complete system design based on material flow requirements",
        },
        {
          step: "02",
          title: "Equipment Selection",
          description: "Selection of appropriate conveyors and handling equipment",
        },
        {
          step: "03",
          title: "Installation Planning",
          description: "Detailed installation sequence and logistics planning",
        },
        {
          step: "04",
          title: "Mechanical Installation",
          description: "Installation of conveyors, elevators, and augers",
        },
        {
          step: "05",
          title: "Control Integration",
          description: "Integration of automated control and monitoring systems",
        },
        {
          step: "06",
          title: "System Commissioning",
          description: "Complete system testing and operator training",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "99%", countries: "12+" },
      testimonials: [
        {
          name: "Mohamed Farid",
          company: "Nile Grain",
          text: "Outstanding grain handling system installation. The automated controls have improved our efficiency significantly.",
          rating: 5,
        },
        {
          name: "Jennifer Lee",
          company: "Pacific Grains",
          text: "GTIS delivered a complete solution that exceeded our expectations. Excellent project management.",
          rating: 5,
        },
      ],
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
      features: [
        "Turnkey solutions",
        "Intake pits",
        "Pre-cleaners",
        "Control systems",
        "Climate adaptation",
        "Logistical optimization",
      ],
      price: "Custom Quote",
      gallery: ["/projects/img4.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "Turnkey Solutions",
          description: "Complete end-to-end grain storage solutions",
        },
        {
          title: "Climate Adapted",
          description: "Solutions tailored to local climate conditions",
        },
        {
          title: "Scalable Design",
          description: "Flexible systems that can grow with your needs",
        },
        {
          title: "Expert Support",
          description: "Comprehensive support from design to commissioning",
        },
      ],
      process: [
        {
          step: "01",
          title: "Needs Assessment",
          description: "Comprehensive analysis of storage requirements and constraints",
        },
        {
          step: "02",
          title: "System Design",
          description: "Complete system design including all components and integration",
        },
        {
          step: "03",
          title: "Project Planning",
          description: "Detailed project timeline and resource allocation",
        },
        {
          step: "04",
          title: "Installation Phase",
          description: "Systematic installation of all system components",
        },
        {
          step: "05",
          title: "Integration Testing",
          description: "Complete system integration and performance testing",
        },
        {
          step: "06",
          title: "Handover & Training",
          description: "System handover with comprehensive operator training",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "97%", countries: "15+" },
      testimonials: [
        {
          name: "Abdullah Rahman",
          company: "Middle East Grains",
          text: "Comprehensive grain storage solution that meets all our requirements. Excellent project execution.",
          rating: 5,
        },
        {
          name: "Lisa Chen",
          company: "Asian Agro",
          text: "Professional team with deep expertise in grain storage systems. Highly recommended.",
          rating: 4,
        },
      ],
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
      features: [
        "Modular design",
        "Space efficient",
        "Interior installation",
        "Production line integration",
        "Feed mill applications",
        "Easy adaptation",
      ],
      price: "Custom Quote",
      gallery: ["/projects/img5.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "Space Efficient",
          description: "Optimal use of available floor space with square design",
        },
        {
          title: "Modular System",
          description: "Flexible modular design for easy expansion",
        },
        {
          title: "Interior Installation",
          description: "Suitable for installation inside existing buildings",
        },
        {
          title: "Easy Integration",
          description: "Simple integration with existing production lines",
        },
      ],
      process: [
        {
          step: "01",
          title: "Space Analysis",
          description: "Detailed analysis of available space and constraints",
        },
        {
          step: "02",
          title: "Modular Design",
          description: "Custom modular design for optimal space utilization",
        },
        {
          step: "03",
          title: "Pre-fabrication",
          description: "Off-site fabrication of modular components",
        },
        {
          step: "04",
          title: "On-site Assembly",
          description: "Efficient on-site assembly of pre-fabricated modules",
        },
        {
          step: "05",
          title: "System Integration",
          description: "Integration with existing production systems",
        },
        {
          step: "06",
          title: "Performance Testing",
          description: "Complete testing and system optimization",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "96%", countries: "8+" },
      testimonials: [
        {
          name: "Robert Smith",
          company: "Feed Solutions",
          text: "Perfect square silo installation for our limited space. Excellent space utilization and functionality.",
          rating: 5,
        },
        {
          name: "Anna Petrov",
          company: "Euro Feed",
          text: "Professional installation with great attention to our specific requirements. Very satisfied.",
          rating: 4,
        },
      ],
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
      features: [
        "Feed storage systems",
        "Livestock housing",
        "Hygiene optimization",
        "Energy efficiency",
        "Farm productivity",
        "Complete installations",
      ],
      price: "From $40/hour",
      gallery: ["/projects/img6.jpg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "Complete Solutions",
          description: "Full farm solutions from feed storage to livestock housing",
        },
        {
          title: "Hygiene Focus",
          description: "Designed for optimal hygiene and animal health",
        },
        {
          title: "Energy Efficient",
          description: "Energy-efficient systems for reduced operational costs",
        },
        {
          title: "Productivity Optimization",
          description: "Systems designed to maximize farm productivity",
        },
      ],
      process: [
        {
          step: "01",
          title: "Farm Assessment",
          description: "Comprehensive assessment of farm requirements and conditions",
        },
        {
          step: "02",
          title: "System Design",
          description: "Integrated design of feed storage and housing systems",
        },
        {
          step: "03",
          title: "Construction Planning",
          description: "Detailed construction and installation planning",
        },
        {
          step: "04",
          title: "Installation",
          description: "Professional installation of all farm systems",
        },
        {
          step: "05",
          title: "System Integration",
          description: "Integration of feed and housing management systems",
        },
        {
          step: "06",
          title: "Training & Support",
          description: "Comprehensive training and ongoing support",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "99%", countries: "12+" },
      testimonials: [
        {
          name: "John Miller",
          company: "Miller Farms",
          text: "Excellent farm silo and housing installation. Our productivity has increased significantly.",
          rating: 5,
        },
        {
          name: "Sophie Martin",
          company: "Green Valley Farm",
          text: "Professional team with great expertise in livestock housing. Highly recommend GTIS.",
          rating: 5,
        },
      ],
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
      features: [
        "Flour mills",
        "Feed mills",
        "Agro-processing",
        "Turnkey solutions",
        "Layout planning",
        "Full commissioning",
      ],
      price: "Custom Quote",
      gallery: ["/projects/img7.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "Turnkey Solutions",
          description: "Complete milling plant solutions from intake to packaging",
        },
        {
          title: "Optimal Layout",
          description: "Expert layout planning for maximum efficiency",
        },
        {
          title: "Quality Equipment",
          description: "High-quality machinery for reliable operation",
        },
        {
          title: "Full Commissioning",
          description: "Complete commissioning and operator training",
        },
      ],
      process: [
        {
          step: "01",
          title: "Process Design",
          description: "Complete milling process design and optimization",
        },
        {
          step: "02",
          title: "Equipment Selection",
          description: "Selection of optimal milling equipment and machinery",
        },
        {
          step: "03",
          title: "Layout Planning",
          description: "Detailed plant layout and workflow optimization",
        },
        {
          step: "04",
          title: "Installation",
          description: "Professional installation of all milling equipment",
        },
        {
          step: "05",
          title: "System Integration",
          description: "Integration of control and monitoring systems",
        },
        {
          step: "06",
          title: "Commissioning",
          description: "Complete plant commissioning and training",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "98%", countries: "10+" },
      testimonials: [
        {
          name: "Ahmed Hassan",
          company: "Cairo Mills",
          text: "Outstanding milling plant installation. The layout optimization has improved our efficiency dramatically.",
          rating: 5,
        },
        {
          name: "Maria Rodriguez",
          company: "Iberian Mills",
          text: "Professional team with excellent project management. Delivered on time and within budget.",
          rating: 5,
        },
      ],
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
      features: [
        "Pneumatic unloading",
        "Dust control",
        "Ship-to-storage transfer",
        "Minimal losses",
        "Enhanced throughput",
        "Port integration",
      ],
      price: "Custom Quote",
      gallery: ["/projects/img8.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "High Efficiency",
          description: "Advanced pneumatic systems for maximum unloading efficiency",
        },
        {
          title: "Dust Control",
          description: "Effective dust control systems for environmental compliance",
        },
        {
          title: "Minimal Losses",
          description: "Optimized systems to minimize product losses during transfer",
        },
        {
          title: "Port Integration",
          description: "Seamless integration with existing port infrastructure",
        },
      ],
      process: [
        {
          step: "01",
          title: "Port Assessment",
          description: "Comprehensive assessment of port facilities and requirements",
        },
        {
          step: "02",
          title: "System Design",
          description: "Custom pneumatic unloading system design",
        },
        {
          step: "03",
          title: "Equipment Procurement",
          description: "Procurement of specialized pneumatic equipment",
        },
        {
          step: "04",
          title: "Installation",
          description: "Professional installation of pneumatic unloading systems",
        },
        {
          step: "05",
          title: "Testing & Calibration",
          description: "Complete system testing and performance calibration",
        },
        {
          step: "06",
          title: "Commissioning",
          description: "System commissioning and operator training",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "97%", countries: "8+" },
      testimonials: [
        {
          name: "Captain James Wilson",
          company: "Port Authority",
          text: "Excellent pneumatic unloading system. Significantly improved our port efficiency and reduced dust emissions.",
          rating: 5,
        },
        {
          name: "Elena Popov",
          company: "Black Sea Terminals",
          text: "Professional installation with minimal disruption to port operations. Great results.",
          rating: 4,
        },
      ],
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
      features: [
        "CIMAT silos",
        "Cement industry",
        "High-capacity storage",
        "Dust control",
        "Aeration systems",
        "Structural integrity",
      ],
      price: "Custom Quote",
      gallery: ["/projects/img9.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "Cement Expertise",
          description: "Specialized expertise in cement industry storage solutions",
        },
        {
          title: "High Capacity",
          description: "Large-capacity silos for industrial cement operations",
        },
        {
          title: "Dust Control",
          description: "Advanced dust control systems for environmental compliance",
        },
        {
          title: "Robust Design",
          description: "Engineered for the demanding cement industry environment",
        },
      ],
      process: [
        {
          step: "01",
          title: "Industry Assessment",
          description: "Specialized assessment of cement industry requirements",
        },
        {
          step: "02",
          title: "CIMAT Design",
          description: "Custom CIMAT silo design for cement applications",
        },
        {
          step: "03",
          title: "Foundation Work",
          description: "Heavy-duty foundation work for cement silo loads",
        },
        {
          step: "04",
          title: "Silo Assembly",
          description: "Professional assembly of CIMAT silo components",
        },
        {
          step: "05",
          title: "System Integration",
          description: "Integration of dust control and aeration systems",
        },
        {
          step: "06",
          title: "Commissioning",
          description: "Complete system commissioning and training",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "98%", countries: "6+" },
      testimonials: [
        {
          name: "Ibrahim Al-Mansouri",
          company: "Gulf Cement",
          text: "Excellent CIMAT silo installation. The dust control system works perfectly for our cement operations.",
          rating: 5,
        },
        {
          name: "Thomas Mueller",
          company: "European Cement",
          text: "Professional team with deep expertise in cement industry requirements. Highly satisfied.",
          rating: 5,
        },
      ],
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
      features: [
        "Custom design",
        "Precision fabrication",
        "Catwalks & walkways",
        "Support towers",
        "Service platforms",
        "Industrial buildings",
      ],
      price: "Custom Quote",
      gallery: ["/projects/img10.jpeg", "/projects/img1.jpeg", "/projects/img2.jpg", "/projects/img3.jpeg"],
      benefits: [
        {
          title: "Custom Solutions",
          description: "Tailored steel structures for specific industrial needs",
        },
        {
          title: "Precision Engineering",
          description: "Engineered for strength, safety, and durability",
        },
        {
          title: "Quality Materials",
          description: "High-quality steel materials and fabrication processes",
        },
        {
          title: "Safety Compliance",
          description: "Full compliance with international safety standards",
        },
      ],
      process: [
        {
          step: "01",
          title: "Structural Design",
          description: "Custom structural design based on specific requirements",
        },
        {
          step: "02",
          title: "Engineering Analysis",
          description: "Complete structural engineering and load analysis",
        },
        {
          step: "03",
          title: "Fabrication",
          description: "Precision fabrication of steel components",
        },
        {
          step: "04",
          title: "Quality Control",
          description: "Rigorous quality control and testing procedures",
        },
        {
          step: "05",
          title: "Installation",
          description: "Professional on-site installation and assembly",
        },
        {
          step: "06",
          title: "Final Inspection",
          description: "Complete inspection and safety certification",
        },
      ],
      stats: { projects: "50+", experience: "15+", satisfaction: "99%", countries: "12+" },
      testimonials: [
        {
          name: "Michael Brown",
          company: "Industrial Solutions",
          text: "Outstanding steel structure fabrication and installation. Excellent quality and attention to detail.",
          rating: 5,
        },
        {
          name: "Fatima Al-Zahra",
          company: "Middle East Industries",
          text: "Professional team with excellent project management. Delivered exactly what we needed.",
          rating: 5,
        },
      ],
    },
  ]

  // Find the current service based on slug
  const service = allServices.find((s) => s.slug === params.slug) || allServices[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 mt-28">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 delay-200 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Premium Service
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{service.title}</h1>

                <p className="text-xl text-blue-200 mb-6">{service.subtitle}</p>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">{service.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.projects}</div>
                    <div className="text-blue-300 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.experience}</div>
                    <div className="text-blue-300 text-sm">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.satisfaction}</div>
                    <div className="text-blue-300 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.countries}</div>
                    <div className="text-blue-300 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
              <p className="text-xl text-gray-600">
                Comprehensive features that make our {service.title.toLowerCase()} service exceptional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose This Service?</h2>
              <p className="text-xl text-gray-600">Key benefits that set our solution apart from the competition</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
              <p className="text-xl text-gray-600">Step-by-step approach to delivering exceptional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 left-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <p className="text-xl text-gray-600">See our {service.title.toLowerCase()} projects in action</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Image src={image || "/placeholder.svg"} alt={`Gallery ${index + 1}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
              <p className="text-xl text-gray-600">
                What our clients say about our {service.title.toLowerCase()} service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">{`"`}{testimonial.text}{`"`}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contact our experts to discuss your specific requirements and get a customized solution
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* Related Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Related Services</h2>
              <p className="text-xl text-gray-600">Explore our other industrial solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <div
                    key={relatedService.id}
                    className="bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                          {relatedService.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedService.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedService.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-medium text-gray-600">{relatedService.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">{relatedService.projects}+ projects</span>
                      </div>
                      <Link href={`/services/${relatedService.slug}`}>
                        <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
