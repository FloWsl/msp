'use client'

import { useState, useEffect } from 'react'

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent =
        (scrollTop / (documentHeight - windowHeight)) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-primary/20"
      aria-hidden="true"
    >
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
