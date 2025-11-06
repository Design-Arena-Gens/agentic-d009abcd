import Link from 'next/link';
import type { Product } from '@/types/product';
import { formatPrice } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-gray-600">{product.tags?.[0] ?? 'Apparel'}</p>
          </div>
          <div className="text-right font-semibold">{formatPrice(product.price)}</div>
        </div>
      </Link>
    </div>
  );
}
