export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number; // in cents
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  tags?: string[];
};

export type CartItem = {
  key?: string; // derived
  productId: string;
  name: string;
  price: number; // in cents
  image: string;
  size?: string;
  color?: string;
  quantity: number;
};

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(cents / 100);
}
