import { LegalLayout } from '@/components/layout/LegalLayout'

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Conditions Générales de Vente"
      lastUpdated="11 janvier 2025"
    >
      <h2>Préambule</h2>
      <p>
        Les présentes conditions générales de vente s'appliquent à toutes les commandes passées sur le site MyStunningPets.
      </p>

      <h2>Commandes</h2>
      <p>
        La commande ne sera validée qu'après :
      </p>
      <ul>
        <li>Acceptation des présentes conditions</li>
        <li>Confirmation de la commande</li>
        <li>Paiement du prix</li>
      </ul>

      <h2>Prix et Paiement</h2>
      <p>
        Les prix sont indiqués en euros TTC. Le paiement s'effectue au moment de la commande par carte bancaire ou PayPal.
      </p>

      <h2>Livraison</h2>
      <p>
        Les délais de livraison sont donnés à titre indicatif. Nous nous engageons à vous tenir informé de l'avancement de votre commande.
      </p>

      <h2>Droit de Rétractation</h2>
      <p>
        S'agissant de produits personnalisés, le droit de rétractation ne s'applique pas conformément à l'article L221-28 du Code de la consommation.
      </p>

      <h2>Propriété Intellectuelle</h2>
      <p>
        Les œuvres créées restent la propriété intellectuelle de MyStunningPets et de ses artistes. Une licence d'utilisation personnelle est accordée au client.
      </p>

      <h2>Litiges</h2>
      <p>
        En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. Les présentes conditions sont soumises au droit français.
      </p>
    </LegalLayout>
  )
}
