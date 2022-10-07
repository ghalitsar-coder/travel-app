import DecorePlus1 from "assets/decore-plus-style-1.svg";
import SateliteIllustration from "assets/satelite-illustration.svg";
import SettingsIllustration from "assets/settings-illustration.svg";
import HeaderContent from "components/HeaderContent";
import Image from "next/image";

interface ICatProps {
  title: string;
  text: string;
  imageCat: string | object;
}

function CategoryContent({}) {
  const categories: ICatProps[] = [
    {
      title: "Calculated Weather ",
      text: "Built Wicket longer admire do barton vanity itself do in it.",
      imageCat: <SateliteIllustration />,
    },
    {
      title: "Best Flights",
      text: "Engrossed listening. Park gate sell they west hard for the.",
      imageCat: "/images/plane.png",
    },
    {
      title: "Local Events",
      text: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      imageCat: "/images/mic-illustration.png",
    },
    {
      title: "Customization ",
      text: `We deliver outsourced
        aviation services for
        military customers`,
      imageCat: <SettingsIllustration />,
    },
  ];
  return (
    <div className="flex flex-wrap gap-y-4 text-gray-900">
      {categories.map((item: ICatProps, idx: number) => (
        <CardContent key={item.title} {...item} idx={idx} />
      ))}
    </div>
  );
}

function CardContent({ title, text, imageCat: ImageCat, idx }) {
  const checkIndex = (index: number, type: string) => {
    if (type === "image") {
      if (index === 0) {
        return "translate-y-1/2 -right-11";
      } else if (index === 1) {
        return "-top-2 -left-1";
      } else if (index === 2) {
        return "translate-y-1/2 -top-3 -right-7";
      } else if (index === 3) {
        return "translate-y-1/2 -right-11";
      }
    }
    if (type === "layer") {
      if (index === 0) {
        return "bottom-5 rounded-tl-lg left-5 rounded-br-2xl rounded-bl-md";
      } else if (index === 1) {
        return "-right-9 bottom-8 rounded-tl-md rounded-br-lg rounded-bl-2xl";
      } else if (index === 2) {
        return "top-5 rounded-tr-2xl left-2 rounded-bl-2xl";
      } else if (index === 3) {
        return "bottom-5 rounded-tr-lg left-5 rounded-bl-2xl rounded-br-md";
      }
    }
  };
  return (
    <div className="flex-1 basis-3/12 px-8">
      <div className="relative transition-all duration-300 group  hover:shadow-great grid place-items-center text-center bg-white rounded-[36px]   ">
        <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-lg w-28 h-28   "></div>
        <div className="relative mb-6 inline-flex h-28">
          <div
            className={`z-10 absolute ${checkIndex(
              idx,
              "image"
            )} -translate-x-1/2  `}
          >
            {typeof ImageCat === "string" ? (
              <>
                <Image
                  src={ImageCat}
                  layout="fixed"
                  width={ImageCat.includes("plane") ? 132 : 40}
                  height={ImageCat.includes("plane") ? 133 : 69}
                  objectFit="contain"
                />
              </>
            ) : (
              <div className="w-[50px] h-[50px] ">{ImageCat}</div>
            )}
          </div>
          <div
            className={`absolute ${checkIndex(
              idx,
              "layer"
            )} -translate-x-1/2 bg-accent-4  rounded-tr-md   w-12 h-12 `}
          ></div>
        </div>
        <h4 className="text-xl mb-3 ">{title}</h4>
        <h5 className="px-8 mb-8 text-sm ">{text} </h5>
      </div>
    </div>
  );
}

function Category({}) {

  return (
    <section className="mb-32">
      <div className="max-w-7xl mx-auto relative px-4 ">
        <div className="absolute w-36 h-36 lg:-right-10 -top-10 ">
          <DecorePlus1 className="decore-plus-style-1" />
        </div>
        <HeaderContent className='' title="Category" subtitle="We Offer Best Services" />
        <CategoryContent />
      </div>
    </section>
  );
}

export default Category;
