import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, UserCircle, LogIn, PlusCircle } from "lucide-react";

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-third-color shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              className="w-12 h-12 md:w-16 md:h-16"
              src="/src/assets/images-ba/logo-bon-appetit.png"
              alt="Logo Bon Appetit"
            />
            <span className="text-xl font-bold text-first-color">Bon Appétit</span>
          </NavLink>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-first-color">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-first-color ${
                  isActive ? "text-first-color" : "text-gray-700"
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-first-color ${
                  isActive ? "text-first-color" : "text-gray-700"
                }`
              }
            >
              Recettes
            </NavLink>
            {isLogged && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-first-color ${
                    isActive ? "text-first-color" : "text-gray-700"
                  }`
                }
              >
                Mon Profil
              </NavLink>
            )}
            {isLogged ? (
              <NavLink
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                to={"/profile"}
              >
                <PlusCircle size={16} />
                <span>Ajouter recette</span>
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className="flex items-center space-x-1 bg-first-color text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                <LogIn size={16} />
                <span>Connexion</span>
              </NavLink>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 text-sm font-medium transition-colors hover:text-first-color ${
                  isActive ? "text-first-color" : "text-gray-700"
                }`
              }
              onClick={toggleMenu}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `block py-2 text-sm font-medium transition-colors hover:text-first-color ${
                  isActive ? "text-first-color" : "text-gray-700"
                }`
              }
              onClick={toggleMenu}
            >
              Recettes
            </NavLink>
            {isLogged && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium transition-colors hover:text-first-color ${
                    isActive ? "text-first-color" : "text-gray-700"
                  }`
                }
                onClick={toggleMenu}
              >
                Mon Profil
              </NavLink>
            )}
            {isLogged ? (
              <NavLink
                to="/form-add"
                className="block py-2 text-sm font-medium text-second-color hover:text-opacity-90 transition-colors"
                onClick={toggleMenu}
              >
                Ajouter recette
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className="block py-2 text-sm font-medium text-first-color hover:text-opacity-90 transition-colors"
                onClick={toggleMenu}
              >
                Connexion
              </NavLink>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;