import React from "react";
import { Database, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useUMKM } from "../hooks/useUMKM";

const DatabaseSection: React.FC = () => {
  const { umkm, loading } = useUMKM();
  const totalUMKM = umkm.length;

  const stats = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      number: loading ? "..." : totalUMKM.toString(),
      label: "Total UMKM Terdaftar",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      number: "7",
      label: "Kategori Industri",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "200+",
      label: "Pekerja Terlibat",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Jelajahi UMKM</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 items-center text-center">
          <div>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Jelajahi berbagai UMKM di Bugel, Salatiga dari berbagai kategori
              industri. Temukan produk dan layanan berkualitas dari usaha lokal
              terpercaya.
            </p>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="text-center mb-16 mt-8">
          <Link
            to="/daftar-umkm"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            Lihat Semua UMKM
            <BarChart3 className="w-8 h-8 ml-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          {stats.map(
            (stat, index) =>
              // Only show first 2 stats (Total UMKM and Kategori Industri)
              index < 2 && (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;
