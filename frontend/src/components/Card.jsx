import { NavLink } from "react-router-dom";

const Card = ({ recipe }) => {
  const getImageUrl = (image) => {
    if (image) {
      return "http://127.0.0.1:8000/" + image;
    }
  };
  return (
    <>
      <div className="flex gap-2 border rounded w-1/3 m-5">
        <div>
          <img
            className="w-52"
            src={recipe.picture ? getImageUrl(recipe.picture) : recipe.picture}
            alt={"image de " + recipe.name}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ml-5">
          <h3 className="flex justify-center w-48">{recipe.title}</h3>
          <p>{recipe.content.slice(0, 20) + "..."}</p>
          <div className="underline text-second-color">
            <NavLink to={"/single-recipe"}>Voir plus de details</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
