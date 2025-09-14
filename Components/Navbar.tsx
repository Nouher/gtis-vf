"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-v2.svg";
import { MobileNav } from "./MobileNav";
import { QuoteDialog } from "./QuoteDialog";
import { useState, useEffect } from "react";
import { ChevronDown, MailIcon, PhoneIcon } from "lucide-react";
import { useLanguage } from "../app/context/language-context"


export const FacebookIcon = () => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
  );
};
export const InstagramIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
  );
};
export const LinkedInIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
  );
};


export default function Navbar() {

  const { language, setLanguage, t } = useLanguage()


const [scrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bgWhite, setBgWhite] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Show/hide navbar on scroll direction
      if (currentScroll > scrollPos && currentScroll > 50) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      // Background white if scrolled >100px
      setBgWhite(currentScroll > 100);

      setScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

    return (
      <div className={`bg-transparent w-full fixed z-50 h-40 hover:bg-white hover:text-gray-700 transition-all duration-150 ease-in-out  ${visible ? "translate-y-0" : "-translate-y-full"}
        ${bgWhite ? "bg-white border-b-1 shadow-sm" : "bg-transparent text-white"}`}>
          <div className=''>
            <div className="bg-transparent  px-20 w-full items-center justify-between hidden lg:flex">
              <div className=" flex flex-row-reverse items-center justify-between w-full h-10">

                {/* <div className="flex gap-4 items-center "     >
                <Link href="https://www.facebook.com/" className="text-white opacity-70 hover:opacity-100 "><FacebookIcon/></Link>
                <Link href="https://www.facebook.com/" className="text-white opacity-70 hover:opacity-100"><InstagramIcon/></Link>
                <Link href="https://www.facebook.com/" className="text-white opacity-70 hover:opacity-100"><LinkedInIcon/></Link>
                  
                </div> */}
                <div className={`flex gap-5 items-center h-full py-2 font-medium text-sm`}>
                  <Link href="#" className="flex gap-2 items-center hover:opacity-100 transition cursor-pointer hover:text-primary hover:scale-105">
                    <PhoneIcon size={16} className=" "/>
                    <span className=" ">+212 667 060 089</span>
                  </Link>
                  <span>/</span>
                  {/* <Separator orientation="vertical" className=""/> */}
                  <Link href='mailto:CONTACT@GTIS.MA' className="flex gap-2 items-center hover:opacity-100 transition cursor-pointer hover:text-primary hover:scale-105">
                    <MailIcon size={16} className=""/>
                    <span className="">CONTACT@GTIS.MA</span>
                  </Link>
                <div className="text-md flex gap-3">
                  <span className="border-b-2 border-b-secondary hover:scale-105 transition cursor-pointer text-secondary" onClick={()=>{setLanguage("en")}}>EN</span>
                  <span>/</span>
                  <span className=" border-b-2 border-b-transparent hover:border-b-secondary hover:scale-105 transition cursor-pointer hover:text-secondary" onClick={()=>{setLanguage("fr")}}>FR</span>
                  <span>/</span>
                  <span className="border-b-2 border-b-transparent hover:border-b-secondary hover:scale-105 transition cursor-pointer hover:text-secondary" onClick={()=>{setLanguage("es")}}>ES</span>
                </div>
                </div>
              </div>
                
            </div>
            </div>
        <div className={`border-t-1 bg-gradient-to-r from-white via-white/0 to-white/0 font-medium h-18 lg:h-26 w-full flex  items-center justify-between lg:px-20 py-16" `}>
        <div className="flex justify-start items-center w-32 lg:w-auto h-23  z-50 ">
          <Link href="/" >
              <Image src={logo} alt="gtis-logo" width={300} className=""/>
          </Link>
        </div>
        <ul className= {`hidden lg:flex justify-between gap-8 items-center uppercase text-2xl`}>
          {/* <li className="relative border-b-2 border-b-transparent  text-md hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400 transition"><Link href='/'>Home</Link></li> */}
          <li className="relative group border-b-2 border-b-transparent  text-md transition hover:text-primary">
            <Link href='/services'>{t("nav.services")}</Link>
            <span className="underline-snake"></span>
          </li>
          <li className="relative group border-b-2 border-b-transparent text-md transition hover:text-primary">
            <Link href='/projects'>{t("nav.projects")}</Link>
            <span className="underline-snake"></span>
            </li>
          <li className="relative group border-b-2 border-b-transparent  text-md transition hover:text-primary">
            <Link href='/sectors-of-activity' className="flex items-center">
            {/* <span>{t("nav.sectors")}</span>
            <ChevronDown className="ml-1 h-5 w-5" /> */}

            <div className="border-t border-gray-200">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
            >
              Services
            </button>
            <div className="pl-4">
              <Link href="/services/service1" className="block px-3 py-2 hover:bg-gray-100">Service 1</Link>
              <Link href="/services/service2" className="block px-3 py-2 hover:bg-gray-100">Service 2</Link>
              <Link href="/services/service3" className="block px-3 py-2 hover:bg-gray-100">Service 3</Link>
            </div>
          </div>
            </Link>
            <span className="underline-snake"></span>
            </li>
          <li className="relative group border-b-2 border-b-transparent  text-md transition hover:text-primary">
            <Link href='/news'>{t("nav.news")}</Link>
            <span className="underline-snake"></span>
            </li>
          <li className="relative group border-b-2 border-b-transparent  text-md transition hover:text-primary">
            <Link href='/contact'>{t("nav.contact")}</Link>
            <span className="underline-snake"></span>
            </li>
        </ul>

        <QuoteDialog />
        
        <div className="lg:hidden flex z-30">
            <MobileNav />
        </div>

        </div>
      </div>
    );
  }
  