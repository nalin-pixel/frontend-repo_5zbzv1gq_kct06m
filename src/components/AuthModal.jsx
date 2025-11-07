import { useEffect } from 'react';

export default function AuthModal({ open, onClose, mode = 'signin' }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full h-8 w-8 grid place-items-center hover:bg-gray-100"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form className="mt-4 grid gap-3">
          {mode === 'signup' && (
            <div className="grid gap-1">
              <label className="text-sm text-gray-700">Full name</label>
              <input className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Alex Doe" />
            </div>
          )}
          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Email</label>
            <input type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Password</label>
            <input type="password" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" />
          </div>
          <button type="button" onClick={onClose} className="mt-2 inline-flex justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
            {mode === 'signup' ? 'Create account' : 'Sign in'}
          </button>
          <p className="text-sm text-gray-600 text-center mt-2">
            {mode === 'signup' ? (
              <>
                Already have an account?{' '}
                <button type="button" className="underline" onClick={() => onClose()}>Sign in</button>
              </>
            ) : (
              <>
                New here?{' '}
                <button type="button" className="underline" onClick={() => onClose()}>Create account</button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
