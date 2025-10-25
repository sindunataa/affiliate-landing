import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function TikTok() {
  const [copiedId, setCopiedId] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Blender Portable Mini USB Rechargeable',
      price: 'Rp 89.000',
      originalPrice: 'Rp 199.000',
      discount: '55%',
      image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-1',
      rating: '4.9',
      sold: '12.5k',
      videoViews: '2.3M'
    },
    {
      id: 2,
      name: 'LED Ring Light 10 inch + Tripod Stand',
      price: 'Rp 125.000',
      originalPrice: 'Rp 299.000',
      discount: '58%',
      image: 'https://images.unsplash.com/photo-1492034541596-fbf6d3c4e5da?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-2',
      rating: '4.8',
      sold: '18.2k',
      videoViews: '5.1M'
    },
    {
      id: 3,
      name: 'Alat Pijat Wajah Elektrik Anti Aging',
      price: 'Rp 149.000',
      originalPrice: 'Rp 399.000',
      discount: '63%',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-3',
      rating: '4.7',
      sold: '9.8k',
      videoViews: '3.7M'
    },
    {
      id: 4,
      name: 'Sticky Roller Pembersih Bulu Hewan',
      price: 'Rp 45.000',
      originalPrice: 'Rp 129.000',
      discount: '65%',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-4',
      rating: '4.9',
      sold: '25.3k',
      videoViews: '8.9M'
    },
    {
      id: 5,
      name: 'Wireless Earbuds TWS Bluetooth 5.3',
      price: 'Rp 79.000',
      originalPrice: 'Rp 299.000',
      discount: '74%',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-5',
      rating: '4.6',
      sold: '31.7k',
      videoViews: '6.4M'
    },
    {
      id: 6,
      name: 'Organizer Makeup Putar 360 Derajat',
      price: 'Rp 69.000',
      originalPrice: 'Rp 179.000',
      discount: '61%',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-6',
      rating: '4.8',
      sold: '14.9k',
      videoViews: '4.2M'
    },
    {
      id: 7,
      name: 'Holder HP Mobil Dashboard Magnetic',
      price: 'Rp 35.000',
      originalPrice: 'Rp 99.000',
      discount: '65%',
      image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-7',
      rating: '4.7',
      sold: '22.1k',
      videoViews: '3.5M'
    },
    {
      id: 8,
      name: 'Botol Minum Infused Water 1L BPA Free',
      price: 'Rp 55.000',
      originalPrice: 'Rp 149.000',
      discount: '63%',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
      url: 'https://vt.tiktok.com/your-affiliate-link-8',
      rating: '4.9',
      sold: '19.6k',
      videoViews: '7.8M'
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
        <title>TikTok Shop Affiliate - Produk Viral Terbaik</title>
        <meta name="description" content="Produk viral dari TikTok Shop dengan harga super murah" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900">
        {/* Header */}
        <header className="pt-8 pb-6 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-white/30 text-white font-semibold shadow-md 
                        hover:border-pink-400 hover:text-pink-200 hover:bg-white/10 transition-all duration-300"
            >
            ← Back
            </Link>
            <div className="flex items-center gap-4 pt-8">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/images/tik-tok-seeklogo.png"
                  alt="Shopee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
                  TikTok Shop Affiliate
                </h1>
                <p className="text-gray-300">
                  Produk viral dengan diskon gila-gilaan 🔥
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Trending Banner */}
        <div className="px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl p-6 text-center">
              <p className="text-white text-2xl font-bold mb-2">
                🔥 FLASH SALE HARI INI! 🔥
              </p>
              <p className="text-white/90">
                Diskon hingga 74% untuk produk pilihan
              </p>
            </div>
          </div>
        </div>

                {/* Tips Section */}
        <div className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                💡 Tips Belanja di TikTok Shop
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-pink-400 font-semibold mb-2">✅ Cek Review</p>
                  <p className="text-gray-300">Selalu baca review pembeli sebelum membeli</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-pink-400 font-semibold mb-2">🎁 Kumpulkan Koin</p>
                  <p className="text-gray-300">Gunakan koin untuk diskon tambahan</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-pink-400 font-semibold mb-2">⚡ Flash Sale</p>
                  <p className="text-gray-300">Manfaatkan flash sale untuk harga termurah</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h2 className="text-pink-400 font-semibold mb-2">🛒 HAPPY SHOOPING!!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <main className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
                >
                  {/* Product Image */}
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* Discount Badge */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                      -{product.discount}
                    </div>
                    {/* Video Views Badge */}
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <span>▶️</span>
                      <span>{product.videoViews}</span>
                    </div>
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <span className="text-2xl">▶️</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2 text-sm">
                      {product.name}
                    </h3>

                    {/* Rating & Sold */}
                    <div className="flex items-center gap-2 mb-3 text-xs">
                      <span className="text-yellow-400 flex items-center gap-1">
                        ⭐ {product.rating}
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-300">{product.sold} terjual</span>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <div className="text-xl font-bold text-pink-400">
                        {product.price}
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        {product.originalPrice}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-3 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all text-center text-sm"
                      >
                        Beli di TikTok
                      </a>
                      <button
                        onClick={() => handleCopyLink(product.url, product.id)}
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-3 rounded-lg transition-all border border-white/20"
                        title="Copy link"
                      >
                        {copiedId === product.id ? '✓' : '📋'}
                      </button>
                    </div>

                    {copiedId === product.id && (
                      <p className="text-green-400 text-xs mt-2 text-center font-semibold">
                        Link tersalin! ✨
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