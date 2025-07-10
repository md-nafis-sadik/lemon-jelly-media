import { QuoteIconv3 } from "@/services";
import Image, { StaticImageData } from "next/image";

interface IFTestimonialCard {
  message: string;
  avatar: StaticImageData;
  name: string;
  title: string;
  customclass: string;
  titleclass: string;
  descriptionclass: string;
  bg: string;
  designation: string;
}

const TestimonialCard = ({
  message,
  avatar,
  name,
  designation,
  customclass,
  bg,
  titleclass,
  descriptionclass
}: IFTestimonialCard) => {
  return (
    <div className={`flex h-full rounded-2xl bg-[#101010] flex-col justify-between flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] select-none p-6 lg:p-8`}>
      <div>
        <div className="w-full flex justify-start mb-10">
          <Image
            src={avatar}
            alt="avatar"
            className="w-[42px] md:w-[80px] h-[42px] md:h-[80px] object-cover"
            style={{
              clipPath: 'polygon(0 0, 72% 0, 100% 28%, 100% 100%, 28% 100%, 0 72%)'
            }}
            width={500}
            height={500}
          />
        </div>
        <div className={`text-xs md:text-sm lg:text-xl !leading-[1.6] text-left max-w-full text-text-100`}>
          "{message}"
        </div>
      </div>
      <div className="flex gap-3 items-center mt-10 w-full justify-start">

        <div className="flex flex-col">
          <p className={`text-sm lg:text-[32px] text-text-100 mb-6 font-brittany-signature`}>
            {name}
          </p>
          <p className={`text-xs lg:text-xl text-text-600`}>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
