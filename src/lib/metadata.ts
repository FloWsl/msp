import { Metadata } from 'next'

export const siteConfig = {
  name: 'MyStunningPets',
  description: 'Créez des portraits personnalisés uniques de vos animaux de compagnie',
  url: 'https://mystunningpets.com',
  ogImage: 'https://mystunningpets.com/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/mystunningpets',
    instagram: 'https://instagram.com/mystunningpets',
  },
  supportedLocales: ['fr', 'en'],
  defaultLocale: 'fr',
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  path = '',
  locale = siteConfig.defaultLocale,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  path?: string
  locale?: string
} = {}): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fr-FR': `${siteConfig.url}/fr${path}`,
        'en-US': `${siteConfig.url}/en${path}`,
      },
    },
    openGraph: {
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      siteName: siteConfig.name,
      locale,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@mystunningpets',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
