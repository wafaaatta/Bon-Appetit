import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [editingStatusId, setEditingStatusId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  // Fonction pour récupérer les utilisateurs
  const getUsers = () => {
    axios.get("http://127.0.0.1:8000/api/user").then((response) => {
      setUsers(response.data);
    });
  };

  // Fonction pour récupérer les recettes
  const getRecipes = () => {
    axios.get("http://127.0.0.1:8000/api/recipes").then((response) => {
      setRecipes(response.data);
    });
  };

  // Fonction pour supprimer un utilisateur
  const deleteUser = (e, id) => {
    axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(() => {
      alert("Utilisateur supprimé !");
      window.location.reload(false);
    });
  };

  // Fonction pour activer le mode édition d'une recette
  const editRecipe = (e, id) => {
    setEditingStatusId(id); // Activer le mode édition pour cette recette
    setNewStatus(recipes.find((recipe) => recipe.id === id).status); // Initialiser le nouveau statut avec le statut actuel
  };

  // Fonction pour sauvegarder le nouveau statut
  const saveStatus = (e, id) => {
    axios
      .post(`http://127.0.0.1:8000/api/recipes/${id}?_method=PUT`, {
        status: newStatus,
      })
      .then(() => {
        setEditingStatusId(null); // Désactiver le mode édition
        setNewStatus(""); // Réinitialiser le nouveau statut
        getRecipes(); // Rafraîchir la liste des recettes
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du statut:", error);
      });
  };

  // Utiliser useEffect pour charger les utilisateurs et recettes au chargement du composant
  useEffect(() => {
    getUsers();
    getRecipes();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center ml-10">
        <div className="flex flex-col w-full">
          <h2 className="text-center">Mon Profile</h2>
          <div className="bloc flex w-full">
            <div className="w-1/3">
              <div className="flex flex-col mb-5">
                <h2>Utilisateurs</h2>
              </div>
              <span className="flex flex-col gap-2 ">
                <div className="flex gap-10">
                  <h3>Id</h3>
                  <h3 className="w-28">Username</h3>
                </div>
                {users &&
                  users.map((user) => (
                    <div key={user.id} className="flex gap-10 border p-4 w-1/2">
                      <p>{user.id}</p>
                      <p className="w-28">{user.username}</p>
                      <button
                        className="border h-8 rounded bg-red-700 text-white p-1"
                        onClick={(e) => deleteUser(e, user.id)}
                      >
                        delete
                      </button>
                    </div>
                  ))}
              </span>
            </div>
            <div className="flex w-1/3">
              <div className="flex flex-col">
                <div className="flex flex-col mb-5">
                  <h2>Toutes les recettes</h2>
                </div>
                <span className="flex flex-col gap-2">
                  <div className="flex gap-10">
                    <h3>Id</h3>
                    <h3 className="w-28">Recette</h3>
                    <h3 className="w-28">Status</h3>
                  </div>
                  {recipes &&
                    recipes.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="flex justify-center items-center gap-10 border p-4"
                      >
                        <p>{recipe.id}</p>
                        <p className="w-28">{recipe.title}</p>
                        {editingStatusId === recipe.id ? (
                          <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-28 border"
                          >
                            <option value="pending">Pending</option>
                            <option value="published">Published</option>
                          </select>
                        ) : (
                          <p className="w-28">{recipe.status}</p>
                        )}
                        {editingStatusId === recipe.id ? (
                          <button
                            onClick={(e) => saveStatus(e, recipe.id)}
                            className="border h-8 rounded bg-green-700 text-white p-1"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={(e) => editRecipe(e, recipe.id)}
                            className="border h-8 rounded bg-first-color text-white p-1"
                          >
                            Modifier status
                          </button>
                        )}
                      </div>
                    ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
