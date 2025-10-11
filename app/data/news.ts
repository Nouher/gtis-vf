


export interface News {
id: number
slug: string
title: string
subtitle?: string
excerpt: string
content: string
fullDescription:string
image?: string
category?: string
author: string
authorRole?: string
status:string
location?:string
publishDate: string
readTime?: string
views?: number
featured?: boolean
trending?: boolean
tags?: string[]
seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    ogImage: string
  }
}



export const articles: News[] = [
  {
id: 1,
slug: "gtis-grain-milling-expo-casablanca",
title: "GTIS to Present Cutting-Edge Industrial Solutions at the Grain & Milling Expo Casablanca",
subtitle: "Leading innovation in the grain and milling industry",
excerpt: "Explore the latest trends in industrial automation including AI integration, IoT connectivity, and smart manufacturing solutions that are transforming industries across Africa and the Middle East.",
content: "GTIS participates in the Grain & Milling Expo Casablanca showcasing industrial solutions and automation technologies.",
fullDescription: `Casablanca, Morocco — GTIS (Global Technical Industry Services) is proud to announce its participation in the Grain & Milling Expo, the leading exhibition for grain, flour, and food processing industries in Morocco.


During the event, GTIS will showcase its latest automation technologies and industrial solutions that enhance production performance and ensure high-quality standards across the milling and processing sectors.


The GTIS team looks forward to meeting industry professionals, sharing expertise, and exploring new opportunities for collaboration and innovation.


Event Location: Casablanca, Morocco
More info: https://expo.grainmillingexpo.ma/`,
image: "news/gtis-grain-milling-expo-casablanca.jpg",
category: "Events",
location: "Casablanca, Morocco",
author: "Dr. Ahmed Hassan",
authorRole: "Chief Technology Officer",
status: "Upcoming",
publishDate: "2024-10-04",
views: 2450,
featured: true,
trending: true,
tags: ["Automation", "AI", "IoT", "Manufacturing"],
seo: {
metaTitle: "GTIS at Grain & Milling Expo Casablanca | Industrial Innovation in Morocco",
metaDescription: "GTIS Global Technical Industry Services will exhibit at the Grain & Milling Expo in Casablanca, showcasing advanced automation and industrial solutions for the milling and food industries in Morocco.",
keywords: ["GTIS", "Grain & Milling Expo Casablanca", "industrial innovation Morocco", "automation systems", "milling technology", "GTIS Morocco"],
ogImage: "/images/news/gtis-grain-milling-expo.jpg",
},
},
{
  id: 2,
  slug: "dawajine-2025-el-jadida",
  title: "Le Salon Dawajine 2025 — 26ème Édition à El Jadida",
  subtitle: "Innovation et durabilité, nouveaux défis pour l’aviculture",
  excerpt:
    "La Fédération Interprofessionnelle du Secteur Avicole (FISA) organise la 26ème édition du Salon International de l’Aviculture « Dawajine » du 03 au 05 novembre 2025 à El Jadida.",
  content: `
La Fédération Interprofessionnelle du Secteur Avicole au Maroc (FISA) organise la 26ème édition du **Salon International de l’Aviculture au Maroc “DAWAJINE”**, qui se tiendra du **03 au 05 novembre 2025** au **Parc d’Exposition Mohammed VI à El Jadida**, sous le thème :

> **« Innovation et durabilité, nouveaux défis pour l’aviculture. »**

Depuis 27 ans, le Salon International de l'Aviculture au Maroc “Dawajine” ne cesse d’accroître sa notoriété et de renforcer son positionnement en tant qu’événement avicole international majeur en Afrique du Nord et de l’Ouest.

Aujourd’hui, “Dawajine” s’impose comme **le salon de référence** pour les professionnels du secteur avicole.  
Chaque année, il réunit près de **450 exposants et marques**, nationaux et internationaux, qui viennent présenter leurs innovations, leurs produits et les dernières évolutions techniques et technologiques du secteur.

Ce salon constitue un **rendez-vous stratégique** pour tous les acteurs de la filière avicole : éleveurs, industriels, fournisseurs d’équipements, vétérinaires, chercheurs et investisseurs.
  `,
  fullDescription: `
La 26ème édition du **Salon Dawajine 2025** confirme la volonté du Maroc de renforcer sa position de leader dans le secteur avicole en Afrique.  
Au programme : conférences techniques, rencontres B2B, expositions d’innovations technologiques, et discussions sur les enjeux de durabilité et de sécurité alimentaire.

L’événement représente une **plateforme d’échange unique** favorisant le transfert de savoir-faire et la mise en relation entre les différents acteurs du marché.

Pour plus d’informations, visitez le site officiel : [salondawajine.ma](https://salondawajine.ma)
  `,
  image: "/news/dawajine-2025.jpg",
  category: "Événements",
  author: "Gtis Editorial Team",
  authorRole: "Rédaction Web",
  status: "published",
  location: "El Jadida, Maroc",
  publishDate: "2025-10-10",
  readTime: "3 min",
  views: 0,
  featured: true,
  trending: true,
  tags: ["Dawajine", "FISA", "Aviculture", "Salon", "Innovation", "Durabilité", "Maroc"],
  seo: {
    metaTitle: "Salon Dawajine 2025 - Innovation et durabilité pour l’aviculture au Maroc",
    metaDescription:
      "Découvrez la 26ème édition du Salon International de l’Aviculture au Maroc « Dawajine 2025 », du 03 au 05 novembre à El Jadida, sous le thème Innovation et durabilité.",
    keywords: [
      "Dawajine 2025",
      "Salon avicole Maroc",
      "FISA Maroc",
      "Innovation avicole",
      "Durabilité",
      "Événement aviculture",
      "El Jadida",
    ],
    ogImage: "/images/news/dawajine-2025-og.jpg",
  },
}
]


