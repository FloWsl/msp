'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { ReviewCard } from '@/components/reviews/ReviewCard'
import { Shield, Truck, RefreshCcw, Clock, Star } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: 'Garantie Satisfaction',
    description: 'Satisfait ou remboursé sous 30 jours',
  },
  {
    icon: Truck,
    title: 'Livraison Gratuite',
    description: 'Partout en France métropolitaine',
  },
  {
    icon: RefreshCcw,
    title: 'Révisions Gratuites',
    description: 'Modifications illimitées',
  },
  {
    icon: Clock,
    title: 'Support Réactif',
    description: 'Réponse sous 24h maximum',
  },
]

const reviews = [
  {
    name: 'Marie L.',
    rating: 5,
    date: '15 Dec 2024',
    comment: 'Le portrait de mon chat est magnifique ! La qualité est exceptionnelle et le service client très attentionné.',
    image: '/images/reviewers/marie.jpg',
    productImage: '/images/reviews/product1.jpg',
    verified: true,
  },
  {
    name: 'Thomas B.',
    rating: 5,
    date: '10 Dec 2024',
    comment: 'Cadeau parfait pour Noël ! Le rendu est fidèle à la photo de mon chien et la livraison a été rapide.',
    verified: true,
  },
  {
    name: 'Sophie M.',
    rating: 5,
    date: '5 Dec 2024',
    comment: 'Très satisfaite du résultat ! Le processus est simple et le support client est excellent.',
    image: '/images/reviewers/sophie.jpg',
    productImage: '/images/reviews/product2.jpg',
    verified: true,
  },
]

export const TrustSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <guarantee.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                {guarantee.title}
              </h3>
              <p className="mt-2 text-secondary/70">{guarantee.description}</p>
            </Card>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-secondary tablet:text-4xl">
              Ce que nos clients disent
            </h2>
            <p className="mt-4 text-lg text-secondary/70">
              Rejoignez plus de 50 000 clients satisfaits qui ont immortalisé leurs compagnons
            </p>
          </div>

          {/* Review Stats */}
          <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">4.9</div>
              <div className="mt-1 text-sm text-secondary/60">sur 5</div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < rating ? 'fill-alert stroke-alert' : 'stroke-secondary/20'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary/10">
                    <div
                      className="h-full bg-alert"
                      style={{
                        width: `${rating === 5 ? 85 : rating === 4 ? 10 : 5}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Cards */}
          <div className="mt-12 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-24">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 opacity-60">
            <Image
              src="/images/trust/secure-payment.svg"
              alt="Paiement sécurisé"
              width={100}
              height={40}
            />
            <Image
              src="/images/trust/satisfaction.svg"
              alt="Satisfaction garantie"
              width={100}
              height={40}
            />
            <Image
              src="/images/trust/shipping.svg"
              alt="Livraison gratuite"
              width={100}
              height={40}
            />
            <Image
              src="/images/trust/support.svg"
              alt="Support client"
              width={100}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
