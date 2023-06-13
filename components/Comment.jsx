import { useState } from 'react';

export default function Comment({ formaId }) {
  const [comment, setComment] = useState({
    username: '',
    userImage: '',
    commentText: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitComment = async () => {
    try {
      const response = await fetch(`/api/forma/${formaId}/addComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du commentaire');
      }

      const result = await response.json();
      console.log('Commentaire ajouté:', result);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitComment();
      }}
    >
      <label>
        Nom d'utilisateur:
        <input
          type="text"
          name="username"
          value={comment.username}
          onChange={handleInputChange}
        />
      </label>

      <label>
        URL de l'image de profil:
        <input
          type="text"
          name="userImage"
          value={comment.userImage}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Commentaire:
        <textarea
          name="commentText"
          value={comment.commentText}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Ajouter un commentaire</button>
    </form>
  );
}
