import { Users, Building2, MapPin, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Wisata, Ziarah, Studi Tour",
      description: "Paket wisata dengan bus nyaman dan fasilitas lengkap untuk perjalanan yang menyenangkan.",
      features: ["AC dan Audio System", "Kursi Reclining", "Tour Guide Berpengalaman", "Asuransi Perjalanan"],
      bgColor: "bg-white",
      iconBg: "bg-blue-600",
      accentColor: "border-t-blue-600",
      shadowColor: "shadow-lg shadow-blue-100",
      hoverColor: "hover:shadow-blue-200",
    },
    {
      icon: Building2,
      title: "Corporate & Organization Trip",
      description: "Solusi transportasi untuk kegiatan perusahaan, gathering, meeting, dan acara korporat & organisasi lainnya.",
      features: ["WiFi Gratis", "Meja Lipat", "Power Outlet", "Catering Service"],
      bgColor: "bg-white",
      iconBg: "bg-blue-500",
      accentColor: "border-t-blue-500",
      shadowColor: "shadow-lg shadow-blue-100",
      hoverColor: "hover:shadow-blue-200",
    },
    {
      icon: MapPin,
      title: "Antar Jemput",
      description: "Layanan antar jemput untuk berbagai keperluan seperti bandara, stasiun, dan acara khusus.",
      features: ["Layanan 24 Jam", "Tracking Real-time", "Driver Ramah", "Fleksibel Jadwal"],
      bgColor: "bg-white",
      iconBg: "bg-blue-500", // Changed from gray to blue
      accentColor: "border-t-blue-500", // Changed from gray to blue
      shadowColor: "shadow-lg shadow-blue-100", // Changed from gray to blue
      hoverColor: "hover:shadow-blue-200", // Changed from gray to blue
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Layanan Kami</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berbagai pilihan layanan transportasi untuk memenuhi kebutuhan perjalanan Anda dengan standar pelayanan
            premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} dark:bg-gray-800 rounded-2xl p-8 ${service.shadowColor} dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 border-t-4 ${service.accentColor} hover:shadow-2xl ${service.hoverColor} dark:hover:shadow-gray-900/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <service.icon className="w-full h-full text-gray-900" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
