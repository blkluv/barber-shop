import "./_styles/globals.css";
import { Metadata } from "next";

import { Footer } from "@/_components/Footer/Footer";
import { CustomLayout } from "@/_components/CustomLayout";
import { Header } from "@/_components/Header/Header";
import { openSans } from "@/_styles/fonts";

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
      <body className={`${openSans.variable}`}>
        <CustomLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
