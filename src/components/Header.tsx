import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  onSectionClick?: (sectionId: string) => void
}

const Header: React.FC<HeaderProps> = ({ onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { name: 'Beranda', id: 'hero', href: '/' },
    { name: 'Tentang', id: 'about', href: '/' },
    { name: 'UMKM Unggulan', id: 'featured', href: '/' },
    { name: 'Peta', id: 'map', href: '/' },
    { name: 'Daftar UMKM', href: '/daftar-umkm' },
    { name: 'Paket Wisata', href: '/paket-wisata' }
  ]

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.id && onSectionClick && isHomePage) {
      onSectionClick(item.id)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">UMKM Bugel</h1>
              <p className="text-xs text-gray-600">Salatiga</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                {item.href && !item.id ? (
                  <Link to={item.href}>{item.name}</Link>
                ) : (
                  item.name
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                >
                  {item.href && !item.id ? (
                    <Link to={item.href}>{item.name}</Link>
                  ) : (
                    item.name
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header