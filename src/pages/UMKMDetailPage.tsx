import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, ExternalLink, ArrowLeft, Phone, X, Maximize2 } from 'lucide-react'
import { useUMKM } from '../hooks/useUMKM'
import { CATEGORY_LABELS } from '../types/umkm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const UMKMDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { getUMKMByName, loading } = useUMKM()
  const [isImageExpanded, setIsImageExpanded] = React.useState(false)
  
  const umkm = name ? getUMKMByName(name) : null

  const openImageModal = () => {
    setIsImageExpanded(true)
  }

  const closeImageModal = () => {
    setIsImageExpanded(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Memuat detail UMKM...</p>
        </div>
      </div>
    )
  }

  if (!umkm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20 flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">UMKM Tidak Ditemukan</h1>
            <p className="text-xl text-gray-600 mb-8">UMKM yang Anda cari tidak tersedia.</p>
            <Link
              to="/daftar-umkm"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Kembali ke Daftar UMKM
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${umkm.cover})` }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <Link
                to="/daftar-umkm"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Daftar UMKM
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{umkm.nama_umkm}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                  {CATEGORY_LABELS[umkm.kategori_umkm]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang {umkm.nama_umkm}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{umkm.deskripsi_umkm}</p>
              </div>

              {/* Menu/Product Images */}
              {umkm.menu && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Galeri Produk</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="relative group cursor-pointer" onClick={openImageModal}>
                      <img
                        src={umkm.menu}
                        alt={`${umkm.nama_umkm} produk`}
                        className="w-full h-auto object-contain rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lokasi</p>
                        <p className="font-semibold text-gray-900">{umkm.alamat_umkm || 'Bugel, Salatiga'}</p>
                      </div>
                    </div>
                  </div>

                  {umkm.link_gmaps && (
                    <a
                      href={umkm.link_gmaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mt-6"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>Buka di Google Maps</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
                  <p className="text-orange-100 mb-6">
                    Tertarik dengan produk atau layanan kami? Jangan ragu untuk menghubungi langsung!
                  </p>
                  <div>
                    {umkm.kontak ? (
                      <a
                        href={`https://wa.me/${umkm.kontak}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </a>
                    ) : (
                      <div className="w-full bg-gray-400 text-white px-6 py-3 rounded-full font-semibold text-center">
                        Belum ada kontak
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageExpanded && umkm.menu && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-14" onClick={closeImageModal}>
          <div className="relative w-full h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={umkm.menu}
              alt={`${umkm.nama_umkm} produk`}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default UMKMDetailPage