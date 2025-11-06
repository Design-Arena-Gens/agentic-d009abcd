import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold">Thank you for your order!</h1>
      <p className="mt-3 text-gray-600">A confirmation email will arrive shortly.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/products" className="btn-primary">Continue shopping</Link>
        <Link href="/" className="btn-secondary">Go home</Link>
      </div>
    </div>
  );
}
