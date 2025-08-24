'use client'
// import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ContactGroup from "@/Components/ContactGroup";
import Footer from "@/Components/Footer";
import { Roboto_Condensed } from "next/font/google";
import { LanguageProvider } from "./context/language-context"
import { useEffect, useState } from "react";
import PreLoading from "@/Components/PreLoading";


const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
   
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose the weights you need
  variable: '--font-ubuntu',
  display: 'swap',
})

// export const metadata: Metadata = {
//   title:{
//     default:"GTIS – Global Technical Industry Services",
//     template:"%s | GTIS – Global Technical Industry Services",
//   },
//   description: "Conception et réalisation complètes d'usines agroalimentaires pour répondre à vos besoins industriels. Innovation, Qualité, Efficacité. Contactez nous ...",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a short loading delay (you can remove or adjust)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} antialiased`}
      >
        <LanguageProvider>
          {
            loading ? (
              <PreLoading />
            ):(
              <>
              
                <Navbar/>
                
                <ContactGroup/>
                {/* <div className="mt-[132px]"> */}
                {children}
                {/* </div> */}
                <Footer/>
              </>
            )
          }
        </LanguageProvider>
      </body>
    </html>
  );
}
