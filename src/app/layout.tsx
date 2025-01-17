import { Inter } from 'next/font/google'
import { constructMetadata } from '@/lib/metadata'
import { generateOrganizationSchema } from '@/lib/schema'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { Layout } from '@/components/layout/Layout'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
