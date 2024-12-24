import Image from 'next/image';

type animes = {
    mal_id : number;
    title: string;
    images: {
        jpg: {
            image_url: string; 
        };
    };
    duration:string;
    rating:string;
    source:string;
    
};


export default async function topAnime() {
  const response = await fetch ("https://api.jikan.moe/v4/top/anime?limit=10");
  const anime = await response.json();
    return (
        <div key={anime.mal_id} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 items-center'>
        {anime.data.map((anime : animes) => {
            return (
                <div className='shadow-lg rounded-3xl border p-6 rounded-lg'>
                    <h1 className='text-md font-bold uppercase'>{anime.title}</h1>
                    <Image src={anime.images.jpg.image_url} alt={anime.title} width={350} height={350} className='w-full max-h-80 object-cover'/>
                    <p>{anime.duration}</p>
                    <p>{anime.rating}</p>
                    <p>{anime.source}</p>
                </div>
            )
        })};
        </div>
    );
}
