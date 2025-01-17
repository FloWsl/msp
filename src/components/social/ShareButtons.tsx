'use client'

import { Instagram, Facebook, Twitter, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ShareButtonsProps {
  url: string
  title: string
  description: string
  hashtags?: string[]
}

export const ShareButtons = ({
  url,
  title,
  description,
  hashtags = ['MyStunningPets', 'PetPortrait'],
}: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = hashtags.join(',')

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`,
    instagram: `instagram://library?AssetPath=${encodedUrl}`, // Note: Instagram sharing is limited on web
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      // You might want to add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="secondary"
        size="sm"
        className="gap-2"
        onClick={() => window.open(shareLinks.facebook, '_blank')}
      >
        <Facebook className="h-4 w-4" />
        <span className="hidden tablet:inline">Partager</span>
      </Button>

      <Button
        variant="secondary"
        size="sm"
        className="gap-2"
        onClick={() => window.open(shareLinks.twitter, '_blank')}
      >
        <Twitter className="h-4 w-4" />
        <span className="hidden tablet:inline">Tweet</span>
      </Button>

      <Button
        variant="secondary"
        size="sm"
        className="gap-2"
        onClick={() => window.open(shareLinks.instagram, '_blank')}
      >
        <Instagram className="h-4 w-4" />
        <span className="hidden tablet:inline">Story</span>
      </Button>

      <Button
        variant="secondary"
        size="sm"
        className="gap-2"
        onClick={copyToClipboard}
      >
        <Link2 className="h-4 w-4" />
        <span className="hidden tablet:inline">Copier le lien</span>
      </Button>
    </div>
  )
}
