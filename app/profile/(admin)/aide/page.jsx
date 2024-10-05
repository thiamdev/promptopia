'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const aide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Logique de recherche pour base de connaissances ou FAQ
    console.log('Recherche : ', searchQuery);
  };

  return (
    <div className="help-center container mx-auto my-6 p-4">
      <h1 className="text-2xl font-bold mb-6">Centre d'aide et assistance</h1>

      {/* Section de recherche */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Comment pouvons-nous vous aider ?</h2>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Rechercher dans les FAQs ou la base de connaissances"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
          >
            Rechercher
          </button>
        </form>
      </section>

      {/* Section 1: FAQs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Questions fréquentes</h2>
        <div className="bg-gray-100 p-4 rounded">
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <a href="#faq1" className="text-blue-500 hover:underline">Comment puis-je publier une annonce ?</a>
            </li>
            <li className="mb-2">
              <a href="#faq2" className="text-blue-500 hover:underline">Comment modifier ou supprimer une annonce ?</a>
            </li>
            <li className="mb-2">
              <a href="#faq3" className="text-blue-500 hover:underline">Quelles sont les options de paiement disponibles ?</a>
            </li>
            <li className="mb-2">
              <a href="#faq4" className="text-blue-500 hover:underline">Comment contacter le propriétaire ou le locataire ?</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Base de connaissances */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Base de connaissances</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="mb-4">
            Explorez nos articles détaillés pour mieux comprendre comment utiliser notre plateforme :
          </p>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <a href="#article1" className="text-blue-500 hover:underline">Guide complet pour vendre une maison</a>
            </li>
            <li className="mb-2">
              <a href="#article2" className="text-blue-500 hover:underline">Comment optimiser votre annonce pour la location</a>
            </li>
            <li className="mb-2">
              <a href="#article3" className="text-blue-500 hover:underline">Résoudre les problèmes de paiement</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Contacter le support */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contacter le support</h2>
        <p className="mb-4">
          Si vous avez besoin d'une assistance supplémentaire, vous pouvez nous contacter directement :
        </p>
        <button
          onClick={() => router.push('/support/contact')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Contacter le support
        </button>
      </section>

      {/* Section 4: Suivi des tickets */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Suivi de mes tickets</h2>
        <p className="mb-4">
          Consultez l'état de vos demandes d'assistance précédentes :
        </p>
        <button
          onClick={() => router.push('/support/tickets')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Voir mes tickets
        </button>
      </section>

      {/* Section 5: Ressources vidéo */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ressources vidéo</h2>
        <p className="mb-4">
          Regardez nos tutoriels vidéo pour en apprendre davantage sur l'utilisation de la plateforme :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/example1"
              title="Tutoriel 1"
            ></iframe>
            <p className="mt-2 font-medium">Comment publier une annonce</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/example2"
              title="Tutoriel 2"
            ></iframe>
            <p className="mt-2 font-medium">Optimiser votre annonce pour la location</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/example3"
              title="Tutoriel 3"
            ></iframe>
            <p className="mt-2 font-medium">Gestion des paiements</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aide;
