import HeaderContent from "components/HeaderContent";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface IUserTesti {
  id: string;
  desc: string;
  author: string;
  role: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>();
  const items: IUserTesti[] = [
    {
      id: "1",
      desc: "Fusce fames nisl volutpat ac justo arcu sociosqu quis tempor felis maecenas turpis fermentum ultricies curae orci si mattis",
      author: "Mike Tayloar",
      role: "Lahore",
    },
    {
      id: "2",
      desc: "Tortor habitasse finibus sem dolor elementum sed quis malesuada leo magna potenti vulputate rhoncus donec auctor maecenas pulvinar pretium",
      author: "Loui Vutton",
      role: "Big Mom",
    },
    {
      id: "3",
      desc: "Fusce fames nisl volutpat ac justo arcu sociosqu quis tempor felis maecenas turpis fermentum ultricies curae orci si mattis",
      author: "Benjamin Franklin",
      role: "German, Stalin",
    },
  ];

  const handleSlide = useCallback(
    (type: string) => (e: any) => {
      if (type === "prev") {
        if (currentIndex > 0) swiperRef?.current?.slidePrev();
      }
      if (type === "next") {
        if (currentIndex < items.length) swiperRef?.current?.slideNext();
      }
    },
    [swiperRef, currentIndex]
  );

  return (
    <section id="testimonials" className="lg:mb-52 mb-96">
      <div className="max-w-7xl mx-auto relative px-4 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <LeftSection
            currentIndex={currentIndex}
            swiperRef={swiperRef}
            items={items}
          />
          <div className=" flex items-center justify-center relative  ">
            <div className="absolute -inset-10 -top-20 ">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCreative,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: { translate: [60, 70, 0] },
                  next: { translate: ["-100%", "-100%", 0] },
                }}
                simulateTouch={false}
                onSlideChange={(s: any) => setCurrentIndex(s.realIndex)}
                onSwiper={(s: any) => {
                  swiperRef.current = s;
                }}
              >
                {items.map((item, idx) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative px-32 pt-20 pb-48  ">
                      <div className="relative">
                        <div className="bg-white shadow-great rounded-xl p-6 relative z-20 ">
                          <span className="w-12 h-12 absolute rounded-full overflow-hidden top-0 left-0 flex-none mr-3   -translate-x-1/2 -translate-y-1/2   ">
                            <Image
                              layout="responsive"
                              width="100%"
                              height="100%"
                              objectFit="cover"
                              src={"https://picsum.photos/200"}
                            />
                          </span>
                          <p className="text-gray-500 mb-8 ">{item.desc}</p>
                          <h6 className="text-gray-900 text-lg   ">
                            {" "}
                            {item.author}{" "}
                          </h6>
                          <h6 className="text-gray-500 text-sm ">
                            {" "}
                            {item.role}{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div className="  hidden md:flex items-center justify-center ">
            <div className="flex  flex-col  ">
              <button
                type="button"
                onClick={handleSlide("prev")}
                className={` w-full h-full  ${
                  currentIndex === 0 ? "text-gray-300" : "text-gray-800"
                }  `}
              >
                <MdKeyboardArrowUp className="pointer-events-none text-2xl  " />
              </button>
              <button
                type="button"
                onClick={handleSlide("next")}
                className={`  w-full h-full  ${
                  currentIndex === items.length - 1
                    ? "text-gray-300"
                    : "text-gray-800"
                }  `}
              >
                <MdKeyboardArrowDown className="pointer-events-none text-2xl  " />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

function LeftSection({ items, currentIndex, swiperRef }) {
  return (
    <div className=" pl-8 lg:pr-20 mb-20 lg:mb-0 z-20 ">
      <HeaderContent
        title="Testimonials"
        subtitle="What people say about Us."
        className="!text-left"
      />
      <ul className="flex gap-x-6 ">
        {items.map((item: IUserTesti, idx: number) => (
          <li
            key={item.id}
            className={` cursor-pointer w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
            } `}
            onClick={() =>
              idx !== currentIndex && swiperRef.current.slideTo(idx)
            }
          ></li>
        ))}
      </ul>
    </div>
  );
}
