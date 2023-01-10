import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";
import Dashboard from "./pages/Dashboard";
import Decision from "./pages/Decision";
import ProfilePage from "./components/Profil/ProfilPage";
import ModifyProfil from "./components/Profil/ModifyProfil";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/decision"
          element={
            <ProtectedRoute>
              <Decision />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profil"
          element={
            <ProtectedRoute>
              <ProfilePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard/profil/modify" element={<ModifyProfil />} />
      </Routes>
    </div>
  );
}

export default Transition;
