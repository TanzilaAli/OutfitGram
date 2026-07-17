import Navbar from "../components/Navbar";
import OutfitCard from "../components/OutfitCard";
import CategoryBar from "../components/CategoryBar";
import outfits from "../data/outfits";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-12">

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">

          <p className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            ✨ Your Daily Fashion Diary
          </p>

          <h1 className="text-6xl font-extrabold mt-8">
            Post Your <span className="text-pink-500">Vibe</span>,
            <br />
            Not Just Your Outfit.
          </h1>

          <p className="text-gray-600 text-lg mt-6">
            Discover daily fit checks, aesthetic vibes, favorite songs,
            accessories and fashion inspiration from creators around the world.
          </p>
<div className="flex justify-center gap-4 mt-10">

  <Link href="/explore">
    <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition">
      Explore Fits
    </button>
  </Link>

  <Link href="/post">
    <button className="border border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition">
      Share Your Fit
    </button>
  </Link>

</div>
          
        </section>
        <SearchBar />

        <CategoryBar />

        {/* Trending Cards */}
        <section className="max-w-7xl mx-auto mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Trending Fit Checks 🔥
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outfits.map((outfit) => (
              <OutfitCard
                key={outfit.id}
                username={outfit.username}
                mood={outfit.mood}
                vibe={outfit.vibe}
                song={outfit.song}
                food={outfit.food}
                image={outfit.image}
                avatar={outfit.avatar}
              />
            ))}
          </div>

        </section>

      </main>
    </>
  );
}