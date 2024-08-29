import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-third-color flex justify-center items-center gap-32">
        <div className="flex items-center gap-32 w-11/12">
          <div>
            <img
              className="w-32"
              src="/src/assets/images-ba/logo-bon-appetit.png"
              alt="image logo Bon Appetit"
            />
          </div>
          <div className="flex justify-center items-center gap-24 text-black">
            <NavLink
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              to={"/"}
            >
              Accueil
            </NavLink>
            <NavLink
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              to={"/recipes"}
            >
              Recettes
            </NavLink>
            {
              <NavLink
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                to={"/profile"}
              >
                Mon Profile
              </NavLink>
            }
            <div className="btn flex justify-center items-center rounded text-white bg-first-color font-bold">
              <NavLink to={"/sign-in"}>Connexion</NavLink>
            </div>
          </div>
          <div className="flex justify-center items-center bg-second-color rounded text-white w-52 h-9">
            <NavLink to={"/form-add"}>
              <h3>Ajouter recette + </h3>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
