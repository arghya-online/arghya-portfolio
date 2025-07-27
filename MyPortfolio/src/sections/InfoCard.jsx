import React from 'react';
export default function InfoCard({ label, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-md">
      <p className="text-xs uppercase tracking-widest text-gray-500">{label}</p>
      <p className="text-base md:text-lg mt-1 font-semibold">{value}</p>
    </div>
  );
}
