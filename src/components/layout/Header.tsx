'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/products' },
  { name: 'Artistes', href: '/artists' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/0'
      )}
    >
      <nav className="container mx-auto px-4" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="MyStunningPets"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 tablet:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-secondary/70 hover:text-secondary'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden tablet:block">
            <Button size="lg">
              COMMANDER
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="tablet:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="tablet:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
          >
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-base font-medium',
                    pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-secondary/70 hover:bg-secondary/10 hover:text-secondary'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full" size="lg">
                  COMMANDER
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
