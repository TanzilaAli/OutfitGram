import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 px-6 py-12">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <Image
              src="/images/avatar1.jpg"
              alt="Profile"
              width={140}
              height={140}
              className="rounded-full"
            />

            <div>

              <h1 className="text-4xl font-bold">
                Tanzila
              </h1>

              <p className="text-gray-500 mt-2">
                Fashion • Lifestyle • Daily Vibes
              </p>

              <div className="flex gap-8 mt-6">

                <div>
                  <h2 className="text-2xl font-bold">18</h2>
                  <p className="text-gray-500">Posts</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">2.4K</h2>
                  <p className="text-gray-500">Followers</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">640</h2>
                  <p className="text-gray-500">Following</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}