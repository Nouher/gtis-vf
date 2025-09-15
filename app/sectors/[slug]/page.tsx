import { sectors } from "../../data/SectorsData"
import { notFound } from "next/navigation"
import { Button } from "@/Components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { QuoteDialog } from "@/Components/QuoteDialog"

interface SectorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: SectorPageProps) {
  const { slug } = await params
  const sector = sectors[slug]

  if (!sector) return { title: "Not Found" }

  return {
    title: sector.seoTitle,
    description: sector.seoDescription,
    openGraph: {
      title: sector.seoTitle,
      description: sector.seoDescription,
      url: `/sectors/${slug}`,
      siteName: "GTIS",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: sector.seoTitle,
      description: sector.seoDescription
    }
  }
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { slug } = await params
  const sector = sectors[slug]

  if (!sector) return notFound()

  return (
    <main className="">
    <div className=" ">
         <section className="relative h-screen flex items-end pb-16 justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/bg-projects.jpeg"
                    alt="Projects Background"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-700/70" />
                </div>
        
                {/* Content */}
                 <section className="min-h-screen flex items-center z-20 pt-52">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">
                  {sector.sectorName}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  {sector.hero}
                </h1>
              </div>
              <p className="text-lg leading-relaxed max-w-lg text-pretty text-gray-300">{sector.whatWeDo}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                    <Button size="lg" className="group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
                <Link href="/projects">
                    <Button size="lg" variant="outline">
                    Learn More
                    </Button>
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <img
                src={
                  sector.heroImage 
                }
                alt={`${sector.seoTitle} facility`}
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
              </section>

      

      {/* What We Do */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">
              We deliver comprehensive solutions tailored to your industry needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sector.addedValue.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-6xl font-bold mb-8">Key Achievements</h2>
              <div className="space-y-6">
                {sector.keyAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={sector.keyAchievementsImage}
                alt="Our achievements"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose GTIS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-pretty">{sector.whyChoose}</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center border-4 p-4 border-primary rounded-2xl w-40 bg-primary">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <p className="text-sm text-white">Years Experience</p>
              </div>
              <div className="text-center border-4 p-4 border-primary rounded-2xl w-40 bg-primary">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <p className="text-sm text-white">Projects Completed</p>
              </div>
              <div className="text-center border-4 p-4 border-primary rounded-2xl w-40 bg-primary">
                <div className="text-4xl font-bold text-white mb-2">10</div>
                <p className="text-sm text-white">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-prim0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
            <p className="text-xl  mb-8 text-pretty">
              {sector.cta
                .replace("👉", "")
                .replace("[Request a Consultation]", "")
                .replace("[Get in Touch]", "")
                .replace("[Request a Quote]", "")
                .replace("[Contact Us]", "")
                .replace("[Get a Quote]", "")
                .trim()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+212667060089">
                <Button size="lg" className="group">
                    Request Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                    View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
                </div>

    </main>
  )
}
