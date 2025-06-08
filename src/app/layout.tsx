import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Menu from "@/components/Menu";

const myFont = localFont({
  src: "../../public/fonts/Broken.ttf",
});

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jared's Portfolio",
  description: "A portfolio showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <AuroraBackground>
          {children}
          <Menu />
        </AuroraBackground>
      </body>
    </html>
  );
}
