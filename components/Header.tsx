"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { state } = useCart();
  const count = state.items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <header className="border-b border-gray-200">
      <div className="container-max flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Agentic Clothing Co.
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <Link href="/products" className="hover:text-black">Products</Link>
            <Link href="/" className="hover:text-black">Home</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative btn btn-secondary">
            <span>Cart</span>
            {count > 0 && (
              <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-brand text-white px-2 text-xs">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
