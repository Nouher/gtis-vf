'use client'
import Image from "next/image";
import { ArrowRight, Award, Calendar, Mail, Phone, Shield } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import PowerfulStats from "@/Components/PowerfulStats";
import { Button } from "@/Components/ui/button";
// import { motion } from "framer-motion";
import { useLanguage } from "./context/language-context";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ProjectsSlider from "@/Components/ProjectsSlider";

export default function Home() {

  const { t } = useLanguage();
  const textRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    gsap.fromTo(textRef.current, {
        x: -100,
        scale: 0.4,
        opacity: 0
    }, 
    {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
    });
     gsap.fromTo(descRef.current, {
        x: -100,
        scale: 0.4,
        opacity: 0
    }, 
    {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1,
    });
     gsap.fromTo(buttonsRef.current, {
        x: -100,
        scale: 0.4,
        opacity: 0
    }, 
    {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1.5,
    });
  }, []);

  return (
    <div>
      <div className= {`w-full`}>
        <section className="relative h-screen w-full over">
          <div className="w-full h-full ">
            {/* <Image src={bg} alt="silos" className="move w-full" /> */}
            <video src="/vd1.mp4" className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay
            loop
            muted
            playsInline />

          </div>
          <div className="h-full absolute top-0 w-full ">
            <div className=" bg-[#1128479d] w-full px-0 lg:px-20 flex flex-col  h-full absolute top-0">
              <div className="h-72 text-white text-2xl font-bold lg:max-w-6xl mt-42 lg:mt-50  pb-10 ">
                <h1 ref={textRef} className="lg:py-10 font-black text-4xl lg:text-8xl uppercase" id="title-home">{t("home.title")}</h1>
                <div ref={descRef} className="text-lg lg:text-3xl font-normal lg:font-medium mt-6 lg:mt-0 h-30 ">{t("home.subtitle")}</div>
              </div>
              <div ref={buttonsRef} className="flex gap-4 mt-20 lg:mt-48 ">
                <button className="text-white  bg-[#1D1E7A]/60 hover:bg-[#1D1E7A] w-52 lg:w-2xs h-14 lg:h-16 rounded-full text-lg lg:text-2xl font-bold">Contact us</button>
                <button className="h-16 w-16 bg-white rounded-full flex justify-center items-center"><ArrowRight size={35} className="text-[#1D1E7A]"/></button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-auto flex flex-col items-center gap-6 p-8 rounded-lg">
            <a href=""><Image src="/social-media-icons/icon-linkedin-white.svg" alt="LinkedIn" width={24} height={24} className=""/></a>
            <a href=""><Image src="/social-media-icons/icon-facebook-white.svg" alt="Facebook" width={24} height={24} className=""/></a>
            <a href=""><Image src="/social-media-icons/icon-instagram-white.svg" alt="Instagram" width={24} height={24} className=""/></a>
            <a href=""><Image src="/social-media-icons/icon-twitter-white.svg" alt="Twitter" width={24} height={24} className=""/></a>
            <a href=""><Image src="/social-media-icons/icon-youtube-white.svg" alt="Youtube" width={24} height={24} className=""/></a>

          </div>
        </section>


        <div className="h-1 bg-[#1D1E7A] w-full"/> 

        <PowerfulStats/>
        {/* <IndustrialShowcase/> */}
        <ProjectsSlider/>
 
        {/* Services Section */}
        {/* <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[#0E6FB7] mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive industrial solutions to optimize your operations and infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Metallic Assembly",
                  description:
                    "Expert metallic assembly services for industrial applications with precision engineering.",
                  icon: <Shapes size={45}/>,
                },
                {
                  title: "Mechanical Solutions",
                  description: "Comprehensive mechanical solutions for industrial machinery and equipment.",
                  icon: <HandHelping size={45}/>,
                },
                {
                  title: "Electrical Assembly",
                  description: "Professional electrical assembly and installation for industrial facilities.",
                  icon: <Cable size={45}/>,
                },
                {
                  title: "Automation",
                  description: "Cutting-edge automation solutions to improve efficiency and productivity.",
                  icon: <Workflow size={45}/>,
                },
                {
                  title: "Maintenance",
                  description: "Regular maintenance services to ensure optimal performance of your equipment.",
                  icon: <Wrench size={45}/>,
                },
                {
                  title: "Engineering",
                  description: "Custom engineering solutions for complex industrial challenges.",
                  icon: <PencilRuler size={45}/>,
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow border-1 text-center flex flex-col items-center">
                  <div className="mb-6 text-[#0E6FB7] border-4 rounded-2xl shadow-xl border-[#0E6FB7] p-2 top-[-40px] relative bg-white">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link href="#" className="mt-4 inline-flex items-center text-[#0E6FB7] hover:text-[#49779b]">
                    Learn more
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* News Section */}
        <section id="news" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
              <div className="w-20 h-1 bg-[#0E6FB7] mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest developments and news from GTIS
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "GTIS Completes Major Industrial Project",
                  date: "May 10, 2025",
                  excerpt:
                    "GTIS successfully completed a major industrial installation project for a leading manufacturing company.",
                },
                {
                  title: "New Automation Technology Implemented",
                  date: "April 28, 2025",
                  excerpt:
                    "GTIS introduces cutting-edge automation technology to improve efficiency in industrial operations.",
                },
                {
                  title: "GTIS Expands Services to New Region",
                  date: "April 15, 2025",
                  excerpt:
                    "We're excited to announce our expansion into a new region, bringing our industrial solutions to more clients.",
                },
                   {
                  title: "GTIS Expands Services to New Region",
                  date: "April 15, 2025",
                  excerpt:
                    "We're excited to announce our expansion into a new region, bringing our industrial solutions to more clients.",
                },
              ].map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-[520px]">
                  <div className="relative h-64">
                    <Image src={`/news-${index + 1}.jpeg`} alt={news.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text[#0E6FB7] mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link href="#" className="inline-flex items-center text[#0E6FB7] hover:text-[#487699]">
                      Read more
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              
               <Button
              variant="outline"
              className="border-2 border-[#0E6FB7] text-[#0E6FB7] hover:bg-[#0E6FB7] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              View All News
            </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="relative py-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image src="/map.svg" alt="Contact Background" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-blue-950/70" />
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

        {/* <div className="w-full h-[720px] relative opacit ">
          <div className="absolute  top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-blue-950/20 to-blue-950/100"></div>
          <div className="absolute  top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-white via-white/10 to-white/70"></div>
          
          <Image
              src="/map.svg"
              alt="Industrial Project"
              fill
              className="object-cover object-center"
              />
          </div> */}


      </div>

      
    </div>
  );
}