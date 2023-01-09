import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../services/api";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";
import notification from "../../assets/img/notificaiton.png";
import message from "../../assets/img/messages.png";
import decision from "../../assets/img/decision.png";
import { authContext } from "../../hooks/authContext";

import "./NavBarDash.css";

function NavBar({ profileImage }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profilImage, setProfilImage] = useState();
  const [largeur, setLargeur] = useState(window.innerWidth);
  const { logout, auth } = useContext(authContext);

  const loadUserInfo = () => {
    api.get(`user/${auth.data.id}`).then((response) => {
      setProfilImage(response.data.image);
    });
  };

  useEffect(() => {
    loadUserInfo();
  }, [profilImage]);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changWidth);

    return () => {
      window.removeEventListener("resize", changWidth);
    };
  }, []);

  return (
    <div>
      <nav>
        {(toggleMenu || largeur > 500) && (
          <ul className="listeNav">
            <img className="logodash" src={logo} alt="logo" />
            <div className="decision">
              <img id="decision" src={decision} alt="decision" />
              <h4>décisions</h4>
            </div>
            <div className="notification">
              <img id="notification" src={notification} alt="notification" />
              <h4>notifications</h4>
            </div>
            <div className="message">
              <img id="messageLogo" src={message} alt="message" />
              <h4>messages</h4>
            </div>
            <Link to="/dashboard/profil">
              <div className="pictureProfil">
                {profilImage && (
                  <img
                    src={profileImage || profilImage}
                    alt=""
                    id="imgProfil"
                  />
                )}
              </div>
            </Link>
          </ul>
        )}
        <button
          onClick={toggleNavSmallScreen}
          className="btn-nav"
          type="button"
        >
          <img className="burger" src={burger} alt="burger" />
        </button>
      </nav>
      <button type="button" onClick={() => logout()}>
        Déconnexion
      </button>
    </div>
  );
}

NavBar.propTypes = {
  profileImage: PropTypes.string.isRequired,
};

export default NavBar;
