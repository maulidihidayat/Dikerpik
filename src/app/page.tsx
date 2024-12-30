import Smile from "@/Components/Icon/Smile";
import ImageSwippe from "@/Components/Info/ImageSwippe";
import Cover from "@/Components/Template/Cover";
import Youtube from "@/Components/Template/Youtube";
import Image from "next/image";

const InfoImage = [
  {
    id: 1,
    image: "/image/image1.jpg",
    title: "Sosialisasi Pembuatan Keripik Pepaya",
  },
  {
    id: 2,
    image: "/image/gambar4.jpg",
    title: "Demonstrasi Pembuatan Keripik Pepaya Kepada Masyarakat",
  },
  {
    id: 3,
    image: "/image/gambar3.jpg",
    title: "Foto bersama masyarakat desa Tebaban usai kegiatan sosialisasi",
  },
  {
    id: 4,
    image: "/image/produksi1.jpg",
    title: "Proses Penggorengan Keripik Pepaya",
  },
  {
    id: 5,
    image: "/image/produksi2.jpg",
    title: "Proses pembuatan Keripik Pepaya: Pencampuran tepung pada keripik papaya",
  },
  {
    id: 6,
    image: "/image/produksi3.jpg",
    title: "Proses pembalutan tepung pada Keripik Pepaya",
  },
  {
    id: 7,
    image: "/image/gambar5.jpg",
    title: "Demonstrasi pembuatan Keripik Pepaya pada masyarakat desa Tebaban",
  },
  {
    id: 8,
    image: "/image/gambar6.jpg",
    title: "Kolaborasi pembuatan Keripik Pepaya bersama KKN PGPAUD Universitas Hamzanwadi",
  },
  {
    id: 9,
    image: "/image/gambar7.jpg",
    title: "Demonstrasi pembuatan Keripik Pepaya pada masyarakat desa Tebaban",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Cover />
      <div className="p-4 lg:p-5 border-b-4 border-secondary bg-primary mt-14" id="section2">
        <h1 className="text-[18px] text-white font-semibold text-center">
          Bro & Sist, produk ini sudah didukung oleh:
        </h1>
        <div className="flex justify-center gap-4 mt-2">
          <Image src="/image/logo.png" alt="logoFmipa" width={50} height={50} />
          <Image src="/image/Fmipa.png" alt="logoFmipa" width={50} height={50} />
          <Image src="/image/logo pif.png" alt="logoFmipa" width={50} height={50} />
          <Image src="/image/LogoKKNN.jpg" alt="logoFmipa" width={50} height={50} className="rounded-full" />
        </div>
      </div>

      <div className="p-8 flex flex-col items-center">
        <Smile height="100" width="100" fill="" lineColor="" className="flex justify-center items-center mx-auto" />
        <h2 className="text-[24px] lg:text-3xl font-black text-center text-secondary">
          Bingung mikirin cemilan yang enak dan murah meriah? Tenang aja ada
          <span className="text-primary"> keripik pepaya</span>!
        </h2>
        <p className="text-md lg:text-lg text-center text-secondary">
          Keripik Pepaya selalu ready kapanpun dan di manapun, bro & sist berada! Pas banget buat kalian yang lagi nyari cemilan enak, murah meriah, dan pastinya bikin hari-hari makin asik.
        </p>
      </div>

      <div className="mt-10 mb-10 p-2">
        <h1 className="text-[24px] lg:text-3xl text-secondary font-black text-center mb-4">
          Sosialisasi pembuatan <span className="text-primary">keripik pepaya</span> kepada masyarakat desa Tebaban
        </h1>
        <ImageSwippe data={InfoImage} />
      </div>

      <div className="mt-10 mb-20">
        <h1 className="text-[24px] lg:text-3xl text-secondary font-black text-center mb-4">
          Video pembuatan <span className="text-primary">keripik pepaya</span> di YouTube
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 p-4 lg:p-10">
          <Youtube src="https://www.youtube.com/embed/45trvSsXfb0?si=3xWVeX3-4Pzo6M-D" />
          <Youtube src="https://www.youtube.com/embed/bIjs_RKPY-o?si=CsGclatM58kTIemG" />
          <Youtube src="https://www.youtube.com/embed/Tun873hmZ5k?si=MRD5nMSVk0G_eTLJ" />
          <Youtube src="https://www.youtube.com/embed/WvODhYqoxiI?si=ClhISputxNHD1oTS" />
        </div>
      </div>
    </div>
  );
}