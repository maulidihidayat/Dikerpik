"use client"
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonAll {
  name: string;
}

function Button2({ name }: ButtonAll) {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className="bg-primary text-white border-2 border-b-[7px] border-secondary  rounded-2xl py-4 px-4 md:py-4 md:px-8 ">
      <div className="flex justify-between">
        <div className="mr-2 font-bold">{name}</div>
        <div className="flex items-center">
          {/* <Image src="/icon/arrow-right.png" width={10} height={10} alt="icon" /> */}
        </div>
      </div>
    </button>
  );
}

export default Button2;
