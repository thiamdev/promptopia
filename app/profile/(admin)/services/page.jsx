'use client'
import { useRouter } from 'next/navigation';

const TermsOfService = () => {
  const router = useRouter();

  return (
    <div className="terms-of-service container mx-auto my-6 p-4">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales d'Utilisation (CGU)</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Bienvenue sur notre plateforme de vente et location de maisons. En accédant à nos services, vous acceptez de
          respecter les présentes Conditions Générales d'Utilisation (CGU). Veuillez les lire attentivement avant d'utiliser
          la plateforme. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
        </p>
      </section>

      {/* Services accessibles */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Accès aux services</h2>
        <p>
          Les services proposés sur notre plateforme sont accessibles à toute personne disposant d’un compte. L’inscription
          est gratuite et permet aux utilisateurs de publier des annonces, de consulter des annonces de vente ou location,
          et de contacter d’autres utilisateurs pour les transactions immobilières.
        </p>
        <p className="mt-4">
          En créant un compte, vous confirmez que vous êtes âgé de 18 ans ou plus et que vous fournissez des informations
          exactes et à jour. Vous êtes responsable de la sécurité de votre compte et des actions effectuées via celui-ci.
        </p>
      </section>

      {/* Inscription et gestion du compte */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Inscription et gestion du compte</h2>
        <p>
          Pour accéder aux services de la plateforme, vous devez créer un compte. Vous acceptez de fournir des informations
          exactes et à jour lors de l'inscription, et de maintenir ces informations à jour pendant toute la durée
          d'utilisation de nos services.
        </p>
        <ul className="list-disc pl-5 mt-4">
          <li>Vous êtes responsable de la confidentialité de vos identifiants de connexion.</li>
          <li>Vous acceptez de ne pas partager votre compte avec une tierce partie sans notre autorisation.</li>
          <li>Nous nous réservons le droit de suspendre ou de supprimer votre compte en cas de violation de ces CGU.</li>
        </ul>
      </section>

      {/* Utilisation des services */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Utilisation des services</h2>
        <p>
          En utilisant nos services, vous vous engagez à respecter les règles suivantes :
        </p>
        <ul className="list-disc pl-5 mt-4">
          <li>Ne pas publier d'annonces frauduleuses ou trompeuses.</li>
          <li>Ne pas utiliser la plateforme pour des activités illégales ou non autorisées.</li>
          <li>Respecter la vie privée des autres utilisateurs.</li>
          <li>Ne pas tenter d'accéder aux données d'autres utilisateurs sans leur autorisation.</li>
        </ul>
        <p className="mt-4">
          Toute violation de ces règles peut entraîner la suspension ou la suppression de votre compte, ainsi que des
          poursuites légales si nécessaire.
        </p>
      </section>

      {/* Responsabilité et garanties */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Responsabilité et garanties</h2>
        <p>
          Nous mettons tout en œuvre pour garantir que notre plateforme est disponible et fonctionne correctement, mais nous
          ne pouvons pas garantir un accès ininterrompu. Nous déclinons toute responsabilité en cas de pertes ou de dommages
          résultant de l'utilisation de la plateforme.
        </p>
        <p className="mt-4">
          Vous reconnaissez que l'utilisation de la plateforme se fait à vos propres risques. Nous n'offrons aucune garantie
          quant à l'exactitude, la fiabilité ou la légalité des annonces publiées par les utilisateurs.
        </p>
      </section>

      {/* Modification des conditions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Modification des Conditions Générales d'Utilisation</h2>
        <p>
          Nous nous réservons le droit de modifier ces CGU à tout moment. Si des changements importants sont apportés, nous
          vous en informerons par e-mail ou via une notification sur la plateforme. Il est de votre responsabilité de lire
          régulièrement les CGU pour rester informé des mises à jour.
        </p>
      </section>

      {/* Résiliation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Résiliation</h2>
        <p>
          Vous pouvez à tout moment résilier votre compte en contactant notre service client. Nous nous réservons également le
          droit de résilier ou de suspendre votre compte si vous enfreignez ces CGU ou pour toute autre raison légale.
        </p>
      </section>

      {/* Droit applicable */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Droit applicable</h2>
        <p>
          Ces Conditions Générales d'Utilisation sont régies par les lois du pays dans lequel la plateforme est opérée. Tout
          litige sera soumis à la juridiction des tribunaux compétents de ce pays.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Contact</h2>
        <p>
          Si vous avez des questions concernant ces CGU, vous pouvez nous contacter à l'adresse suivante :
        </p>
        <p className="mt-2">
          <a href="mailto:support@votreplateforme.com" className="text-blue-500 hover:underline">support@votreplateforme.com</a>
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

export default TermsOfService;
