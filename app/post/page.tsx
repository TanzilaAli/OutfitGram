import Navbar from "../../components/Navbar";

export default function PostPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 flex justify-center items-center px-6 py-12">

        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-xl">

          <h1 className="text-4xl font-bold text-center mb-8">
            Share Your Fit
          </h1>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              placeholder="Today's Mood"
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              placeholder="Your Vibe"
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              placeholder="Favorite Song"
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              placeholder="Favorite Drink / Food"
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="file"
              className="w-full border border-pink-200 rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-semibold transition"
            >
              Upload Fit
            </button>

          </form>

        </div>

      </main>
    </>
  );
}