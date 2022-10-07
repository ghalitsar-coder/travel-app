interface IHeadProps {
  title: string;
  subtitle: string;
  className: Boolean | string | any;
}
function HeaderContent({ title, subtitle, className }: IHeadProps) {
  return (
    <div className={`text-center flex flex-col mb-16 ${className} `}>
      <h3 className="capitalize text-lg mb-2 text-gray-500 ">{title}</h3>
      <h3 className="font-serif text-5xl  text-gray-900 leading-snug ">
        {subtitle}
      </h3>
    </div>
  );
}

export default HeaderContent;
