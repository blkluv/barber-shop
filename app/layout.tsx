import { Metadata } from "next";

import { CustomLayout, Navbar } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sergiu Barbershop",
  description: "Sergiu Barbershop official website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro">
      <body>
        <CustomLayout>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer></footer>
        </CustomLayout>
      </body>
    </html>
  );
}
