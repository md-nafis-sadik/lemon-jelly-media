'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextFadeIn from '../animations/TextFadeIn'
import AnimatedText from '../ui/AnimatedTitle'
import { GradientButton } from '../ui/gradient-button'
import Image from 'next/image'
import { DownloadAppIcon, images } from '@/services'
import Link from 'next/link'
import HeaderButton from '../shared/HeaderButton'
import CustomButton from '../shared/CustomButton'
import CustomButtonY from '../shared/CustomButtonY'

gsap.registerPlugin(ScrollTrigger)

const HeroHome = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const textBlockRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from bottom
      gsap.fromTo(
        textBlockRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='relative min-h-screen pt-[40%] sm:pt-[25%] md:pt-[20%] lg:pt-[15%] pb-[10%] font-poppins overflow-hidden'>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-[100vw] h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />

        </video>
        {/* Overlay to darken the video and make text more readable */}

        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)'
        }} />
      </div>

      <section className="containerX relative font-[600] w-full pt-10 lg:pt-0 pb-0 px-0 lg:px-16 2xl:px-20 z-10 flex flex-col justify-center items-center h-full">
        <div className="flex flex-col lg:flex-row px-4">
          <div ref={textBlockRef} className="flex flex-col justify-center items-center w-full pb-10 z-10">
            <div className='flex space-x-2 flex-wrap justify-center'>
              <div className='flex space-x-0'>
                <TextFadeIn text="LEM" extra2ClassName="mr-0" className="text-center text-5xl lg:text-[100px] xl:text-[120px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine' />
                <span>
                  <Image src={images.Oimage} alt="Logo" className="w-[34px] h-[34px] lg:w-[67px] lg:h-[67px] xl:w-[84px] xl:h-[84px] mt-[10px] lg:mt-[24px]" />
                </span>
                <TextFadeIn text="N" className="text-center text-5xl lg:text-[100px] xl:text-[120px] font-normal !leading-[1.2]  text-main-500" extraClassName='!font-mostculine' />
              </div>


              <TextFadeIn text="JELLY" className="text-center text-5xl lg:text-[100px] xl:text-[120px] font-normal !leading-[1.2]  text-main-500" extraClassName='!font-mostculine' />
              <TextFadeIn text="MEDIA" className="text-center text-5xl lg:text-[100px] xl:text-[120px] font-normal !leading-[1.2] text-main-500" extraClassName='!font-mostculine' />
            </div>
            <TextFadeIn text="Think.   Create.   Inspire." className="text-center text-5xl lg:text-[100px] xl:text-[120px] font-normal !leading-[1.2] mt-3 lg:mt-2 text-white" extraClassName='!font-mostculine' />

            <p className='mt-8 text-center text-text-50 lg:text-left text-sm lg:text-lg max-w-[90%] font-light'>Lemon Jelly is an <span className="font-bold">independent brand-building</span> creative agency. We live on the story side of marketing </p>

            <div className="mt-5 lg:mt-12 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
              <CustomButtonY />
              <CustomButton />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HeroHome