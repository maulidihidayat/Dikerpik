import { FormSarran } from "@/Components/Template/FormSarran";
import React from "react";

export default function Saran() {
  return (
    <div>
      <div className="p-8 mb-10 mt-6 max-w-xl flex flex-col justify-center mx-auto">
        <h1 className="text-[24px] w-full text-secondary font-bold lg:text-center">
          Kritik & Saran untuk Keripik Pepaya
        </h1>
        <p className="text-success text-[14px] leading-relaxed mt-2">
          Hallo bro & sist! 🙌 Kami super excited banget buat dengerin kritik
          dan saran dari kalian semua! Jangan ragu, kasih tahu kami pendapat
          kalian ya! Kita pengen bareng-bareng bikin ini jadi lebih keren!
          Gimana menurut kalian? Yuk, share ide-ide menarik kalian! 🚀🚀
        </p>
        <FormSarran />
      </div>
    </div>
  );
}
