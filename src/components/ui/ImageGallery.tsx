'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div
      className={cn('group relative overflow-hidden rounded-2xl', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="relative aspect-square w-full">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div
        className={cn(
          'absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4 opacity-0 transition-opacity duration-300',
          (isHovered || images.length > 1) && 'group-hover:opacity-100'
        )}
      >
        <button
          onClick={previousImage}
          className="rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-secondary" />
        </button>
        <button
          onClick={nextImage}
          className="rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-secondary" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-1.5 w-1.5 rounded-full bg-white/80 backdrop-blur-sm transition-all',
                index === activeIndex
                  ? 'w-4 bg-white'
                  : 'hover:w-2 hover:bg-white'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
