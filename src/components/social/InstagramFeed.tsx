'use client'

import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Card } from '@/components/ui/Card'

// Mock Instagram data (replace with real API data)
const instagramPosts = [
  {
    id: '1',
    image: '/images/instagram/post1.jpg',
    caption: 'Portrait magnifique de Luna 🐱 #MyStunningPets #PetArt',
    likes: 245,
    comments: 12,
  },
  {
    id: '2',
    image: '/images/instagram/post2.jpg',
    caption: 'Le processus de création en accéléré ✨ #ArtProcess',
    likes: 189,
    comments: 8,
  },
  {
    id: '3',
    image: '/images/instagram/post3.jpg',
    caption: 'Avant/Après : La magie de nos artistes 🎨',
    likes: 302,
    comments: 15,
  },
  // Add more posts as needed
]

export const InstagramFeed = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-secondary">
            Suivez nos créations
          </h3>
          <p className="mt-2 text-secondary/70">
            Découvrez nos dernières œuvres sur Instagram
          </p>
        </div>
        <a
          href="https://instagram.com/mystunningpets"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-opacity hover:opacity-90"
        >
          <Instagram className="h-5 w-5" />
          <span>Suivre</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {instagramPosts.map((post) => (
          <Card
            key={post.id}
            className="group overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-square">
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full flex-col justify-end">
                  <p className="line-clamp-3 text-sm">{post.caption}</p>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="text-center tablet:hidden">
        <a
          href="https://instagram.com/mystunningpets"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>Voir plus sur Instagram</span>
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
