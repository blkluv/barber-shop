import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { CustomLayout, Footer, Navbar } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sergiu Barbershop",
  description: "Sergiu Barbershop official website",
};

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  variable: "--font-openSans",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro">
      <body className={openSans.className}>
        <CustomLayout>
          <header className="relative">
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
