"use client";

import { cn } from "@/lib/utils";
import { FacebookLineIcon, images, InstaLineIcon, LinkedInLineIcon, TwitterLineIcon, YoutubeIcon, YoutubeLineIcon } from "@/services";
import Image from "next/image";
import { footerData } from "@/services/data";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import { SpinningText } from "../magicui/spinning-text";
import TextFadeIn from "../animations/TextFadeIn";


const Footer = () => {
  return (
    <footer className="bg-black relative font-poppins">
      <div className="absolute bottom-0 w-full" style={{ height: 'auto' }}>
        <Image
          alt="hero star glass image"
          src={images.FooterBackground}
          width={1920}  // Set your image's intrinsic width
          height={300}  // Set your image's intrinsic height (this maintains aspect ratio)
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="pb-6 pt-16 md:pb-36 md:pt-48">

        <div className="containerX">
          <div className="flex">
            <TextFadeIn text="LET’s" extra2ClassName="mr-0" className="lg:mt-[-100px] text-5xl lg:text-[100px] xl:text-[180px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine' />
              <TextFadeIn text="Work" extra2ClassName="mr-0" className="flex lg:hidden text-center ml-4 lg:mt-[-100px] text-5xl lg:text-[100px] xl:text-[180px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine' />
            
            <div className="hidden lg:flex gap-[54px]">

              <TextFadeIn text="W" extra2ClassName="mr-0" className="text-center ml-4 lg:mt-[-100px] text-5xl lg:text-[100px] xl:text-[180px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine' />

              <div className="relative mr-4 hidden lg:block">
                <SpinningText className="text-main-500">contact us! • contact us! • contact us! •</SpinningText>
                <div className="absolute top-[-63px] left-[-63px] h-[126px] w-[126px] rounded-full border-2 border-main-500"></div>

                <span className="absolute top-[-23px] left-[-26px]">

                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M19.9141 9.74219V13.8109H33.3206L9.74219 37.3893L12.6107 40.2578L36.1891 16.6794V30.0859H40.2578V9.74219H19.9141Z" fill="#FFE000" />
                  </svg>
                </span>
              </div>
              <TextFadeIn text="rk" extra2ClassName="" className="lg:mt-[-100px] text-5xl lg:text-[100px] xl:text-[180px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine' />

            </div>
          </div>
          <div className="">
              <TextFadeIn text="TOGATHER" extra2ClassName="" className="text-right text-5xl lg:text-[100px] xl:text-[180px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine !justify-end' />

          </div>

          <div className="text-text-50 col-span-1 border-t border-b border-neutral-800 py-14 mb-14 mt-10 md:col-span-2 flex lg:items-end lg:justify-between flex-col lg:flex-row max-w-full">

            <div className="max-w-[420px] flex flex-col  items-center md:items-start"><Link href='/' className="h-fit">
              <div className="flex items-center gap-2">
                <Image alt="logo" src={images.Logo} className="w-[120px]" />
              </div>
            </Link>
              <p
                className={cn(
                  "text-xs md:text-sm lg:text-base mt-4 md:mt-6 text-center md:text-start font-poppins"
                )}
              >
                Lemon Jelly is an <span className="font-bold">independent brand-building</span> creative agency. 
              </p>

            </div>

            <div className="flex items-center space-x-4 mt-6">
              <div className="bg-main-500 rounded-full"><FacebookLineIcon /></div>

              <div className="bg-main-500 rounded-full"><LinkedInLineIcon /></div>
              <div className="bg-main-500 rounded-full"><TwitterLineIcon /></div>
              <div className="bg-main-500 rounded-full p-1.5"><YoutubeIcon /></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Inquiries */}


            {/* Company Info */}
            <div className="text-text-200 col-span-1 flex items-center md:items-start flex-col">
              <p
                className={cn(
                  "text-center sm:text-start font-semibold text-lg lg:text-xl text-text-50"
                )}
              >
                {footerData.companyInfo.title}
              </p>
              <ul className="mt-4 md:mt-6">
                {footerData.companyInfo.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "footer_el_text block mb-2 text-center sm:text-start font-poppins"
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-text-200 col-span-1 flex items-center md:items-start flex-col">
              <p
                className={cn(
                  " text-center sm:text-start font-semibold text-lg lg:text-xl text-text-50"
                )}
              >
                {footerData.support.title}
              </p>
              <ul className="mt-4 md:mt-6">
                {footerData.support.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "footer_el_text block mb-2 text-center sm:text-start font-poppins"
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-text-200 col-span-1 flex items-center md:items-start flex-col">
              <p
                className={cn(
                  " text-center sm:text-start font-semibold text-lg lg:text-xl text-text-50"
                )}
              >
                {footerData.support.title}
              </p>
              <ul className="mt-4 md:mt-6">
                {footerData.support.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "footer_el_text block mb-2 text-center sm:text-start font-poppins"
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;