'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { StarIcon, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      id="hero-section"
      className="relative min-h-[90vh] overflow-hidden bg-background"
      aria-label="Hero Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className={`
            absolute inset-0 
            bg-[linear-gradient(to_right,#D4B499_1px,transparent_1px),linear-gradient(to_bottom,#D4B499_1px,transparent_1px)] 
            bg-[size:4rem_4rem] 
            opacity-0 transition-opacity duration-1000
            ${isVisible ? 'opacity-10' : ''}
          `} 
        />
      </div>

      {/* Main Hero Content */}
      <div 
        id="hero-content"
        className="container relative mx-auto flex min-h-[90vh] px-4 py-12 tablet:py-24"
      >
        <div className="grid items-center gap-8 tablet:grid-cols-2 tablet:gap-12">
          {/* Left Content */}
          <div 
            id="hero-text"
            className={`
              space-y-8 
              opacity-0 transform translate-y-4
              transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : ''}
            `}
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-secondary tablet:text-6xl">
                Immortalisez{' '}
                <span className="text-primary">vos compagnons</span>
              </h1>
              <p className="text-xl leading-relaxed text-secondary/80">
                Créez des produits uniques avec la photo de votre animal adoré.
                Un souvenir précieux toujours avec vous.
              </p>
            </div>

            {/* Trust Indicators */}
            <div id="social-proof" className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 fill-alert stroke-alert transform hover:scale-110 transition-transform"
                  />
                ))}
              </div>
              <div className="text-sm text-secondary/80">
                <span className="font-semibold">4.9/5</span> basé sur{' '}
                <span className="font-semibold">1,000+ avis vérifiés</span>
              </div>
            </div>

            {/* CTA Section */}
            <div id="cta-section" className="space-y-6">
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 tablet:flex-row">
                <Button 
                  size="lg" 
                  className="group w-full tablet:w-auto"
                >
                  CRÉER MAINTENANT
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full tablet:w-auto"
                >
                  COMMENT ÇA MARCHE
                </Button>
              </div>
              
              {/* Trust Features */}
              <div className="flex flex-col gap-2 text-sm text-secondary/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">✨</span>
                  <span>Livraison gratuite sous 48h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">💫</span>
                  <span>Garantie 100% satisfait ou remboursé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Full Width Image */}
          <div 
            id="hero-image"
            className={`
              relative h-[50vh] tablet:h-[80vh] w-full
              opacity-0 transform translate-y-4
              transition-all duration-1000 delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : ''}
            `}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Portrait d'animal personnalisé"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
