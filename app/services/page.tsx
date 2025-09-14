"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  CheckCircle,
  Wrench,
  Cog,
  Zap,
  Database,
  Settings,
  Shield,
  Phone,
  Mail,
  Award,
  Users,
  Calendar,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { gsap } from "gsap"

const slides = [
  {
    miniTitle: "INDUSTRIAL EXPERTISEhh",
    title: "Complete Industrial Solutions Delivering Efficiency & Innovation",
    buttonText: "EXPLORE OUR SERVICES",
    image: "/services-slider/services-slider1.jpeg",
  },
  {
    miniTitle: "TECHNOLOGY FOCUS",
    title: "Advanced Automation for Modern Industries",
    buttonText: "LEARN MORE",
    image: "/services-slider/services-slider2.jpeg",
  },
  {
    miniTitle: "GLOBAL REACH",
    title: "Worldwide Solutions Tailored for Your Needs",
    buttonText: "GET STARTED",
    image: "/services-slider/services-slider3.jpeg",
  },
];


export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const [current, setCurrent] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const miniRef = useRef<HTMLDivElement | null>(null);
  const miniLineRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);  
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const navRefs = useRef<Array<HTMLButtonElement | null>>([]);


const animateNavLine = (index: number) => {
  const currentNav = navRefs.current[index];
  if (!currentNav) return; 

  const line = currentNav.querySelector<HTMLElement>('.nav-line');
  if (!line) return; // <-- stop if null

  gsap.fromTo(
    line,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 5,
      transformOrigin: 'left',
      onComplete: () => setCurrent((prev) => (prev + 1) % slides.length),
    }
  );

  navRefs.current.forEach((nav, i) => {
    if (i !== index && nav) {
      const otherLine = nav.querySelector<HTMLElement>('.nav-line');
      if (otherLine) {
        gsap.to(otherLine, {
          scaleX: 0,
          duration: 0.3,
          transformOrigin: 'left',
        });
      }
    }
  });
};
  
    useEffect(() => {
      animateNavLine(current);
    }, [current]);
  
 useEffect(() => {
  if (!heroRef.current) return; // safety check for context

  const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    // check miniLineRef and miniRef
    if (miniLineRef.current && miniRef.current) {
      gsap.set(miniLineRef.current, {
        display: 'inline-block',
        width: 0,
        height: '2px',
        backgroundColor: '#fff',
        marginRight: '8px',
        verticalAlign: 'middle',
      });

      const width = miniRef.current.getBoundingClientRect().width;

      tl.to(miniLineRef.current, {
        width,
        duration: 0.6,
        ease: 'power2.out',
      });

      tl.from(miniRef.current, { opacity: 0, duration: 0.6 }, "-=0.3");
    }

    if (titleRef.current) {
      tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.3");
    }

    if (btnRef.current) {
      tl.from(
        btnRef.current,
        {
          opacity: 0,
          duration: 0.6,
          onStart: () => {
            const btnLine = btnRef.current!.querySelector<HTMLElement>('.btn-line');
            if (btnLine) {
              gsap.fromTo(
                btnLine,
                { scaleX: 0, transformOrigin: 'left', backgroundColor: '#fff' },
                { scaleX: 1, duration: 0.5 }
              );
            }
          },
        },
        "-=0.4"
      );
    }
  }, heroRef);

  return () => ctx.revert();
}, [current]);

  




  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")
            setVisibleCards((prev) => new Set([...prev, cardIndex]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const services = [
    {
      id: 1,
      slug: "flat-bottom",
      title: "Flat-Bottom Grain Silos",
      subtitle: "Assembly & Installation",
      description:
        "GTIS provides full assembly and installation services for flat-bottom grain silos, ideal for high-capacity storage in industrial grain facilities. Our expert teams ensure fast, secure installation aligned with international standards, including integration of aeration, temperature monitoring, and unloading systems.",
      image: "/projects/img1.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 50,
      features: ["Precision TIG/MIG welding", "ISO 9001 quality control", "On-site assembly", "24/7 support"],
      price: "",
    },
    {
      id: 2,
      slug: "hopper-bottom",
      title: "Hopper-Bottom Silos",
      subtitle: "Assembly & Installation",
      description:
        "We offer hopper-bottom silo installation (silos on legs with conical bottoms), designed for gravity discharge, bagging systems, or fast, easy emptying. These silos are ideal for short-term storage or continuous feed operations in both industrial and agricultural settings.",
      image: "/projects/img2.jpg",
      icon: <Cog className="h-8 w-8" />,
      category: "installation",
      rating: 4.8,
      projects: 50,
      features: ["Precision alignment", "Performance testing", "Operator training", "Maintenance programs"],
      price: "",
    },
    {
      id: 3,
      slug: "grain-handling-systems",
      title: "Grain Handling Systems",
      subtitle: "Smart Solutions",
      description:
        "GTIS designs and installs complete grain handling systems: chain conveyors, bucket elevators, screw augers, and more. Our solutions ensure smooth and efficient product flow between reception, storage, and shipment points, with full customization to your site layout and needs.",
      image: "/projects/img3.jpeg",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 50,
      features: ["SCADA systems", "PLC programming", "Motor control", "Energy monitoring"],
      price: "",
    },
    {
      id: 4,
      slug: "complete-grain-storage-solutions",
      title: "Complete Grain Storage Solutions",
      subtitle: "Reliability First",
      description:
        "We deliver turnkey grain storage solutions, integrating silos, intake pits, pre-cleaners, handling equipment, control systems, and outloading structures. Our solutions are tailored to meet local climate, capacity, and logistical requirements, whether for farming cooperatives or industrial clients.",
      image: "/projects/img4.jpeg",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.7,
      projects: 50,
      features: ["Custom design", "Climate control", "Inventory management", "Safety systems"],
      price: "",
    },
    {
      id: 5,
      slug: "square-silos",
      title: "Square Silos",
      subtitle: "Modular Storage Systems",
      description:
        "GTIS also installs square silos, an excellent choice for interior spaces or where floor area is limited. Their modular design allows easy adaptation to existing production lines or feed systems. These silos are often used in feed mills",
      image: "/projects/img5.jpeg",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.8,
      projects: 50,
      features: ["Robotics integration", "Process optimization", "Quality control", "Remote monitoring"],
      price: "",
    },
    {
      id: 6,
      slug: "farm-silos-livestock-housing-units",
      title: "Farm Silos & Livestock Housing Units",
      subtitle: "Zero Compromise",
      description:
        "We specialize in farm silos for feed storage and distribution, as well as the full installation of livestock farms (poultry, cattle, sheep). Our systems are designed to optimize hygiene, feed flow, energy efficiency, and overall farm productivity.",
      image: "/projects/img6.jpg",
      icon: <Shield className="h-8 w-8" />,
      category: "maintenance",
      rating: 4.9,
      projects: 50,
      features: ["Preventive maintenance", "Emergency repairs", "Spare parts", "Performance monitoring"],
      price: "",
    },
    {
      id: 7,
      slug: "milling-plants",
      title: "Milling Plants",
      subtitle: "Agro-Industrial Machinery Installation",
      description:
        "GTIS handles the complete assembly and installation of equipment for flour mills, feed mills, and agro-processing units. We offer turnkey solutions covering grain intake, cleaning, grinding, blending, sifting, storage, and packaging. Our experienced team ensures optimal layout planning, mechanical and electrical installation, and full commissioning of your production lines.",
      image: "/projects/img7.jpeg",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.9,
      projects: 50,
      features: ["Layout planning", "Mechanical installation", "Electrical systems", "Full commissioning"],
      price: "",
    },
    {
      id: 8,
      slug: "advanced-pneumatic-unloaders-for-ports",
      title: "Advanced Pneumatic Unloaders for Ports",
      subtitle: "Tailored Solutions",
      description:
        "GTIS installs advanced pneumatic unloading systems, enabling efficient, dust-controlled grain transfer from ships to storage, ensuring minimal losses and enhanced terminal throughput.",
      image: "/projects/img8.jpeg",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 50,
      features: ["Dust control systems", "High throughput", "Minimal losses", "Port integration"],
      price: "",
    },
    {
      id: 9,
      slug: "assembly-and-installation-of-cimat-silos",
      title: "Assembly and Installation of CIMAT Silos",
      subtitle: "Cement Industry Solutions",
      description:
        "GTIS specializes in the assembly and installation of silos for the cement industry, including high-capacity CIMAT silos. Our solutions are designed to ensure efficient storage and handling of cement and other bulk materials with dust control, aeration systems, and robust structural integrity.",
      image: "/projects/img9.jpeg",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.9,
      projects: 50,
      features: ["High-capacity storage", "Dust control", "Aeration systems", "Structural integrity"],
      price: "",
    },
    {
      id: 10,
      slug: "steel-structures",
      title: "Steel Structures",
      subtitle: "Fabrication & Installation",
      description:
        "GTIS designs, fabricates, and installs custom steel structures tailored to the specific needs of agro-industrial and processing facilities. Our services cover catwalks, support towers, service platforms, and industrial buildings built with precision and engineered for strength.",
      image: "/projects/img10.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 50,
      features: ["Custom design", "Precision fabrication", "Safety compliance", "Durability guaranteed"],
      price: "",
    },
  ]

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    { id: "assembly", name: "Assembly", count: services.filter((s) => s.category === "assembly").length },
    { id: "installation", name: "Installation", count: services.filter((s) => s.category === "installation").length },
    { id: "electrical", name: "Electrical", count: services.filter((s) => s.category === "electrical").length },
    { id: "storage", name: "Storage", count: services.filter((s) => s.category === "storage").length },
    { id: "automation", name: "Automation", count: services.filter((s) => s.category === "automation").length },
    { id: "maintenance", name: "Maintenance", count: services.filter((s) => s.category === "maintenance").length },
  ]

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
              <section
        ref={heroRef}
        className="relative w-full h-screen flex flex-col justify-center px-6 sm:px-12 md:px-32 lg:px-48 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, #1128479d, #1128479d), url(${slides[current].image})`
        }}
      >
        <div className="relative max-w-4xl">
          <span ref={miniLineRef}></span>
          <span ref={miniRef} className="text-sm sm:text-base lg:text-2xl uppercase tracking-widest text-white">
            {slides[current].miniTitle}
          </span>
          <h1 ref={titleRef} className="text-3xl sm:text-5xl lg:text-8xl font-extrabold mb-4 leading-tight mt-4">
            {slides[current].title}
          </h1>
          <button ref={btnRef} className="relative group inline-flex items-center font-semibold text-xl text-white mt-4">
            {slides[current].buttonText}
            <span className="btn-line block h-[2px] w-16 bg-white ml-4 origin-left transform scale-x-0"></span>
          </button>
        </div>

        <div className="absolute bottom-8 left-6 sm:left-12 md:left-32 flex space-x-6 sm:space-x-8 md:space-x-12">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              ref={(el) => { navRefs.current[idx] = el; }}
              onClick={() => setCurrent(idx)}
              className="relative text-xs sm:text-base lg:text-lg uppercase tracking-wider"
            >
              {slide.miniTitle}
              <span className="nav-line absolute -top-2 left-0 w-full h-[2px] bg-white origin-left transform scale-x-0"></span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Featured Services
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Most Popular Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our flagship services that have helped hundreds of clients achieve their industrial goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Service */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={services[0].image || "/placeholder.svg"}
                      alt={services[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-4">{services[0].title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{services[0].description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white">
                        <span className="text-2xl font-bold">{services[0].price}</span>
                      </div>
                      <div className="text-slate-300 text-sm">{services[0].projects}+ projects completed</div>
                    </div>
                    <Link href={`/services/${services[0].slug}`}>
                      <Button className="bg-white text-slate-900 hover:bg-slate-100 w-full rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Services */}
            {services.slice(1, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-62">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  </div>
                </div>
                <div className="p-6">
          
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-slate-900">{service.price}</span>
                    <span className="text-slate-500 text-sm">{service.projects}+ projects</span>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-xl">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Categories</h2>
            <p className="text-lg text-slate-600">Filter services by category to find exactly what you need</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-slate-800 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Scroll Animations */}
      <section id="services-grid" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                data-card-index={index}
                className={`bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
                }`}
                style={{
                  transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150}ms` : "0ms",
                  transform: visibleCards.has(index) ? "translateY(0) scale(1)" : "translateY(64px) scale(0.95)",
                }}
              >
                {/* Service Image */}
                <div className="relative h-68 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      visibleCards.has(index) ? "scale-100 opacity-100" : "scale-110 opacity-80"
                    } hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div
                    className={`absolute top-4 right-4 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    }`}
                  >
                    {/* <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {service.price}
                    </div> */}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div
                    className={`flex items-center justify-between mb-3 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 200}ms` : "0ms" }}
                  >
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    {/* <div className="flex items-center">
                      <Star className="h-4 w-4 text-blue-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-slate-600">{service.rating}</span>
                    </div> */}
                  </div>

                  <div
                    className={`transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 300}ms` : "0ms" }}
                  >
                    <p className="text-slate-600 text-sm mb-2">{service.subtitle}</p>
                    <p className="text-slate-700 mb-4 leading-relaxed line-clamp-2">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div
                    className={`space-y-2 mb-6 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 400}ms` : "0ms" }}
                  >
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-slate-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className={`flex items-center justify-between mb-6 text-sm text-slate-500 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 500}ms` : "0ms" }}
                  >
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {service.projects}+ projects
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Premium service
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className={`flex gap-3 transition-all duration-500 ${
                      visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: visibleCards.has(index) ? `${(index % 3) * 150 + 600}ms` : "0ms" }}
                  >
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="tel:+212667060089">
                      <Button
                        variant="outline"
                        className="px-4 rounded-xl border-slate-300 hover:bg-slate-50 bg-transparent cursor-pointer"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose GTIS Services?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise, quality assurance, and customer focus to deliver exceptional industrial
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Proven Expertise</h3>
              <p className="text-slate-600">15+ years of experience in industrial services across multiple sectors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance</h3>
              <p className="text-slate-600">ISO certified processes ensuring the highest quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Team</h3>
              <p className="text-slate-600">Certified professionals with specialized industrial expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock technical support and emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/services-bg.jpeg" alt="Contact Background" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Industrial Project?</h2>
            <p className="text-xl text-white/90 mb-12">
              Contact our experts to discuss your requirements and get a customized solution for your industrial needs
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>

              <Link href="mailto:contact@gtis.com">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Experts
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>24h Response</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
