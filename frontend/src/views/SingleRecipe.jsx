import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

const SingleRecipe = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Banner />
      <div className="bloc">
        <div>
          <h2>Nom Recette</h2>
          <div className="border "></div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Category : </h3>
              <h3>Ingredients :</h3>
              <h3>Préparation :</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleRecipe;
