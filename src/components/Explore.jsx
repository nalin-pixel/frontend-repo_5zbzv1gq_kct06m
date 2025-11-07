import { MapPin, Calendar, Clock } from 'lucide-react';

const sample = [
  {
    title: 'Sunset Rooftop Concert',
    city: 'Los Angeles, CA',
    date: 'Sat, Nov 23',
    time: '6:00 PM',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Founders & Funders Mixer',
    city: 'San Francisco, CA',
    date: 'Thu, Dec 5',
    time: '7:30 PM',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Hands-on Ceramic Workshop',
    city: 'Austin, TX',
    date: 'Sun, Dec 8',
    time: '10:00 AM',
    image:
      'https://images.unsplash.com/photo-1604514629567-54bf2fefaa01?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Explore() {
  return (
    <section id="explore" className="py-20 sm:py-28 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Trending this week</h2>
            <p className="mt-3 text-gray-600">Handpicked events people can’t stop talking about.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sample.map((e) => (
            <article key={e.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative h-52 overflow-hidden">
                <img src={e.image} alt="event" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs">
                  <Calendar size={14} />
                  {e.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{e.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><MapPin size={14} /> {e.city}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={14} /> {e.time}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50">Details</button>
                  <button className="px-3 py-2 text-sm rounded-lg bg-gray-900 text-white hover:bg-gray-800">Get tickets</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
