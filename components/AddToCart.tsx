"use client";

import { useState } from 'react';
import { useCartActions } from '@/context/CartContext';
import type { Product } from '@/types/product';
import QuantitySelector from '@/components/QuantitySelector';
import Link from 'next/link';

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCartActions();
  const [size, setSize] = useState<string | undefined>(product.sizes?.[0]);
  const [color, setColor] = useState<string | undefined>(product.colors?.[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="space-y-4">
      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Size</label>
          <div className="grid grid-cols-5 gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`border rounded-md py-2 text-sm ${
                  size === s ? 'border-black' : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.colors && product.colors.length > 0 && (
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Color</label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                className={`border rounded-md px-3 py-2 text-sm ${
                  color === c ? 'border-black' : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setColor(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <button type="button" className="btn-primary" onClick={handleAdd}>
          Add to cart
        </button>
        {added && <span className="text-sm text-green-600">Added!</span>}
      </div>

      <div>
        <Link href="/cart" className="text-sm text-brand hover:underline">
          Go to cart
        </Link>
      </div>
    </div>
  );
}
