import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Heart } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'À propos', href: '/about' },
    { label: 'Nos artistes', href: '/artists' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'Conditions générales', href: '/conditions-generales' },
  ],
  social: [
    {
      label: 'Instagram',
      href: 'https://instagram.com/mystunningpets',
      icon: Instagram,
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/mystunningpets',
      icon: Facebook,
    },
  ],
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="container mx-auto px-4 py-12 tablet:py-16">
        <div className="grid gap-12 tablet:grid-cols-2 desktop:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/logo-white.svg"
                alt="MyStunningPets"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-white/70">
              Transformez vos photos d'animaux en portraits uniques créés par nos
              artistes talentueux.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold">Entreprise</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold">Informations légales</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Réseaux sociaux</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/70 tablet:flex-row">
          <p>
            {currentYear} MyStunningPets. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="h-4 w-4 fill-primary stroke-primary" /> en
            France
          </p>
        </div>
      </div>
    </footer>
  )
}
