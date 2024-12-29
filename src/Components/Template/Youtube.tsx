import React from "react";

interface youtube {
  src: string;
}

const Youtube = ({ src }: youtube) => {
  return ( 
    <div className="flex items-center justify-center ">
      <iframe
        width="560"
        height="450"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full  lg:w-full  duration-500 transform border-4 border-b-[7px] hover:scale-105 rounded-3xl border-secondary object-cover"
      ></iframe>
    </div>
  );
};

export default Youtube;
