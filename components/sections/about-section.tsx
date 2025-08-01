import { Shield, Users, Award, Clock } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Keselamatan Terjamin",
      description: "Armada terawat dengan standar keselamatan tinggi dan inspeksi rutin",
      bgColor: "bg-white",
      iconBg: "bg-blue-600",
      accentColor: "border-l-blue-600",
      shadowColor: "shadow-lg shadow-blue-100",
    },
    {
      icon: Users,
      title: "Driver Berpengalaman",
      description: "Sopir profesional dan berpengalaman dengan sertifikasi resmi",
      bgColor: "bg-white",
      iconBg: "bg-blue-500",
      accentColor: "border-l-blue-500",
      shadowColor: "shadow-lg shadow-blue-100",
    },
    {
      icon: Award,
      title: "Pelayanan Prima",
      description: "Komitmen memberikan pelayanan terbaik untuk kepuasan pelanggan",
      bgColor: "bg-white",
      iconBg: "bg-blue-400",
      accentColor: "border-l-blue-400",
      shadowColor: "shadow-lg shadow-blue-100",
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Menjaga ketepatan jadwal dan komitmen waktu perjalanan",
      bgColor: "bg-white",
      iconBg: "bg-blue-400", // Changed from gray to blue
      accentColor: "border-l-blue-400", // Changed from gray to blue
      shadowColor: "shadow-lg shadow-blue-100", // Changed from gray to blue
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Tentang Trijaya Agung</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun, PT Trijaya Agung Lestari telah menjadi pilihan utama untuk
                layanan transportasi bus pariwisata di Indonesia.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 border-l-4 border-l-blue-600">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Visi Kami
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 ml-5">
                    Menjadi perusahaan penyedia jasa transportasi pariwisata terdepan di Indonesia yang mengutamakan
                    keselamatan, kenyamanan, dan kepuasan pelanggan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Misi Kami
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-5">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Memberikan pelayanan transportasi berkualitas tinggi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mengutamakan keselamatan dan kenyamanan penumpang</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Membangun kepercayaan melalui profesionalisme</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} dark:bg-gray-800 p-6 rounded-2xl ${feature.shadowColor} dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 border-l-4 ${feature.accentColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
