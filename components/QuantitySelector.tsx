"use client";

import React from 'react';

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-md border border-gray-300 overflow-hidden">
      <button
        type="button"
        className="px-3 py-2 text-gray-700 hover:bg-gray-50"
        onClick={() => onChange(Math.max(min, value - 1))}
        aria-label="Decrease quantity"
      >
        ?
      </button>
      <input
        type="number"
        className="w-14 text-center py-2 outline-none"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || min)))}
      />
      <button
        type="button"
        className="px-3 py-2 text-gray-700 hover:bg-gray-50"
        onClick={() => onChange(Math.min(max, value + 1))}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
