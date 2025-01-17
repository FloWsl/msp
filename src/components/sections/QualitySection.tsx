'use client'

import Image from 'next/image'
import { Sparkles, Star } from 'lucide-react'

const QualitySection = () => {
  return (
    <section
      id="quality-section"
      className="relative overflow-hidden bg-background py-16 tablet:py-24"
      aria-label="Notre expertise artistique"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4B499_1px,transparent_1px),linear-gradient(to_bottom,#D4B499_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 tablet:grid-cols-2 tablet:items-center">
            {/* Left Content - Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/artist-workspace.jpg"
                alt="Espace de création artistique"
                fill
                className="object-cover"
              />
              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 flex justify-between text-white">
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-alert stroke-alert" />
                      <Star className="h-4 w-4 fill-alert stroke-alert" />
                      <Star className="h-4 w-4 fill-alert stroke-alert" />
                      <Star className="h-4 w-4 fill-alert stroke-alert" />
                      <Star className="h-4 w-4 fill-alert stroke-alert" />
                    </div>
                    <p className="text-sm">Plus de 1000 avis positifs</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">10K+</p>
                    <p className="text-sm">Portraits créés</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                <Sparkles className="mr-2 h-4 w-4" />
                Expertise Artistique
              </div>

              <h2 className="text-3xl font-bold text-secondary tablet:text-4xl">
                Un savoir-faire unique pour des créations exceptionnelles
              </h2>

              <p className="text-lg leading-relaxed text-secondary/80">
                Chaque portrait est une création unique, fruit d'un processus créatif alliant expertise artistique et technologie de pointe. Notre approche combine le talent humain et l'innovation pour capturer l'essence de votre animal.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-card p-4 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">Technologie innovante</h3>
                    <p className="text-sm text-secondary/70">
                      Notre IA propriétaire assiste nos artistes pour garantir des résultats exceptionnels
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg bg-card p-4 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">Qualité garantie</h3>
                    <p className="text-sm text-secondary/70">
                      Chaque création est minutieusement révisée pour assurer une qualité optimale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection
