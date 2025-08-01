"use client"

import { ArrowRight, PlayCircle, Shield, Clock, Users } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Content */}
      <div className="pt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
            {/* Left Content */}
            <div className="space-y-8 pb-8 lg:pb-0">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-1 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Terpercaya Sejak 2020
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Perjalanan Nyaman
                  <span className="block text-blue-900 dark:text-blue-400">Destinasi Impian</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  PT Trijaya Agung Lestari menyediakan layanan transportasi bus premium dengan standar keselamatan
                  tinggi dan pelayanan terbaik untuk perjalanan wisata Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <span>Sewa Bus Sekarang</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("#fleet")}
                  className="border border-gray-300 dark:border-gray-600 hover:border-blue-900 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Lihat Armada</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 pt-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Layanan 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">1000+ Pelanggan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Berlisensi Resmi</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/tjabanner.jpg"
                  alt="Trijaya Agung Bus Fleet"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Armada Bus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
