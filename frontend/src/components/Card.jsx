import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="flex gap-2 border rounded w-1/3 m-5">
        <div>
          <img
            className="w-52"
            src="src/assets/images-ba/card-img.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ml-5">
          <h3 className="">Burger</h3>
          <p>Burger description</p>
          <div className="underline text-second-color">
            <NavLink to={""}>Voir plus de details</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
