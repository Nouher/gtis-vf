'use client'
import Image from "next/image";
import { ArrowRight, Award, Calendar, Mail, Phone, Shield, TrendingUp } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import PowerfulStats from "./components/PowerfulStats";
import { Button } from "./components/ui/button";
// import { motion } from "framer-motion";
import { useLanguage } from "./context/language-context";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ProjectsSlider from "./components/ProjectsSlider";

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
              <div className="h-72 text-white text-2xl font-bold lg:max-w-6xl mt-30 lg:mt-50  pb-10  ">
                <h1 ref={textRef} className="lg:py-10 font-black text-[40px] lg:text-8xl uppercase not-lg:text-center  not-lg:leading-snug not-lg:px-3" id="title-home">{t("home.title")}</h1>
                <div ref={descRef} className="text-lg lg:text-3xl font-normal lg:font-medium mt-10 lg:mt-0 h-30 not-lg:text-center not-lg:leading-relaxed not-lg:px-2">{t("home.subtitle")}</div>
              </div>
              <div ref={buttonsRef} className="flex gap-4 mt-44 lg:mt-48 not-lg:justify-center">
                <button className="text-white  bg-primary/60 hover:bg-primary w-52 lg:w-2xs h-14 lg:h-16 rounded-full text-lg lg:text-2xl font-bold"><Link href="/contact">Contact us</Link></button>
                <button className="h-16 w-16 bg-white rounded-full flex justify-center items-center"><Link href="/services"><ArrowRight size={35} className="text-primary"/></Link></button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-auto flex flex-col  items-center gap-6 p-8 rounded-lg not-lg:flex-row not-lg:w-full not-lg:justify-center">
            <a href="https://www.linkedin.com/company/global.technical.industry.services"><Image src="/social-media-icons/icon-linkedin-white.svg" alt="LinkedIn" width={24} height={24} className=""/></a>
            <a href="ttps://web.facebook.com/p/gtisma-100046893433733/?_rdc=1&_rdr#"><Image src="/social-media-icons/icon-facebook-white.svg" alt="Facebook" width={24} height={24} className=""/></a>
            <a href="https://www.instagram.com/gtis.ma/"><Image src="/social-media-icons/icon-instagram-white.svg" alt="Instagram" width={24} height={24} className=""/></a>
            <a href="#"><Image src="/social-media-icons/icon-twitter-white.svg" alt="Twitter" width={24} height={24} className=""/></a>
            <a href="#"><Image src="/social-media-icons/icon-youtube-white.svg" alt="Youtube" width={24} height={24} className=""/></a>

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
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest developments and news from GTIS
              </p>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                  id:1,
                  slug: "gtis-grain-milling-expo-casablanca",
                  title: "GTIS to Present Cutting-Edge Industrial Solutions at the Grain & Milling Expo Casablanca",
                  subtitle: "Leading innovation in the grain and milling industry",
                  excerpt: "Explore the latest trends in industrial automation including AI integration, IoT connectivity, and smart manufacturing solutions that are transforming industries across Africa and the Middle East.",
                  content: "The industrial automation landscape is rapidly evolving with new technologies emerging every year. In 2024, we're seeing unprecedented growth in AI-powered systems, IoT integration, and smart manufacturing solutions...", 
                  date: "04 octobre, 2025",
                  image: "/news/gtis-grain-milling-expo-casablanca.jpg",
                  category: "Events",
                  author: "Dr. Ahmed Hassan",
                  authorRole: "Chief Technology Officer",
                  publishDate: "04 Octobre, 2025",
                },
               
              ].map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
              
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover object-top  transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {article.category}
                    </div>
                   
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>

                  {/* Author & Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      {/* <User className="h-4 w-4 mr-2" /> */}
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.publishDate}
                    </div>
                  </div>

                  <Link href={`/news/${article.slug}`}>
                    <Button className="w-full bg-primary hover:bg-gray-900 text-white rounded-xl group-hover:bg-red-600 transition-colors">
                      Read Trending Article
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

            <div className="text-center mt-12">
              <Link href="/news">
               <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              View All News
            </Button>
            </Link>
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
                      <Link href="tel:+212667060089">
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