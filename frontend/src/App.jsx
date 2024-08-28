import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Recipes from "./views/Recipes";
import Profile from "./views/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/my-profile" Component={Profile} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
