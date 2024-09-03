import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInput = async (e, type) => {
    e.persist();
    console.log(e.target.value);

    switch (type) {
      case "username":
        setUser((currentUser) => {
          return {
            ...currentUser,
            username: e.target.value,
          };
        });
        return;
      case "email":
        setUser((currentUser) => {
          return {
            ...currentUser,
            email: e.target.value,
          };
        });
        return;
      case "password":
        setUser((currentUser) => {
          return {
            ...currentUser,
            password: e.target.value,
          };
        });
        return;
      case "password_confirmation":
        setUser((currentUser) => {
          return {
            ...currentUser,
            password_confirmation: e.target.value,
          };
        });
    }
  };

  const navigate = useNavigate();

  const AddUser = (e) => {
    e.preventDefault();

    const userAdded = {
      username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    };
    console.log(user);

    axios.post("http://127.0.0.1:8000/api/user", userAdded).then((response) => {
      console.log(response.data.token);
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert(response.data.message);
      navigate("/sign-in");
    });
  };
  return (
    <>
      <Header />
      <div className="flex justify-center mt-14">
        <h2>S'Enregistrer</h2>
      </div>
      <form
        onSubmit={AddUser}
        className="flex flex-col items-center justify-center mt-14 p-14"
      >
        <div className="flex flex-col w-3/4 justify-center items-center border rounded p-5 h-96 gap-5">
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Username</label>
            <input
              onChange={(e) => handleInput(e, "username")}
              value={user.username}
              name="username"
              className="border rounded h-11 w-3/4"
              type="text"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => handleInput(e, "email")}
              value={user.email}
              name="email"
              className="border rounded h-11 w-3/4"
              type="email"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Mot de passe</label>
            <input
              onChange={(e) => handleInput(e, "password")}
              value={user.password}
              name="password"
              className="border rounded h-11 w-3/4"
              type="password"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="">Confirmer Mot de passe</label>
            <input
              onChange={(e) => handleInput(e, "password_confirmation")}
              value={user.password_confirmation}
              name="password_confirmation"
              className="border rounded h-11 w-3/4"
              type="password"
            />
          </div>
        </div>
        <div className="bloc flex justify-center bg-second-color w-40 h-10 rounded text-white">
          <button type="submit" className="">
            S'Enregistrer
          </button>
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
