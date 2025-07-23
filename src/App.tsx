import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UMKMListPage from './pages/UMKMListPage'
import UMKMDetailPage from './pages/UMKMDetailPage'
import TourismPackagePage from './pages/TourismPackagePage'
import MapPage from './pages/MapPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daftar-umkm" element={<UMKMListPage />} />
        <Route path="/paket-wisata" element={<TourismPackagePage />} />
        <Route path="/peta" element={<MapPage />} />
        <Route path="/:name" element={<UMKMDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App