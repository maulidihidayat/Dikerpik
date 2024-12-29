"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const ProductData = [
  {
    id: "cc3ceaf2-84cf-4d9d-a36a-50507794dbaa",
    title: "Keripik Pepaya",
    subtitle: "Rasa Original",
    price: 10000,
    image: "/image/prouduct.jpg",
    description: "Nikmati keripik pepaya yang renyah dan lezat ini.",
    whatsappNumber: "62087763214718", // Nomor WhatsApp pemilik produk
  },
  {
    id: "5332d234-b7b9-4793-9428-feef95bedeec",
    title: "Keripik Pepaya",
    subtitle: "Rasa Balado",
    price: 10000,
    image: "/image/product2.jpg",
    description: "Rasakan manisnya keripik mangga yang menggoda selera.",
    whatsappNumber: "62087763214718", // Nomor WhatsApp pemilik produk
  },
  {
    id: "d1e2f3a4-b5c6-7890-abcd-ef1234567890",
    title: "Keripik Pepaya Rasa Jagung",
    subtitle: "Rasa Jagung",
    price: 40000,
    image: "/image/prouduct.jpg",
    description: "Keripik nanas yang segar dan renyah.",
    whatsappNumber: "62087763214718", // Nomor WhatsApp pemilik produk
  },
];

const ProdukUMKM = [
  {
    id: "1fa9c17c-83df-443d-9cae-65ed1a23a42f",
    title: "Jasuke",
    subtitle: "Rasa Jagung",
    price: 10000,
    image: "/image/jasuke.jpg",
    description:
      "Minuman Ice penghilang dahaga disaat cuaca panas dan rasanya yang manis bisa menghilangkan badmood kamu",
    whatsappNumber: "62087763214718", // Nomor WhatsApp pemilik produk
  },
  {
    id: "d23c133c-91f6-4929-94b2-834fa9de4fe8",
    title: "Kue Bolu ",
    subtitle: "Rasa Coklat Manis",
    price: 5000,
    image: "/image/Bolu.jpg",
    description:
      "Kue Bolu yanng manis dan lezat dapat membantu memperbaiki mood mu dan menemani hari harimu loh",
    whatsappNumber: "62087763214718", // Nomor WhatsApp pemilik produk
  },
  {
    id: "d5eea865-a7ff-4e0b-94da-f36b5efca1a3",
    title: "Martabak Manis",
    subtitle: "Rasa Keju",
    price: 15000,
    image: "/image/martabak.jpg",
    description:
      "Martabak Manis yang manisnya tidak bisa mengalahkan manisnya senyumanmu",
    whatsappNumber: "62087763214718", // Nomor WhatsApp pemilik produk
  },
];
const ProductDetail = () => {
  const { productId } = useParams(); // Menggunakan useParams untuk mendapatkan productId
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");

  // Mencari produk berdasarkan ID dari ProductData dan ProdukUMKM
  const product = [...ProductData, ...ProdukUMKM].find(
    (prod) => prod.id === productId
  );

  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  const handleOrder = () => {
    const message = `Assalamualaikum wr wb, saya ingin memesan ${quantity} ${product.title} (${selectedFlavor}).`;
    const whatsappLink = `https://wa.me/${
      product.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="md:flex max-w-6xl mx-auto mt-4 p-8 gap-10 items-center">
      <div>
        <h1 className="text-[30px] lg:text-[40px] text-secondary font-black text-center">
          {product.title}
        </h1>
        <h2 className="text-lg font-bold">{product.subtitle}</h2>
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={200}
          className="w-full h-auto mt-4 rounded-3xl"
        />
        <p className="text-lg font-bold mt-2">Rp {product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>

      <div>
        <select
          value={selectedFlavor}
          onChange={(e) => setSelectedFlavor(e.target.value)}
          className="mt-2 border rounded p-2 w-full border-2 border-secondary rounded-lg border-b-[4px]"
        >
          <option value="" className="">
            Pilih Keripik
          </option>
          <option value="Rasa Original" className="">
            Rasa Original
          </option>
          <option value="Rasa Balado" className="">
            Rasa Balado
          </option>
          <option value="Rasa Jagung" className="">
            Rasa Jagung
          </option>
        </select>

        <input
          type="text"
          inputMode="numeric"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-2 border rounded p-2 w-full border-2 border-secondary rounded-lg border-b-[4px]"
        />

        {/* Tombol untuk memesan produk */}
        <button
          onClick={handleOrder}
          className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-xl border-2 border-secondary border-b-[7px]"
        >
          Pesan Sekarang
        </button>
      </div>
      {/* Dropdown untuk memilih rasa produk */}
    </div>
  );
};

export default ProductDetail;
