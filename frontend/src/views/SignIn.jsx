import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

const SignIn = () => {

  return (
    <>
      <Header />
      <div className="flex justify-center mt-14">
        <h2>Se Connecter</h2>
      </div>
      <form className="flex flex-col items-center justify-center mt-14 p-14">
        <div className="flex flex-col w-3/4 justify-center items-center border rounded p-5 h-80 gap-10">
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Email</label>
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded h-11 w-3/4"
              type="email"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Password</label>
            <input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded h-11 w-3/4"
              type="password"
            />
          </div>
        </div>
        <div className="bloc flex justify-center bg-second-color w-40 h-10 rounded text-white">
          <button className=""> Se Connecter</button>
        </div>
      </form>
      <div className="flex justify-center mt-5">
        <p>
          Vous n'êtes pas inscrit(e) ?
          <span className="underline text-black">
            <NavLink to={"/sign-up"}> S'Enregistrer</NavLink>
          </span>
        </p>
      </div>
    </>
  );
};
export default SignIn;
