"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart, useCartActions } from '@/context/CartContext';
import { formatPrice } from '@/types/product';

export default function CheckoutPage() {
  const { state } = useCart();
  const { clear } = useCartActions();
  const router = useRouter();

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + shipping;

  const [loading, setLoading] = useState(false);

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clear();
      router.push('/success');
    }, 800);
  }

  if (state.items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-semibold">No items in cart</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <form className="space-y-4 lg:col-span-2" onSubmit={placeOrder}>
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Full name</label>
            <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-600">Address</label>
            <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">City</label>
            <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Postal code</label>
            <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Placing order?' : 'Place order'}
        </button>
      </form>

      <div className="card">
        <h2 className="text-lg font-semibold">Summary</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {state.items.map((i) => (
            <li key={i.key} className="flex justify-between">
              <span>
                {i.name} {i.size ? `(${i.size})` : ''} ? {i.quantity}
              </span>
              <span>{formatPrice(i.price * i.quantity)}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-600">Subtotal</dt>
            <dd className="font-medium">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Shipping</dt>
            <dd className="font-medium">{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
          </div>
          <div className="flex justify-between border-t pt-2">
            <dt className="font-semibold">Total</dt>
            <dd className="font-semibold">{formatPrice(total)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
