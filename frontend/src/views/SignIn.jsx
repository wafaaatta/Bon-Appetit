import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: "Bearer " + token,
    };

    axios
      .post("http://127.0.0.1:8000/api/user/login/", user, { headers })
      .then((response) => {
        console.log(response.data);
        navigate("/my-profile");
      });
  };
  return (
    <>
      <Header />
      <div className="flex justify-center mt-14">
        <h2>Se Connecter</h2>
      </div>
      <form
        onSubmit={(e) => login(e)}
        className="flex flex-col items-center justify-center mt-14 p-14"
      >
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
          <button type="submit" className="">
            Se Connecter
          </button>
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
