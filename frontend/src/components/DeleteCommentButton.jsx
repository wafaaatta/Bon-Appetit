import React from 'react';
import axios from 'axios';

const DeleteCommentButton = ({ commentId, refreshComments }) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/comments/${commentId}`);
            if (response.data.status === 200) {
                refreshComments(); // Rafraîchir la liste des commentaires après suppression
            }
        } catch (error) {
            console.error('Erreur lors de la suppression du commentaire', error);
        }
    };

    return <button onClick={handleDelete}>Supprimer</button>;
};

export default DeleteCommentButton;
