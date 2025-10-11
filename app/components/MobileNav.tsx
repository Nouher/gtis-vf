"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [isSectorsOpen, SetSectorsOpen] = useState(false)

    const sectors = [
    {
      name: "Flour Mills",
      href: "/sectors/flour-mills",
      description: "GTIS designs and installs complete flour milling lines, storage silos, and automated systems. Trusted across Africa & the Middle East for efficiency and reliability.",
    },
    {
      name: "Pasta & Rice Plants",
      href: "/sectors/pasta-rice",
      description: "Complete pasta and rice production lines with GTIS: mixing, extrusion, drying, polishing, and packaging. Boost efficiency and reduce waste with our turnkey solutions.",
    },
    {
      name: "Beverage & Oil Filling Systems",
      href: "/sectors/beverage-oil",
      description: "GTIS provides automated bottling and oil filling systems for water, juices, carbonated drinks, and edible oils. Hygiene-focused, efficient, and scalable solutions.",
    },
    {
      name: "Animal Feed Production",
      href: "/sectors/animal-feed",
      description: "GTIS designs and installs complete feed plants for poultry, livestock, aquaculture, and pet food. Energy-efficient, automated, and reliable turnkey facilities.",
    },
    {
      name: "Cement & Plaster Industries",
      href: "/sectors/cement-plaster",
      description: "GTIS delivers cement and plaster plants with silo fabrication, kilns, conveyors, and dust collection systems. Reliable turnkey solutions across Africa & beyond.",
    },
    {
      name: "Metal Structures & Logistics Facilities",
      href: "/sectors/metal-structures",
      description: "GTIS fabricates and installs steel structures, warehouses, and logistics hubs. Heavy-duty, safe, and sustainable turnkey solutions.",
    },
  ]



  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden h-10 w-10 bg-primary/0">
          <Menu className="h-10 w-10 " />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-white/10 text-white px-8 backdrop-blur-md pt-24">
        <nav className="flex flex-col justify-center items-start gap-6 mt-8 pl-">
          <Link href="/" onClick={() => setOpen(false)} className="text-2xl font-medium  pb-2">
            HOME
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium  pb-2"
          >
            SERVICES
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium  pb-2"
          >
            PROJECTS
          </Link>
          <li
          onClick={()=>SetSectorsOpen(!isSectorsOpen)}
            className="text-2xl font-medium  uppercase flex gap-2 justify-center items-center"
          >
               <span>Sectors of Activity </span>
               <svg
                    className={`ml-1 h-5 w-5 transition-transform duration-200 ${isSectorsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
          </li>
           <div className={` ${isSectorsOpen ? "" : "hidden"}`}>
                    <div className="py-1 pl-6">
                      {sectors.map((sector) => (
                        <Link
                          key={sector.name}
                          href={sector.href}
                          className="block px-4 py-0.5 hover:bg-gray-100/50 transition-colors text-xl group"
                          onClick={() => setOpen(false)}
                        >
                          {sector.name}
                        </Link>
                      ))}
                    </div>
                  </div>
          <Link
            href="/news"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium  pb-2"
          >
            NEWS
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium  pb-2"
          >
            CONTACT
          </Link>
          <div className="mt-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">REQUEST FOR QUOTE</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}