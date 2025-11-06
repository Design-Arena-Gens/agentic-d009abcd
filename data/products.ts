import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'tee-classic-black',
    slug: 'classic-black-tee',
    name: 'Classic Black Tee',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    description: 'A premium cotton tee with a modern fit and all-day comfort.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    tags: ['tops', 'tees']
  },
  {
    id: 'hoodie-cozy-gray',
    slug: 'cozy-gray-hoodie',
    name: 'Cozy Gray Hoodie',
    price: 6900,
    image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop',
    description: 'Stay warm with our plush fleece-lined hoodie for any season.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy'],
    tags: ['tops', 'hoodies']
  },
  {
    id: 'jeans-indigo-slim',
    slug: 'indigo-slim-jeans',
    name: 'Indigo Slim Jeans',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
    description: 'Durable denim with a flattering slim fit and slight stretch.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Indigo'],
    tags: ['bottoms', 'jeans']
  },
  {
    id: 'jacket-bomber-olive',
    slug: 'olive-bomber-jacket',
    name: 'Olive Bomber Jacket',
    price: 12900,
    image: 'https://images.unsplash.com/photo-1520975603304-56e1ac9b15eb?q=80&w=1600&auto=format&fit=crop',
    description: 'Lightweight bomber jacket with ribbed trim and utility pocket.',
    sizes: ['S', 'M', 'L'],
    colors: ['Olive', 'Black'],
    tags: ['outerwear']
  },
  {
    id: 'dress-summer-floral',
    slug: 'summer-floral-dress',
    name: 'Summer Floral Dress',
    price: 9900,
    image: 'https://images.unsplash.com/photo-1520975950251-8a42f64c733f?q=80&w=1600&auto=format&fit=crop',
    description: 'Breezy floral dress with adjustable straps and side pockets.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral'],
    tags: ['dresses']
  },
  {
    id: 'sneaker-white-low',
    slug: 'white-low-sneakers',
    name: 'White Low Sneakers',
    price: 7900,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    description: 'Minimal sneakers with cushioned insole and breathable upper.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White'],
    tags: ['footwear']
  },
  {
    id: 'cap-dad-navy',
    slug: 'navy-dad-cap',
    name: 'Navy Dad Cap',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1520975830570-a672d6c96c8a?q=80&w=1600&auto=format&fit=crop',
    description: 'Classic dad cap with adjustable strap and curved brim.',
    sizes: ['OS'],
    colors: ['Navy'],
    tags: ['accessories']
  },
  {
    id: 'sweatpants-charcoal',
    slug: 'charcoal-sweatpants',
    name: 'Charcoal Sweatpants',
    price: 5900,
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=1600&auto=format&fit=crop',
    description: 'Relaxed fit sweatpants with drawstring waist and cuffed ankles.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal'],
    tags: ['bottoms']
  }
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
