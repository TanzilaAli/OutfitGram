import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="text-3xl font-extrabold text-pink-500 tracking-tight"
        >
          OutfitGram
        </Link>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">

  <li>
    <Link href="/" className="hover:text-pink-500 transition">
      Home
    </Link>
  </li>

  <li>
    <Link href="/explore" className="hover:text-pink-500 transition">
      Explore
    </Link>
  </li>

  <li>
    <Link href="/post" className="hover:text-pink-500 transition">
      Post
    </Link>
  </li>

  <li>
    <Link href="/profile" className="hover:text-pink-500 transition">
      Profile
    </Link>
  </li>

</ul>

      </div>
    </nav>
  );
}