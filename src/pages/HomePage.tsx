import React from 'react'
import Header from '../components/Header'
import HeroCarousel from '../components/HeroCarousel'
import AboutSection from '../components/AboutSection'
import FeaturedSection from '../components/FeaturedSection'
import MapSection from '../components/MapSection'
import DatabaseSection from '../components/DatabaseSection'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onSectionClick={scrollToSection} />
      <HeroCarousel />
      <AboutSection />
      <FeaturedSection />
      <MapSection />
      <DatabaseSection />
      <Footer />
    </div>
  )
}

export default HomePage