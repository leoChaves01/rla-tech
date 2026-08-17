import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RLA TECH | Sites que conectam marcas e pessoas",
  description: "Criação de sites estratégicos, modernos e responsivos para empresas que querem crescer no digital.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
