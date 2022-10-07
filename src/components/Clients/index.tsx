import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section id="clients" className="mb-8 relative z-[100] ">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex flex-wrap gap-5  ">
          <ClientImage src="/images/image-27.jpg" />
          <ClientImage src="/images/image-28.jpg" />
          <ClientImage src="/images/image-29.jpg" />
          <ClientImage src="/images/image-30.jpg" />
          <ClientImage src="/images/image-31.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Clients;

function ClientImage({ src }: { src: string }) {
  return (
    <div className="flex-1 basis-1/5  px-4">
      <div className="h-20 overflow-hidden px-4 relative grayscale hover:grayscale-0 bg-white hover:-translate-y-1 hover:shadow-great rounded-2xl transitin-all duration-300 ">
        <Image
          alt="client-image"
          src={src}
          layout="fill"
          className="object-none"
        />
      </div>
    </div>
  );
}
