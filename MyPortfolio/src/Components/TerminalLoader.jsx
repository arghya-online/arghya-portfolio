import React, { useEffect, useState } from "react";

export default function TerminalLoader() {
  const [progress, setProgress] = useState(0);
  const [bar, setBar] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const filled = Math.floor(progress / 5);
    const empty = 20 - filled;
    setBar("[" + "#".repeat(filled) + "-".repeat(empty) + "]");
  }, [progress]);

  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center font-mono text-green-400 text-sm sm:text-base">
      <p className="mb-2">Loading blog...</p>
      <p className="mb-1">{bar}</p>
      <p>{progress}%</p>
    </div>
  );
}
