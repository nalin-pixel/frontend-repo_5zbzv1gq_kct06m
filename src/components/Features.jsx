import { Ticket, Users, Share2, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Ticket,
      title: 'Effortless Ticketing',
      desc: 'Create tiers, offer discounts, and get paid fast with secure checkout.',
    },
    {
      icon: Users,
      title: 'Grow Your Audience',
      desc: 'Email invites, waitlists, and social boosts built-in so you fill seats.',
    },
    {
      icon: Share2,
      title: 'Beautiful Pages',
      desc: 'Stunning, responsive event pages that look great on any device.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      desc: 'Verified hosts, attendee protections, and anti-fraud monitoring.',
    },
  ];

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to run great events</h2>
          <p className="mt-3 text-gray-600">No plugins. No piecing it together. Launch fast with built-in tools.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
