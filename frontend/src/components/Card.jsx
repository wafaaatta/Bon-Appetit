import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRecipe } from "../slice/RecipeSlice";

const Card = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToDetails = () => {
    dispatch(setRecipe(recipe));
    navigate('/single-recipe');
  };

  const getImageUrl = (image) => {
    if (image) {
      return `http://127.0.0.1:8000/storage/${image}`;
    }
    return "https://via.placeholder.com/640x480.png/000022?text=eveniet";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={getImageUrl(recipe.image)}
        alt={`image de ${recipe.title}`}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{recipe.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.content}</p>
        <button
          onClick={navigateToDetails}
          className="text-second-color hover:text-opacity-80 font-medium underline transition-colors duration-300"
        >
          Voir plus de détails
        </button>
      </div>
    </div>
  );
};

export default Card;