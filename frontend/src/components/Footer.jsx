import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-second-color h-32 mt-8">
        <div className="flex items-center justify-center w-3/4 gap-16">
          <div className="flex flex-col justify-center text-white gap-5">
            <NavLink to={"/"}>
              <h3>Accueil</h3>
            </NavLink>
            <NavLink to={"recipes"}>
              <h3>Recettes</h3>
            </NavLink>
          </div>
          <div className="flex flex-col justify-center text-white gap-4">
            <h3>Privacy</h3>
            <p className="text-sm text-white">
              Bienvenue sur Bon Appétit. Nous prenons votre vie privée très au
              sérieux. Cette politique de confidentialité décrit comment nous
              recueillons, utilisons, stockons et partageons vos informations
              personnelles lorsque vous utilisez notre site web et nos services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
