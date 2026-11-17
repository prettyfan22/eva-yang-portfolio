import type { Metadata } from "next";
import { Archivo, Bebas_Neue, DM_Sans } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { Band } from "@/components/band";
import { Reveals } from "@/components/reveals";
import "./globals.css";

// Bebas Neue for headlines and figures, Archivo for text, DM Sans inside the Fluo case study
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const dmSans = DM_Sans({ subsets: ["latin"], axes: ["opsz"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: "Eva Yang Portfolio",
  description: "Eva Yang: brand and market strategy. USC Marshall MS Marketing, Analytics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${archivo.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Reveal animations hide content only once script is running, so the page never renders blank without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SiteNav />
        {children}
        <Band />
        <Reveals />
      </body>
    </html>
  );
}
