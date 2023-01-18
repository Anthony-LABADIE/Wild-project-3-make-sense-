import React from "react";
import profil from "../../../assets/img/profil.png";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <nav className="progressBar">
      <ul className="NavList">
        <div className="TitleNotice">Acheter une nouvelle machine à café</div>
        <img className="ProfilImg" src={profil} alt="profil" />
        <div className="NameProfil">par RYAN TAMA</div>
        <p className="one">15 oct 22</p>
        <p className="two">15 oct 22</p>
        <p className="three">15 oct 22</p>
        <p className="four">15 oct 22</p>
        <p className="five">15 oct 22</p>
        <div className="progress">
          <div className="color" />
        </div>{" "}
        <p className="six">15 oct 22</p>
        <p className="seven">15 oct 22</p>
        <p className="height">15 oct 22</p>
        <p className="nine">15 oct 22</p>
        <p className="ten">15 oct 22</p>
      </ul>
    </nav>
  );
}

export default ProgressBar;
