import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import DecoreIntersect from "assets/decore-intersect-1.svg";
import DecoreTextUnderline from "assets/text-decore-hero.svg";
interface PlaneProps {
  src: string;
  planeClass: string;
}
function HeroBanner({}) {

  return (
    <section className="relative  mb-28">
      <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 ">
        <DecoreIntersect className="fill-accent-4" />
      </span>
      <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10 " />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex lg:flex-nowrap flex-wrap-reverse">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
}
export default HeroBanner;

function LeftSection({}) {
  return (
    <div className="lg:w-6/12 w-full md:pt-52  ">
      <h1 className="text-accent-2 font-bold xl:text-xl text-lg uppercase mb-6">
        Best Destinations around the world
      </h1>
      <h2 className="text-gray-900 font-serif text-5xl xl:text-[84px] leading-snug xl:leading-[89px] tracking-tighter mb-8 ">
        Travel,{" "}
        <span className="relative ">
          {" "}
          enjoy
          <span className="absolute left-0 top-full xl:-mt-8 -ml-9 -z-10 ">
            <DecoreTextUnderline className="w-96 h-3 fill-accent-2 " />
          </span>
        </span>{" "}
        and live a new and full life
      </h2>
      <p className="text-gray-500 max-w-lg leading-8 mb-8 ">
        Built Wicket longer admire do barton vanity itself do in it. Preferred
        to sportsmen it engrossed listening. Park gate sell they west hard for
        the.
      </p>
      <div className="flex">
        <Link href="/">
          <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl  ">
            Find out more
          </a>
        </Link>
        <button className="flex items-center">
          <span className="p-4 mr-6 bg-accent-2 text-white inline-flex items-center justify-center rounded-full shadow-accent-2/30 shadow-[0_15px_30px] ">
            <FaPlay className=" translate-x-[2px] " />
          </span>
          <span className="text-gray-500">Play Demo</span>
        </button>
      </div>
    </div>
  );
}

function PlaneImage({ src, planeClass }: PlaneProps) {
  return (
    <div className={`absolute w-[137px] h-[95px]  ${planeClass} `}>
      <Image layout="responsive" width="100%" height="100%" src={src} />
    </div>
  );
}

function RightSection({}) {
  return (
    <div className="md:w-[784px] w-full h-[764px] pt-40 md:pt-24 relative">
      <PlaneImage src="/images/plane.png" planeClass={"top-32 left-8  z-30"} />
      <div className="relative z-20 -translate-x-6 lg:-translate-x-20 ">
        <Image
          priority
          layout="responsive"
          height="100%"
          width="100%"
          src={"/images/hero-traveller.png"}
        />
      </div>
      <PlaneImage src="/images/plane.png" planeClass={"top-48 right-7 z-10"} />
    </div>
  );
}
