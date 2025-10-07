"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

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
          <Link
            href="/sectors-of-activity"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium  pb-2"
          >
            SECTORS OF ACTIVITY
          </Link>
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