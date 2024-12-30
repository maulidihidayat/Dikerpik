type contents = {
  id: number;
  title: string;
  body: string;
};

export default async function contentPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const content = await response.json();
  return (
      <div>
        {content.map((content: contents) => {
        return (
          <div key={content.id}>
            <div className="bg-white shadow-lg px-36 space-y-2 items-center grid grid-cols-4 ">
              <h1>{content.title}</h1>
              <p>{content.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
