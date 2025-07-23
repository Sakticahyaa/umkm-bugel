import React from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'

const MapSection: React.FC = () => {
  return (
    <section id="map" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jelajahi Peta UMKM
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Temukan lokasi semua UMKM di Bugel, Salatiga dengan mudah melalui peta interaktif kami. 
              Dapatkan petunjuk arah dan informasi detail setiap usaha.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lokasi Lengkap</h3>
                  <p className="text-gray-600">Alamat detail dan koordinat GPS setiap UMKM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Navigasi Mudah</h3>
                  <p className="text-gray-600">Petunjuk arah langsung ke Google Maps</p>
                </div>
              </div>
            </div>

            <Link
              to="/peta"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Buka Peta
              <Navigation className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* TODO: Replace this URL with local image from public/images/landing/ */}
              {/* Place a map/location related image in public/images/landing/map-section.jpg */}
              <img
                src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg"
                alt="Peta UMKM"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection