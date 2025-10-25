import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const affiliateLinks = [
    {
      id: "shopee",
      title: "Shopee Affiliate",
      description: "Belanja produk pilihan dengan harga terbaik",
      image: "/images/shopee-seeklogo.png",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-50",
      productCount: 6,
    },
    {
      id: "tokopedia",
      title: "Tokopedia Partner",
      description: "Dapatkan cashback untuk setiap pembelian",
      image: "/images/tokopedia-seeklogo.png",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50",
      productCount: 5,
    },
    {
      id: "tiktok",
      title: "TikTok Shop",
      description: "Produk viral dengan diskon gila-gilaan",
      image: "/images/tik-tok-seeklogo.png",
      color: "from-pink-400 to-purple-400",
      bgColor: "bg-pink-50",
      productCount: 8,
    },
  ];

  return (
    <>
      <Head>
        <title>Rekomendasi Barang - Deals & Promo Terbaik</title>
        <meta
          name="description"
          content="Kumpulan link affiliate pilihan dengan penawaran terbaik"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Header */}
        <header className="pt-20 pb-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-lg shadow-purple-200/50">
                <span className="text-4xl">✨</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Rekomendasi by me!
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Temukan penawaran terbaik dan dapatkan keuntungan dari setiap pembelian
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            {/* Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {affiliateLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={`/${link.id}`}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Logo Container */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 ${link.bgColor} rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110`}>
                      <img
                        src={link.image}
                        alt={link.title}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {link.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">
                      {link.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      <span>{link.productCount} produk tersedia</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className={`bg-gradient-to-r ${link.color} text-white font-semibold py-3 px-5 rounded-xl text-center text-sm group-hover:shadow-lg transition-shadow duration-300`}>
                    Lihat Produk
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💡</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  Kenapa Belanja Lewat Link Kami?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Setiap pembelian melalui link affiliate kami membantu kami untuk terus memberikan rekomendasi produk terbaik. Harga tetap sama, tapi Anda membantu kami berkembang!
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <div className="text-3xl mb-3">✅</div>
                    <p className="font-semibold text-slate-800 mb-1">Harga Sama</p>
                    <p className="text-slate-500">Tidak ada biaya tambahan</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <div className="text-3xl mb-3">🎁</div>
                    <p className="font-semibold text-slate-800 mb-1">Promo Eksklusif</p>
                    <p className="text-slate-500">Dapatkan deal terbaik</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <div className="text-3xl mb-3">💜</div>
                    <p className="font-semibold text-slate-800 mb-1">Dukung Kami</p>
                    <p className="text-slate-500">Bantu konten berkembang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-200 bg-white/50">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-slate-600 mb-2">
              © 2024 Rekomendasi by me. Semua hak dilindungi.
            </p>
            <p className="text-sm text-slate-400">
              Dengan menggunakan link ini, Anda membantu kami berkembang 💜
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}