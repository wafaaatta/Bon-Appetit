import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [selectIngredient, setSelectIngredient] = useState("");

  const getRecipeByName = () => {
    axios
      .get("http://127.0.0.1:8000/api/getRecipeByName/" + searchValue)
      .then((response) => {
        setRecipes(response.data);
      });
  };

  const getRecipes = () => {
      axios.get("http://127.0.0.1:8000/api/recipes").then((response) => {
        const allRecipes = response.data;
        console.log(selectIngredient);
        if (selectIngredient !== '') {
          const filteredRecipes = allRecipes.filter(recipe =>
            recipe.ingredients.some(ingredient => ingredient.name === selectIngredient)
          );
          console.log(filteredRecipes);
          
          setRecipes(filteredRecipes);
        } else {
          setRecipes(allRecipes);
        }
      });
   
  };

  const getIngredient = () => {
    axios.get("http://127.0.0.1:8000/api/ingredients").then((response) => {
      console.log(response.data);
      const Allingredients = response.data;
      setIngredients(Allingredients);
    });
  }

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
    <>
      <Header />
      <Banner />
      <div className="bloc">
        <select name="ingredients" onChange={(e) => setSelectIngredient(e.target.value)}>
        <option value="" disabled selected>Sélectionner un ingrédient</option>
          {
             [...new Set(ingredients.map(ingredient => ingredient.name))]
             .map((uniqueIngredient, index) => (
               <option key={index} value={uniqueIngredient}>
                 {uniqueIngredient}
               </option>
             ))
          }
        </select>
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
