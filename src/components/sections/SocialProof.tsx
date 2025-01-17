'use client'

import { InstagramFeed } from '@/components/social/InstagramFeed'
import { ShareButtons } from '@/components/social/ShareButtons'

export const SocialProof = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Instagram Feed */}
        <InstagramFeed />

        {/* Social Stats */}
        <div className="mt-24 grid gap-8 rounded-2xl bg-secondary p-8 text-white tablet:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold">50K+</div>
            <div className="mt-2 text-white/70">Followers Instagram</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">1000+</div>
            <div className="mt-2 text-white/70">Photos Partagées</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">4.9/5</div>
            <div className="mt-2 text-white/70">Note Moyenne</div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-secondary">
            Partagez Votre Portrait
          </h3>
          <p className="mt-2 text-secondary/70">
            Utilisez #MyStunningPets pour apparaître dans notre galerie
          </p>
          <div className="mt-6 flex justify-center">
            <ShareButtons
              url="https://mystunningpets.com"
              title="Découvrez mon portrait personnalisé chez MyStunningPets!"
              description="Des portraits uniques créés par des artistes talentueux"
              hashtags={['MyStunningPets', 'PetPortrait', 'PetArt']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
