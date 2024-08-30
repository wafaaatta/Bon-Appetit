import axios from "axios";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const FormAdd = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState(null);
  const [category, setCategory] = useState("");

  const [user_id, setUserId] = useState("1");

  const [recipe_id, setRecipeId] = useState("");

  const [ingredients, setIngredients] = useState("");
  const [ingredient_name, setIngridientName] = useState("");

  const addRecipeInfos = (e) => {
    e.preventDefault();

    const recipe = new FormData();
    recipe.append("title", title);
    recipe.append("content", content);
    recipe.append("category", category);
    recipe.append("user_id", user_id);

    if (picture) {
      recipe.append("picture", picture);
    }

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    axios
      .post("http://127.0.0.1:8000/api/recipes", recipe, {
        headers,
      })
      .then((response) => {
        const recipe_id = response.data.recipe_id;
        setRecipeId(recipe_id);
      });
  };

  const addIngridientName = (e) => {
    e.preventDefault();

    const ingredient = {
      name: ingredient_name,
    };

    axios
      .post("http://127.0.0.1:8000/api/ingredients/" + recipe_id, ingredient)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        getIngredientRecipe();
      });

    const getIngredientRecipe = () => {
      axios
        .get("http://127.0.0.1:8000/api/recipes/" + recipe_id)
        .then((response) => {
          setIngredients(response.data.ingredient);
        });
    };
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="bloc flex items-center justify-center ">
        <div className="flex flex-col justify-center items-cente border rounded w-3/5">
          <div className="flex ml-4 mt-10">
            <h2 className="font-bold">Ajouter Recette</h2>
          </div>
          <form
            onSubmit={(e) => addRecipeInfos(e)}
            className="flex flex-row gap-4 w-full ml-4 mt-10"
            encType="multipart/form-data"
          >
            <div className="flex flex-col w-2/5 gap-3">
              <div>
                Nom: <br />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-text"
                  type="text"
                  placeholder="Inserez un nom"
                  name="title"
                  required
                />
              </div>
              <div>
                Preparations: <br />
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Inserez la preparation"
                  name="content"
                  id=""
                  required
                ></textarea>
              </div>
              <div className="flex border justify-center bg-second-color text-white rounded">
                <button type="submit">Ajouter Ingredient +</button>
              </div>
            </div>
            <div className="flex flex-col  w-2/5 gap-3">
              <div>
                Ajouter une image: <br />
                <input
                  onChange={(e) => setPicture(e.target.files[0])}
                  type="file"
                  name="picture"
                  id=""
                  required
                />
              </div>
              <div className="flex ml-4 mt-10">
                <h4>Categories :</h4>
                <select name="categories" id="">
                  <option name="category" value="1">
                    Entrée
                  </option>
                  <option name="category" value="2">
                    Plat
                  </option>
                  <option name="category" value="3">
                    Dessert
                  </option>
                </select>
              </div>
            </div>
          </form>
          {recipe_id && (
            <div className="flex flex-col gap-3 ml-4 mt-5">
              <div className="flex">
                <h3>Ingredients :</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {ingredients &&
                  ingredients.map((ingredient) => (
                    <div
                      key={ingredient.id}
                      className="flex items-center gap-6 text-gray-400"
                    >
                      {ingredient.name}
                    </div>
                  ))}
              </div>
              <form onSubmit={addIngridientName} className="flex w-2/5 gap-3">
                <input
                  onChange={(e) => setIngridientName(e.target.value)}
                  className="input-text"
                  type="text"
                  name="name"
                  placeholder="ingredient"
                />
                <button
                  className="btn bg-second-color rounded text-white"
                  type="submit"
                >
                  Ajouter +
                </button>
              </form>
            </div>
          )}
          <div className="flex justify-center ml-4 mt-10 mb-10 bg-first-color w-40 h-10 rounded-full text-white">
            <button>Ajouter Recette</button>
          </div>
        </div>
      </div>
      <div className="mb-96"></div>
    </>
  );
};
export default FormAdd;
