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
  description: "Conception et réalisation complètes d'usines agroalimentaires pour répondre à vos besoins industriels. Innovation, Qualité, Efficacité. Contactez nous ...",
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
