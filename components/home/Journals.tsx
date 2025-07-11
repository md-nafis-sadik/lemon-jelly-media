'use client';

import TextFadeIn from "../animations/TextFadeIn";

const projects = [
  {
    title: 'Trends to Watch in 2025',
    subtitle: 'stay ahead with cutting-edge design trends shaping the digital world.',
    image: '/images/journals/journal-1.jpg',
    link: '#',
    date: 'jun 14, 2025'
  },
  {
    title: 'Transform Your Business',
    subtitle: 'boost your online presence and drive organic traffic with smart SEO strategies.',
    image: '/images/journals/journal-2.jpg',
    link: '#',
    date: 'jun 14, 2025'
  },
  {
    title: 'Strong Digital Identity',
    subtitle: 'create a memorable brand that stands out in a competitive market.',
    image: '/images/journals/journal-3.jpg',
    link: '#',
    date: 'jun 14, 2025'
  }
];

export default function Journals() {
  return (
    <section className="bg-main-50 py-28 px-4 text-white font-poppins">
      <div className='containerX text-center mb-28'>
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="The Jelly Journal"
            extra2ClassName='mr-3'
            className="text-2xl lowercase lg:text-5xl max-w-full lg:text-[64px] font-[700] !leading-[1.2] text-text-900 tracking-wide mb-6"
          />
        </div>
        <p className='text-text-700 text-2xl'>insights, tips, and updates straight from our experts</p>
      </div>
      <div className="containerX mx-auto flex flex-col gap-6">

        {/* Second Row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <ProjectCard key={index + 2} {...item} />
          ))}
        </div>

        {/* See All */}
        <div className="text-center mt-10">
          <a href="#" className="text-2xl font-bold text-text-900 transition">
            see all <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  date,
  title,
  subtitle,
  image,
}: {
  date: string;
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

        className="w-full h-[560px] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(22, 22, 22, 0.60) 71.92%, #0A0A0A 92.5%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="absolute inset-0 bg-opacity-40 opacity-100 transition-opacity duration-300" />

      {/* Info */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="py-2 px-5 rounded-full bg-main-500 inline-block text-text-900 mb-6">{date}</div>
        <h3 className="text-[38px] font-semibold mb-6 leading-10">{title}</h3>
        <p className="text-base text-gray-300">{subtitle}</p>
      </div>

      {/* Hover Icon */}
      {/* <div className="absolute bottom-8 right-8 z-20 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="w-[80px] h-[80px] bg-yellow-400 text-black flex items-center justify-center shadow-lg" style={{
          clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)'
        }}>
          →
        </div>
      </div> */}
    </a>
  );
}
