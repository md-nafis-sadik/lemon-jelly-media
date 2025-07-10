"use client";

import { useState } from 'react';
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/services/data/shared.data";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TextFadeIn from '../animations/TextFadeIn';

const Testimonial = () => {
  const autoplayOptions = { delay: 3000 };
  const options = {
    align: "start",
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 3, slidesToShow: 3 },
      '(min-width: 768px)': { slidesToScroll: 2, slidesToShow: 2 },
    }
  } as const;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);
  const [hovered, setHovered] = useState(false);

  return (
    <div className='bg-black py-24'>
      <div className="containerX w-full relative font-poppins">
        <div className='text-center'>
          <div className="flex justify-center items-center w-full mx-auto">
            <TextFadeIn
              text="fresh words from clients"
              extra2ClassName='mr-3'
              className="text-2xl lg:text-5xl max-w-full lg:text-[64px] font-[700] !leading-[1.2] text-main-500 tracking-wide mb-6"
            />
          </div>
          <p className='text-white text-2xl'>hear what our happy clients say about our services</p>
        </div>

        {/* CAROUSEL */}
        <div className="w-full overflow-x-hidden mt-4 md:mt-[60px]">
          <div className="w-full" ref={emblaRef}>
            <div className="flex w-full py-1">
              {testimonialsData.map(({ name, title, avatar, id, message, designation, customclass, bg, titleclass, descriptionclass }) => (
                <div key={id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 p-2 lg:pl-10">
                  <TestimonialCard
                    name={name}
                    title={title}
                    titleclass={titleclass}
                    descriptionclass={descriptionclass}
                    customclass={customclass}
                    bg={bg}
                    avatar={avatar}
                    message={message}
                    designation={designation}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-4 md:mt-10 lg:mt-[60px]">
          <button
            onClick={onPrevButtonClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="transition-all"
          >
            <div className="group relative cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className="transition-colors duration-300 group-hover:fill-white">
                <path d="M42.6787 0.5L59.5 17.3232V59.5H17.3213L0.5 42.6758V0.5H42.6787Z" stroke="white" />
              </svg>
              <span className='absolute top-[18px] left-[18px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="white" className="transition-colors duration-300 group-hover:fill-black" />
                </svg>
              </span>
            </div>

          </button>
          <button
            onClick={onNextButtonClick}
            className="transition-all"
          >
            <div className="group relative cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="transition-colors duration-300 group-hover:fill-white"
              >
                <path
                  d="M42.6787 0.5L59.5 17.3232V59.5H17.3213L0.5 42.6758V0.5H42.6787Z"
                  stroke="white"
                  className=""
                />
              </svg>
              <span className="absolute top-[18px] left-[18px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-colors duration-300"
                >
                  <path
                    d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-black"
                  />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;