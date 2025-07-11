'use client';

import TextFadeIn from "../animations/TextFadeIn";

const projects = [
  {
    title: 'limoné beverages',
    subtitle: 'branding, graphic design, product campaign',
    image: '/images/project/project-1.jpg',
    link: '#',
    icon: '➡️',
    highlight: true,
  },
  {
    title: 'glow up cosmetics',
    subtitle: 'social media, animation, marketing strategy',
    image: '/images/project/project-2.png',
    link: '#',
  },
  {
    title: 'urban beats',
    subtitle: 'ui/ux design',
    image: '/images/project/project-3.png',
    link: '#',
  },
  {
    title: 'bytetech',
    subtitle: 'brand design, ui assets',
    image: '/images/project/project-4.png',
    link: '#',
  },
  {
    title: 'peach social',
    subtitle: 'media design, content creation',
    image: '/images/project/project-5.png',
    link: '#',
  },
];

export default function ProjectShowcase() {
  return (
    <section className="bg-black py-28 px-4 text-white font-poppins">
      <div className='containerX text-center mb-28'>
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Our Works"
            extra2ClassName='mr-3'
            className="text-2xl lowercase lg:text-5xl max-w-full lg:text-[64px] font-[700] !leading-[1.2] text-main-500 tracking-wide mb-6"
          />
        </div>
        <p className='text-text-100 text-2xl'>showcasing our creative expertise and successful projects</p>
      </div>
      <div className="containerX mx-auto flex flex-col gap-6">

        {/* First Row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, 2).map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>

        {/* Second Row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.slice(2).map((item, index) => (
            <ProjectCard key={index + 2} {...item} />
          ))}
        </div>

        {/* See All */}
        <div className="text-center mt-10">
          <a href="#" className="text-2xl font-semibold text-white hover:text-yellow-400 transition">
            see all <span className="ml-1 text-main-500">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <a
      href="#"
      className="relative group overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}

        className="w-full h-[510px] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(22, 22, 22, 0.60) 71.92%, #0A0A0A 92.5%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="absolute inset-0 bg-opacity-40 opacity-100 transition-opacity duration-300" />

      {/* Info */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <h3 className="text-[38px] font-semibold">{title}</h3>
        <p className="text-base text-gray-300">{subtitle}</p>
      </div>

      {/* Hover Icon */}
      <div className="absolute bottom-8 right-8 z-20 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="w-[80px] h-[80px] bg-yellow-400 text-black flex items-center justify-center shadow-lg" style={{
          clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)'
        }}>
          →
        </div>
      </div>
    </a>
  );
}
