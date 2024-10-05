'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ReportProblem = () => {
  const [problem, setProblem] = useState({
    type: '',
    description: '',
    file: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProblem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProblem((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic for handling form submission, e.g., sending the data to an API route
    // Assuming we have a route: /api/report-problem that handles the request
    const formData = new FormData();
    formData.append('type', problem.type);
    formData.append('description', problem.description);
    if (problem.file) {
      formData.append('file', problem.file);
    }

    fetch('/api/report-problem', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true);
        } else {
          console.error('Error submitting the form');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="report-problem container mx-auto my-6 p-4">
      <h1 className="text-2xl font-bold mb-6">Signaler un problème</h1>

      {isSubmitted ? (
        <div className="bg-green-100 p-4 rounded text-green-700">
          Merci d'avoir signalé ce problème. Nous allons l'examiner et revenir vers vous dès que possible.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Type de problème */}
          <div className="mb-4">
            <label htmlFor="type" className="block font-medium mb-2">Type de problème</label>
            <select
              name="type"
              value={problem.type}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 w-full"
            >
              <option value="">Sélectionner un type de problème</option>
              <option value="functionality">Problème de fonctionnalité</option>
              <option value="payment">Problème de paiement</option>
              <option value="listing">Problème avec une annonce</option>
              <option value="other">Autre</option>
            </select>
          </div>

          {/* Description du problème */}
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={problem.description}
              onChange={handleInputChange}
              required
              placeholder="Décrivez le problème rencontré en détail"
              className="border border-gray-300 p-2 w-full h-32"
            ></textarea>
          </div>

          {/* Upload de fichier */}
          <div className="mb-4">
            <label htmlFor="file" className="block font-medium mb-2">Joindre une capture d'écran ou un fichier (facultatif)</label>
            <input
              type="file"
              name="file"
              accept=".jpg,.png,.pdf,.docx"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Envoyer le signalement
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReportProblem;
