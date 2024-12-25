import AboutUS from "@/Components/Info/AboutUS";
import Members from "@/Components/Info/Members";
import React from "react";

const members = [
  {
    name: "Lalu Amrullah",
    Pedi: "Statistika",
    role: "Ketua KKN Bina Desa",
    src: "/image/LALU MUH AMRULLAH - KETUA.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Yunita Uswatun Azizah",
    Pedi: "Matematika",
    role: "Sekertaris KKN Bina Desa ",
    src: "/image/Yunita Huswatun Azizah, sekertaris .jpg",
    instagram: "Amrullah",
  },
  {
    name: "Dewi Wulan Sari",
    Pedi: "Pendidikan Informatika",
    role: "Bendahara KKN Bina Desa ",
    src: "/image/Dewi Wulan Sari- Bendahara.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Syaiful Haris Nawawi",
    Pedi: "Pendidikan Informatika",
    role: "Humas KKN Bina Desa",
    src: "/image/Syaiful Haris Nawawi-Humas.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Putri Rifi Natania",
    Pedi: "Statistika",
    role: "Humas KKN Bina Desa",
    src: "/image/Putri Rifi Natania (HUMAS).jpg",
    instagram: "Amrullah",
  },
  {
    name: "Almum Tahanah",
    Pedi: "Pendidikan Informatika",
    role: "Humas KKN Bina Desa",
    src: "/image/AL-MUMTAHANAH (HUMAS).jpeg",
    instagram: "Amrullah",
  },
  {
    name: "Rona Firda",
    Pedi: "Pendidikan Informatika",
    role: "Acara KKN Bina Desa",
    src: "/image/rona.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Ririn Robiatul Husnaeni",
    Pedi: "Pendidikan Statistika",
    role: "Acara KKN Bina Desa",
    src: "/image/Ririn Robiatul Husnaeni-Acara.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Siti Warnia Wati",
    Pedi: "Pendidikan Informatika",
    role: "PDD KKN Bina Desa",
    src: "/image/Siti Warnia Wati_PDD.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Syarifatul Uyun",
    Pedi: "Pendidikan Informatika",
    role: "PDD KKN Bina Desa",
    src: "/image/Syarifatul Uyun_PDD.jpg",
    instagram: "Amrullah",
  },
  {
    name: "Rina Agustin",
    Pedi: "Pendidikan Informatika",
    role: "PDD KKN Bina Desa",
    src: "/image/Rina Agustina _ PDD.jpg",
    instagram: "Amrullah",
  },
];

export default function page() {
  return (
    <div className="lg:flex justify-center mx-auto">
      <AboutUS />
      <Members data={members} />
    </div>
  );
}
