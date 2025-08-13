"use client"

import { Facebook, Instagram, MessageCircle } from "lucide-react"
import SponsoredLink from "@/components/ads/sponsored-link"

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://web.facebook.com/trijayaagunglestari" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/trijayaagungofficial_02" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/6282328370267" },
  ]

  return (
    <footer className="bg-blue-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sponsored Link */}
        <div className="mb-6">
          <SponsoredLink text="Rekomendasi Partner" className="mb-4" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center space-x-3">
            <img src="/images/tja.jpg" alt="Trijaya Agung Logo" className="h-8 w-auto" />
            <div>
              <h3 className="font-bold text-white">Trijaya Agung</h3>
              <p className="text-blue-200 dark:text-gray-400 text-xs">PT Trijaya Agung Lestari</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-blue-200 dark:text-gray-400 text-sm">+62 823 2837 0267 | info@trijayaagunglestari.web.id</p>
            <p className="text-blue-300 dark:text-gray-500 text-xs">Jl. Belimbing No. 12, Kalikabong Purbalingga Jawa Tengah</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-800 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-800 dark:border-gray-700 mt-6 pt-4 text-center">
          <p className="text-blue-300 dark:text-gray-500 text-xs">
            &copy; 2025 PT Trijaya Agung Lestari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}