"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Send, Clock, Users, Shield } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    tujuan: "",
    tanggal: "",
    lamaHari: "",
    pesan: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Permintaan Reservasi Bus Pariwisata PO. Trijaya Agung

Nama: ${formData.nama}
No Handphone: ${formData.noHp}
Tujuan: ${formData.tujuan}
Tanggal: ${formData.tanggal}
Lama Hari: ${formData.lamaHari}
Catatan: ${formData.pesan}`

    const encodedMessage = encodeURIComponent(message)
    const adminWhatsApp = "6282328370267"
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      description: "Hubungi kami langsung untuk informasi dan reservasi",
      details: ["+62 823 2837 0267", "+62 857 5932 8890"],
      bgColor: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Kirim pertanyaan atau permintaan penawaran",
      details: ["info@trijayaagunglestari.web.id", "reservasi@trijayaagunglestari.web.id"],
      bgColor: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      icon: MapPin,
      title: "Alamat",
      description: "Kunjungi kantor kami untuk konsultasi langsung",
      details: ["Jl. Belimbing No. 12, Kalikabong", "Purbalingga Jawa Tengah", "Indonesia"],
      bgColor: "bg-blue-400",
      textColor: "text-blue-400",
    },
  ]

  const features = [
    { icon: Clock, text: "Respon Cepat 24/7" },
    { icon: Users, text: "Tim Profesional" },
    { icon: Shield, text: "Terpercaya & Aman" },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Siap melayani kebutuhan transportasi Anda. Hubungi kami untuk konsultasi dan reservasi.
          </p>

          {/* Features */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <feature.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg shadow-gray-100 dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{info.description}</p>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`${info.textColor} dark:text-blue-400 font-semibold text-sm`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl shadow-gray-100 dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 border-t-4 border-t-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              Minta Penawaran
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:bg-white dark:hover:bg-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">No. Telepon</label>
                  <input
                    type="tel"
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:bg-white dark:hover:bg-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tujuan</label>
                <input
                  type="text"
                  name="tujuan"
                  value={formData.tujuan}
                  onChange={handleInputChange}
                  required
                  placeholder="Contoh: Bandung, Yogyakarta, Bali"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:bg-white dark:hover:bg-gray-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tanggal Keberangkatan
                  </label>
                  <input
                    type="date"
                    name="tanggal"
                    value={formData.tanggal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:bg-white dark:hover:bg-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Lama Hari</label>
                  <select
                    name="lamaHari"
                    value={formData.lamaHari}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:bg-white dark:hover:bg-gray-600"
                  >
                    <option value="">Pilih durasi</option>
                    <option value="1 hari">1 hari</option>
                    <option value="2 hari 1 malam">2 hari 1 malam</option>
                    <option value="3 hari 2 malam">3 hari 2 malam</option>
                    <option value="4 hari 3 malam">4 hari 3 malam</option>
                    <option value="5 hari 4 malam">5 hari 4 malam</option>
                    <option value="Lebih dari 5 hari">Lebih dari 5 hari</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Catatan</label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:bg-white dark:hover:bg-gray-600"
                  placeholder="Ceritakan kebutuhan perjalanan Anda, jumlah penumpang, dll..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Send className="w-5 h-5" />
                <span>Kirim ke WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
