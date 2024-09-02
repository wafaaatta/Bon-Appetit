import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastRecipe from "../components/LastRecipe";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import axios from "axios";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [categories, setCategories] = useState([]);
  const categoryId = useSelector((state) => state.category.categoryId);
  const [recipesCategories, setRecipesCategories] = useState([]);

  // useEffect(() => {
  //   console.log("Category ID has been updated:", categoryId);
  // }, [categoryId]); 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories').then((res) => {
      setCategories(res.data);
    })
  },[])

  const getRecipeByName = () => {
    axios
      .get("http://127.0.0.1:8000/api/getRecipeByName/" + searchValue)
      .then((response) => {
        setRecipes(response.data);
      });
  };

  const getRecipeByCategory = () => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/categories/" + categoryId)
      .then((response) => {
        console.log(response.data)
        setRecipesCategories(response.data);
      });
  };

  useEffect(() => {
    if(searchValue !== ""){
      getRecipeByName();
    }
  }, [searchValue]);

  useEffect(() => {
    if(categoryId !== ""){
      getRecipeByCategory();
    }
  }, [categoryId]);


  return (
    <>
      <Header />
      <Banner />
      <div>
        <div className="bloc flex flex-col justify-center items-center">
          <div className="bloc flex flex-col items-center">
            { searchValue === "" ?
              <LastRecipe /> 
              :
              <div className="allRecipes">
                <h2 className="flex flex-col justify-center items-center">Toutes les recettes</h2>
                { recipes &&
                    recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)
                }
              </div>
            }
            <h2>Categories</h2>
            <div className="flex gap-5">
              {
                categories && categories.map((category) => <Categories  key={category.id} category={category}/>
                )
              }

            </div>
            <div className="flex flex-wrap justify-center items-center">

            {
              recipesCategories &&
              recipesCategories.map((recipe) => <Card key={recipe.id} recipe={recipe} />)
            }
            </div>
          </div>
        </div>
      </div>
      <BannerBottom />
      <Footer />
    </>
  );
};
export default Homepage;
