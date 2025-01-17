import Image from 'next/image'
import HeroSection from '@/components/sections/HeroSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { ArtistShowcase } from '@/components/sections/ArtistShowcase'
import { SocialProof } from '@/components/sections/SocialProof'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <TrustSection />
      <ArtistShowcase />
      <SocialProof />
    </main>
  )
}
