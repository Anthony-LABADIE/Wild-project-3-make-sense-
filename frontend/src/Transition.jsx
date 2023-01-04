import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";
import Dashboard from "./pages/Dashboard";
import UpdateUser from "./components/Inscription/UpdateUser";
import ProfilePage from "./components/Profil/ProfilPage";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/profil" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default Transition;
