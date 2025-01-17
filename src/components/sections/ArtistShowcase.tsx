import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Instagram, Palette, Star } from 'lucide-react'

const artists = [
  {
    id: '1',
    name: 'Sophie Martin',
    image: '/images/artists/sophie.jpg',
    role: 'Portrait Artist',
    instagram: '@sophiemartinart',
    specialties: ['Watercolor', 'Digital Art'],
    rating: 4.9,
    reviews: 156,
    portfolio: [
      '/images/portfolio/sophie-1.jpg',
      '/images/portfolio/sophie-2.jpg',
      '/images/portfolio/sophie-3.jpg',
    ],
  },
  // Add more artists
]

export const ArtistShowcase = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-secondary tablet:text-4xl">
            Nos Artistes Talentueux
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            Découvrez les créateurs qui donnent vie à vos portraits
          </p>
        </div>

        {/* Artist Grid */}
        <div className="mt-16 grid gap-8 tablet:grid-cols-2 desktop:grid-cols-3">
          {artists.map((artist) => (
            <Card key={artist.id} className="overflow-hidden">
              {/* Artist Header */}
              <div className="relative h-48">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{artist.name}</h3>
                    <p className="text-secondary/70">{artist.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-alert stroke-alert" />
                    <span className="font-medium">{artist.rating}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {artist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Portfolio Preview */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {artist.portfolio.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`${artist.name} portfolio ${index + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={`https://instagram.com/${artist.instagram.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary/70 hover:text-secondary"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>{artist.instagram}</span>
                  </a>
                  <span className="text-sm text-secondary/70">
                    {artist.reviews} avis
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Artist CTA */}
        <div className="mt-16 text-center">
          <a
            href="/artists"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Palette className="h-5 w-5" />
            <span>Découvrir tous nos artistes</span>
          </a>
        </div>
      </div>
    </section>
  )
}
