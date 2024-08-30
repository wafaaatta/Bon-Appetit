import axios from "axios";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useState } from "react";

const FormAdd = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState(null);
  const [user_id, setUserId] = useState("1");
  const [recipe_id, setRecipeId] = useState("");

  // setFile(URL.createObjectURL(e.target.files[0]));

  const addRecipeInfos = (e) => {
    e.preventDefault();

    console.log(user_id);
    console.log(content);
    console.log(picture);
    console.log(title);

    // e.target.files[0];

    const recipe = new FormData();
    recipe.append("title", title);
    recipe.append("content", content);
    // recipe.append("picture", picture); // Ajouter l'image
    recipe.append("user_id", user_id);

    if (picture) {
      recipe.append("picture", picture);
    }
    console.log(picture);

    const headers = {
      "Content-Type": "multipart/form-data",
    };
    // Envoyer les données via axios
    axios
      .post("http://127.0.0.1:8000/api/recipes", recipe, {
        headers,
      })
      .then((response) => {
        console.log(response);
        const recipe_id = response.data.recipe_id;
        setRecipeId(recipe_id);
      });
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
            </div>
          </form>
          {/* {recipe_id && ( */}
          <div className="flex flex-col gap-3 ml-4 mt-5">
            <div className="flex">
              <h3>Ingredients :</h3>
            </div>
            <div className="flex gap-1"></div>
            <form className="flex w-2/5 gap-3">
              <input
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
          {/* )} */}
          <div className="flex ml-4 mt-10">
            <h4>Categories :</h4>
          </div>
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
