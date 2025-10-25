import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Shopee() {
  const [copiedId, setCopiedId] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Xiaomi Redmi Note 13 Pro',
      price: 'Rp 3.499.000',
      originalPrice: 'Rp 4.299.000',
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      url: 'https://shopee.co.id/your-affiliate-link-1',
      rating: '4.8',
      sold: '2.3k'
    },
    {
      id: 2,
      name: 'Sepatu Olahraga Running Premium',
      price: 'Rp 349.000',
      originalPrice: 'Rp 699.000',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      url: 'https://shopee.co.id/your-affiliate-link-2',
      rating: '4.9',
      sold: '5.1k'
    },
    {
      id: 3,
      name: 'Tas Ransel Laptop Anti Air',
      price: 'Rp 159.000',
      originalPrice: 'Rp 299.000',
      discount: '47%',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      url: 'https://shopee.co.id/your-affiliate-link-3',
      rating: '4.7',
      sold: '3.8k'
    },
    {
      id: 4,
      name: 'Skincare Set Glowing Complete',
      price: 'Rp 189.000',
      originalPrice: 'Rp 399.000',
      discount: '53%',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
      url: 'https://shopee.co.id/your-affiliate-link-4',
      rating: '4.8',
      sold: '4.2k'
    },
    {
      id: 5,
      name: 'Keyboard Mechanical RGB Gaming',
      price: 'Rp 459.000',
      originalPrice: 'Rp 899.000',
      discount: '49%',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
      url: 'https://shopee.co.id/your-affiliate-link-5',
      rating: '4.9',
      sold: '1.9k'
    },
    {
      id: 6,
      name: 'Smart Watch Fitness Tracker',
      price: 'Rp 299.000',
      originalPrice: 'Rp 599.000',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      url: 'https://shopee.co.id/your-affiliate-link-6',
      rating: '4.6',
      sold: '6.7k'
    }
  ]

  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <>
      <Head>
        <title>Produk Shopee Affiliate - Deals Terbaik</title>
        <meta name="description" content="Produk pilihan dari Shopee dengan harga terbaik" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <header className="pt-8 pb-6 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-white/30 text-white font-semibold shadow-md 
                        hover:border-orange-400 hover:text-orange-200 hover:bg-white/10 transition-all duration-300"
            >
            ← Back
            </Link>
            <div className="flex items-center gap-4 pt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                    src="/images/shopee-seeklogo.png"
                    alt="Shopee"
                    className="w-full h-full object-cover"
                />
            </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Shopee Affiliate
                </h1>
                <p className="text-orange-200">
                  Belanja produk pilihan dengan harga terbaik
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Tips Section */}
        <div className="px-4 pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                💡 Tips Belanja di Shopee
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white font-semibold mb-2">✅ Cek Review</p>
                  <p className="text-gray-300">Selalu baca review pembeli sebelum membeli</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white font-semibold mb-2">🎁 Kumpulkan Koin</p>
                  <p className="text-gray-300">Gunakan koin untuk diskon tambahan</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white font-semibold mb-2">⚡ Flash Sale</p>
                  <p className="text-gray-300">Manfaatkan flash sale untuk harga termurah</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h2 className="text-white font-semibold mb-2">🛒 HAPPY SHOOPING!!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400">⭐ {product.rating}</span>
                      <span className="text-gray-300 text-sm">| {product.sold} terjual</span>
                    </div>

                    <div className="mb-3">
                      <div className="text-2xl font-bold text-orange-300">
                        {product.price}
                      </div>
                      <div className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all text-center"
                      >
                        Beli Sekarang
                      </a>
                      <button
                        onClick={() => handleCopyLink(product.url, product.id)}
                        className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-3 rounded-lg transition-all"
                        title="Copy link"
                      >
                        {copiedId === product.id ? '✓' : '📋'}
                      </button>
                    </div>

                    {copiedId === product.id && (
                      <p className="text-green-300 text-sm mt-2 text-center">
                        Link tersalin!
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}