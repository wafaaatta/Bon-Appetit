import { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { HeartIcon } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = 1; // Static user ID for now

  useEffect(() => {
    // Fetch user's favorite recipes
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user/${userId}/favorites`);
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [userId]);

  const removeFavorite = async (favoriteId) => {
    try {
      // Delete the favorite recipe
      await axios.delete(`http://127.0.0.1:8000/api/favorites/${favoriteId}`);
      // Re-fetch the favorites to update the list
      const response = await axios.get(`http://127.0.0.1:8000/api/user/${userId}/favorites`);
      setFavorites(response.data);
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-6">My Favorite Recipes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Link to={`/recipe/${favorite.recipe_id}`}>
                  <img src={favorite.recipe.picture || "/placeholder.svg"} alt={favorite.recipe.name} className="w-full h-48 object-cover" />
                </Link>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{favorite.recipe.name}</h3>
                  <p className="text-gray-500 mb-4">{favorite.recipe.category}</p>
                  <button 
                    onClick={() => removeFavorite(favorite.id)} // Calls the removeFavorite function
                    className="p-2 rounded-full bg-red-100"
                  >
                    <HeartIcon 
                      className="w-6 h-6 text-red-500 fill-red-500" 
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">You don't have any favorite recipes yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
