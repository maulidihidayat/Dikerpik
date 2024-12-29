import Button from '@/Components/Info/Button';
import Image from 'next/image';
import Link from 'next/link';

const ProductData = [
  {
    id: "cc3ceaf2-84cf-4d9d-a36a-50507794dbaa",
    title: "Keripik Pepaya",
    subtitle: "Rasa Original",
    price: 10000,
    image: "/image/prouduct.jpg",
    description: "Nikmati keripik pepaya yang renyah dan lezat ini.",
  },
  {
    id: "5332d234-b7b9-4793-9428-feef95bedeec",
    title: "Keripik Pepaya",
    subtitle: "Rasa Balado",
    price: 10000,
    image: "/image/product2.jpg",
    description: "Rasakan manisnya keripik mangga yang menggoda selera.",
  },
  {
    id: "d1e2f3a4-b5c6-7890-abcd-ef1234567890",
    title: "Keripik Pepaya Rasa Jagung",
    subtitle: "Rasa Jagung",
    price: 40000,
    image: "/image/prouduct.jpg",
    description: "Keripik nanas yang segar dan renyah.",
  },
];

const ProdukUMKM = [
  {
    id: "1fa9c17c-83df-443d-9cae-65ed1a23a42f",
    title: "Jasuke",
    subtitle:"Rasa Jagung",
    price: 5000,
    image: "/image/jasuke.jpg",
    description: "Minuman Ice penghilang dahaga disaat cuaca panas dan rasanya yang manis bisa menghilangkan badmood kamu",
  },
  {
    id: "d23c133c-91f6-4929-94b2-834fa9de4fe8",
    title: "Kue Bolu",
    subtitle: "Rasa Coklat Manis",
    price: 10000,
    image: "/image/Bolu.jpg",
    description: "Kue Bolu yanng manis dan lezat dapat membantu memperbaiki mood mu dan menemani hari harimu loh",
  },
  {
    id: "d5eea865-a7ff-4e0b-94da-f36b5efca1a3",
    title: "Martabak Manis",
    subtitle: "Rasa Keju",
    price: 15000,
    image: "/image/martabak.jpg",
    description: "Martabak Manis yang manisnya tidak bisa mengalahkan manisnya senyumanmu",
  },
];
const ProductList = () => {
  return (
    <div className="max-w-full mx-auto mt-4 p-8">
      <h1 className="text-[30px] lg:text-[40px] text-secondary font-black text-center">
        Yuk Order Keripik Pepaya!
      </h1>
      <h2 className="text-[24px] text-secondary font-bold mt-10 mb-4">
        Produk Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProductData.map((product) => (
          <div key={product.id} className="border-2 border-secondary border-b-[7px] p-4 rounded-3xl bg-bgproduk">
            <Image src={product.image} alt={product.title} width={600} height={200} className='rounded-3xl'/>
            <h3 className="text-2xl text-secondary font-bold mt-2">{product.title}</h3>
            <p className="text-lg text-secondary">{product.subtitle}</p>
            <p className="text-xl font-bold mt-2 text-secondary">Rp {product.price}</p>
            <Link href={`/produk/${product.id}`} className='mt-2'>
              <Button name='Lihat Detail'>
                
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <h2 className="text-[24px] text-secondary font-bold mt-10 mb-4">
        Produk UMKM Desa Tebaban
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProdukUMKM.map((product) => (
          <div key={product.id} className="border-2 border-secondary border-b-[7px] p-4 rounded-3xl bg-bgproduksekunder">
            <Image src={product.image} alt={product.title} width={600} height={200} className='rounded-3xl'/>
            <h3 className="text-2xl text-secondary font-bold mt-2">{product.title}</h3>
            <p className="text-lg text-secondary">{product.subtitle}</p>
            <p className="text-xl font-bold mt-2 text-secondary">Rp {product.price}</p>
            <Link href={`/produk/${product.id}`} className='mt-2'>
              <Button name='Lihat Detail'>
                
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;