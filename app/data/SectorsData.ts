// app/sectors/sectorsData.ts

export interface SectorType {
  seoTitle: string
  seoDescription: string
  hero: string
  heroImage: string
  whatWeDo: string
  addedValue: string[]
  keyAchievements: string[]
  keyAchievementsImage: string
  whyChoose: string
  cta: string
  sectorName: string
}

export const sectors: Record<string, SectorType> = {
  "flour-mills": {
    seoTitle: "Flour Mill Engineering & Turnkey Installation",
    seoDescription:
      "GTIS designs and installs complete flour milling lines, storage silos, and automated systems. Trusted across Africa & the Middle East for efficiency and reliability.",
    hero: "Turnkey Flour Milling Solutions – From Grain Intake to Packaging",
    heroImage: "/sectors/flour-mill.jpeg",
    whatWeDo:
      "GTIS provides end-to-end flour milling solutions, from grain intake and storage to milling, sifting, and packaging. Our systems ensure high efficiency, low energy use, and consistent product quality.",
    addedValue: [
      "Energy-efficient designs to reduce costs",
      "Automated milling & bagging for higher productivity",
      "On-site training for smooth operations",
      "Preventive maintenance for uninterrupted production",
    ],
    keyAchievements: [
      "Installed 280,000 tons of wheat silos in Yemen",
      "Completed a 30 T/H capacity flour mill in Morocco",
    ],
    keyAchievementsImage:"/sectors/flour-mill-achievements.jpg",
    whyChoose:
      "With 15+ years of experience and 50+ projects across 10 countries, GTIS ensures sustainable, efficient, and reliable flour mill solutions.",
    cta: "👉 Ready to optimize your flour production? [Request a Consultation]",
    sectorName: "Flour Mills",
  },

  "pasta-rice": {
    seoTitle: "Pasta & Rice Plant Engineering",
    seoDescription:
      "Complete pasta and rice production lines with GTIS: mixing, extrusion, drying, polishing, and packaging. Boost efficiency and reduce waste with our turnkey solutions.",
    hero: "High-Performance Pasta & Rice Plants – Precision & Efficiency",
    heroImage: "/sectors/pasta-rice.jpg",
    whatWeDo:
      "We deliver fully integrated pasta and rice plants, including mixing, extrusion, drying, polishing, and automated bagging. Our solutions are designed for flexibility, consistency, and cost reduction.",
    addedValue: [
      "Precision-controlled processes for consistent quality",
      "Flexible systems for different pasta shapes or rice types",
      "Energy-efficient designs reducing waste by up to 15%",
      "Automated cleaning & maintenance systems",
    ],
    keyAchievements: [
      "Modernized pasta and rice plants across Africa & the Middle East",
      "Increased production capacity while reducing waste significantly",
    ],
    keyAchievementsImage:"/sectors/pasta-rice-achievements.jpg",
    whyChoose:
      "GTIS combines expertise and innovation to deliver world-class pasta and rice production facilities tailored to client needs.",
    cta: "👉 Boost your pasta & rice production today [Get in Touch]",
    sectorName: "Pasta & Rice Plants",
  },

  "beverage-oil": {
    seoTitle: "Beverage & Oil Filling Systems ",
    seoDescription:
      "GTIS provides automated bottling and oil filling systems for water, juices, carbonated drinks, and edible oils. Hygiene-focused, efficient, and scalable solutions.",
    hero: "Automated Beverage & Oil Filling Systems – Fast, Clean, Reliable",
    heroImage: "/sectors/beverage-oil.jpg",
    whatWeDo:
      "GTIS engineers and installs high-speed filling lines for beverages and edible oils. From bottling and capping to labeling and packaging, we ensure maximum hygiene and minimal waste.",
    addedValue: [
      "Hygiene-focused designs ensuring product quality",
      "Carbonation control for sparkling beverages",
      "Minimized spillage and product loss",
      "Scalable solutions for both large and niche producers",
    ],
    keyAchievements: [
      "Installed beverage filling lines for high-volume plants",
      "Delivered customized solutions for niche producers",
    ],
    keyAchievementsImage:"/sectors/beverage-oil-achievements.jpg",
    whyChoose:
      "GTIS helps beverage and oil producers increase productivity and product safety through innovative, cost-effective filling solutions.",
    cta: "👉 Enhance your beverage or oil production now [Request a Quote]",
    sectorName: "Beverage & Oil Plants",
  },

  "animal-feed": {
    seoTitle: "Animal Feed Production Plants",
    seoDescription:
      "GTIS designs and installs complete feed plants for poultry, livestock, aquaculture, and pet food. Energy-efficient, automated, and reliable turnkey facilities.",
    hero: "Complete Animal Feed Production – Efficiency & Reliability",
    heroImage: "/sectors/animal-feed.jpg",
    whatWeDo:
      "We engineer and install automated feed plants, including grinding, mixing, pelletizing, and packaging systems. Our designs ensure optimal nutrition retention and safe production environments.",
    addedValue: [
      "Optimized processing for better nutrient retention",
      "Dust and waste reduction for a cleaner environment",
      "Energy-efficient plants cutting power use by up to 20%",
      "Scalable solutions from small mills to industrial facilities",
    ],
    keyAchievements: [
      "Designed and installed feed plants across Africa",
      "Delivered energy-efficient systems reducing costs significantly",
    ],
    keyAchievementsImage:"/sectors/animal-feed-achievements.jpg",
    whyChoose:
      "GTIS ensures long-term performance and efficiency in feed production with innovative and cost-effective solutions.",
    cta: "👉 Start building your feed production plant today [Contact Us]",
    sectorName: "Animal Feed Plants",
  },

  "cement-plaster": {
    seoTitle: "Cement & Plaster Plant Engineering",
    seoDescription:
      "GTIS delivers cement and plaster plants with silo fabrication, kilns, conveyors, and dust collection systems. Reliable turnkey solutions across Africa & beyond.",
    hero: "Turnkey Cement & Plaster Plants – Built to Last",
    heroImage: "/sectors/cement-plaster.jpg",
    whatWeDo:
      "We design, fabricate, and install silos, conveyors, kilns, and dosing systems for cement and plaster plants. Our upgrades improve efficiency, reduce downtime, and ensure environmental compliance.",
    addedValue: [
      "Full turnkey plant construction and integration",
      "Energy-efficient upgrades reducing operating costs",
      "Modular installations for phased expansion",
      "Expertise in challenging site conditions",
    ],
    keyAchievements: [
      "Delivered cement plants across Africa",
      "Reduced downtime and maintenance costs in upgraded facilities",
    ],
    keyAchievementsImage:"/sectors/cement-plaster-achievements.jpg",
    whyChoose:
      "GTIS is the trusted partner for cement and plaster producers seeking performance, safety, and long-term cost optimization.",
    cta: "👉 Optimize your cement & plaster production [Request Consultation]",
    sectorName: "Cement & Plaster Plants",
  },

  "metal-structures": {
    seoTitle:
      "Metal Structures & Logistics Facilities",
    seoDescription:
      "GTIS fabricates and installs steel structures, warehouses, and logistics hubs. Heavy-duty, safe, and sustainable turnkey solutions.",
    hero: "Steel Structures & Logistics Facilities – Strong, Safe & Scalable",
    heroImage: "/sectors/metal-structures.jpg",
    whatWeDo:
      "We engineer and assemble steel structures for factories, warehouses, and logistics hubs. Our solutions meet seismic and wind safety standards and optimize operational flow.",
    addedValue: [
      "Heavy-duty material handling & storage solutions",
      "Compliance with international safety standards",
      "Energy-efficient plant layouts for cost savings",
      "Maintenance programs ensuring long-term reliability",
    ],
    keyAchievements: [
      "Installed 40,000 m² steel structures in Burkina Faso",
      "Completed multiple warehouse projects in Morocco & Libya",
    ],
    keyAchievementsImage:"/sectors/metal-structures-achievements.jpg",
    whyChoose:
      "GTIS provides durable, efficient, and scalable steel structures that support industrial growth and logistics excellence.",
    cta: "👉 Build your logistics facility with confidence [Get a Quote]",
    sectorName: "Metal Structures & Logistics",
  },
}
