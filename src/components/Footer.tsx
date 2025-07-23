import React from 'react'
import { Instagram, MapPin, Mail, Phone } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">UMKM Bugel</h3>
                <p className="text-gray-400">Salatiga</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Platform untuk mengenal dan mendukung Usaha Mikro, Kecil, dan Menengah 
              di wilayah Bugel, Salatiga. Membangun ekonomi lokal yang berkelanjutan.
            </p>
            <a
              href="https://www.instagram.com/kknsadakkinang/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@kknsadakkinang</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Bugel, Salatiga, Jawa Tengah</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">info@umkmbugel.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+62 123 4567 8900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 KKN Sadak Kinang. All rights reserved.
            </p>
            <p className="text-gray-400">
              KKN-PPM UGM Sidorejo Salatiga
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer