import { getProductBySlug } from '@/data/products';
import { notFound } from 'next/navigation';
import { formatPrice } from '@/types/product';
import AddToCart from '@/components/AddToCart';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-xl font-semibold">{formatPrice(product.price)}</p>
        <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

        <div className="mt-6">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
