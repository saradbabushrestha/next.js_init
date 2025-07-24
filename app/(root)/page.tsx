// import Hello from "../components/hello";

// export default function Home() {
//   console.log("What am i doing? -- SERVER");
//   return (
//     <>
//       <h1 className="text-3xl">Welcome to Next.js</h1>
//       <Hello />
//     </>
//   );
// }
export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");
  const albums = await response.json();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
        {albums.map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition t..."
          >
            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
            <p>Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
