import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-space-mono"
});

export const metadata: Metadata = {
  title: "Retro Hardware Vault",
  description: "Cyber-Archeology of the Digital Age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceMono.variable} bg-[#050505] text-[#e0e0e0] font-sans antialiased selection:bg-[#FFB000] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
