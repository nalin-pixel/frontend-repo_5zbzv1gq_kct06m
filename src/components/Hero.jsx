import { Rocket, Star } from 'lucide-react';

export default function Hero({ onSignUp }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/40 via-purple-300/40 to-pink-300/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/40 via-purple-300/40 to-pink-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm">
          <Star className="text-amber-500" size={14} />
          Discover, host, and share unforgettable moments
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Host and Explore Events
          </span>
          <br className="hidden sm:block" />
          that bring people together
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          EventSphere is your hub for concerts, meetups, workshops and more. Create stunning event pages, sell tickets, and reach the right crowd.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#explore" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white shadow hover:bg-gray-800 transition">
            <Rocket size={18} />
            Explore events
          </a>
          <button onClick={onSignUp} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow hover:opacity-95 transition">
            Create your account
          </button>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left max-w-3xl mx-auto">
          {["Music", "Tech", "Arts", "Sports"].map((tag) => (
            <div key={tag} className="rounded-xl border border-black/5 bg-white/70 backdrop-blur p-4 shadow-sm">
              <p className="text-sm text-gray-700">Trending in</p>
              <p className="text-base font-semibold">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
