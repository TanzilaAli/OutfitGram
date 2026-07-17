import OutfitCard from "../../components/OutfitCard";
import outfits from "../../data/outfits";
import Navbar from "../../components/Navbar";
export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pink-50 px-6 py-12">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">
            Explore Fits
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Discover today's trending fashion inspirations.
          </p>

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

        </div>

      </main>
    </>
  );
}