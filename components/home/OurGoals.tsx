import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import TextFadeIn from "../animations/TextFadeIn";

const reviews = [
  {
    img: "/images/partners/partner-1.png",
  },
  {
    img: "/images/partners/partner-2.png",
  },
  {
    img: "/images/partners/partner-3.png",
  },
  {
    img: "/images/partners/partner-4.png",
  },
  {
    img: "/images/partners/partner-5.png",
  },
  {
    img: "/images/partners/partner-6.png",
  },
  {
    img: "/images/partners/partner-7.png",
  },
  {
    img: "/images/partners/partner-8.png",
  },
  {
    img: "/images/partners/partner-9.png",
  },
  {
    img: "/images/partners/partner-10.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6 flex justify-center items-center",
        // light styles
        "border-gray-950/[.1] bg-[#F1F3D4] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      
        <img className="h-[52px]"  alt="" src={img} />
        
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className=" flex-col bg-main-50 py-28  flex justify-center items-center font-poppins">
      <div className='text-center mb-14'>
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Partnered with Greatness"
            extra2ClassName='mr-3'
            className="text-2xl lowercase lg:text-5xl max-w-full lg:text-[64px] font-[700] !leading-[1.2] text-text-900 tracking-wide mb-6"
          />
        </div>

      </div>
      <div className="relative containerX bg-main-50 flex mx-auto flex-col gap-6 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-main-50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-main-50"></div>
      </div>
    </div>
  );
}