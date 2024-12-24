import Footer from "@/Components/Template/Footer";
import Product from "@/Components/Template/Product";
import React from "react";

const ProductData = [
  {
    id: 1,
    title: "Keripik Pepaya",
    price: 10000,
    image: "https://example.com/keripik-pepaya.jpg",
    description:
      "Nikmati keripik pepaya yang renyah dan lezat ini. Cocok untuk camilan sehari-hari",
    stock: 100,
  },
  {
    id: 2,
    title: "Keripik Mangga",
    price: 10000,
    image: "https://example.com/keripik-pepaya.jpg",
    description:
      "Rasakan manisnya keripik mangga yang menggoda selera. Camilan yang tidak boleh dilewatka",
    stock: 100,
  },
  {
    id: 3,
    title: "Keripik Nanas",
    price: 40000,
    image: "https://example.com/keripik-pepaya.jpg",
    description:
      "Keripik nanas yang segar dan renyah, sempurna untuk menemani waktu santai Anda",
    stock: 100,
  },
];
const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-4 text-center p-8">
        <h1 className="text-[32px] text-secondary font-black">
          Yuk Order Keripik Pepaya!
        </h1>
        <p className="text-success text-[14px] leading-relaxed mt-2 max-w-lg mx-auto">
          <span className="font-bold text-secondary bg-bgaccent">
            Bro & Sist
          </span>
          juga bisa pesan produk yang ada, lho! Yuk, jangan sampai ketinggalan!
          Cek dan order sekarang juga, biar bisa nikmatin bareng-bareng! 🎉
        </p>
      </div>
      <div>
        <h2 className="text-[24px] text-secondary font-bold mt-10 mb-4 px-4">
          Produk Kami
        </h2>
        <Product data={ProductData} />
      </div>
      <div>
        <h2 className="text-[24px] text-secondary font-bold mt-10 mb-4 px-4">
          Produk Lainnya
        </h2>
        <Product data={ProductData} />
      </div>
      <div>
        <h2 className="text-[24px] text-secondary font-bold mt-10 mb-4 px-4">
          Produk UMKM Desa Tebaban
        </h2>
        <Product data={ProductData} />
      </div>
      <Footer className={""} />
    </div>
  );
};

export default page;
