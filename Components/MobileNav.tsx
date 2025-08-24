"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden p-0 w-10 h-10 bg-white/70">
          <Menu className="h-8 w-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-blue-50/90 px-8">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium border-b border-gray-200 pb-2">
            HOME
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-lg font-medium border-b border-gray-200 pb-2"
          >
            SERVICES
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="text-lg font-medium border-b border-gray-200 pb-2"
          >
            PROJECTS
          </Link>
          <Link
            href="/sectors-of-activity"
            onClick={() => setOpen(false)}
            className="text-lg font-medium border-b border-gray-200 pb-2"
          >
            SECTORS OF ACTIVITY
          </Link>
          <Link
            href="/news"
            onClick={() => setOpen(false)}
            className="text-lg font-medium border-b border-gray-200 pb-2"
          >
            NEWS
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-lg font-medium border-b border-gray-200 pb-2"
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