import Link from 'next/link';
import { formatPrice } from '@/types/product';

export default function CartSummary({ subtotalCents }: { subtotalCents: number }) {
  const shippingCents = subtotalCents >= 10000 ? 0 : 500;
  const totalCents = subtotalCents + shippingCents;

  return (
    <div className="card">
      <h3 className="text-lg font-semibold">Order summary</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-600">Subtotal</dt>
          <dd className="font-medium">{formatPrice(subtotalCents)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600">Shipping</dt>
          <dd className="font-medium">{shippingCents === 0 ? 'Free' : formatPrice(shippingCents)}</dd>
        </div>
        <div className="flex justify-between border-t pt-2">
          <dt className="font-semibold">Total</dt>
          <dd className="font-semibold">{formatPrice(totalCents)}</dd>
        </div>
      </dl>
      <Link href="/checkout" className="mt-4 w-full btn-primary inline-flex">Proceed to checkout</Link>
      <p className="mt-2 text-xs text-gray-500">Free shipping on orders $100+.</p>
    </div>
  );
}
