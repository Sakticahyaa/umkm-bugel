import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useUMKM } from '../hooks/useUMKM'
import { Link } from 'react-router-dom'
import { CATEGORY_LABELS } from '../types/umkm'

const FeaturedSection: React.FC = () => {
  const { getFeaturedUMKM, loading } = useUMKM()
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredUMKM = getFeaturedUMKM()

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(featuredUMKM.length / itemsPerSlide)

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [totalSlides])

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide
    return featuredUMKM.slice(start, start + itemsPerSlide)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">Loading featured UMKM...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="featured" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            UMKM Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan UMKM terbaik pilihan kami yang menawarkan produk dan layanan berkualitas
          </p>
        </div>

        {featuredUMKM.length > 0 ? (
          <div className="relative">
            {/* Main Slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {getCurrentItems().map((umkm) => (
                <Link
                  key={umkm.id}
                  to={`/${umkm.nama_umkm.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={umkm.cover}
                      alt={umkm.nama_umkm}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {CATEGORY_LABELS[umkm.kategori_umkm]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {umkm.nama_umkm}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {umkm.deskripsi_umkm}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold">
                      Lihat Detail
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Controls */}
            {totalSlides > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
                >
                  <ChevronLeft className="w-6 h-6 text-orange-600" />
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-orange-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
                >
                  <ChevronRight className="w-6 h-6 text-orange-600" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada UMKM unggulan.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedSection