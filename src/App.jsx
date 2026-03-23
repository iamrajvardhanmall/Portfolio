import { useEffect, useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-100 transition-opacity duration-500 ease-out dark:bg-ink-950"
             style={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}>
          <div className="flex flex-col items-center gap-4">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-sky-400 border-t-transparent" />
            <p className="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300">
              Loading Portfolio...
            </p>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-500 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Home />
      </div>
    </>
  );
}