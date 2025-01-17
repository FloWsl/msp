'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: "Quels types d'animaux pouvez-vous représenter sur vos produits ?",
    answer: "Nous pouvons représenter tous types d'animaux sur nos coques. Bien que nous n'ayons pas de limitations, le résultat peut varier pour les animaux que nous n'avons jamais dessinés auparavant. N'hésitez pas à nous contacter si vous avez un animal peu commun !"
  },
  {
    question: "Comment garantissez-vous la qualité des illustrations ?",
    answer: "La qualité de nos illustrations est au cœur de notre processus. Chaque portrait est minutieusement créé par nos artistes professionnels, qui s'appuient sur leur expertise et notre technologie de pointe pour capturer l'essence unique de votre animal. Nous utilisons une IA développée en interne pour générer une base initiale, mais chaque création reste le fruit de la réflexion personnelle et du processus créatif de nos artistes."
  },
  {
    question: "En combien de temps vais-je recevoir mon produit ?",
    answer: "Comptez 1 à 2 semaine avant de pouvoir mettre la main sur votre colis. 1 à 3 jours sont nécessaires pour la réalisation du portrait de votre animal. Il faut ensuite compter 1 jour pour l'impression. La livraison en France se fait sous 3 à 5 jours. Vous recevrez donc votre produit sous 5 à 9 jours ouvrés. Actuellement, nous ne livrons qu'en France. Nous travaillons à étendre notre zone de livraison dans le futur."
  },
  {
    question: "Proposez-vous une livraison express ?",
    answer: "Oui, nous proposons une option de livraison express pour la France. Le prix varie selon le produit et sera calculé à l'étape de paiement. Le délais de livraison sera alors de 2-3 jours au lieu des 3-5 jours habituels."
  },
  {
    question: "Puis-je voir des exemples de produits déjà réalisées pour d'autres clients ?",
    answer: "Bien sûr ! Vous pouvez consulter notre galerie sur notre page instagram @mystunningpets où nous présentons régulièrement des réalisations récentes."
  },
  {
    question: "Proposez-vous une garantie ou une politique de retour ?",
    answer: "Nous offrons une garantie satisfaction. Si vous n'êtes pas entièrement satisfait, contactez-nous dans les 14 jours suivant la réception et nous ferons notre possible pour vous aider."
  },
  {
    question: "Proposez-vous d'autres produits personnalisés avec des portraits d'animaux ?",
    answer: "Mug, coque, Tshirt, Portrait.. nous proposons une large gamme. Démarrez votre commande et laissez vous guidé."
  }
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-secondary">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 flex-shrink-0 text-secondary/60 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-200',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-secondary/80">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq-section"
      className="bg-background py-16 tablet:py-24"
      aria-label="Questions fréquentes"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary tablet:text-4xl">
              Questions Fréquentes
            </h2>
            <p className="text-secondary/80">
              Tout ce que vous devez savoir sur nos produits personnalisés
            </p>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-border rounded-2xl border border-border bg-card p-6 shadow-lg">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-secondary/60">
              Vous avez d'autres questions ?{' '}
              <a
                href="#contact"
                className="font-medium text-primary hover:underline"
              >
                Contactez-nous
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
