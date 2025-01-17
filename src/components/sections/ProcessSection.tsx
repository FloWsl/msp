'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Upload, Palette, Package, Heart } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Envoi de photo',
    description: 'Téléchargez une photo de votre animal de compagnie',
  },
  {
    icon: Palette,
    title: 'Création artistique',
    description: "Nos artistes transforment votre photo en œuvre d'art unique",
  },
  {
    icon: Package,
    title: 'Production',
    description: 'Votre portrait est imprimé sur un support de haute qualité',
  },
  {
    icon: Heart,
    title: 'Livraison',
    description: 'Recevez votre portrait personnalisé directement chez vous',
  },
]

export const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4B499_1px,transparent_1px),linear-gradient(to_bottom,#D4B499_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-secondary tablet:text-4xl">
            Comment ça marche ?
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            Un processus simple en 4 étapes pour créer votre portrait personnalisé
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid gap-8 tablet:grid-cols-2 desktop:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none bg-background p-6"
            >
              {/* Step Number */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 text-4xl font-bold text-primary">
                <span className="absolute bottom-6 left-6">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-secondary">
                {step.title}
              </h3>
              <p className="mt-2 text-secondary/70">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="px-12">
            COMMENCER MAINTENANT
          </Button>
          <p className="mt-4 text-sm text-secondary/60">
            ✨ Livraison gratuite • Garantie satisfait ou remboursé
          </p>
        </div>
      </div>
    </section>
  )
}
