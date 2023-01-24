import React from "react";
import "./ProgressBar.css";
import PropTypes from "prop-types";

function ProgressBar({ statut }) {
  const statutCount = statut;
  let statutBar = "one";
  switch (true) {
    case statutCount === 1:
      statutBar = "0%";
      break;
    case statutCount === 2:
      statutBar = "25%";
      break;
    case statutCount === 3:
      statutBar = "50%";
      break;
    case statutCount === 4:
      statutBar = "75%";
      break;
    case statutCount === 5:
      statutBar = "100%";
      break;
    default:
  }

  return (
    <div className="progressBar">
      <div className="NavList">
        <p className="one">15 oct 22</p>
        <p className="two">15 oct 22</p>
        <p className="three">15 oct 22</p>
        <p className="four">15 oct 22</p>
        <p className="five">15 oct 22</p>
        <div className="barProgress">
          <div className="color" style={{ width: statutBar }} />
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
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  statut: PropTypes.number.isRequired,
};

export default ProgressBar;
