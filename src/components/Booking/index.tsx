import HeaderContent from "components/HeaderContent";
import React, { ReactNode } from "react";
import SquareIllustration from "assets/square-illustration.svg";
import SwimIllustration from "assets/swim-illustration.svg";
import CarIllustration from "assets/car-illustration.svg";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdApartment, MdFavoriteBorder } from "react-icons/md";

interface IStepsProps {
  title: string;
  subText: string;
  icon: object;
  accent: string;
}

const steps: IStepsProps[] = [
  {
    title: "Choose Destination",
    subText: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Urna, tortor tempus. `,
    icon: <SquareIllustration />,
    accent: "bg-accent-1",
  },
  {
    title: "Make Payment",
    subText: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Urna, tortor tempus. `,
    icon: <SwimIllustration />,

    accent: "bg-accent-2",
  },
  {
    title: "Reach Airport on Selected Date",
    subText: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Urna, tortor tempus. `,
    icon: <CarIllustration />,
    accent: "bg-accent-6",
  },
];

const Booking = () => {
  return (
    <section id="booking" className="mb-28">
      <div className="max-w-7xl mx-auto relative px-4 ">
        <div className="flex">
          <LeftSection steps={steps} />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Booking;

function ListItems({ title, subText, icon: Icon, accent }) {
  return (
    <li className="flex items-center">
      <span
        className={`${accent} rounded-xl flex flex-none text-white items-center justify-center w-12 h-12 p-3 `}
      >
        {Icon}
      </span>
      <div className="flex flex-col ml-4 leading-5 ">
        <h6 className="font-bold mb-1 text-gray-500">{title}</h6>
        <p className="font-normal text-gray-500 ">{subText}</p>
      </div>
    </li>
  );
}

function LeftSection({ steps }) {
  return (
    <div className="w-6/12 pl-8 pr-20">
      <HeaderContent
        title="Easy and fast"
        subtitle="Book your next trip 
            in 3 easy steps"
        className="!text-left"
      />
      <ul className="flex flex-col gap-y-10 pr-10 ">
        {steps.map((item: IStepsProps) => (
          <ListItems {...item} key={item.title} />
        ))}
      </ul>
    </div>
  );
}

function RightSection({}) {
  const icons: ReactNode[] = [<FaLeaf />, <BsMap />, <RiSendPlaneFill />];
  return (
    <div className="w-5/12 flex items-center justify-center ">
      <div className="w-[370px] group relative ">
        <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -top-10 -right-10 bg-accent-7/40 "></div>
        <PopUp />
        <div className="bg-white rounded-2xl w-full h-full relative z-20 shadow-great pt-4 pb-5  ">
          <div className="mx-4 rounded-3xl h-40 relative overflow-hidden mb-6 ">
            <Image
              src="/images/destination-4.jpg"
              layout="fill"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
          <h6 className="font-bold text-lg text-gray-500 px-4 mb-2 ">
            Trip To Greece
          </h6>
          <div className="flex text-gray-500 px-4 mb-4 ">
            <h6 className="">14-29 June</h6>
            <span className="mx-2">|</span>
            <h6 className="">by Robbin joseph</h6>
          </div>
          <div className="flex gap-x-3 mx-4 mb-6 ">
            {icons.map((item, idx) => (
              <span
                key={+idx}
                className="bg-gray-100/90 text-gray-400 rounded-full grid place-items-center w-9 h-9 "
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mx-4 ">
            <MdApartment className="mr-2 text-gray-500" />
            <span className="mr-auto text-gray-500 text-base font-medium  ">
              24 people going
            </span>
            <MdFavoriteBorder className="  text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PopUp({}) {
  return (
    <div className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100 bottom-16 right-0 translate-x-1/2 bg-white rounded-2xl w-[263px] z-30 shadow-great p-4 pr-7 ">
      <div className="flex">
        <span className="w-12 h-12 overflow-hidden rounded-full flex-none mr-3 ">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            src="/images/destination-5.jpg"
          />
        </span>
        <div className="flex flex-col w-full mb-2 ">
          <span className="text-sm text-gray-500 ">Ongoing</span>
          <h6 className="text-gray-900 mb-2 ">Trip to Rome</h6>
          <span className="text-xs mb-1">
            <span className="text-accent-6">40% </span>
            <span className="text-gray-900">completed</span>
          </span>
          <span className="w-full bg-gray-200 h-1 rounded-full overflow-hidden flex ">
            <span className="rounded-full bg-accent-6 w-20 h-full"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
