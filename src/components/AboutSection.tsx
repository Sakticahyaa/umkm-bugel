import React from 'react'
import { MapPin, Users, Award, TrendingUp } from 'lucide-react'

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: 'Lokasi Strategis',
      description: 'Bugel, Salatiga menjadi pusat UMKM dengan lokasi yang mudah diakses'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Komunitas Solid',
      description: 'Membangun jaringan UMKM yang saling mendukung dan berkolaborasi'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Kualitas Terjamin',
      description: 'Produk dan layanan berkualitas tinggi dengan standar lokal terbaik'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Pertumbuhan Berkelanjutan',
      description: 'Mendorong pertumbuhan ekonomi lokal melalui UMKM yang inovatif'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang Platform UMKM Bugel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Platform ini hadir untuk memperkenalkan dan mendukung Usaha Mikro, Kecil, dan Menengah (UMKM) 
            yang ada di Kelurahan Bugel, Kecamatan Sidorejo, Kota Salatiga. Kami berkomitmen untuk mengangkat potensi ekonomi lokal dan 
            membantu masyarakat mengenal berbagai produk dan layanan berkualitas dari UMKM setempat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutSection