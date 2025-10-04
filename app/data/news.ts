import type React from "react"


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



export const articles: News = {
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
}


