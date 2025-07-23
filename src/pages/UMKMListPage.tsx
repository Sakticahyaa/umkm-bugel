import React, { useState } from 'react'
import { Search, MapPin, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useUMKM } from '../hooks/useUMKM'
import { CATEGORY_LABELS, UMKM } from '../types/umkm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const UMKMListPage: React.FC = () => {
  const { umkm, loading } = useUMKM()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { key: 'all', label: 'Semua Kategori' },
    { key: 'kuliner', label: 'Kuliner' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'kerajinan', label: 'Kerajinan' },
    { key: 'jasa', label: 'Jasa' },
    { key: 'agribisnis', label: 'Agribisnis' },
    { key: 'digital', label: 'Digital' },
    { key: 'perdagangan', label: 'Perdagangan' }
  ]

  const filteredUMKM = umkm.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.kategori_umkm === selectedCategory
    const matchesSearch = item.nama_umkm.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.deskripsi_umkm.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Memuat data UMKM...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Daftar UMKM Bugel
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Temukan berbagai usaha mikro, kecil, dan menengah terpercaya di Bugel, Salatiga
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari UMKM atau produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold text-gray-900">{filteredUMKM.length}</span> UMKM
              {selectedCategory !== 'all' && (
                <span> dalam kategori <span className="font-semibold text-orange-600">{categories.find(c => c.key === selectedCategory)?.label}</span></span>
              )}
              {searchTerm && (
                <span> untuk "{searchTerm}"</span>
              )}
            </p>
          </div>

          {/* UMKM List */}
          {filteredUMKM.length > 0 ? (
            <div className="space-y-6">
              {filteredUMKM.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={item.cover}
                        alt={item.nama_umkm}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                              {item.nama_umkm}
                            </h2>
                            <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                              {CATEGORY_LABELS[item.kategori_umkm]}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                          {item.deskripsi_umkm}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            to={`/${item.nama_umkm.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                          >
                            Lihat Detail
                          </Link>
                          {item.link_gmaps && (
                            <a
                              href={item.link_gmaps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                              <MapPin className="w-4 h-4" />
                              <span>Lokasi</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tidak ada UMKM ditemukan
                </h3>
                <p className="text-gray-600 mb-8">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default UMKMListPage