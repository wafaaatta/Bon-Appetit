import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const LastRecipe = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getLastRecipe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/recipes");
      const sortedData = response.data
        .slice(0, 6)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setData(sortedData);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLastRecipe();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Nos Dernières Recettes</h2>
        <div className="text-center">Chargement des recettes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Nos Dernières Recettes</h2>
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Dernières Recettes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>
        {data.length === 0 && (
          <p className="text-center text-gray-600">Aucune recette disponible pour le moment.</p>
        )}
      </div>
    </section>
  );
};

export default LastRecipe;