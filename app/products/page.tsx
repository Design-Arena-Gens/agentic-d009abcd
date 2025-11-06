import { getAllProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const products = getAllProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold">All Products</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
