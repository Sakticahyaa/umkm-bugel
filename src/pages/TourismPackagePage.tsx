import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Camera, MapPin, Clock, Users } from 'lucide-react'

const TourismPackagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Paket Wisata Bugel
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Nikmati pengalaman wisata tak terlupakan di Bugel, Salatiga
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Coming Soon Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center mb-16">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Camera className="w-16 h-16 text-blue-600" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Segera Hadir!
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Kami sedang menyiapkan paket wisata menarik untuk Anda jelajahi keindahan dan kekayaan 
              budaya Bugel, Salatiga. Pantau terus halaman ini untuk update terbaru!
            </p>
          </div>

          {/* TODO: Add your tourism package content here */}
          {/* You can place tourism images in public/images/tourism/ directory */}
          {/* Then update the content below with your actual tourism packages */}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TourismPackagePage