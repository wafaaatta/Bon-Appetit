import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Recipes from "./views/Recipes";
import Profile from "./views/Profile";
import FormAdd from "./views/FormAdd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/my-profile" Component={Profile} />
          <Route path="/form-add" Component={FormAdd} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
