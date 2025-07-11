'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils'; // Optional helper for conditional classnames
import TextFadeIn from '../animations/TextFadeIn';

const services = [
  {
    title: 'graphic design',
    desc: 'pixel-perfect creativity, brand-defining impact.',
    icon: '🎨',
    active: true,
  },
  {
    title: 'media design',
    desc: 'crafting compelling visuals that captivate and engage.',
    icon: '📽️',
  },
  {
    title: 'brand design',
    desc: 'creating distinctive brand identities that resonate with your audience.',
    icon: '🏷️',
  },
  {
    title: 'motion magic',
    desc: 'transforming ideas into dynamic stories that move your audience.',
    icon: '🎬',
  },
  {
    title: 'break through campaigns',
    desc: 'launching innovative campaigns that disrupt and inspire.',
    icon: '🚀',
  },
  {
    title: 'marketing service',
    desc: 'driving growth with strategic marketing that connects and converts.',
    icon: '📈',
  },
];

export default function ServiceCardGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-main-50 py-28 px-4 md:px-10 text-black text-center font-poppins">
      <div className='text-center mb-28'>
          <div className="flex justify-center items-center w-full mx-auto">
            <TextFadeIn
              text="Things We’re Really Good At"
              extra2ClassName='mr-3'
              className="text-2xl lowercase lg:text-5xl max-w-full lg:text-[64px] font-[700] !leading-[1.2] text-text-900 tracking-wide mb-6"
            />
          </div>
          <p className='text-text-700 text-xl'>Pick your flavor — we’ll shake up the strategy and serve it fresh.</p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[60px] containerX mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'relative pt-32 pb-6 px-6 rounded-xl transition-all duration-300 cursor-pointer text-left shadow-lg transform',
              activeIndex === index
                ? 'bg-main-500 text-black'
                : ' hover:bg-main-100',
              'hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]'
            )}
          >
            {/* Icon in top-right */}
            <div className="absolute top-[-40px] right-4 text-2xl">
              <div className='relative'>
                <div className={` text-yellow-300  w-[80px] h-[80px] flex items-center justify-center rounded-sm text-sm ${activeIndex === index
                  ? 'bg-white'
                  : ' bg-[#5C5B4F09]'}`} style={{
                    clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)'
                  }}>
                </div>
                <div className="absolute top-1.5 right-1.5 bg-main-500 text-yellow-300 w-[68px] h-[68px] flex items-center justify-center rounded-sm text-sm" style={{
                  clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)'
                }}>
                  {item.icon}
                </div>
              </div>
            </div>

            <h3 className="text-[32px] leading-10 font-bold mb-2 w-20">{item.title}</h3>
            <p className=" text-neutral-700">{item.desc}</p>
          </div>

        ))}
      </div>
    </section>
  );
}
