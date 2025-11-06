export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container-max py-8 text-sm text-gray-600 flex flex-col sm:flex-row justify-between gap-4">
        <p>? {new Date().getFullYear()} Agentic Clothing Co.</p>
        <div className="flex gap-4">
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-black">Powered by Vercel</a>
          <a href="/products" className="hover:text-black">Shop</a>
        </div>
      </div>
    </footer>
  );
}
