import Image from "next/image";
import React from "react";

interface imageProps {
  image: string;
  title: string;
}


export default function ImageInfo({image , title} : imageProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  p-2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          style={{ objectFit: "cover" }}
          className="object-cover rounded-3xl border-4 border-secondary border-b-[7px] "
        />
        <div>
          <p className="text-lg lg:text-2xl mt-4 text-center text-secondary">{title}</p>
        </div>
      </div>
    </div>
  );
}
