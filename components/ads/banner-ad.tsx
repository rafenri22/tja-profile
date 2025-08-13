"use client"

import { useEffect } from "react"

interface BannerAdProps {
  className?: string
}

export default function BannerAd({ className = "" }: BannerAdProps) {
  useEffect(() => {
    // Create script element for banner ad
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      atOptions = {
        'key' : 'dac5bd782390c09ca3783e4361641fe1',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `
    
    const invokeScript = document.createElement("script")
    invokeScript.type = "text/javascript"
    invokeScript.src = "//www.highperformanceformat.com/dac5bd782390c09ca3783e4361641fe1/invoke.js"
    
    const adContainer = document.getElementById("banner-ad-container")
    if (adContainer) {
      adContainer.appendChild(script)
      adContainer.appendChild(invokeScript)
    }

    return () => {
      // Cleanup scripts when component unmounts
      if (adContainer) {
        adContainer.innerHTML = ""
      }
    }
  }, [])

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div 
        id="banner-ad-container" 
        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
        style={{ width: "320px", height: "50px" }}
      />
    </div>
  )
}