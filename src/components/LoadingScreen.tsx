import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    const t2 = setTimeout(() => setHide(true), 2000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="absolute inset-0 -m-8 rounded-full border border-neon-blue/30 animate-spin-slow" />
        <div className="absolute inset-0 -m-12 rounded-full border border-neon-purple/20 animate-spin-slow [animation-direction:reverse]" />
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full glow-pulse glass">
          <span className="font-display text-5xl font-bold neon-text">CR</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;