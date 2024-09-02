import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ recipeId, refreshComments }) => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://127.0.0.1:8000/recipes/${recipeId}/comments`, {
        content: content,
      });

      if (response.data.status === 200) {
        setMessage('Commentaire ajouté avec succès');
        setContent('');
        refreshComments(); // Rafraîchit la liste des commentaires après ajout
      }
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ajouter un commentaire..."
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CommentForm;

