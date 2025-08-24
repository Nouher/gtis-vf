"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.sectors": "Sectors",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.about": "About",

    //Home

    "home.title": "GTIS Global Technical Industry Services",
    "home.subtitle": "GTIS is a company specializing in industrial solutions, including metallic, mechanical, and electrical assembly, automation, maintenance, as well as the supply of spare parts and engineering. Its goal is to support industrial companies in their installation and infrastructure optimization projects.",
    "home.cta": "Get Started",

    "stats.projects": "projects",
    "stats.projects.desc": "Successfully completed industrial projects",

    "stats.countries": "countries",
    "stats.countries.desc": "With presence across multiple continents",

    "stats.years": "years",
    "stats.years.desc": "Excellence and commitment with our clients",

    "stats.professionals": "professionals",
    "stats.professionals.desc": "With state of the art expertise and facilities",


    // Services
    "services.title": "Our Core Services",
    "services.subtitle": "Comprehensive industrial solutions tailored to meet your specific needs",
    "services.assembly": "Industrial Assembly & Installation",
    "services.assembly.desc": "Specialized in metallic, mechanical, and electrical assembly, dismantling, and installation.",
    "services.automation": "Automation & Engineering",
    "services.automation.desc": "Design and integration of automated systems to optimize industrial processes.",
    "services.maintenance": "Maintenance & Spare Parts",
    "services.maintenance.desc": "Preventive and corrective maintenance with reliable spare parts supply.",

    // Projects
    "projects.title": "Our Projects",
    "projects.flour": "Flour Mills – Automation, maintenance, spare parts supply.",
    "projects.feed": "Animal Feed Factories – Mixing, grinding, packaging automation, process optimization.",
    "projects.pasta": "Pasta & Rice Factories – Extrusion, drying, milling, sorting, packaging.",
    "projects.cement": "Cement Plants – Kiln maintenance, silos, conveyors, structural components.",
    "projects.beverage": "Beverage & Oil Filling Systems – Automated lines for water, juices, oils, lubricants.",
    "projects.wood": "Wood Transformation Plants – Cutting, treatment, production line automation.",
    "projects.metal": "Metal Structures – Design, manufacturing, assembly for industrial plants and warehouses.",

    // Sectors
    "sectors.title": "Sectors of Activity",
    "sectors.flour": "Flour Mills",
    "sectors.feed": "Animal Feed Factories",
    "sectors.pasta": "Pasta & Rice Factories",
    "sectors.cement": "Cement Plants",
    "sectors.beverage": "Beverages & Oils Filling Systems",
    "sectors.wood": "Wood Transformation Plants",
    "sectors.metal": "Metal Structures & Other Industries",

    // Contact
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.sectors": "Secteurs",
    "nav.news": "Actualités",
    "nav.contact": "Contact",
    "nav.about": "À propos",

    // Home
    "home.title": "GTIS Services Techniques Industriels Globaux",
    "home.subtitle": "GTIS est une entreprise spécialisée dans les solutions industrielles, incluant l’assemblage métallique, mécanique et électrique, l’automatisation, la maintenance ainsi que la fourniture de pièces de rechange et l’ingénierie. Son objectif est d’accompagner les entreprises industrielles dans leurs projets d’installation et d’optimisation des infrastructures.",
    "home.cta": "Commencer",

    "stats.projects": "projets",
    "stats.projects.desc": "Projets industriels réalisés avec succès",

    "stats.countries": "pays",
    "stats.countries.desc": "Présence à travers plusieurs continents",

    "stats.years": "années",
    "stats.years.desc": "Excellence et engagement auprès de nos clients",

    "stats.professionals": "1professionnels",
    "stats.professionals.desc": "Avec une expertise de pointe et des installations modernes",



    // Services
    "services.title": "Nos Services Clés",
    "services.subtitle": "Solutions industrielles complètes adaptées à vos besoins spécifiques",
    "services.assembly": "Assemblage & Installation Industrielle",
    "services.assembly.desc": "Spécialisation dans l’assemblage, le démontage et l’installation métalliques, mécaniques et électriques.",
    "services.automation": "Automatisation & Ingénierie",
    "services.automation.desc": "Conception et intégration de systèmes automatisés pour optimiser les processus industriels.",
    "services.maintenance": "Maintenance & Pièces de Rechange",
    "services.maintenance.desc": "Maintenance préventive et corrective avec approvisionnement fiable en pièces de rechange.",

    // Projects
    "projects.title": "Nos Projets",
    "projects.flour": "Moulins à Farine – Automatisation, maintenance, pièces de rechange.",
    "projects.feed": "Usines d’Aliments pour Animaux – Mélange, broyage, conditionnement, optimisation des procédés.",
    "projects.pasta": "Usines de Pâtes & Riz – Extrusion, séchage, tri, conditionnement.",
    "projects.cement": "Cimenteries – Maintenance des fours, silos, convoyeurs, structures métalliques.",
    "projects.beverage": "Systèmes de Remplissage (Boissons & Huiles) – Eau, jus, huiles, lubrifiants.",
    "projects.wood": "Usines de Transformation du Bois – Découpe, traitement, automatisation.",
    "projects.metal": "Structures Métalliques – Conception, fabrication, assemblage.",

    // Sectors
    "sectors.title": "Secteurs d’Activité",
    "sectors.flour": "Moulins à Farine",
    "sectors.feed": "Usines d’Aliments pour Animaux",
    "sectors.pasta": "Usines de Pâtes & Riz",
    "sectors.cement": "Cimenteries",
    "sectors.beverage": "Systèmes de Remplissage (Boissons & Huiles)",
    "sectors.wood": "Usines de Transformation du Bois",
    "sectors.metal": "Structures Métalliques & Autres Industries",

    // Contact
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.address": "Adresse",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.sectors": "Sectores",
    "nav.news": "Noticias",
    "nav.contact": "Contacto",
    "nav.about": "Acerca de",

    // Home
    "home.title": "GTIS Servicios Técnicos Industriales Globales",
    "home.subtitle": "GTIS es una empresa especializada en soluciones industriales, incluyendo el montaje metálico, mecánico y eléctrico, la automatización, el mantenimiento, así como el suministro de repuestos y la ingeniería. Su objetivo es apoyar a las empresas industriales en sus proyectos de instalación y optimización de infraestructuras.",
    "home.cta": "Empezar",

    "stats.projects": "proyectos",
    "stats.projects.desc": "Proyectos industriales completados con éxito",

    "stats.countries": "países",
    "stats.countries.desc": "Con presencia en múltiples continentes",

    "stats.years": "años",
    "stats.years.desc": "Excelencia y compromiso con nuestros clientes",

    "stats.professionals": "profesionales",
    "stats.professionals.desc": "Con experiencia de vanguardia e instalaciones modernas",



    // Services
    "services.title": "Nuestros Servicios Clave",
    "services.subtitle": "Soluciones industriales integrales adaptadas a tus necesidades específicas",
    "services.assembly": "Montaje e Instalación Industrial",
    "services.assembly.desc": "Especializados en montaje, desmontaje e instalación metálica, mecánica y eléctrica.",
    "services.automation": "Automatización & Ingeniería",
    "services.automation.desc": "Diseño e integración de sistemas automatizados para optimizar procesos industriales.",
    "services.maintenance": "Mantenimiento & Repuestos",
    "services.maintenance.desc": "Mantenimiento preventivo y correctivo con suministro confiable de repuestos.",

    // Projects
    "projects.title": "Nuestros Proyectos",
    "projects.flour": "Molinos de Harina – Automatización, mantenimiento, repuestos.",
    "projects.feed": "Plantas de Piensos – Mezcla, molienda, envasado, optimización de procesos.",
    "projects.pasta": "Fábricas de Pasta & Arroz – Extrusión, secado, molienda, clasificación, envasado.",
    "projects.cement": "Plantas de Cemento – Mantenimiento de hornos, silos, transportadores, estructuras metálicas.",
    "projects.beverage": "Sistemas de Llenado (Bebidas & Aceites) – Agua, jugos, aceites, lubricantes.",
    "projects.wood": "Plantas de Transformación de Madera – Corte, tratamiento, automatización.",
    "projects.metal": "Estructuras Metálicas – Diseño, fabricación, montaje.",

    // Sectors
    "sectors.title": "Sectores de Actividad",
    "sectors.flour": "Molinos de Harina",
    "sectors.feed": "Plantas de Piensos",
    "sectors.pasta": "Fábricas de Pasta & Arroz",
    "sectors.cement": "Plantas de Cemento",
    "sectors.beverage": "Sistemas de Llenado (Bebidas & Aceites)",
    "sectors.wood": "Plantas de Transformación de Madera",
    "sectors.metal": "Estructuras Metálicas & Otras Industrias",

    // Contact
    "contact.phone": "Teléfono",
    "contact.email": "Correo electrónico",
    "contact.address": "Dirección",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
