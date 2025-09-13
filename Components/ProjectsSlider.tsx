import { ArrowRight } from "lucide-react";
import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/navigation"

function ProjectsSlider() {

  const router = useRouter()

    const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-");

  const handleNavigate = (title: string) => {
  const slug = slugify(title)
  router.push(`/services/${slug}`)
}




  const industrialServices = [
    {
      id: 1,
      slug:"Flat-Bottom",
      title: "Flat-Bottom Grain Silos",
      subtitle: "Assembly & Installation",
      description: "GTIS provides full assembly and installation services for flat-bottom grain silos, ideal for high-capacity storage in industrial grain facilities. Our expert teams ensure fast, secure installation aligned with international standards, including integration of aeration, temperature monitoring, and unloading systems.",
      image: "/projects/img1.jpeg",
      color: "from-blue-600/80 to-blue-800/0",
    },
    {
      id: 2,
      title: "Hopper-Bottom Silos",
      subtitle: "Assembly & Installation",
      description: "We offer hopper-bottom silo installation (silos on legs with conical bottoms), designed for gravity discharge, bagging systems, or fast, easy emptying. These silos are ideal for short-term storage or continuous feed operations in both industrial and agricultural settings.",
      image: "/projects/img2.jpg",
      color: "from-amber-500/80 to-orange-600/0",
    },
    {
      id: 3,
      title: "Grain Handling Systems",
      subtitle: "Smart Solutions",
      description: "GTIS designs and installs complete grain handling systems: chain conveyors, bucket elevators, screw augers, and more. Our solutions ensure smooth and efficient product flow between reception, storage, and shipment points, with full customization to your site layout and needs.",
      image: "/projects/img3.jpeg",
      color: "from-blue-600/80 to-blue-800/0",
    },
    {
      id: 4,
      title: "Complete Grain Storage Solutions",
      subtitle: "Reliability First",
      description: "We deliver turnkey grain storage solutions, integrating silos, intake pits, pre-cleaners, handling equipment, control systems, and outloading structures. Our solutions are tailored to meet local climate, capacity, and logistical requirements, whether for farming cooperatives or industrial clients.",
      image: "/projects/img4.jpeg",
      color: "from-amber-500/80 to-orange-600/0",
    },
    {
      id: 5,
      title: " Square Silos ",
      subtitle: " Modular Storage Systems",
      description: "GTIS also installs square silos, an excellent choice for interior spaces or where floor area is limited. Their modular design allows easy adaptation to existing production lines or feed systems. These silos are often used in feed mills",
      image: "/projects/img5.jpeg",
      color: "from-blue-600/80 to-blue-800/0",
    },
    {
      id: 6,
      title: " Farm Silos & Livestock Housing Units",
      subtitle: "Zero Compromise",
      description: "We specialize in farm silos for feed storage and distribution, as well as the full installation of livestock farms (poultry, cattle, sheep). Our systems are designed to optimize hygiene, feed flow, energy efficiency, and overall farm productivity.",
      image: "/projects/img6.jpg",
      color: "from-amber-500/80 to-orange-600/0",
    },
    {
      id: 7,
      title: "Milling Plants",
      subtitle: "Agro-Industrial Machinery Installation",
      description: "GTIS handles the complete assembly and installation of equipment for flour mills, feed mills, and agro-processing units. We offer turnkey solutions covering grain intake, cleaning, grinding, blending, sifting, storage, and packaging. Our experienced team ensures optimal layout planning, mechanical and electrical installation, and full commissioning of your production lines. From compact modular setups to large-scale industrial milling plants, GTIS delivers precision engineering and seamless execution to meet your performance and hygiene standards.",
      image: "/projects/img7.jpeg",
      color: "from-blue-600/80 to-blue-800/0",
    },
    {
      id: 8,
      title: "Advanced Pneumatic Unloaders for Ports",
      subtitle: "Tailored Solutions",
      description: "GTIS installs advanced pneumatic unloading systems, enabling efficient, dust-controlled grain transfer from ships to storage, ensuring minimal losses and enhanced terminal throughput.",
      image: "/projects/img8.jpeg",
      color: "from-amber-500/80 to-orange-600/0",
    },
    {
      id: 9,
      title: "Assembly and Installation of CIMAT Silos",
      subtitle: "",
      description: "GTIS specializes in the assembly and installation of silos for the cement industry, including high-capacity CIMAT silos. Our solutions are designed to ensure efficient storage and handling of cement and other bulk materials. We provide custom-engineered steel silos with dust control, aeration systems, and robust structural integrity to handle the specific demands of the cement sector. From civil foundation to mechanical erection and safety systems integration, GTIS guarantees reliable, durable, and efficient silo installations.",
      image: "/projects/img9.jpeg",
      color: "from-blue-600/80 to-blue-800/0",
    },
    {
      id: 10,
      title: "Steel Structures",
      subtitle: "Fabrication & Installation",
      description: `GTIS designs, fabricates, and installs custom steel structures tailored to the specific needs of agro-industrial and processing facilities.
Our services cover the full range of metal works:
– Catwalks and walkways for silo and equipment access
– Support towers for conveyors and elevators
– Service platforms for safe operation and maintenance
– Industrial buildings and frames for storage or processing units

Built with precision and engineered for strength, our steel structures ensure durability, safety, and compliance with international industrial standards.`,
      image: "/projects/img10.jpeg",
      color: "from-amber-500/80 to-orange-600/0",
    },
  ]

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container px-28">

         <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-[#0E6FB7] rounded-full text-sm font-medium mb-4">
            <Factory className="h-4 w-4 mr-2" />
            Industrial Excellence
          </div> */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#0E6FB7] to-gray-900 bg-clip-text text-transparent">
            Our Industrial Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial services designed to transform your operations with
            cutting-edge technology and unmatched expertise.
          </p>
        </div>
        
      <Slider {...settings} className="" >
        {industrialServices.map((service) => (
                   <div
                     onClick={()=>handleNavigate(service.title)}
                     key={service.id}
                     className="h-[520px] my-4 group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 transform hover:-translate-y-2"
                     // onMouseEnter={() => setHoveredItem(service.id)}
                     // onMouseLeave={() => setHoveredItem(null)}
                   >
                     {/* Image */}
                     <div className="relative h-64 overflow-hidden">
                       <Image
                         src={service.image || "/placeholder.svg"}
                         alt={service.title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-110"
                       />
       
                       {/* Gradient Overlay */}
                       <div
                         className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300 `}
                       ></div>
       
                     
       
                       {/* Plus Icon */}
                       {/* <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                         <Plus className="h-6 w-6" />
                       </div> */}
       
                       {/* Stats Badge */}
                       {/* <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                         {service.stats}
                       </div> */}
                     </div>
       
                     {/* Content */}
                     <div className="p-6">
                       <div className="mb-2">
                         <span className="text-sm text-gray-500 font-medium">{service.subtitle}</span>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                         {service.title}
                       </h3>
                       <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>
       
                       {/* Action Button */}
                       {/* <Link href={`/projects/${service.title.toLowerCase().replace(/\s+/g, "-")}`}> */}
                    
                       <Button
                         onClick={()=>handleNavigate(service.title)}
                         variant="ghost"
                         className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"
                         
                         >
                             Learn More
                             <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                       </Button> 
       
                       {/* <Link
                         href={`/projects/${slugify(service.title)}`}
                         
                       >
       
                         Learn More
                         <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                       </Link> */}
                     </div>
       
                     {/* Hover Effect Border */}
                     <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300"></div>
                   </div>
                 ))}
      </Slider>
    </div>
  );
}

export default ProjectsSlider;