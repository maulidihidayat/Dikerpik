import React from "react";
import Image from "next/image";
import ElementMove from "../Icon/ElementMove";
import Button from "../Info/Button";
import Link from "next/link";

const Cover = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:items-center lg:p-20 lg:-mt-6" >
      <div className="relative mb-4 w-96 h-96 lg:w-[600px] mx-auto mt-10 lg:-mt-10">
        <Image
          src={"/image/logoPAPAYA.png"}
          alt={"logo"}
          width={630}
          height={630}
          objectFit="cover"
          className="rounded-3xl transition duration-300 ease-in-out"
        />
      </div>
      <div className="px-6 mt-8  ">
        <h3 className="text-4xl lg:text-[56px] font-black text-secondary leading-relaxed">Cemilan asik</h3>
        <h3 className="text-4xl lg:text-[56px] font-black text-secondary ">dikala boring?</h3>
        <h3 className="text-3xl lg:text-[32px] font-black text-primary lg:mt-5">
          keripik pepaya solusinya!
        </h3>
        <ElementMove fill="" height="" lineColor="" width="" className="mb-8" />
        <h3 className="mt-4 font-bold text-[14px] text-success text-pretty">
          Yuk order sekarang juga kripik pepaya, inovasi mahasiswa KKN Bina Desa
          Universitas Hamzanwadi di Desa Tebaban
        </h3>
        <div className="mt-6">
          <Link href={"#section2"} className="mt-4">
            <Button name="Selengkapnya " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
