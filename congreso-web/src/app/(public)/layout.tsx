import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const REGISTRATION_URL = process.env.REGISTRATION_URL || '#';


export const metadata: Metadata = {
  title: "CODEAR 2026 | Congreso de Destiladores de Argentina",
  description: "6ª Edición del encuentro más importante del sector de destilados en Argentina. Mendoza 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A0A] antialiased`}>
        {/* The persistent navigation header stays on top of every single route */}
        <Header registrationUrl={REGISTRATION_URL} />
        
        {/* Dynamic page content injects here */}
        {children}
      </body>
    </html>
  );
}