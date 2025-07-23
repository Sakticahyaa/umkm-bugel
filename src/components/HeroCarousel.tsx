import React, { useState, useEffect } from 'react'

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // TODO: Replace these URLs with local images from public/images/hero/
  // Place 5 high-quality images (1920x1080) in public/images/hero/ directory
  // Then update these URLs to: '/images/hero/image1.jpg', '/images/hero/image2.jpg', etc.
  const heroImages = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', // Traditional food
    'https://images.pexels.com/photos/6292513/pexels-photo-6292513.jpeg', // Batik crafts
    'https://images.pexels.com/photos/6069978/pexels-photo-6069978.jpeg', // Handicrafts
    'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg', // Agriculture
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg'  // Services
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Temukan UMKM Terbaik di
          <span className="text-orange-400 block">Bugel, Salatiga</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Platform untuk mengenal dan mendukung usaha mikro, kecil, dan menengah lokal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Jelajahi UMKM
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel