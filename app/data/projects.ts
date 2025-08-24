import type React from "react"
import { Database, Zap, Shield, Settings, Target, TrendingUp } from "lucide-react"

export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  location: string
  client: string
  duration: string
  year: string
  value: string
  category: string
  status: string
  rating: number
  completionDate: string
  projectManager: string
  teamSize: number
  features: string[]
  stats: {
    capacity: string
    silos: number
    timeline: string
    workers: number
    efficiency: string
    safety?: string
    quality?: string
    satisfaction?: string
  }
  benefits: {
    title: string
    description: string
    icon: React.ElementType
  }[]
  process: {
    step: number
    title: string
    description: string
    duration: string
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
    company: string
    avatar: string
  }
  technicalSpecs: Record<string, string>
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "grain-terminal-morocco",
    title: "Grain Terminal Complex - Morocco",
    subtitle: "Port Storage Facility",
    description:
      "Complete installation of a 50,000-ton grain storage terminal at Casablanca Port, including 8 flat-bottom silos, pneumatic unloading systems, and automated handling equipment.",
    fullDescription:
      "This comprehensive project involved the complete design, fabrication, and installation of a state-of-the-art grain storage terminal at the Port of Casablanca. The facility features 8 flat-bottom silos with a total capacity of 50,000 tons, equipped with advanced pneumatic unloading systems and fully automated handling equipment. The project was completed in 18 months and represents one of the most modern grain handling facilities in North Africa.",
    image: "/placeholder.svg?height=600&width=800&text=Grain+Terminal+Morocco",
    gallery: [
      "/placeholder.svg?height=500&width=800&text=Grain+Terminal+1",
      "/placeholder.svg?height=500&width=800&text=Grain+Terminal+2",
      "/placeholder.svg?height=500&width=800&text=Grain+Terminal+3",
      "/placeholder.svg?height=500&width=800&text=Grain+Terminal+4",
      "/placeholder.svg?height=500&width=800&text=Grain+Terminal+5",
      "/placeholder.svg?height=500&width=800&text=Grain+Terminal+6",
    ],
    location: "Casablanca, Morocco",
    client: "Morocco Grain Authority",
    duration: "18 months",
    year: "2023",
    value: "$12.5M",
    category: "port-facilities",
    status: "completed",
    rating: 4.9,
    completionDate: "March 2023",
    projectManager: "Ahmed Hassan",
    teamSize: 45,
    features: [
      "50,000-ton total storage capacity",
      "8 flat-bottom silos with advanced ventilation",
      "Pneumatic unloading systems for ships",
      "Automated grain handling and conveying",
      "Quality control laboratory",
      "Environmental dust control systems",
      "24/7 monitoring and control systems",
      "Rail and truck loading facilities",
    ],
    stats: {
      capacity: "50,000 tons",
      silos: 8,
      timeline: "18 months",
      workers: 45,
      efficiency: "95%",
      satisfaction: "4.9/5",
    },
    benefits: [
      {
        title: "Increased Efficiency",
        description: "300% improvement in grain handling capacity compared to previous facilities",
        icon: Target ,
      },
      {
        title: "Quality Assurance",
        description: "Advanced quality control systems ensure grain integrity throughout storage",
        icon: Shield ,
      },
      {
        title: "Automation",
        description: "Fully automated systems reduce manual labor and increase operational efficiency",
        icon: Zap ,
      },
      {
        title: "Economic Impact",
        description: "Significant boost to local economy and regional grain trade capabilities",
        icon: TrendingUp ,
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment & Design",
        description: "Comprehensive site analysis and custom design based on port requirements",
        duration: "2 months",
      },
      {
        step: 2,
        title: "Fabrication & Manufacturing",
        description: "Precision manufacturing of silos and equipment in our certified facilities",
        duration: "8 months",
      },
      {
        step: 3,
        title: "Installation & Assembly",
        description: "On-site installation with specialized equipment and expert technicians",
        duration: "6 months",
      },
      {
        step: 4,
        title: "Testing & Commissioning",
        description: "Comprehensive testing and system commissioning with client training",
        duration: "2 months",
      },
    ],
    testimonial: {
      quote:
        "GTIS delivered an exceptional grain terminal that exceeded our expectations. Their expertise in port facilities and attention to detail resulted in a world-class installation that has transformed our operations.",
      author: "Mohammed El Fassi",
      position: "Director of Operations",
      company: "Morocco Grain Authority",
      avatar: "/placeholder.svg?height=60&width=60&text=MF",
    },
    technicalSpecs: {
      "Storage Capacity": "50,000 tons",
      "Number of Silos": "8 units",
      "Silo Diameter": "15.2 meters",
      "Silo Height": "28 meters",
      "Unloading Rate": "500 tons/hour",
      "Conveyor Capacity": "300 tons/hour",
      "Power Requirements": "2.5 MW",
      "Control System": "Fully automated PLC",
    },
  },
  {
    id: 2,
    slug: "feed-mill-tunisia",
    title: "Modern Feed Mill - Tunisia",
    subtitle: "Complete Processing Plant",
    description:
      "Turnkey installation of a 200-ton/day feed mill including grain intake, cleaning, grinding, mixing, pelleting, and packaging systems with full automation.",
    fullDescription:
      "This state-of-the-art feed mill represents the latest in animal feed processing technology. The facility processes 200 tons per day of various feed ingredients, featuring advanced cleaning systems, precision grinding, automated mixing, pelleting equipment, and packaging lines. The entire operation is controlled by a sophisticated automation system that ensures consistent quality and optimal efficiency.",
    image: "/placeholder.svg?height=600&width=800&text=Feed+Mill+Tunisia",
    gallery: [
      "/placeholder.svg?height=500&width=800&text=Feed+Mill+1",
      "/placeholder.svg?height=500&width=800&text=Feed+Mill+2",
      "/placeholder.svg?height=500&width=800&text=Feed+Mill+3",
      "/placeholder.svg?height=500&width=800&text=Feed+Mill+4",
      "/placeholder.svg?height=500&width=800&text=Feed+Mill+5",
    ],
    location: "Tunis, Tunisia",
    client: "Tunisia Feed Industries",
    duration: "12 months",
    year: "2023",
    value: "$8.2M",
    category: "feed-mills",
    status: "completed",
    rating: 4.8,
    completionDate: "June 2023",
    projectManager: "Sarah Mansouri",
    teamSize: 32,
    features: [
      "200 tons/day processing capacity",
      "12 ingredient storage silos",
      "Advanced grain cleaning systems",
      "Precision grinding and mixing",
      "Pelleting and crumbling systems",
      "Automated packaging lines",
      "Quality control laboratory",
      "Dust collection and environmental controls",
    ],
    stats: {
      capacity: "200 tons/day",
      silos: 12,
      timeline: "12 months",
      workers: 32,
      efficiency: "92%",
      satisfaction: "4.8/5",
    },
    benefits: [
      {
        title: "High Efficiency",
        description: "Optimized production flow with minimal waste and maximum output quality",
        icon: Target ,
      },
      {
        title: "Food Safety",
        description: "HACCP compliant systems ensure the highest food safety standards",
        icon: Shield ,
      },
      {
        title: "Energy Efficient",
        description: "Advanced technology reduces energy consumption by 25% compared to conventional mills",
        icon: Zap ,
      },
      {
        title: "Scalable Design",
        description: "Modular design allows for future expansion and capacity increases",
        icon: TrendingUp ,
      },
    ],
    process: [
      {
        step: 1,
        title: "Process Design & Engineering",
        description: "Custom process design optimized for local feed formulations and requirements",
        duration: "2 months",
      },
      {
        step: 2,
        title: "Equipment Manufacturing",
        description: "Precision manufacturing of processing equipment and control systems",
        duration: "6 months",
      },
      {
        step: 3,
        title: "Installation & Integration",
        description: "On-site installation and system integration with comprehensive testing",
        duration: "3 months",
      },
      {
        step: 4,
        title: "Commissioning & Training",
        description: "System commissioning, operator training, and performance optimization",
        duration: "1 month",
      },
    ],
    testimonial: {
      quote:
        "The feed mill delivered by GTIS has revolutionized our production capabilities. The quality and efficiency of the equipment, combined with their professional service, has exceeded all our expectations.",
      author: "Karim Ben Ali",
      position: "Production Manager",
      company: "Tunisia Feed Industries",
      avatar: "/placeholder.svg?height=60&width=60&text=KA",
    },
    technicalSpecs: {
      "Processing Capacity": "200 tons/day",
      "Number of Silos": "12 units",
      "Grinding Capacity": "15 tons/hour",
      "Mixing Capacity": "10 tons/batch",
      "Pelleting Rate": "8 tons/hour",
      "Packaging Speed": "1,200 bags/hour",
      "Power Requirements": "1.8 MW",
      "Control System": "Advanced PLC with HMI",
    },
  },
  {
    id: 3,
    slug: "cement-plant-algeria",
    title: "Cement Plant Expansion - Algeria",
    subtitle: "Industrial Processing Facility",
    description:
      "Major expansion of cement production facility including new kiln installation, raw material handling systems, and cement storage silos with 2,000 tons/day capacity increase.",
    fullDescription:
      "This major industrial project involved the expansion of one of Algeria's largest cement production facilities. The project included the installation of a new rotary kiln, raw material preparation systems, and cement storage infrastructure. Our team managed the complex logistics of installing heavy industrial equipment while maintaining ongoing production operations. The expansion increased the plant's daily production capacity by 2,000 tons, significantly contributing to Algeria's construction industry growth.",
    image: "/placeholder.svg?height=600&width=800&text=Cement+Plant+Algeria",
    gallery: [
      "/placeholder.svg?height=500&width=800&text=Cement+Plant+Gallery+1",
      "/placeholder.svg?height=500&width=800&text=Cement+Plant+Gallery+2",
      "/placeholder.svg?height=500&width=800&text=Cement+Plant+Gallery+3",
      "/placeholder.svg?height=500&width=800&text=Cement+Plant+Gallery+4",
      "/placeholder.svg?height=500&width=800&text=Cement+Plant+Gallery+5",
      "/placeholder.svg?height=500&width=800&text=Cement+Plant+Gallery+6",
    ],
    location: "Oran, Algeria",
    client: "Algeria Cement Corporation",
    duration: "24 months",
    year: "2022",
    value: "$18.7M",
    category: "industrial-plants",
    status: "completed",
    rating: 4.7,
    completionDate: "September 2022",
    projectManager: "Hassan Benali",
    teamSize: 65,
    features: [
      "2,000 tons/day increase",
      "New rotary kiln",
      "Raw material systems",
      "Cement storage silos",
      "Dust collection systems",
      "Quality control lab",
      "Automated packaging",
      "Environmental controls",
    ],
    stats: {
      capacity: "2,000 tons/day",
      silos: 6,
      timeline: "24 months",
      workers: 65,
      efficiency: "40% increase",
      safety: "Zero incidents",
    },
    benefits: [
      {
        title: "Production Expansion",
        description: "Increased daily production capacity by 2,000 tons, meeting growing market demand",
        icon: Database ,
      },
      {
        title: "Energy Optimization",
        description: "New kiln technology reduced energy consumption per ton by 25%",
        icon: Zap ,
      },
      {
        title: "Environmental Compliance",
        description: "Advanced dust collection and emission control systems meet international standards",
        icon: Shield ,
      },
      {
        title: "Process Automation",
        description: "Automated systems improve quality consistency and reduce operational costs",
        icon: Settings ,
      },
    ],
    process: [
      {
        step: 1,
        title: "Project Planning & Design",
        description: "Detailed engineering design and project planning while maintaining existing operations",
        duration: "4 months",
      },
      {
        step: 2,
        title: "Infrastructure Development",
        description: "Construction of foundations and infrastructure for new equipment installation",
        duration: "8 months",
      },
      {
        step: 3,
        title: "Equipment Installation",
        description: "Installation of rotary kiln, raw material systems, and storage infrastructure",
        duration: "10 months",
      },
      {
        step: 4,
        title: "Systems Integration",
        description: "Integration of new systems with existing plant operations and control systems",
        duration: "2 months",
      },
    ],
    testimonial: {
      quote:
        "The expansion project was completed flawlessly. GTIS managed the complexity of working within an active plant exceptionally well.",
      author: "Karim Boumediene",
      position: "Plant Manager",
      company: "Algeria Cement Corporation",
      avatar: "/placeholder.svg?height=60&width=60&text=KB",
    },
    technicalSpecs: {
      "Production Increase": "2,000 tons/day",
      "Kiln Diameter": "4.2 meters",
      "Kiln Length": "65 meters",
      "Storage Capacity": "15,000 tons",
      "Power Requirements": "8.5 MW",
      "Dust Collection": "99.5% efficiency",
      "Automation Level": "85%",
      "Environmental Standard": "EU emissions",
    },
  },
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category)
}

export const getAllProjects = (): Project[] => {
  return projects
}

export const getRelatedProjects = (currentSlug: string, limit = 3): Project[] => {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, limit)
}
