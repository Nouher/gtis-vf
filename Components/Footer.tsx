import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto px-20">
          <div className="grid md:grid-cols-6 gap-8">
            <div className="col-span-2 pr-10">
              {/* <h3 className="text-xl font-bold mb-4">About GTIS</h3> */}
              <div className="mb-10">
                <Image src="/logo-white.svg" alt="btis logo" width={300} height={300}/>
              </div>
              <p className="text-gray-400">
                GTIS specializes in industrial solutions, including metallic, mechanical, and electrical assembly,
                automation, maintenance, and engineering.
              </p>
              <div className="flex space-x-4 mt-4">
                <a target="_blank" href="https://web.facebook.com/p/gtisma-100046893433733/?_rdc=1&_rdr#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a target="_blank"  href="https://www.instagram.com/gtis.ma/" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a target="_blank"  href="https://www.linkedin.com/company/global.technical.industry.services" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="text-gray-400 hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Metallic Assembly
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Mechanical Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Electrical Assembly
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Metallic Assembly
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Mechanical Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Electrical Assembly
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={16} className="mr-2" />
                  <span>123 Industrial Zone, Casablanca, Morocco</span>
                </li>
                <li >
                  <Link href="tel:+212667060089" className="flex items-center cursor-pointer hover:text-white">
                    <Phone size={16} className="mr-2" />
                    <span>+212 667 060 089</span>
                  </Link>
                </li>
                <li >
                  <Link href="tel:+212667060089" className="flex items-center cursor-pointer hover:text-white">
                    <Mail size={16} className="mr-2" />
                    <span>contact@gtis.ma</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} GTIS - Global Technical Industry Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
