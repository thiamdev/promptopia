'use client';
import { useRouter } from 'next/navigation';

const TermsOfUse = () => {
  const router = useRouter();

  return (
    <div className="terms-of-use container mx-auto my-6 p-4">
      <h1 className="text-3xl font-bold mb-6">Conditions d'Utilisation</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Bienvenue sur notre plateforme de vente et de location de maisons. En accédant et en utilisant nos services,
          vous acceptez les présentes Conditions d'Utilisation. Si vous n'acceptez pas ces termes, vous ne pouvez pas
          utiliser nos services. Ces conditions définissent vos droits et obligations en tant qu'utilisateur de la
          plateforme.
        </p>
      </section>

      {/* Compte utilisateur */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Création d'un compte utilisateur</h2>
        <p>
          Pour utiliser pleinement les services de la plateforme, vous devez créer un compte. Lors de l'inscription,
          vous devez fournir des informations précises et à jour. Vous êtes responsable de maintenir la confidentialité
          de vos identifiants de connexion et de toutes les actions effectuées via votre compte.
        </p>
        <p className="mt-4">
          Vous acceptez de ne pas partager votre compte avec un tiers. En cas de soupçon d'utilisation non autorisée
          de votre compte, vous devez nous en informer immédiatement.
        </p>
      </section>

      {/* Utilisation des services */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Utilisation des services</h2>
        <p>
          Nos services sont exclusivement destinés aux personnes physiques majeures, disposant de la capacité juridique
          d'acheter ou de louer des biens immobiliers. Vous vous engagez à utiliser la plateforme de manière conforme
          à la loi, en respectant toutes les réglementations en vigueur.
        </p>
        <p className="mt-4">
          Vous vous engagez également à ne pas :
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Publier des informations fausses, inexactes ou trompeuses.</li>
          <li>Contacter d'autres utilisateurs de manière non sollicitée, sauf pour des besoins liés à la vente ou la location.</li>
          <li>Utiliser le site pour des activités illégales ou frauduleuses.</li>
        </ul>
      </section>

      {/* Contenu généré par l'utilisateur */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Contenu généré par l'utilisateur</h2>
        <p>
          En tant qu'utilisateur, vous pouvez publier du contenu, tel que des annonces immobilières, sur la plateforme.
          Vous garantissez que tout contenu que vous publiez est conforme à la loi, ne viole aucun droit de tiers (par
          exemple, droits d'auteur ou droit à l'image), et n'est pas diffamatoire ou injurieux.
        </p>
        <p className="mt-4">
          Nous nous réservons le droit de supprimer tout contenu inapproprié sans préavis.
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Propriété intellectuelle</h2>
        <p>
          Tout le contenu présent sur notre plateforme, y compris les textes, images, logos, et graphiques, est protégé
          par les lois sur la propriété intellectuelle. Vous ne pouvez pas copier, modifier, distribuer ou reproduire
          tout ou partie du contenu sans notre autorisation expresse.
        </p>
      </section>

      {/* Responsabilité */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Responsabilité</h2>
        <p>
          Nous mettons tout en œuvre pour que la plateforme fonctionne correctement et en toute sécurité. Cependant,
          nous ne garantissons pas un accès ininterrompu aux services. Nous ne sommes pas responsables des pertes ou
          dommages résultant de l'utilisation de la plateforme ou des actions des autres utilisateurs.
        </p>
      </section>

      {/* Modifications des conditions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Modifications des conditions</h2>
        <p>
          Nous nous réservons le droit de modifier les présentes Conditions d'Utilisation à tout moment. Si des
          modifications importantes sont effectuées, nous vous en informerons via un e-mail ou une notification sur
          la plateforme. Il est de votre responsabilité de consulter régulièrement les conditions mises à jour.
        </p>
      </section>

      {/* Résiliation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Résiliation du compte</h2>
        <p>
          Vous pouvez résilier votre compte à tout moment. Nous nous réservons également le droit de résilier ou
          de suspendre votre compte si vous ne respectez pas ces conditions ou si vous utilisez la plateforme de
          manière abusive.
        </p>
      </section>

      {/* Droit applicable */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Droit applicable</h2>
        <p>
          Les présentes Conditions d'Utilisation sont régies par les lois du pays dans lequel nous opérons. Tout
          litige relatif à l'utilisation de la plateforme sera soumis à la juridiction exclusive des tribunaux
          compétents de ce pays.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. Contact</h2>
        <p>
          Si vous avez des questions concernant ces conditions, vous pouvez nous contacter par e-mail à
          <a href="mailto:support@votreplateforme.com" className="text-blue-500 hover:underline"> support@votreplateforme.com</a>.
        </p>
      </section>

      {/* Bouton retour */}
      <div className="mt-8">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default TermsOfUse;
