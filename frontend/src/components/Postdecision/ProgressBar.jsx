import React from "react";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <nav className="progressBar">
      <ul className="NavList">
        <p className="one">15 oct 22</p>
        <p className="two">15 oct 22</p>
        <p className="three">15 oct 22</p>
        <p className="four">15 oct 22</p>
        <p className="five">15 oct 22</p>
        <div className="barProgress">
          <div className="color" />
        </div>{" "}
        <p className="six">
          Début <br /> de décision
        </p>
        <p className="seven">
          Fin <br /> des avis
        </p>
        <p className="height">
          1ère décision <br /> prise
        </p>
        <p className="nine">
          Fin des <br /> conflit
        </p>
        <p className="ten">
          Décision <br /> définitif
        </p>
      </ul>
    </nav>
  );
}

export default ProgressBar;
