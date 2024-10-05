'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const settings = () => {
  const [user, setUser] = useState({
    fullName: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '+1 234 567 890',
    notifications: {
      email: true,
      sms: false,
    },
    subscription: 'Premium', // Subscription type: Free, Premium, etc.
    password: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating user data (e.g., API call)
    console.log('User settings updated:', user);
  };

  return (
    <div className="settings-page bg-white container mx-auto my-6 p-4">
      <h1 className="text-2xl font-bold mb-6">Paramètres du compte</h1>
      
      {/* Section 1: Informations Personnelles */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-medium">Nom complet</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        </form>
      </section>

      {/* Section 2: Préférences de notification */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Préférences de notification</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="emailNotifications" className="mr-2">Notification par e-mail</label>
          <input
            type="checkbox"
            name="notifications.email"
            checked={user.notifications.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="smsNotifications" className="mr-2">Notification par SMS</label>
          <input
            type="checkbox"
            name="notifications.sms"
            checked={user.notifications.sms}
            onChange={handleInputChange}
          />
        </div>
      </section>

      {/* Section 3: Abonnements et Facturation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Abonnement et facturation</h2>
        <div className="mb-4">
          <label className="block font-medium">Plan actuel : {user.subscription}</label>
          <button
            onClick={() => router.push('/billing')}
            className="text-blue-500 hover:underline"
          >
            Gérer mon abonnement
          </button>
        </div>
      </section>

      {/* Section 4: Sécurité et confidentialité */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sécurité et confidentialité</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">Changer de mot de passe</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        </form>
      </section>

      {/* Section 5: Gestion des annonces */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Gestion des annonces</h2>
        <button
          onClick={() => router.push('/my-properties')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Voir mes annonces
        </button>
      </section>

      {/* Section 6: Support et aide */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Support et aide</h2>
        <button
          onClick={() => router.push('/support')}
          className="text-blue-500 hover:underline"
        >
          Contacter le support
        </button>
      </section>

      {/* Section 7: Désactivation/Suppression du compte */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Désactiver ou supprimer le compte</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')}
        >
          Supprimer mon compte
        </button>
      </section>
    </div>
  );
};

export default settings;

