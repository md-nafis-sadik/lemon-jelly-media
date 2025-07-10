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
import { images } from "@/services";
import Image from "next/image";
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
        "sticky top-0 z-50 transition-all duration-300 font-poppins",
        pathname === routes.homepage.link
          ? isScrolled ? "bg-[#181818] lg:bg-transparent mx-0 rounded-none mt-6" : "lg:bg-transparent bg-[#61616140] mx-6 lg:mx-0 rounded-full lg:rounded-none mt-6 lg:mt-0"
          : isScrolled ? "bg-[#181818] lg:bg-transparent mx-0 rounded-none mt-6" : "lg:bg-transparent bg-[#61616140] mx-6 lg:mx-0 rounded-full lg:rounded-none mt-6 lg:mt-0"
      )}
    >
      <div className="containerX flex flex-row items-center justify-between gap-4 py-2 lg:py-8 pr-2 pl-4 lg:pl-24 lg:pr-24">
        <div className="flex items-center gap-12">
          <Link href={routes.homepage.link} className="h-fit">
            <Image
              src={images.Logo}
              alt="Company logo"
              className="w-14 lg:w-[105px] block lg:hidden"
              width={105}
              height={60}
              priority
            />
            <div className="hidden lg:flex items-center gap-2">
              {isScrolled ?
                <Image
                  src={images.LogoBlack}
                  alt="Company logo"
                  className="w-14 lg:w-[105px]"
                  width={105}
                  height={60}
                  priority
                />
                : <Image
                  src={images.Logo}
                  alt="Company logo"
                  className="w-14 lg:w-[105px]"
                  width={105}
                  height={60}
                  priority
                />
              }
            </div>
          </Link>


        </div>
        <div className={`hidden min-[1160px]:flex flex-row gap-6 items-center rounded-full p-2 ${isScrolled ? "bg-[#181818]" : "bg-[#61616140]"}`}>
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Link
                href={link}
                className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative overflow-hidden"
              >
                {/* Active route background - fixed */}
                {pathname === link && (
                  <span
  className="absolute inset-0 rounded-[100px] z-[0] animate-jelly"
style={{
    background: `
      radial-gradient(
        circle at var(--x, 70%) var(--y, 30%),
        rgba(255, 224, 0, 0.0) 0%,
        rgba(255, 224, 0, 0.15) 40%,
        rgba(255, 224, 0, 0.25) 60%,
        rgba(255, 224, 0, 0.1) 80%,
        rgba(255, 224, 0, 0.0) 100%
      )
    `,
    animation: 'jelly 4s ease-in-out infinite, moveGradientCenter 10s ease-in-out infinite',
  }}
/>
                )}

                <span
                  className={cn(
                    pathname === link
                      ? "text-white font-semibold"
                      : "text-text-100 font-normal",
                    "text-sm !leading-[1.4] relative z-[2] font-poppins"
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
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-2 lg:gap-3">
          <div className="">
            <HeaderButton isScrolled={isScrolled} />
          </div>

          <div className="lg:hidden flex cursor-pointer" onClick={() => setIsSheetOpen(true)}>
            <div className="p-2 rounded-full"
              style={{
    background: `
      radial-gradient(
        circle at var(--x, 60%) var(--y, 40%),
        rgba(255, 224, 0, 0.0) 0%,
        rgba(255, 224, 0, 0.15) 70%,
        rgba(255, 224, 0, 0.25) 40%,
        rgba(255, 224, 0, 0.1) 50%,
        rgba(255, 224, 0, 0.0) 100%
      )
    `,
    animation: 'jelly 4s ease-in-out infinite, moveGradientCenter 10s ease-in-out infinite',
  }}
            >
              <MenuIcon className="!h-5 !w-5 !shrink-0" color="white" />
            </div>
           
          </div>

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
