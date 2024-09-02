import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-second-color text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Bon Appétit</h2>
            <p className="text-sm">
              Découvrez des recettes délicieuses et faciles à préparer pour tous les jours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-yellow-300 transition-colors">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes" className="hover:text-yellow-300 transition-colors">
                  Recettes
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-yellow-300 transition-colors">
                  À Propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-yellow-300 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Confidentialité</h3>
            <p className="text-sm">
              Bienvenue sur Bon Appétit. Nous prenons votre vie privée très au sérieux. 
              Cette politique de confidentialité décrit comment nous recueillons, utilisons, 
              stockons et partageons vos informations personnelles lorsque vous utilisez 
              notre site web et nos services.
            </p>
            <NavLink to="/privacy" className="mt-2 inline-block text-yellow-300 hover:underline">
              Lire la politique complète
            </NavLink>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bon Appétit. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;