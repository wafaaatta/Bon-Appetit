import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchValue = useSelector((state) => state.search.searchValue);

  const getRecipeByName = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://127.0.0.1:8000/api/getRecipeByName/${searchValue}`);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes by name:", error);
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getRecipes = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue === "") {
      getRecipes();
    } else {
      getRecipeByName();
    }
  }, [searchValue]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nos Recettes</h1>
        {loading ? (
          <p className="text-center">Chargement des recettes...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : recipes.length === 0 ? (
          <p className="text-center">Aucune recette trouvée.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Recipes;