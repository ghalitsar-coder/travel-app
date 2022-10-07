import React from "react";
import Logo from "assets/logo.svg";
import Link from "next/link";
const links: string[] = [
  "destinations",
  "hotels",
  "flights",
  "bookings",
  "login",
  "sign-up",
];
const Header = () => {
  return (
    <div className="absolute z-10  w-full py-12 ">
      <header className="max-w-7xl mx-auto xl:px-4 px-2 ">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="w-28">
            <Logo className="logo-style-1" />
          </div>
          <div className="w-auto">
            <ul className="flex items-center">
              {links.map((item, idx) => (
                <li key={idx} className=" ">
                  <Link href={`/${item}`}>
                    <a
                      className={`${
                        item.includes("sign")
                          ? "px-5 py-1 border border-gray-800 rounded-md mx-3"
                          : "xl:px-9 md:px-5"
                      } hidden sm:block text-gray-900 capitalize`}
                    >
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <button className="px-9 text-gray-800 relative">
                  EN
                  <span className="absolute w-2 h-2 ml-1 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2  "></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
