"use client";

import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  MenuIcon,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import NavigationSheet from "./NavigationSheet";
import { Button } from "../ui/button";
import { images } from "@/services";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import HeaderButton from "../shared/HeaderButton";

const Navbar: FC = () => {

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  console.log(pathname);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300 font-inter",
        pathname === routes.homepage.link
          ? isScrolled ? "bg-white lg:bg-transparent border-natural-300" : "bg-transparent border-natural-300"
          : isScrolled ? "bg-white lg:bg-transparent border-natural-300" : "bg-transparent border-natural-300"
      )}
    >
      <div className="containerX flex flex-row items-center justify-between gap-4 py-4 lg:py-8 px-6 lg:px-24">
        <div className="flex items-center gap-12">
          <Link href={routes.homepage.link} className="h-fit">
            <div className="flex items-center gap-2">
              {isScrolled ?
                <Image
                  src={images.LogoBlack}
                  alt="Company logo"
                  width={105}
                  height={60}
                  priority
                />
                : <Image
                  src={images.Logo}
                  alt="Company logo"
                  width={105}
                  height={60}
                  priority
                />
              }
            </div>
          </Link>


        </div>
        <div className={`hidden min-[1160px]:flex flex-row gap-6 items-center   rounded-full p-2 ${isScrolled ? "bg-[#181818]" : "bg-[#61616140]"}`}>
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Link
                href={link}
                className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative overflow-hidden"
              >
                {/* Active route background - fixed */}
                {pathname === link && (
                  <span
                    className="absolute inset-0 rounded-[100px] z-[0]"
                    style={{
                      background: `
                        linear-gradient(to bottom right, rgba(254, 255, 231, 0.00) 0%, rgba(255, 224, 0, 0.32) 50%) bottom right / 50% 50% no-repeat, 
                        linear-gradient(to bottom left, rgba(254, 255, 231, 0.00) 0%, rgba(255, 224, 0, 0.32) 50%) bottom left / 50% 50% no-repeat, 
                        linear-gradient(to top left, rgba(254, 255, 231, 0.00) 0%, rgba(255, 224, 0, 0.32) 50%) top left / 50% 50% no-repeat, 
                        linear-gradient(to top right, rgba(254, 255, 231, 0.00) 0%, rgba(255, 224, 0, 0.32) 50%) top right / 50% 50% no-repeat
                      `,
                    }}
                  />
                )}

                <span
                  className={cn(
                    pathname === link
                      ? "text-white font-semibold"
                      : "text-text-100 font-normal",
                    "text-sm !leading-[1.4] relative z-[2] font-inter"
                  )}
                >
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                    color={
                      pathname === link
                        ? colors.text[750]
                        : colors.text[600]
                    }
                  />
                )}
              </Link>
              {/* {index < navbarData.length - 1 && (
                <Dividericon
                  className="w-[7px] h-7"
                  color={
                    pathname === routes.homepage.link
                      ? colors.natural[900]
                      : colors.natural[200]
                  }
                />
              )} */}
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-2 md:gap-3">


          {/* DOWNLOAD APP */}

          <HeaderButton isScrolled={isScrolled} />

          {/* MOBILE MENU */}

          <div className="lg:hidden flex cursor-pointer" onClick={() => setIsSheetOpen(true)}><MenuIcon className="!h-5 !w-5 !shrink-0" color="black" /></div>

        </div>
      </div>

      <NavigationSheet
        isSheetOpen={isSheetOpen}
        closeSheet={() => setIsSheetOpen(false)}
        pathname={pathname}
      />
    </nav>
  );
};

export default Navbar;
