import { Metadata } from "next";
import { Cabin } from "next/font/google";

import { CustomLayout, Footer, Navbar } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sergiu Barbershop",
  description: "Sergiu Barbershop official website",
};

const cabin = Cabin({
  weight: ["400", "700"],
  variable: "--font-cabin",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro">
      <body className={cabin.className}>
        <CustomLayout>
          <header className="container mx-auto">
            <Navbar />
          </header>
          <main>{children}</main>
          <div className="h-screen"></div>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
