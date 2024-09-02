import { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import { HeartIcon } from "lucide-react";
import axios from "axios";

// Dummy data for the recipe
const dummyRecipe = {
  name: "Spaghetti Carbonara",
  category: "Italian",
  ingredient: [
    "400g spaghetti",
    "200g pancetta",
    "4 large eggs",
    "100g Pecorino Romano cheese",
    "100g Parmesan cheese",
    "Freshly ground black pepper",
    "Salt"
  ],
  content: "1. Cook spaghetti in salted water until al dente.\n2. Fry pancetta until crispy.\n3. Whisk eggs and cheese in a bowl.\n4. Drain pasta and mix with pancetta.\n5. Off heat, add egg mixture and stir quickly.\n6. Season with pepper and serve immediately.",
  image: "/placeholder.svg?height=300&width=400"
};

const SingleRecipe = () => {
  const { recipe } = useSelector(state => state.recipe_reducer) || dummyRecipe;
  const [isFavorite, setIsFavorite] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const userId = 1; // Static user ID for now

  useEffect(() => {
    // Check if the recipe is a favorite
    const checkIfFavorite = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/favorites/check/${userId}/1`);
        setIsFavorite(response.data.is_favorite);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    // Fetch comments
    const getComments = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/recipes/1/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    checkIfFavorite();
    getComments();
  }, []);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        // Remove from favorites
        await axios.delete(`http://127.0.0.1:8000/api/favorites/1`, {
          data: { user_id: userId }
        });
        setIsFavorite(false);
      } else {
        // Add to favorites
        await axios.post(`http://127.0.0.1:8000/api/user/${userId}/favorites/1`);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };

  const createComment = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/recipes/1/comments`, {
        content: newComment,
        userId: userId
      });
      setComments(old => [...old, { content: newComment }]);
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">{recipe?.name || dummyRecipe.name}</h2>
          <button 
            onClick={toggleFavorite}
            className={`p-2 rounded-full ${isFavorite ? 'bg-red-100' : 'bg-gray-100'}`}
          >
            <HeartIcon 
              className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} 
            />
          </button>
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={recipe?.image || dummyRecipe.image} alt={recipe?.name || dummyRecipe.name} className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Category: {recipe?.category || dummyRecipe.category}</h3>
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-4">
              {(recipe?.ingredient || dummyRecipe.ingredient).map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Préparation:</h3>
            <p className="whitespace-pre-line">{recipe?.content || dummyRecipe.content}</p>
          </div>
        </div>
        
        {/* Comment Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Comments</h3>
          
          {/* Add comment form */}
          <div className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border border-gray-300 rounded-lg resize-none h-24"
              required
            />
            <button 
              onClick={createComment}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Post Comment
            </button>
          </div>

          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{comment.user}</span>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
