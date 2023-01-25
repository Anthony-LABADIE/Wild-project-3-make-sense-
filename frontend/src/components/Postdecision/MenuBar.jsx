import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function MenuBar({
  handleClick,
  handleConflit,
  handleAvis,
  authDecision,
  nbdec,
}) {
  const [shownButton, setShownButton] = useState(true);

  const ActifAvis = () => {
    if (authDecision[0][0] !== null || undefined) {
      setShownButton(true);
    } else {
      setShownButton(false);
    }
  };

  useEffect(() => {
    ActifAvis();
  }, [nbdec]);

  console.warn(authDecision[0], "ici");

  return (
    <div className="menubar">
      <h3>PERSONNES IMPACTEES</h3>
      <h3>PERSONNES EXPERTES</h3>
      <h5>voir les avis</h5>
      <button
        style={{ display: shownButton ? "none" : "block" }}
        className="btn-avis"
        type="button"
        onClick={() => {
          handleAvis();
          handleClick();
        }}
      >
        DONNEZ UN AVIS
      </button>
      <button
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleConflit();
          handleClick();
        }}
      >
        DONNEZ UN CONFLIT
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
  handleConflit: PropTypes.string.isRequired,
  handleAvis: PropTypes.string.isRequired,
  authDecision: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
};
