'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  fallbackSrc?: string
}

export const OptimizedImage = ({
  src,
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  className = '',
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  )
}
