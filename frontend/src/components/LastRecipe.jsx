import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const LastRecipe = () => {
  const [data, setData] = useState([]);

  const getLastRecipe = () => {
    axios.get("http://127.0.0.1:8000/api/recipes").then((response) => {
      const sortedData = response.data
        .slice(0, 6)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setData(sortedData);
    });
  };

  useEffect(() => {
    getLastRecipe();
  }, []);

  return (
    <>
      <h2>Nos Dernières Recettes</h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="mt-5 flex justify-center flex-wrap w-3/4">
          {data.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};
export default LastRecipe;
