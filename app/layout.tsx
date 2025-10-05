import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ContactGroup from "@/Components/ContactGroup";
import Footer from "@/Components/Footer";
import { Roboto_Condensed } from "next/font/google";
import { LanguageProvider } from "./context/language-context"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
   
});



export const metadata: Metadata = {
  title:{
    default:"GTIS – Global Technical Industry Services",
    template:"%s | GTIS – Global Technical Industry Services",
  },
  description: "Experts in the design and construction of food processing plants. We deliver turnkey agro-industrial solutions combining innovation, quality, and efficiency. Contact us to build your next factory project.",
      keywords: [
      "food processing plant design",
      "turnkey agro-industrial solutions",
      "food factory construction",
      "agro-industrial engineering",
      "industrial plant design",
      "food industry projects",
      "food production line design",
      "industrial automation for food plants",
      "design and construction of food factories",
      "turnkey food processing solutions",
      "complete agro-food plant setup",
      "industrial project management food sector",
      "engineering services for food industry",
      "custom food processing equipment design",
      "factory layout and installation services",
      "innovative food industry technologies",
      "GTIS food processing",
      "GTIS industrial engineering",
      "GTIS turnkey food plant solutions",
      "GTIS agro-industrial projects",
    ],
    openGraph: {
      title:
        {
          default:"GTIS – Global Technical Industry Services",
          template:"%s | GTIS – Global Technical Industry Services",
        },
      description:
        "Experts in the design and construction of food processing plants. We deliver turnkey agro-industrial solutions combining innovation, quality, and efficiency. Contact us to build your next factory project.",
      url: "gtis.ma",
      siteName: "GTIS",
      images: [
        {
          url: "https://gtis.ma/og-image.jpg", // 🔄 replace with your actual image path
          width: 1200,
          height: 630,
          alt: "GTIS Food Processing Plant Design",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "GTIS | Turnkey Food Processing Plant Design & Agro-Industrial Solutions",
      description:
        "GTIS designs and builds food processing plants with innovation, quality, and efficiency.",
      images: ["https://gtis.ma/og-image.jpg"], // 🔄 replace if needed
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} antialiased`}
      >
        <LanguageProvider>
          <Navbar/>
          
          <ContactGroup/>
          {/* <div className="mt-[132px]"> */}
          {children}
          {/* </div> */}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
