'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag, Upload, Palette, Package } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: 1,
    icon: ShoppingBag,
    title: 'Choisissez votre article',
    description: 'Sélectionnez parmi notre large gamme.',
  },
  {
    number: 2,
    icon: Upload,
    title: 'Envoyez nous votre photo',
    description:
      'Lors de la commande, téléchargez votre photo préférée de votre animal, nous nous occuperons du reste.',
  },
  {
    number: 3,
    icon: Palette,
    title: 'Création artistique',
    description:
      'Nos experts s'appuient sur notre IA et leur savoir-faire pour transformer chaque photo en une illustration unique.',
  },
  {
    number: 4,
    icon: Package,
    title: 'Votre coque arrive chez vous',
    description:
      'En 1 à 2 semaines, votre article personnalisée est livrée directement à votre porte. Déballez la et profitez de ce nouveau style.',
  },
]

const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
  isVisible,
  className,
}: {
  number: number
  icon: any
  title: string
  description: string
  isVisible: boolean
  className?: string
}) => {
  return (
    <div
      className={cn(
        'group relative transform opacity-0 transition-all duration-700 hover:z-10',
        isVisible && 'translate-y-0 opacity-100',
        !isVisible && 'translate-y-8',
        className
      )}
    >
      {/* Connection Line */}
      <div className="absolute right-0 top-12 hidden h-[2px] w-full bg-gradient-to-r from-primary/20 to-primary/20 tablet:block" />

      <div className="relative z-10 rounded-2xl bg-card p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
        {/* Step Number */}
        <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
          {number}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-4 rounded-xl bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-secondary">{title}</h3>
          <p className="text-secondary/70">{description}</p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  )
}

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('how-it-works')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section
      id="how-it-works"
      className="relative bg-background py-16 tablet:py-24"
      aria-label="Comment ça marche"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4B499_1px,transparent_1px),linear-gradient(to_bottom,#D4B499_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary tablet:text-4xl">
              Comment ça marche ?
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 tablet:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                isVisible={isVisible}
                className={`delay-${index * 200}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
