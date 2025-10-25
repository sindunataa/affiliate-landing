import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Tokopedia() {
  const [copiedId, setCopiedId] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy A54 5G 8/256GB',
      price: 'Rp 4.799.000',
      originalPrice: 'Rp 5.999.000',
      discount: '20%',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
      url: 'https://tokopedia.com/your-affiliate-link-1',
      rating: '4.9',
      sold: '3.2k',
      cashback: '5%'
    },
    {
      id: 2,
      name: 'Laptop ASUS VivoBook 14 Intel i5',
      price: 'Rp 7.299.000',
      originalPrice: 'Rp 8.999.000',
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      url: 'https://tokopedia.com/your-affiliate-link-2',
      rating: '4.8',
      sold: '1.8k',
      cashback: '3%'
    },
    {
      id: 3,
      name: 'Kulkas 2 Pintu Inverter 350L',
      price: 'Rp 3.999.000',
      originalPrice: 'Rp 5.499.000',
      discount: '27%',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop',
      url: 'https://tokopedia.com/your-affiliate-link-3',
      rating: '4.7',
      sold: '892',
      cashback: '2%'
    },
    {
      id: 4,
      name: 'Headphone Wireless Sony WH-1000XM5',
      price: 'Rp 4.299.000',
      originalPrice: 'Rp 5.999.000',
      discount: '28%',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      url: 'https://tokopedia.com/your-affiliate-link-4',
      rating: '5.0',
      sold: '2.1k',
      cashback: '4%'
    },
    {
      id: 5,
      name: 'Paket Furniture Kamar Tidur Minimalis',
      price: 'Rp 12.999.000',
      originalPrice: 'Rp 18.999.000',
      discount: '32%',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      url: 'https://tokopedia.com/your-affiliate-link-5',
      rating: '4.8',
      sold: '456',
      cashback: '1%'
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
        <title>Produk Tokopedia Partner - Cashback Terbaik</title>
        <meta name="description" content="Produk pilihan dari Tokopedia dengan cashback terbaik" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <header className="pt-8 pb-6 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-white/30 text-white font-semibold shadow-md 
                        hover:border-green-400 hover:text-green-200 hover:bg-white/10 transition-all duration-300"
            >
            ← Back
            </Link>
            <div className="flex items-center gap-4 pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-800 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/images/tokopedia-seeklogo.png"
                  alt="Shopee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Tokopedia Partner
                </h1>
                <p className="text-green-200">
                  Dapatkan cashback untuk setiap pembelian
                </p>
              </div>
            </div>
          </div>
        </header>

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
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Cashback {product.cashback}
                    </div>
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
                      <div className="text-2xl font-bold text-green-300">
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
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all text-center"
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