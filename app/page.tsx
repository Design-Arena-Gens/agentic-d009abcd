import Link from 'next/link';
import { getAllProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const products = getAllProducts().slice(0, 4);
  return (
    <div className="space-y-12">
      <section className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <div className="container-max py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Everyday essentials, thoughtfully designed
              </h1>
              <p className="mt-4 text-gray-600">
                Discover premium apparel built for comfort and style. Made to mix, match, and move.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/products" className="btn-primary">Shop now</Link>
                <a href="#featured" className="btn-secondary">View featured</a>
              </div>
            </div>
            <div className="aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden bg-gray-100">
              <img
                src={products[0]?.image}
                alt="Featured apparel"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="container-max">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured products</h2>
          <Link href="/products" className="text-sm text-brand hover:underline">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
