import Image from "next/image";

type OutfitCardProps = {
  username: string;
  mood: string;
  vibe: string;
  song: string;
  food: string;
  image: string;
  avatar: string;
};

export default function OutfitCard({
  username,
  mood,
  vibe,
  song,
  food,
  image,
  avatar,
}: OutfitCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <Image
        src={image}
        alt={username}
        width={500}
        height={600}
        className="w-full h-80 object-cover"
      />

      <div className="p-5">

        <div className="flex items-center gap-3">

          <Image
            src={avatar}
            alt={username}
            width={45}
            height={45}
            className="rounded-full"
          />

          <div>
            <h2 className="font-bold text-lg">{username}</h2>
            <p className="text-gray-500 text-sm">{vibe}</p>
          </div>

        </div>

        <div className="mt-5 space-y-2 text-gray-700">

          <p>✨ {mood}</p>

          <p>🎵 {song}</p>

          <p>☕ {food}</p>

        </div>

        <div className="flex justify-between mt-6">

          <button className="px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 transition">
            ♡ Like
          </button>

          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            Save
          </button>

        </div>

      </div>

    </div>
  );
}