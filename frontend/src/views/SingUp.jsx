import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-14">
        <h2>S'Enregistrer</h2>
      </div>
      <form className="flex flex-col items-center justify-center mt-14 p-14">
        <div className="flex flex-col w-3/4 justify-center items-center border rounded p-5 h-96 gap-5">
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Username</label>
            <input className="border rounded h-11 w-3/4" type="text" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Email</label>
            <input className="border rounded h-11 w-3/4" type="email" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Mot de passe</label>
            <input className="border rounded h-11 w-3/4" type="password" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Confirmation mot de passe</label>
            <input className="border rounded h-11 w-3/4" type="password" />
          </div>
        </div>
        <div className="bloc flex justify-center bg-second-color w-40 h-10 rounded text-white">
          <button className=""> S'Enregistrer</button>
        </div>
      </form>
      <div className="flex justify-center mt-5">
        <p>
          Vous êtes déja inscrit(e) ?
          <span className="underline text-black">
            <NavLink to={"/sign-in"}> Se connecter</NavLink>
          </span>
        </p>
      </div>
    </>
  );
};
export default SignUp;
