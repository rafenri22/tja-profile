"use client"

interface SponsoredLinkProps {
  className?: string
  text?: string
}

export default function SponsoredLink({ className = "", text = "Sponsored" }: SponsoredLinkProps) {
  return (
    <div className={`text-center ${className}`}>
      <a 
        href="https://www.profitableratecpm.com/tttah0a7?key=bed062db9e271d1ad41b99f36e2c623c"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
      >
        <span className="text-xs mr-2">📢</span>
        {text}
      </a>
    </div>
  )
}