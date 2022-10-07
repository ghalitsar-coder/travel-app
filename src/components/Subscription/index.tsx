import React from "react";
import DecorePlus1 from "assets/decore-plus-style-1.svg";
import DecoreElips1 from "assets/decore-elips-style-1.svg";
import { AiOutlineMail } from "react-icons/ai";
import { MdNearMe } from "react-icons/md";

const Subscription = () => {
  return (
    <section id="Subscription" className="mb-8">
      <div className="max-w-7xl mx-auto relative px-4 ">
        <div className="absolute w-36 h-36 lg:-right-20 -bottom-20 -z-10 rotate-90 translate-y-2  ">
          <DecorePlus1 className="decore-plus-style-1" />
        </div>
        <div className=" w-full relative  bg-white ">
          <div className="hidden md:flex absolute z-30 top-0 right-0 w-16 h-16 bg-gradient-to-b from-accent-6/60 to-accent-6  rounded-full -translate-y-1/2 translate-x-1/2  ">
            <MdNearMe className="text-2xl m-auto text-white" />
          </div>
          <div className="bg-accent-3/20 rounded-tl-[120px] rounded-3xl z-20 py-20 mb-8 relative overflow-hidden  ">
            <div className="absolute -z-10 -top-10 -right-20 rotate-180 ">
              <DecoreElips1 className="stroke-accent-6 opacity-10" />
            </div>
            <div className="absolute -z-10 top-1/3 left-4  ">
              <DecoreElips1 className="stroke-accent-6 opacity-10" />
            </div>
            <h6 className="text-gray-500 font-bold text-3xl lg:px-36 px-4  text-center leading-normal mb-10 ">
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h6>
            <form className="flex flex-wrap  px-4  gap-4 justify-center">
              <fieldset className="bg-white border-2 border-transparent focus:border-accent-6  flex items-center gap-x-4 pl-2   ">
                <AiOutlineMail className="text-2xl pl-1" />
                <input
                  type="text"
                  placeholder="Your Email"
                  className=" appearance-none rounded-lg w-96  py-4   focus:outline-none transition duration-300  "
                />
              </fieldset>

              <button
                type="button"
                className="rounded-lg w-full sm:w-fit  text-white bg-gradient-to-b from-accent-2/90 to-accent-2 py-4 px-16   "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
