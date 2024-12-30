import Button from "@/Components/Info/Button";
import Image from "next/image";

type stores = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
};

export default async function storePage() {
  const url = await fetch("https://fakestoreapi.com/products");
  const store = await url.json();
  console.log(store);
  return (
    <div className="grid grid-cols-3 gap-5 p-8">
      {store.map((store: stores) => {
        return (
          <div key={store.id} className="max-w-md mb-10 p-10 bg-white shadow-lg rounded-3xl">
            <p className="font-bold uppercase">{store.category}</p>
            <h2>{store.title}</h2>
            <Image src={store.image} alt={store.title}  width={200} height={200} className="mx-auto"/>
            <p>{store.description}</p>
            {/* <p>{store.price}</p> */}
            {/* <p>{store.rating}</p> */}
            <Button name={"See more"}/>
          </div>
        );
      })}
    </div>
  );
}
