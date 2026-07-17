export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <input
        type="text"
        placeholder="Search outfits, creators or vibes..."
        className="w-full px-6 py-4 rounded-full border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
      />
    </div>
  );
}