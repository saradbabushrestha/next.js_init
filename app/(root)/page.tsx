import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Sarad" },
      _id: 1,
      description: "This is a description",
      image: "https://i.postimg.cc/FHNsG1k5/Meg-Pup-Sticker-copy.jpg",
      category: "Frog",
      title: "Umberella & Frog",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect With Entreprenure{" "}
        </h1>{" "}
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Showing results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={posts?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
