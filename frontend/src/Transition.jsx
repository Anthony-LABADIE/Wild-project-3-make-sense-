import PropTypes from "prop-types";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PostDecision from "./pages/PostDecision";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";
import Dashboard from "./pages/Dashboard";
import Decision from "./pages/Decision";
import UserConcerned from "./pages/UserConcerned";
import ProfilePage from "./components/Profil/ProfilPage";
import { CurrentDecisionContextProvider } from "./Contexts/DecisionContexts";
import Admin from "./pages/Admin";
import ModifyProfil from "./components/Profil/ModifyProfil";

function Transition({ socket }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
        <Route path="/concerned" element={<UserConcerned />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard socket={socket} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/decision"
          element={
            <ProtectedRoute>
              <CurrentDecisionContextProvider>
                <Decision socket={socket} />
              </CurrentDecisionContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profil"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/decision/:nbdec"
          element={
            <ProtectedRoute>
              <PostDecision />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profil/modify"
          element={
            <ProtectedRoute>
              <ModifyProfil />
            </ProtectedRoute>
          }
        />
        <Route path="/Decision/:id" element={<Decision />} />
      </Routes>
    </div>
  );
}

Transition.propTypes = {
  socket: PropTypes.func.isRequired,
};

export default Transition;
