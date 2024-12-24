import React from "react";
import Smile from "../Icon/Smile";
import Button from "../Info/Button";

interface ProductProps {
  title: string;
  description: string;
  price: number;
}

interface ProductData {
  data?: Array<ProductProps>;
}

const Product = ({ data }: ProductData) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-6">
      {data?.map((e: ProductProps, i: number) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center mx-auto p-4 border-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:items-center shadow-md rounded-3xl border-secondary bg-bgproduk"
        >
          <Smile
            fill=""
            height="100"
            width="100"
            lineColor=""
            className="mb-4"
          />
          <h3 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-secondary font-bold text-center">
            {e.title}
          </h3>
          <p className="text-success text-[16px] sm:text-[18px] md:text-[20px] text-center leading-relaxed mt-2 max-w-lg mx-auto">
            {e.description}
          </p>
          <p className="mt-2 text-lg font-bold text-success">Rp. {e.price}</p>
          <div className="mt-4">
            <Button name="Order Sekarang" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;