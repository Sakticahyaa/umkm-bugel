import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

const MapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Peta UMKM Bugel
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Temukan lokasi UMKM di Bugel, Salatiga dengan mudah
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600">
              Anda dapat mengakses lokasi UMKM melalui halaman detail masing-masing usaha di bawah ini.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="/daftar-umkm"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center"
            >
              Lihat Daftar UMKM
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MapPage