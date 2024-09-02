import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get("http://127.0.0.1:8000/api/recipes").then((response) => {
      console.log(response.data);
      const recipes = response.data;
      setRecipes(recipes);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
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
