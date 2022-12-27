import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";
import profil from "../../assets/img/profil.png";
import notification from "../../assets/img/notificaiton.jpg";
import message from "../../assets/img/messages.jpg";
import decision from "../../assets/img/decision.jpg";

import "./NavBarDash.css";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

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
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="listeNav">
          <img className="logodash" src={logo} alt="logo" />
          <img className="decision" src={decision} alt="decision" />
          <img className="notification" src={notification} alt="notification" />
          <img className="message" src={message} alt="message" />
          <img className="profil" src={profil} alt="profil" />
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn-nav" type="button">
        <img className="burger" src={burger} alt="burger" />
      </button>
    </nav>
  );
}

export default NavBar;
