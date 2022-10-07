import React from "react";
import Facebook from "assets/facebook.svg";
import Twitter from "assets/twitter.svg";
import Instagram from "assets/instagram.svg";
import Image from "next/image";

interface ILinks {
  title: string;
  subMenu: string[];
}

const Footer = () => {
  const links: object[] = [
    {
      title: "company",
      subMenu: ["About", "Careers", "Mobile"],
    },
    {
      title: "contact",
      subMenu: ["Help/FAQ", "Press", "Affiliates"],
    },
    {
      title: "More",
      subMenu: ["Airlinefees", "Airline", "Low fare tips"],
    },
  ];
  return (
    <footer id="footer" className="mt-52  pb-12 relative  ">
      <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-6/20  "></div>
      <div className="max-w-7xl mx-auto relative px-4  ">
        <div className="flex flex-wrap gap-y-7  lg:flex-row flex-col  lg:items-center   ">
          <div className="flex-1 self-stretch lg:-translate-y-4  basis-3/12    ">
            <h1 className="text-[44px] tracking-tight font-medium text-[#181E4B] ">
              Jadoo .
            </h1>
            <p className="max-w-[200px] text-[#5E6282] text-sm font-medium ">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <ul className="flex flex-[2] basis-6/12   justify-between">
            {links.map((item: ILinks, idx: number) => (
              <li key={item.title}>
                <h1 className="text-xl font-bold mb-8 capitalize ">
                  {item.title}
                </h1>
                <ul className="text-lg font-normal text-[#5E6282]">
                  {item.subMenu.map((menu) => (
                    <li> {menu} </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="basis-3/12 flex-1    lg:place-items-center grid gap-y-5 ">
            <ul className="flex gap-x-5">
              {[Facebook, Instagram, Twitter].map((Icon, _) => (
                <li
                  key={_}
                  className="w-10 h-10 shadow-md hover:bg-gradient-social  rounded-full flex"
                >
                  <span className="m-auto   ">
                    <Icon className="fill-black   " />
                  </span>
                </li>
              ))}
            </ul>
            <h2 className=" text-xl text-[#5E6282] ">Discover our app </h2>
            <div className="flex items-center -ml-2 sm:ml-0 gap-x-2">
              <Image
                layout="fixed"
                width={107}
                height={35}
                objectFit="contain"
                src={"/images/apple.png"}
              />
              <Image
                layout="fixed"
                width={107}
                height={35}
                objectFit="contain"
                src={"/images/google.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
