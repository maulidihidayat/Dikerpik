import React from "react";
import Smile from "../Icon/Smile";
import Button from "../Info/Button";

interface ProductProps {
  title: string;
  description: string;
  price: number;
  href: string;
}

interface ProductData {
  data?: Array<ProductProps>;
}

const Product = ({ data }: ProductData) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-col xl:grid-cols-3 gap-4 p-6 mx-auto items-center ">
      {data?.map((e: ProductProps, i: number) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center mx-auto p-4 lg:p-6 border-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:items-center shadow-md rounded-3xl border-secondary bg-bgproduk"
        >
          <Smile fill="" height="50" width="50" lineColor="" className="mb-4" />
          <h3 className="text-[20px] sm:text-[26px] md:text-[28px] lg:text-[24px] text-secondary font-bold text-center">
            {e.title}
          </h3>
          <p className="text-success text-[16px] sm:text-[18px] md:text-[20px] lg:text-[14px] text-center leading-relaxed mt-2 max-w-lg mx-auto">
            {e.description}
          </p>
          <p className="mt-2 text-md lg:text-sm font-bold text-success">
            Rp. {e.price}
          </p>
          <a
            href={e.href}
            target="_blank"
            className="mt-4"
          >
            <Button name="Order Sekarang" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Product;
