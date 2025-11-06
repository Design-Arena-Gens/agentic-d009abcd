"use client";

import Link from 'next/link';
import { useCart, useCartActions } from '@/context/CartContext';
import { formatPrice } from '@/types/product';
import QuantitySelector from '@/components/QuantitySelector';
import CartSummary from '@/components/CartSummary';

export default function CartPage() {
  const { state } = useCart();
  const { removeItem, updateQuantity } = useCartActions();

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (state.items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">Browse our latest arrivals and start shopping.</p>
        <Link href="/products" className="mt-6 inline-flex btn-primary">Shop products</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-4">
        {state.items.map((item) => (
          <div key={item.key} className="card flex items-center gap-4">
            <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.size ? `Size: ${item.size}` : null} {item.color ? `? Color: ${item.color}` : null}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <QuantitySelector
                  value={item.quantity}
                  onChange={(q) => updateQuantity(item.key!, q)}
                />
                <button className="text-sm text-red-600 hover:underline" onClick={() => removeItem(item.key!)}>
                  Remove
                </button>
              </div>
            </div>
            <div className="text-right font-semibold min-w-[5rem]">{formatPrice(item.price * item.quantity)}</div>
          </div>
        ))}
      </div>
      <div>
        <CartSummary subtotalCents={subtotal} />
      </div>
    </div>
  );
}
