import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Recipes from "./views/Recipes";
import Profile from "./views/Profile";
import FormAdd from "./views/FormAdd";
import SingleRecipe from "./views/SingleRecipe";
import SignIn from "./views/SignIn";
import SignUp from "./views/SingUp";
import Favorites from "./views/favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="/my-profile" Component={Profile} />
          <Route path="/form-add" Component={FormAdd} />
          <Route path="/single-recipe" Component={SingleRecipe} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/my-profile" Component={Profile} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
