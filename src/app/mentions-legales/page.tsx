import { LegalLayout } from '@/components/layout/LegalLayout'

export default function LegalNotice() {
  return (
    <LegalLayout
      title="Mentions Légales"
      lastUpdated="11 janvier 2025"
    >
      <h2>Éditeur du Site</h2>
      <p>
        MyStunningPets<br />
        SAS au capital de 10 000€<br />
        RCS Paris B 123 456 789<br />
        Siège social : 1 rue de la Paix, 75001 Paris<br />
        N° TVA : FR 12 345 678 901<br />
        Directeur de la publication : Jean Dupont
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par :<br />
        Vercel Inc.<br />
        340 S Lemon Ave #4133<br />
        Walnut, CA 91789<br />
        États-Unis
      </p>

      <h2>Propriété Intellectuelle</h2>
      <p>
        L'ensemble du contenu du site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction sans autorisation préalable est interdite.
      </p>

      <h2>Données Personnelles</h2>
      <p>
        Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Consultez notre politique de confidentialité pour plus d'informations.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer, vous acceptez leur utilisation.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question, vous pouvez nous contacter :<br />
        Email : contact@mystunningpets.com<br />
        Téléphone : +33 (0)1 23 45 67 89
      </p>
    </LegalLayout>
  )
}
