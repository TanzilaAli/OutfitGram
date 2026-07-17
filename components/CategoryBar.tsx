import categories from "../data/categories";

export default function CategoryBar() {
  return (
    <section className="max-w-7xl mx-auto mt-16 px-6">
      <h2 className="text-3xl font-bold mb-6">
        Browse by Style
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-500 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}