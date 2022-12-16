import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
      </Routes>
    </div>
  );
}

export default Transition;
