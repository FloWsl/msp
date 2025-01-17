import { LegalLayout } from '@/components/layout/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Politique de Confidentialité"
      lastUpdated="11 janvier 2025"
    >
      <h2>Introduction</h2>
      <p>
        MyStunningPets s'engage à protéger la vie privée des utilisateurs de notre site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
      </p>

      <h2>Collecte des Informations</h2>
      <p>
        Nous collectons les informations que vous nous fournissez directement, notamment :
      </p>
      <ul>
        <li>Nom et coordonnées</li>
        <li>Informations de paiement</li>
        <li>Photos de vos animaux</li>
        <li>Préférences de communication</li>
      </ul>

      <h2>Utilisation des Données</h2>
      <p>
        Nous utilisons vos informations pour :
      </p>
      <ul>
        <li>Traiter vos commandes</li>
        <li>Personnaliser votre expérience</li>
        <li>Améliorer nos services</li>
        <li>Communiquer avec vous</li>
      </ul>

      <h2>Protection des Données</h2>
      <p>
        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé ou toute modification.
      </p>

      <h2>Vos Droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants :
      </p>
      <ul>
        <li>Droit d'accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement</li>
        <li>Droit à la portabilité</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Pour toute question concernant notre politique de confidentialité, contactez-nous à privacy@mystunningpets.com
      </p>
    </LegalLayout>
  )
}
