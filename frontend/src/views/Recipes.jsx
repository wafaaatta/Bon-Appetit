import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get("http://127.0.0.1:8000/recipes").then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <div></div>
    </>
  );
};
export default Recipes;
