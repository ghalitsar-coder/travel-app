import HeaderContent from "components/HeaderContent";
import React from "react";
import DecoreSwirl1 from "assets/decore-swirl-style-1.svg";
import Image from "next/image";
import { MdNearMe } from "react-icons/md";

interface IDestinateProps {
  imgSrc: string;
  place: string;
  price: string;
  time: string;
}

const TopSelling = () => {
  console.log("IM TopSelling");

  const destinations: IDestinateProps[] = [
    {
      imgSrc: "/images/destination-1.jpg",
      place: "Rome, Italy",
      price: "5,42",
      time: "10",
    },
    {
      imgSrc: "/images/destination-2.jpg",
      place: "London, UK",
      price: "4,2",
      time: "12",
    },
    {
      imgSrc: "/images/destination-3.jpg",
      place: "Full Europe",
      price: "15",
      time: "28",
    },
  ];
  return (
    <section id="top-selling" className="mb-28">
      <div className="max-w-7xl mx-auto relative px-4 ">
        <HeaderContent
          className=""
          title="Top Selling"
          subtitle="Top Destinations"
        />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-center gap-5 relative md:pr-10  ">
          <div className="absolute w-[96px] h-[252px] bottom-10 right-0 ">
            <DecoreSwirl1 className="stroke-gray-500" />
          </div>
          {destinations.map((item) => (
            <DestinationCard key={item.place} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;

function DestinationCard({ imgSrc, place, price, time }) {
  return (
    <div className=" px-4  z-20  ">
      <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col ">
        <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96 ">
          <Image objectFit="cover" layout="fill" src={imgSrc} />
        </div>
        <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500 ">
          <div className="pt-7 text-lg px-5 flex justify-between ">
            <h6>{place}</h6>
            <h6>${price}k</h6>
          </div>
          <div className="pt-4 px-5 flex items-center">
            <MdNearMe className="text-[20px] mr-2 " />
            <span>{time} Days Trip</span>
          </div>
        </div>
      </div>
    </div>
  );
}
