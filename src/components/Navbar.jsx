import { useState } from 'react';
import { CalendarDays, Menu, X, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
              <CalendarDays size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight">EventSphere</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900 transition">Features</a>
            <a href="#explore" className="text-sm text-gray-700 hover:text-gray-900 transition">Explore</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 transition">
              <LogIn size={16} />
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow hover:opacity-95 transition">
              <UserPlus size={16} />
              Create account
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex p-2 rounded-md hover:bg-gray-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="grid gap-1">
              <a onClick={() => setOpen(false)} href="#features" className="px-2 py-2 rounded-md hover:bg-gray-50">Features</a>
              <a onClick={() => setOpen(false)} href="#explore" className="px-2 py-2 rounded-md hover:bg-gray-50">Explore</a>
              <a onClick={() => setOpen(false)} href="#about" className="px-2 py-2 rounded-md hover:bg-gray-50">About</a>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                <LogIn size={16} />
                Sign in
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow hover:opacity-95 transition">
                <UserPlus size={16} />
                Create account
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
