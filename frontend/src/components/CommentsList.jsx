import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentsList = ({ recipeId, commentsUpdated }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/recipes/${recipeId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des commentaires', error);
      }
    };

    fetchComments();
  }, [recipeId, commentsUpdated]);

  return (
    <div>
      <h3>Commentaires</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>Aucun commentaire pour cette recette.</p>
      )}
    </div>
  );
};

export default CommentsList;

