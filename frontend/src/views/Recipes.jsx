import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);

  const getRecipeByName = () => {
    axios
      .get("http://127.0.0.1:8000/api/getRecipeByName/" + searchValue)
      .then((response) => {
        setRecipes(response.data);
      });
  };

  const getRecipes = () => {
    axios.get("http://127.0.0.1:8000/api/recipes").then((response) => {
      console.log(response.data);
      const recipes = response.data;
      setRecipes(recipes);
    });
  };

  useEffect(() => {
    if(searchValue === ""){
      getRecipes();
    } else {
      getRecipeByName();
    }
  }, [searchValue]);

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
