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
    efficiency?: string
    safety?: string
    quality?: string
    satisfaction?: string
    durability?: string
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
  // 🔥 SEO fields
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    ogImage: string
  }
}

export const projects: Project[] = [
    // 01 – Libya, Benghazi
  {
    id: 1,
    slug: "feed-production-benghazi-libya",
    title: "Feed Production Facility – Al Noor Al Tayeb",
    subtitle: "Turnkey feed production plant with 20 T/H capacity",
    description:
      "GTIS delivered a complete feed production facility in Benghazi, Libya, including construction, roofing, and installation of a 20 T/H production line.",
    fullDescription:
      "GTIS delivered the full construction and installation of a feed production facility in Benghazi, Libya. The project included the assembly of the main building, roofing, and the setup of a complete production line with a capacity of 20 tons per hour. By combining mechanical, electrical, and structural expertise, GTIS ensured a high-performance plant, delivered on time and in full compliance with international safety standards.",
    image: "/projects/libya-benghazi-feed/main.png",
    gallery: [
      "/projects/libya-benghazi-feed/1.png",
      "/projects/libya-benghazi-feed/2.png",
      "/projects/libya-benghazi-feed/3.png",
      "/projects/libya-benghazi-feed/4.png",
      "/projects/libya-benghazi-feed/5.png",
    ],
    location: "Benghazi, Libya",
    client: "Al Noor Al Tayeb",
    duration: "12 months",
    year: "2023",
    value: "Confidential",
    category: "Animal Feed Production",
    status: "Completed",
    rating: 5,
    completionDate: "2023-11-15",
    projectManager: "John Doe",
    teamSize: 25,
    features: [
      "Metallic structure assembly: full building frame and roof cladding",
      "Mechanical installation: integration of feed processing equipment",
      "Electrical works: cabling, power distribution, and automation links",
      "Commissioning: testing, supervision, and operator handover",
      "Project Supervision: end-to-end oversight",
    ],
    stats: {
      capacity: "20 T/H",
      silos: 0,
      timeline: "12 months",
      workers: 25,
      efficiency: "High-performance operations",
      safety: "Compliant with international standards",
      quality: "Delivered on time",
      satisfaction: "Client fully satisfied",
    },
    benefits: [
      {
        title: "Boosted Food Security",
        description: "Reliable facility designed to enhance regional animal feed production.",
        icon: Database,
      },
      {
        title: "Turnkey Delivery",
        description: "From design to commissioning with complete project supervision.",
        icon: Zap,
      },
      {
        title: "International Standards",
        description: "Safety and quality ensured throughout construction and commissioning.",
        icon: Shield,
      },
    ],
    process: [
      {
        step: 1,
        title: "Planning & Design",
        description: "Detailed planning aligned with safety and client requirements.",
        duration: "2 months",
      },
      {
        step: 2,
        title: "Construction & Assembly",
        description: "Structural, mechanical, and electrical works executed on-site.",
        duration: "7 months",
      },
      {
        step: 3,
        title: "Commissioning",
        description: "Testing, supervision, and operator handover.",
        duration: "3 months",
      },
    ],
    testimonial: {
      quote:
        "GTIS delivered a high-performance plant on time, ensuring full compliance with safety and operational standards.",
      author: "Mohamed Ali",
      position: "General Manager",
      company: "Al Noor Al Tayeb",
      avatar: "/images/testimonials/mohamed-ali.jpg",
    },
    technicalSpecs: {
      "Production Capacity": "20 tons/hour",
      "Sector": "Animal Feed Production",
      "Location": "Benghazi, Libya",
      "Client": "Al Noor Al Tayeb",
      "Services": "Turnkey assembly & commissioning",
    },
    seo: {
      metaTitle: "Feed Production Facility – Benghazi, Libya",
      metaDescription:
        "GTIS delivered a 20 T/H feed production facility in Benghazi, Libya, including structural, mechanical, and electrical works with full commissioning.",
      keywords: ["feed production Libya", "animal feed plant Benghazi", "GTIS projects"],
      ogImage: "/images/projects/libya-benghazi-feed-og.jpg",
    },
  },

  // 02 – Morocco, Had Soualem
  {
    id: 2,
    slug: "production-facility-had-soualem-morocco",
    title: "Agro-Industrial Production Facility – Had Soualem",
    subtitle: "40 T/H flaking & ruminant feed line",
    description:
      "GTIS successfully delivered a modern agro-industrial facility in Had Soualem, Morocco, with full mechanical assembly, electrical automation, and a 40 T/H metallic line.",
    fullDescription:
      "GTIS successfully delivered a modern agro-industrial production facility in Had Soualem. The project involved the full mechanical assembly of production units, integration of industrial machines, and complete electrical cabling with automation. A 40 T/H metallic line dedicated to flaking and ruminant feed was installed, strengthening the plant’s productivity and ensuring compliance with international standards.",
    image: "/projects/production-facility-had-soualem-morocco/main.png",
    gallery: [],
    location: "Had Soualem, Morocco",
    client: "Confidential",
    duration: "14 months",
    year: "2022",
    value: "Confidential",
    category: "Agro-Industry & Animal Feed",
    status: "Completed",
    rating: 5,
    completionDate: "2022-09-30",
    projectManager: "Fatima Zahra",
    teamSize: 30,
    features: [
      "Mechanical assembly of production units",
      "Electrical installation and full automation setup",
      "Integration of 40 T/H metallic line for flaking & ruminant feed",
      "Testing, commissioning, and compliance verification",
    ],
    stats: {
      capacity: "40 T/H",
      silos: 0,
      timeline: "14 months",
      workers: 30,
      efficiency: "Optimized industrial operations",
      safety: "Built under international standards",
    },
    benefits: [
      {
        title: "Enhanced Animal Nutrition",
        description: "Boosts feed production capacity with a modern 40 T/H line.",
        icon: TrendingUp,
      },
      {
        title: "Automation & Efficiency",
        description: "Full electrical cabling and automation ensure reliable operation.",
        icon: Settings,
      },
    ],
    process: [
      {
        step: 1,
        title: "Unit Assembly",
        description: "Mechanical assembly of all production units.",
        duration: "6 months",
      },
      {
        step: 2,
        title: "Automation Setup",
        description: "Electrical installation and full automation integration.",
        duration: "5 months",
      },
      {
        step: 3,
        title: "Commissioning",
        description: "Testing and compliance verification before handover.",
        duration: "3 months",
      },
    ],
    testimonial: {
      quote:
        "The Had Soualem facility is now a benchmark in Morocco for animal nutrition production efficiency.",
      author: "Youssef El Idrissi",
      position: "Operations Director",
      company: "Confidential",
      avatar: "/images/testimonials/youssef.jpg",
    },
    technicalSpecs: {
      "Production Capacity": "40 tons/hour",
      "Sector": "Agro-Industry & Animal Feed",
      "Location": "Had Soualem, Morocco",
      "Services": "Mechanical, electrical, automation setup",
    },
    seo: {
      metaTitle: "Had Soualem Agro-Industrial Facility – Morocco",
      metaDescription:
        "GTIS built a 40 T/H agro-industrial feed facility in Had Soualem, Morocco, with mechanical assembly, electrical cabling, automation, and commissioning.",
      keywords: ["Morocco agro-industry", "animal feed Had Soualem", "GTIS projects"],
      ogImage: "/images/projects/morocco-had-soualem-og.jpg",
    },
  },

  // 03 – Libya, Misurata Port
  {
    id: 3,
    slug: "pneumatic-unloaders-misurata-port-libya",
    title: "Pneumatic Ship Unloaders – Misurata Port",
    subtitle: "600 T/H bulk unloading capacity",
    description:
      "GTIS assembled, installed, and commissioned two VIGAN pneumatic ship unloaders at Misurata Port, Libya, each with a capacity of 300 T/H.",
    fullDescription:
      "At Misurata Port, GTIS carried out the assembly, installation, and commissioning of two VIGAN pneumatic ship unloaders with a total capacity of 600 T/H. The project ensured seamless integration with port infrastructure, improving the efficiency of bulk material handling operations.",
    image: "/projects/pneumatic-unloaders-misurata-port-libya/main.png",
    gallery: [],
    location: "Misurata, Libya",
    client: "Port Authority of Misurata",
    duration: "10 months",
    year: "2021",
    value: "Confidential",
    category: "Port Infrastructure",
    status: "Completed",
    rating: 5,
    completionDate: "2021-06-20",
    projectManager: "Ahmed Saleh",
    teamSize: 40,
    features: [
      "Reception and unloading of heavy equipment",
      "Assembly of steel structures and mechanical components",
      "Installation of pneumatic circuits and electrical systems",
      "Comprehensive I/O testing and commissioning",
    ],
    stats: {
      capacity: "600 T/H (2x 300 T/H)",
      silos: 0,
      timeline: "10 months",
      workers: 40,
      efficiency: "Faster and safer unloading operations",
      safety: "International maritime safety compliance",
    },
    benefits: [
      {
        title: "Boosted Port Efficiency",
        description: "Faster and more reliable unloading to support growing trade.",
        icon: TrendingUp,
      },
      {
        title: "Seamless Integration",
        description: "Designed to fit within Misurata Port’s existing infrastructure.",
        icon: Target,
      },
    ],
    process: [
      {
        step: 1,
        title: "Equipment Reception",
        description: "Handling and unloading of heavy components on-site.",
        duration: "2 months",
      },
      {
        step: 2,
        title: "Assembly & Installation",
        description: "Assembly of steel structures and pneumatic systems.",
        duration: "6 months",
      },
      {
        step: 3,
        title: "Testing & Commissioning",
        description: "Comprehensive I/O testing and operational handover.",
        duration: "2 months",
      },
    ],
    testimonial: {
      quote:
        "The new unloaders have drastically improved the port’s cargo handling capacity and efficiency.",
      author: "Omar El Mansouri",
      position: "Port Director",
      company: "Misurata Port Authority",
      avatar: "/images/testimonials/omar.jpg",
    },
    technicalSpecs: {
      "Equipment": "2 pneumatic ship unloaders (VIGAN)",
      "Capacity": "300 T/H each, 600 T/H total",
      "Location": "Misurata, Libya",
      "Services": "Assembly, installation, commissioning",
    },
    seo: {
      metaTitle: "Pneumatic Ship Unloaders – Misurata Port, Libya",
      metaDescription:
        "GTIS delivered and commissioned two pneumatic ship unloaders at Misurata Port, Libya, with a total capacity of 600 T/H for bulk material handling.",
      keywords: ["Misurata port unloaders", "pneumatic ship unloader Libya", "GTIS projects"],
      ogImage: "/images/projects/libya-misurata-port-og.jpg",
    },
  },
  // 04 – Yemen, Port Salif Grain Terminal
{
  id: 4,
  slug: "grain-terminal-port-salif-yemen",
  title: "Port Salif Grain Storage Terminal",
  subtitle: "280,000-ton wheat storage facility",
  description:
    "GTIS installed 10 flat-bottom silos with a total capacity of 280,000 tons at Port Salif, Yemen, ensuring food security with advanced automation systems.",
  fullDescription:
    "GTIS delivered a landmark project at Port Salif, ensuring food security in the region with the installation of ten grain storage silos. With a total capacity of 280,000 tons, the facility integrates advanced material handling systems and industrial automation for efficient wheat storage and processing.",
  image: "/projects/grain-terminal-port-salif-yemen/main.png",
  gallery: [],
  location: "Port Salif, Yemen",
  client: "Government of Yemen",
  duration: "18 months",
  year: "2020",
  value: "Confidential",
  category: "Grain Storage & Food Security",
  status: "Completed",
  rating: 5,
  completionDate: "2020-12-01",
  projectManager: "Ali Hassan",
  teamSize: 50,
  features: [
    "Installation of 10 flat-bottom storage silos",
    "Connection to material handling systems",
    "Integration of control and automation systems",
    "Testing and commissioning for operational excellence",
  ],
  stats: {
    capacity: "280,000 tons",
    silos: 10,
    timeline: "18 months",
    workers: 50,
    efficiency: "Long-term grain storage and processing",
    safety: "International food handling compliance",
    satisfaction: "Supports regional food security",
  },
  benefits: [
    {
      title: "Strategic Food Hub",
      description: "Ensures long-term food supply stability for the region.",
      icon: Database,
    },
    {
      title: "High-Capacity Storage",
      description: "280,000 tons of wheat storage capacity with automation.",
      icon: TrendingUp,
    },
  ],
  process: [
    {
      step: 1,
      title: "Civil & Structural Works",
      description: "Preparation and foundation for large-scale silos.",
      duration: "6 months",
    },
    {
      step: 2,
      title: "Mechanical & Electrical Installation",
      description: "Integration of silos, conveyors, and automation systems.",
      duration: "9 months",
    },
    {
      step: 3,
      title: "Commissioning & Handover",
      description: "Testing and operational start-up with local operator training.",
      duration: "3 months",
    },
  ],
  testimonial: {
    quote: "This project has transformed Yemen’s food supply chain resilience.",
    author: "Dr. Saleh Al Hakimi",
    position: "Minister of Agriculture",
    company: "Government of Yemen",
    avatar: "/images/testimonials/saleh.jpg",
  },
  technicalSpecs: {
    "Silos": "9 x 30,000 T + 1 x 10,000 T",
    "Total Capacity": "280,000 tons",
    "Product": "Wheat",
    "Location": "Port Salif, Yemen",
    "Services": "Silo installation, automation, commissioning",
  },
  seo: {
    metaTitle: "Port Salif Grain Storage Terminal – Yemen",
    metaDescription:
      "GTIS installed 10 grain silos with a total 280,000-ton capacity at Port Salif, Yemen, ensuring food security with automation and advanced handling systems.",
    keywords: ["Yemen grain terminal", "wheat silos Yemen", "GTIS food security projects"],
    ogImage: "/images/projects/yemen-port-salif-og.jpg",
  },
},

// 05 – Morocco, Had Soualem Soybean Line
{
  id: 5,
  slug: "soybean-extrusion-had-soualem-morocco",
  title: "Soybean Extrusion Line – Had Soualem",
  subtitle: "6 T/H extrusion line with 2,000-ton silo",
  description:
    "GTIS implemented a soybean extrusion line in Had Soualem, Morocco, in partnership with ALTINBILEK and ANDRITZ, with a capacity of 6 T/H and 2,000-ton storage.",
  fullDescription:
    "GTIS implemented a state-of-the-art soybean extrusion line in partnership with ALTINBILEK and ANDRITZ. With a capacity of 6 T/H and a storage silo of 2,000 tons, this project strengthened the region’s agro-industrial infrastructure, delivering a reliable and modern solution for soybean processing.",
  image: "/projects/soybean-extrusion-had-soualem-morocco/main.png",
  gallery: [],
  location: "Had Soualem, Morocco",
  client: "Confidential",
  duration: "10 months",
  year: "2021",
  value: "Confidential",
  category: "Soybean Processing",
  status: "Completed",
  rating: 5,
  completionDate: "2021-07-10",
  projectManager: "Sarah Benali",
  teamSize: 20,
  features: [
    "Collaboration with leading suppliers ALTINBILEK & ANDRITZ",
    "Mechanical and electrical installation of extrusion line",
    "Integration of 2,000-ton storage silo",
    "Commissioning and technical supervision for reliable operations",
  ],
  stats: {
    capacity: "6 T/H",
    silos: 1,
    timeline: "10 months",
    workers: 20,
    efficiency: "Optimized soybean processing",
    quality: "International-grade extrusion line",
  },
  benefits: [
    {
      title: "Modern Soybean Processing",
      description: "Delivers efficient extrusion with global technology partners.",
      icon: Settings,
    },
    {
      title: "Added Storage Capacity",
      description: "2,000-ton silo integrated for reliable supply management.",
      icon: Database,
    },
  ],
  process: [
    {
      step: 1,
      title: "Design & Supplier Collaboration",
      description: "Partnership with ALTINBILEK and ANDRITZ for extrusion setup.",
      duration: "3 months",
    },
    {
      step: 2,
      title: "Mechanical & Electrical Works",
      description: "Installation of extrusion line and silo integration.",
      duration: "5 months",
    },
    {
      step: 3,
      title: "Testing & Commissioning",
      description: "Supervision, commissioning, and operator training.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote: "This extrusion facility sets a new benchmark in soybean processing for Morocco.",
    author: "Karim Lahlou",
    position: "Project Director",
    company: "Confidential",
    avatar: "/images/testimonials/karim.jpg",
  },
  technicalSpecs: {
    "Capacity": "6 T/H",
    "Storage": "2,000 tons",
    "Sector": "Soybean Processing",
    "Location": "Had Soualem, Morocco",
    "Suppliers": "ALTINBILEK, ANDRITZ",
  },
  seo: {
    metaTitle: "Soybean Extrusion Facility – Had Soualem, Morocco",
    metaDescription:
      "GTIS delivered a 6 T/H soybean extrusion facility in Had Soualem, Morocco, with a 2,000-ton storage silo and full commissioning.",
    keywords: ["soybean extrusion Morocco", "Had Soualem agro-industry", "GTIS projects"],
    ogImage: "/images/projects/morocco-soybean-line-og.jpg",
  },
},

// 06 – Morocco, Casablanca Grain Terminal
{
  id: 6,
  slug: "grain-terminal-casablanca-morocco",
  title: "Casablanca Grain Terminal – SOSIPO",
  subtitle: "600 T/H pneumatic ship unloader",
  description:
    "GTIS installed a 600 T/H pneumatic ship unloader in Casablanca, Morocco, integrated with closed pipelines for eco-friendly operations.",
  fullDescription:
    "GTIS delivered the installation of a 600 T/H pneumatic ship unloader, designed to handle bulk materials such as grain, cement, and coal. This system was integrated with closed pipelines to minimize spillage and dust, ensuring safe, efficient, and eco-friendly port operations.",
  image: "/projects/grain-terminal-casablanca-morocco/main.png",
  gallery: [],
  location: "Casablanca, Morocco",
  client: "SOSIPO",
  duration: "11 months",
  year: "2022",
  value: "Confidential",
  category: "Port Infrastructure",
  status: "Completed",
  rating: 5,
  completionDate: "2022-08-05",
  projectManager: "Othman El Fassi",
  teamSize: 35,
  features: [
    "Site assessment and equipment specification",
    "Assembly and installation of pneumatic unloading system",
    "Integration with closed pipelines and dust control units",
    "Commissioning, testing, and operator training",
  ],
  stats: {
    capacity: "600 T/H",
    silos: 0,
    timeline: "11 months",
    workers: 35,
    efficiency: "Eco-friendly bulk handling",
    safety: "Dust-minimized and spillage-free",
  },
  benefits: [
    {
      title: "Eco-Friendly Operations",
      description: "Closed pipeline integration ensures minimal dust and spillage.",
      icon: Shield,
    },
    {
      title: "Boosted Port Capacity",
      description: "Handles 600 T/H bulk material efficiently.",
      icon: TrendingUp,
    },
  ],
  process: [
    {
      step: 1,
      title: "Preparation & Assessment",
      description: "Detailed site study and equipment specification.",
      duration: "3 months",
    },
    {
      step: 2,
      title: "Assembly & Installation",
      description: "Full setup of pneumatic unloading system and pipelines.",
      duration: "6 months",
    },
    {
      step: 3,
      title: "Commissioning",
      description: "Testing and operator training for smooth operations.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote:
      "The Casablanca grain terminal project has transformed our unloading efficiency while ensuring environmental compliance.",
    author: "Hassan Bouzid",
    position: "Technical Director",
    company: "SOSIPO",
    avatar: "/images/testimonials/hassan.jpg",
  },
  technicalSpecs: {
    "Capacity": "600 T/H",
    "Products Handled": "Grain, cement, coal",
    "Location": "Casablanca, Morocco",
    "Services": "Pneumatic unloader installation, pipeline integration",
  },
  seo: {
    metaTitle: "Casablanca Grain Terminal – Morocco",
    metaDescription:
      "GTIS delivered a 600 T/H pneumatic ship unloader at Casablanca grain terminal, ensuring eco-friendly bulk handling operations.",
    keywords: ["Casablanca grain terminal", "pneumatic unloader Morocco", "GTIS projects"],
    ogImage: "/images/projects/morocco-casablanca-grain-og.jpg",
  },
},
// 07 – Morocco, Berrechid Warehouse
{
  id: 7,
  slug: "warehouse-berrechid-morocco",
  title: "Berrechid Industrial Warehouse",
  subtitle: "Metal structure warehouse for storage",
  description:
    "GTIS delivered a turnkey warehouse facility in Berrechid, Morocco, with a steel structure, roofing, and insulation for industrial storage.",
  fullDescription:
    "GTIS executed the complete construction of an industrial warehouse in Berrechid, Morocco. The project included design, fabrication, and erection of the steel structure, roofing, insulation, and cladding. This facility enhances local industrial logistics by offering a reliable and secure storage space.",
  image: "/projects/warehouse-berrechid-morocco/main.png",
  gallery: [],
  location: "Berrechid, Morocco",
  client: "Confidential",
  duration: "8 months",
  year: "2021",
  value: "Confidential",
  category: "Industrial Warehousing",
  status: "Completed",
  rating: 5,
  completionDate: "2021-09-15",
  projectManager: "Youssef El Amrani",
  teamSize: 25,
  features: [
    "Design and engineering of steel structure",
    "Fabrication and on-site erection",
    "Roofing and insulation installation",
    "Cladding and finishing works",
  ],
  stats: {
    capacity: "5,000 m²",
    silos: 0,
    timeline: "8 months",
    workers: 25,
    efficiency: "Optimized industrial storage",
    durability: "Weather-resistant insulated structure",
  },
  benefits: [
    {
      title: "Durable Construction",
      description: "Steel structure ensures long-lasting performance.",
      icon: Shield,
    },
    {
      title: "Efficient Storage",
      description: "Provides modern and optimized warehouse capacity.",
      icon: Database,
    },
  ],
  process: [
    {
      step: 1,
      title: "Design & Engineering",
      description: "Structural calculations, 3D modeling, and client approval.",
      duration: "2 months",
    },
    {
      step: 2,
      title: "Fabrication & Erection",
      description: "Steel structure manufacturing and on-site assembly.",
      duration: "4 months",
    },
    {
      step: 3,
      title: "Finishing Works",
      description: "Roofing, insulation, and cladding installation.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote: "The Berrechid warehouse has given us reliable and efficient storage capacity.",
    author: "Mohamed Idrissi",
    position: "Operations Manager",
    company: "Confidential",
    avatar: "/images/testimonials/mohamed.jpg",
  },
  technicalSpecs: {
    "Surface Area": "5,000 m²",
    "Structure": "Steel with insulated roofing",
    "Location": "Berrechid, Morocco",
    "Services": "Design, fabrication, erection",
  },
  seo: {
    metaTitle: "Berrechid Industrial Warehouse – Morocco",
    metaDescription:
      "GTIS built an industrial warehouse in Berrechid, Morocco, featuring a steel structure, insulation, and roofing for secure storage.",
    keywords: ["Berrechid warehouse", "industrial storage Morocco", "GTIS steel structure"],
    ogImage: "/images/projects/morocco-berrechid-warehouse-og.jpg",
  },
},

// 08 – Morocco, Laasilat Pasta Factory
{
  id: 8,
  slug: "pasta-factory-laasilat-morocco",
  title: "Laasilat Pasta Factory Expansion",
  subtitle: "Storage and processing facility for pasta production",
  description:
    "GTIS expanded Laasilat’s pasta factory in Morocco with grain storage, handling equipment, and structural works.",
  fullDescription:
    "GTIS contributed to the expansion of Laasilat’s pasta factory by installing silos, conveyors, and steel structures for raw material storage and handling. This facility integrates modern equipment to support efficient pasta production and supply chain continuity.",
  image: "/projects/pasta-factory-laasilat-morocco/main.png",
  gallery: [],
  location: "Morocco",
  client: "Laasilat",
  duration: "9 months",
  year: "2021",
  value: "Confidential",
  category: "Agro-Industry",
  status: "Completed",
  rating: 5,
  completionDate: "2021-11-30",
  projectManager: "Fatima Zahra",
  teamSize: 30,
  features: [
    "Installation of grain storage silos",
    "Integration of conveying and handling systems",
    "Construction of supporting steel structures",
    "Commissioning and operator training",
  ],
  stats: {
    capacity: "3,000 tons",
    silos: 4,
    timeline: "9 months",
    workers: 30,
    efficiency: "Boosts pasta production supply chain",
    quality: "International-grade handling equipment",
  },
  benefits: [
    {
      title: "Increased Production Capacity",
      description: "Supports Laasilat’s growing pasta production needs.",
      icon: TrendingUp,
    },
    {
      title: "Reliable Raw Material Storage",
      description: "Integrated silos and conveyors for continuous operation.",
      icon: Database,
    },
  ],
  process: [
    {
      step: 1,
      title: "Engineering & Supply",
      description: "Design and sourcing of silos and conveyors.",
      duration: "3 months",
    },
    {
      step: 2,
      title: "Construction & Installation",
      description: "Assembly of silos, conveyors, and supporting structures.",
      duration: "5 months",
    },
    {
      step: 3,
      title: "Commissioning",
      description: "Testing, adjustments, and staff training.",
      duration: "1 month",
    },
  ],
  testimonial: {
    quote: "This project improved our supply chain and expanded our production efficiency.",
    author: "Rachid Berrada",
    position: "General Manager",
    company: "Laasilat",
    avatar: "/images/testimonials/rachid.jpg",
  },
  technicalSpecs: {
    "Capacity": "3,000 tons",
    "Silos": "4 units",
    "Sector": "Pasta production",
    "Location": "Morocco",
    "Services": "Silos, conveyors, structural works",
  },
  seo: {
    metaTitle: "Laasilat Pasta Factory Expansion – Morocco",
    metaDescription:
      "GTIS expanded Laasilat’s pasta factory with storage silos, handling equipment, and supporting steel structures.",
    keywords: ["Laasilat pasta Morocco", "grain storage pasta factory", "GTIS agro-industry"],
    ogImage: "/images/projects/morocco-laasilat-pasta-og.jpg",
  },
},

// 09 – Burkina Faso, Steel Structure
{
  id: 9,
  slug: "steel-structure-burkina-faso",
  title: "Industrial Steel Structure – Burkina Faso",
  subtitle: "Turnkey steel construction project",
  description:
    "GTIS delivered a complete steel structure project in Burkina Faso, including design, fabrication, and erection.",
  fullDescription:
    "GTIS completed a steel structure project in Burkina Faso, covering design, engineering, fabrication, and erection. The facility was built with international standards, providing durable and functional infrastructure for industrial operations.",
  image: "/projects/steel-structure-burkina-faso/main.png",
  gallery: [],
  location: "Burkina Faso",
  client: "Confidential",
  duration: "7 months",
  year: "2020",
  value: "Confidential",
  category: "Steel Structures",
  status: "Completed",
  rating: 5,
  completionDate: "2020-06-20",
  projectManager: "Issa Traoré",
  teamSize: 22,
  features: [
    "Design and structural engineering",
    "Fabrication of steel components",
    "On-site erection and assembly",
    "Quality assurance and handover",
  ],
  stats: {
    capacity: "N/A",
    silos: 0,
    timeline: "7 months",
    workers: 22,
    durability: "Long-lasting steel infrastructure",
    safety: "Meets international building codes",
  },
  benefits: [
    {
      title: "Durable Infrastructure",
      description: "Built with robust steel structures for industrial use.",
      icon: Shield,
    },
    {
      title: "Turnkey Delivery",
      description: "Design to commissioning handled by GTIS experts.",
      icon: Settings,
    },
  ],
  process: [
    {
      step: 1,
      title: "Design & Planning",
      description: "Engineering studies and 3D modeling.",
      duration: "2 months",
    },
    {
      step: 2,
      title: "Fabrication",
      description: "Steel manufacturing and quality checks.",
      duration: "3 months",
    },
    {
      step: 3,
      title: "Erection & Handover",
      description: "On-site assembly, testing, and delivery.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote: "A reliable partner for industrial projects in West Africa.",
    author: "Jean-Baptiste Ouedraogo",
    position: "Project Manager",
    company: "Confidential",
    avatar: "/images/testimonials/jean.jpg",
  },
  technicalSpecs: {
    "Structure": "Steel frame construction",
    "Location": "Burkina Faso",
    "Services": "Design, fabrication, erection",
  },
  seo: {
    metaTitle: "Steel Structure Project – Burkina Faso",
    metaDescription:
      "GTIS executed a complete steel structure project in Burkina Faso, from design to erection, ensuring durability and reliability.",
    keywords: ["steel construction Burkina Faso", "GTIS Africa projects", "industrial steel structure"],
    ogImage: "/images/projects/burkina-faso-steel-og.jpg",
  },
},
// 10 – Congo, Grand Moulin du Kouilou
{
  id: 10,
  slug: "grand-moulin-kouilou-congo",
  title: "Grand Moulin du Kouilou",
  subtitle: "Flour Milling & Grain Storage",
  description:
    "GTIS delivered a turnkey flour milling project in Congo, with a capacity of 350 T/day and 20,000 tons of storage.",
  fullDescription:
    "GTIS successfully executed the Grand Moulin du Kouilou project in Congo, consisting of the full construction and installation of a flour milling line with a daily capacity of 350 tons. The project integrated 4 flat-bottom silos (5,000 T each) for a total of 20,000 tons of storage, alongside an automated bran granulation system. This facility strengthens regional food supply and ensures efficient wheat processing.",
  image: "/projects/grand-moulin-kouilou-congo/main.png",
  gallery: [],
  location: "Congo",
  client: "Grand Moulin du Kouilou",
  duration: "14 months",
  year: "2021",
  value: "Confidential",
  category: "Agro-Industry",
  status: "Completed",
  rating: 5,
  completionDate: "2021-12-15",
  projectManager: "Serge Mbemba",
  teamSize: 45,
  features: [
    "Construction and installation of flour milling line",
    "Integration of 4 flat-bottom silos (5,000 T each)",
    "Automated bran granulation system",
    "Mechanical and electrical installation",
    "Commissioning and operator training",
  ],
  stats: {
    capacity: "350 T/day milling",
    silos: 4,
    timeline: "14 months",
    workers: 45,
    efficiency: "High-performance wheat processing",
    safety: "Complies with international food safety standards",
  },
  benefits: [
    {
      title: "Food Security",
      description: "Large-scale milling capacity strengthens regional food resilience.",
      icon: Shield,
    },
    {
      title: "Integrated Storage",
      description: "20,000 tons of storage ensures stable supply.",
      icon: Database,
    },
  ],
  process: [
    {
      step: 1,
      title: "Construction",
      description: "Civil works, structural assembly, and site preparation.",
      duration: "6 months",
    },
    {
      step: 2,
      title: "Installation",
      description: "Milling line setup, electrical works, and automation.",
      duration: "6 months",
    },
    {
      step: 3,
      title: "Commissioning",
      description: "Testing, adjustments, and operator training.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote: "GTIS delivered a reliable and efficient milling solution for Congo.",
    author: "Jean-Paul Kouilou",
    position: "Plant Director",
    company: "Grand Moulin du Kouilou",
    avatar: "/images/testimonials/kouilou.jpg",
  },
  technicalSpecs: {
    "Milling Capacity": "350 T/day",
    "Silos": "4 x 5,000 tons",
    "Storage": "20,000 tons",
    "Sector": "Flour Milling & Storage",
  },
  seo: {
    metaTitle: "Grand Moulin du Kouilou – Flour Milling & Storage",
    metaDescription:
      "GTIS delivered a turnkey flour milling line in Congo with 350 T/day capacity and 20,000 tons of storage.",
    keywords: ["Grand Moulin Congo", "GTIS flour milling", "grain storage Africa"],
    ogImage: "/images/projects/congo-grand-moulin-og.jpg",
  },
},

// 11 – Congo, Grand Moulin du Kouilou (Phase II)
{
  id: 11,
  slug: "grand-moulin-kouilou-phase2",
  title: "Grand Moulin du Kouilou – Phase II",
  subtitle: "Additional Silos & Automation",
  description:
    "Phase II expansion of the Grand Moulin du Kouilou with advanced bran systems and silo integration.",
  fullDescription:
    "Following the success of Phase I, GTIS continued the development of Grand Moulin du Kouilou in Congo. The expansion included further silo integration, automated bran handling, and commissioning services. This project consolidated the milling plant’s long-term sustainability and boosted overall efficiency.",
  image: "/projects/grand-moulin-kouilou-phase2/main.png",
  gallery: [],
  location: "Congo",
  client: "Grand Moulin du Kouilou",
  duration: "10 months",
  year: "2022",
  value: "Confidential",
  category: "Agro-Industry",
  status: "Completed",
  rating: 5,
  completionDate: "2022-10-01",
  projectManager: "Serge Mbemba",
  teamSize: 38,
  features: [
    "Integration of new silo systems",
    "Automated bran granulation expansion",
    "Electrical and mechanical upgrades",
    "Testing and commissioning",
  ],
  stats: {
    capacity: "350 T/day (enhanced)",
    silos: 4,
    timeline: "10 months",
    workers: 38,
    efficiency: "Optimized milling and bran recovery",
    satisfaction: "Improved plant performance",
  },
  benefits: [
    {
      title: "Enhanced Storage",
      description: "Expanded silos improved supply chain resilience.",
      icon: Database,
    },
    {
      title: "Higher Productivity",
      description: "Automation improved milling efficiency.",
      icon: TrendingUp,
    },
  ],
  process: [
    {
      step: 1,
      title: "Engineering & Supply",
      description: "Procurement of advanced silo systems and automation units.",
      duration: "3 months",
    },
    {
      step: 2,
      title: "Installation",
      description: "Assembly of silos and electrical integration.",
      duration: "5 months",
    },
    {
      step: 3,
      title: "Commissioning",
      description: "Performance testing and staff training.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote: "Phase II expanded our milling plant’s capacity and reliability.",
    author: "Jean-Paul Kouilou",
    position: "Plant Director",
    company: "Grand Moulin du Kouilou",
    avatar: "/images/testimonials/kouilou2.jpg",
  },
  technicalSpecs: {
    "Capacity": "350 T/day",
    "Silos": "Expanded integration",
    "Sector": "Flour Milling",
    "Automation": "Bran granulation",
  },
  seo: {
    metaTitle: "Grand Moulin du Kouilou – Phase II",
    metaDescription:
      "GTIS expanded the Grand Moulin du Kouilou in Congo with silo systems and advanced bran automation.",
    keywords: ["Grand Moulin Phase II", "GTIS Congo projects", "grain silos Africa"],
    ogImage: "/images/projects/congo-grand-moulin-phase2-og.jpg",
  },
},

// 12 – Libya, Tripoli Milling Project
{
  id: 12,
  slug: "milling-plant-tripoli-libya",
  title: "Tripoli Milling Facility",
  subtitle: "Flour Milling & Grain Storage",
  description:
    "GTIS delivered a turnkey flour milling facility in Tripoli, Libya, including silos and automation systems.",
  fullDescription:
    "GTIS executed a turnkey flour milling project in Tripoli, Libya. The project featured the installation of a 350 T/day milling line, silo integration, and advanced automation for efficient flour production. This plant supports Libya’s food security by strengthening the supply of wheat-based products.",
  image: "/projects/milling-plant-tripoli-libya/main.png",
  gallery: [],
  location: "Tripoli, Libya",
  client: "Confidential",
  duration: "12 months",
  year: "2022",
  value: "Confidential",
  category: "Agro-Industry",
  status: "Completed",
  rating: 5,
  completionDate: "2022-12-10",
  projectManager: "Omar Al Mansouri",
  teamSize: 40,
  features: [
    "Installation of 350 T/day milling line",
    "Integration of storage silos",
    "Automation systems for flour handling",
    "Testing and commissioning",
  ],
  stats: {
    capacity: "350 T/day milling",
    silos: 4,
    timeline: "12 months",
    workers: 40,
    efficiency: "Boosted flour production capacity",
    quality: "International food-grade compliance",
  },
  benefits: [
    {
      title: "Food Security",
      description: "Supports Libya’s growing food demand with modern milling capacity.",
      icon: Shield,
    },
    {
      title: "Efficient Processing",
      description: "Automation improves productivity and reduces losses.",
      icon: Zap,
    },
  ],
  process: [
    {
      step: 1,
      title: "Construction",
      description: "Civil works and structural preparation for milling plant.",
      duration: "4 months",
    },
    {
      step: 2,
      title: "Installation",
      description: "Assembly of milling line and silos.",
      duration: "6 months",
    },
    {
      step: 3,
      title: "Commissioning",
      description: "Testing, automation calibration, and operator training.",
      duration: "2 months",
    },
  ],
  testimonial: {
    quote: "Tripoli’s milling facility is a major step toward strengthening Libya’s food sector.",
    author: "Abdulrahman Al Fitori",
    position: "Project Supervisor",
    company: "Confidential",
    avatar: "/images/testimonials/abdulrahman.jpg",
  },
  technicalSpecs: {
    "Capacity": "350 T/day",
    "Silos": "4 units",
    "Sector": "Flour Milling & Storage",
    "Location": "Tripoli, Libya",
  },
  seo: {
    metaTitle: "Tripoli Milling Facility – Libya",
    metaDescription:
      "GTIS executed a turnkey flour milling project in Tripoli, Libya, including 350 T/day capacity and silo integration.",
    keywords: ["Tripoli milling plant", "GTIS Libya", "grain storage Libya"],
    ogImage: "/images/projects/libya-tripoli-milling-og.jpg",
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
