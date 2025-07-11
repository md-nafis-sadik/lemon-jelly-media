import type { Metadata } from "next";
import { bonbon, brittanySignature, interTight, mostculine, poppins, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/app.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/Navbar";
import { cn } from "@/lib/utils";
import LenisWrapper from "@/components/wrapper/LenisWrapper";

export const metadata: Metadata = {
  title: "Lemon Jelly Media",
  description: "Lemon Jelly is an independent brand-building creative agency. We live on the story side of marketing ",
  icons: {
    icon: "/favicon.svg",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en" data-arp suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          interTight.variable,
          bonbon.variable,
          mostculine.variable,
          yesevaOne.variable,
          scoutCond.variable,
          scout.variable,
          brittanySignature.variable,
          poppins.variable,
          "bg-white min-h-screen text-neutral-700 relative"
        )}
      >
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
