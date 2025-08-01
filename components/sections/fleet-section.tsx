"use client"

import { Users, Fuel, Shield, Wifi } from "lucide-react"

export default function FleetSection() {
  const fleetData = [
    {
      name: "Seat 2-2",
      capacity: "40-52 Penumpang",
      image: "/images/3.jpg",
      description: "Ideal untuk grup kecil dan perjalanan jarak menengah",
      features: [
        { name: "AC Central", icon: "❄️", available: true },
        { name: "Audio System", icon: "🎵", available: true },
        { name: "Kursi Reclining", icon: "💺", available: true },
        { name: "Bagasi Luas", icon: "🧳", available: true },
        { name: "TV Monitor", icon: "📺", available: true },
        { name: "Charging Port", icon: "🔌", available: true },
      ],
      price: "Mulai dari Rp 4.500.000 per Hari",
    },
    {
      name: "Seat 2-3",
      capacity: "52-60 Penumpang",
      image: "/images/1.jpg",
      description: "Perfect untuk rombongan besar dan perjalanan jauh",
      features: [
        { name: "AC Double Blower", icon: "❄️", available: true },
        { name: "Karaoke System", icon: "🎤", available: true },
        { name: "Toilet", icon: "🚻", available: true },
        { name: "TV LED 32 Inch", icon: "📺", available: true },
        { name: "WiFi Gratis", icon: "📶", available: true },
        { name: "Kulkas Mini", icon: "🧊", available: true },
      ],
      price: "Mulai dari Rp 5.000.000",
    },
    {
      name: "Excecutive Bus",
      capacity: "30-35 Penumpang",
      image: "/images/2.jpg",
      description: "Kelas premium dengan fasilitas mewah dan nyaman",
      features: [
        { name: "Kursi Kulit Premium", icon: "🪑", available: true },
        { name: "WiFi High Speed", icon: "📶", available: true },
        { name: "Power Outlet", icon: "🔌", available: true },
        { name: "Mini Bar", icon: "🍹", available: true },
        { name: "LED TV Smart", icon: "📺", available: true },
        { name: "Sound System Premium", icon: "🔊", available: true },
      ],
      price: "Mulai dari Rp 6.000.000",
    },
  ]

  return (
    <section id="fleet" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Armada Premium</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Koleksi bus berkualitas tinggi dengan berbagai kapasitas untuk memenuhi kebutuhan perjalanan Anda dengan
            fasilitas terlengkap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((bus, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
            >
              {/* Image Section - No badge/label */}
              <div className="relative">
                <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <img
                    src={bus.image || "/placeholder.svg"}
                    alt={bus.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{bus.name}</h3>
                    <div className="flex items-center space-x-1 text-blue-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{bus.capacity}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{bus.description}</p>
                  <div className="text-blue-600 font-semibold text-lg">{bus.price}</div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {bus.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Berlisensi & Asuransi</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Semua Armada Dilengkapi:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Asuransi Perjalanan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Driver Berpengalaman</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Fuel className="w-5 h-5 text-blue-600" />
                <span className="text-sm">BBM & Tol Included</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Wifi className="w-5 h-5 text-blue-600" />
                <span className="text-sm">GPS Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
