'use client'

import { Heart, Smartphone, Paintbrush } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Heart,
    title: 'Hommage unique',
    description: 'Gardez votre animal adoré toujours près de vous, où que vous alliez.',
  },
  {
    icon: Smartphone,
    title: 'Design et qualité',
    description: 'Alliant style élégant et objets fantastiques.',
  },
  {
    icon: Paintbrush,
    title: 'Qualité artistique',
    description: 'Portraits professionnels, impression durable.',
  },
]

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: any
  title: string
  description: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-card p-6 transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-secondary">{title}</h3>
        <p className="text-secondary/70">{description}</p>
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <section
      id="features-section"
      className="bg-background py-16 tablet:py-24"
      aria-label="Nos caractéristiques"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary tablet:text-4xl">
              Pourquoi choisir MyStunningPets ?
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 tablet:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-16 rounded-2xl bg-primary/5 p-6 text-center tablet:p-8">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-secondary/80">
              Opter pour un produit personnalisé MyStunningPets, c'est choisir bien plus
              qu'un simple accessoire. C'est une déclaration à votre animal de
              compagnie, transformant votre article en un accessoire élégant et
              unique. Nos produits personnalisés vous permettent de garder votre
              compagnon adoré toujours près de vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
