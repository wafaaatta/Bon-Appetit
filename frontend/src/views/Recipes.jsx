import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [selectIngredient, setSelectIngredient] = useState("");

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

  const getRecipes = () => {
    axios.get("http://127.0.0.1:8000/api/recipes").then((response) => {
      console.log(response.data);
      const recipes = response.data;
      setRecipes(recipes);
    });
  };

  useEffect(() => {
    if (searchValue === "") {
      getRecipes();
    } else {
      getRecipeByName();
    }
  }, [searchValue]);

  useEffect(() => {
    getIngredient();
  },[])  

  useEffect(() => {
    console.log(selectIngredient)
  }, [selectIngredient])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Banner />
      <div className="bloc">
        <div className="flex flex-wrap items-center justify-center">
          {recipes &&
            recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Recipes;