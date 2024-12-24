import React from "react";
import Image from "next/image";
import ElementMove from "../Icon/ElementMove";
import Button from "../Info/Button";
import Link from "next/link";

const Cover = () => {
  return (
    <div>
      <div className="relative mb-4 w-64 h-64 mx-auto mt-8">
        <Image
          src={"/image/logoPAPAYA.png"}
          alt={"logo"}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl transition duration-300 ease-in-out"
        />
      </div>
      <div className="px-6">
        <h3 className="text-4xl font-bold text-secondary">Cemilan asik</h3>
        <h3 className="text-4xl font-bold text-secondary">dikala boring?</h3>
        <h3 className="text-3xl font-bold text-primary">
          keripik pepaya solusinya!
        </h3>
        <ElementMove fill="" height="" lineColor="" width="" className="mb-8" />
        <h3 className="mt-4 font-bold text-[14px] text-success">
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
