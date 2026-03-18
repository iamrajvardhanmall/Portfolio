import { useEffect, useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-ink-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
          <p className="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return <Home />;
}