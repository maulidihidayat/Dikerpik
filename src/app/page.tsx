import Smile from "@/Components/Icon/Smile";
import ImageSwippe from "@/Components/Info/ImageSwippe";
import Cover from "@/Components/Template/Cover";
import Youtube from "@/Components/Template/Youtube";
import Image from "next/image";

const InfoImage = [
  {
    id: 1,
    image: "/image/image1.jpg",
    title: "Sosialiasi Pembuatan Keirpik Pepaya",
  },
  {
    id: 2,
    image: "/image/gambar4.jpg",
    title: "Demontrasi Pembuatan Keirpik Pepaya Kepada Masyarakat",
  },
  {
    id: 3,
    image: "/image/gambar3.jpg",
    title: "Foto bersama masyarakat desa tebaban usai kegiatan sosialisasi",
  },
  {
    id: 4,
    image: "/image/produksi1.jpg",
    title: "Proses Penggorengan keripik pepaya",
  },
  {
    id: 5,
    image: "/image/produksi2.jpg",
    title: "Proses pembuatan keripik pepaya : Pencampuran tepung pada keripik papaya",
  },
  {
    id: 6,
    image: "/image/produksi3.jpg",
    title: "Proses pembalutan tepung pada keripik pepaya",
  },
  {
    id: 7,
    image: "/image/gambar5.jpg",
    title: "Demostasi pembuatan keripik pepaya pada masyarakat desa tebaban",
  },
  {
    id: 8,
    image: "/image/gambar6.jpg",
    title: "Kolaborasi pembuatan keripik pepaya bersama KKN PGPAUD Universitas Hamzanwadi",
  },
  {
    id: 9,
    image: "/image/gambar7.jpg",
    title: "Demostasi pembuatan keripik pepaya pada masyarakat desa tebaban",
  },
];
export default function Home() {
  return (
    <div>
      <Cover />
      <div
        className="p-5 border-b-4 border-secondary bg-primary mt-10"
        id="section2"
      >
        <h1 className="text-[18px] text-white font-semibold text-center">
          Bro & Sist Produk ini sudah didukung oleh :
        </h1>
        <div className="flex justify-center gap-4 mt-2 fle">
          <Image
            src={"/image/logo.png"}
            alt="logoFmipa"
            width={50}
            height={50}
          />
          <Image
            src={"/image/Fmipa.png"}
            alt="logoFmipa"
            width={50}
            height={50}
          />
          <Image
            src={"/image/logoKKNN.jpg"}
            alt="logoFmipa"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="p-8 flex flex-col items-center ">
        <Smile
          height="100"
          width="100"
          fill=""
          lineColor=""
          className="flex justify-center items-center mx-auto"
        />
        <h2 className="text-[24px] lg:text-3xl font-black text-center text-secondary">
          Bingung mikirin cemilan yang enak dan murah meriah? Tenang aja ada
          <span className="text-primary"> keripik pepaya</span>!
        </h2>
        <p className="text-md lg:text-lg text-center text-secondary">
          Keripik Pepaya selalu ready kapanpun dan di manapun, bro & sist
          berada! Pas banget buat kalian yang lagi nyari cemilan enak, murah
          meriah, dan pastinya bikin hari-hari makin asik.
        </p>
      </div>

      <div className="mt-10 mb-10 p-2">
        <h1 className="text-[24px] lg:text-3xl text-secondary font-black text-center mb-4">
          Sosialisasi pembuatan{" "}
          <span className="text-primary">keripik pepaya</span> Kepada Masayakat
          Desa Tebaban
        </h1>
        <ImageSwippe data={InfoImage} />
      </div>

      <div className="mt-10 mb-20 ">
        <h1 className="text-[24px] lg:text-3xl text-secondary font-black text-center mb-4">
          Video pembuatan <span className="text-primary">keripik pepaya</span>{" "}
          di Youtube
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 p-4 lg:p-10">
          <Youtube src="https://www.youtube.com/embed/a_iQqN1Hp74?si=SzqA2tB5KhmzLnZZ" />
          <Youtube src="https://www.youtube.com/embed/FwTBVTioFm0?si=hUuxx0X-dH0LE2gp" />
          <Youtube src="https://www.youtube.com/embed/a_iQqN1Hp74?si=SzqA2tB5KhmzLnZZ" />
          <Youtube src="https://www.youtube.com/embed/FwTBVTioFm0?si=hUuxx0X-dH0LE2gp" />
        </div>
      </div>
    </div>
  );
}
