import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { CustomLayout, Footer } from "@/components";
import "@/styles/globals.css";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Sergiu Barbershop",
  description: "Sergiu Barbershop official website",
};

const cabin = Open_Sans({
  weight: ["300", "400", "700"],
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
          <Header />
          <main>{children}</main>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
