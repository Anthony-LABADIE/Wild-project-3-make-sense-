import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";
import profil from "../../assets/img/profil.png";
import notification from "../../assets/img/notificaiton.png";
import message from "../../assets/img/messages.png";
import decision from "../../assets/img/decision.png";

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
          <div className="decision">
            <img id="decision" src={decision} alt="decision" />
            <p>décisions</p>
          </div>
          <div className="notification">
            <img id="notification" src={notification} alt="notification" />
            <p>notifications</p>
          </div>
          <div className="message">
            <img id="messageLogo" src={message} alt="message" />
            <p>messages</p>
          </div>
          <Link to="/update">
            <img className="profil" src={profil} alt="profil" />
          </Link>
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn-nav" type="button">
        <img className="burger" src={burger} alt="burger" />
      </button>
    </nav>
  );
}

export default NavBar;
