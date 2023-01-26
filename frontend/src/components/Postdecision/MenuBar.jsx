import PropTypes from "prop-types";
import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../../hooks/authContext";

export default function MenuBar({
  handleClick,
  handleConflit,
  handleAvis,
  handleFisrt,
  handleFinal,
  authDecision,
  nbdec,
  info,
}) {
  const [shownButtonAvis, setShownButtonAvis] = useState(true);
  const [shownButtonConflit, setShownButtonConflit] = useState(true);
  const [shownButtonFirst, setShownButtonFirst] = useState(true);
  const [shownButtonFinal, setShownButtonFinal] = useState(true);
  const status = info[0].id_status;
  const user = info[0].id_user;
  const { auth } = useContext(authContext);

  const ActifAvis = () => {
    if (status === 1 && authDecision[0].length === 1) {
      setShownButtonAvis(true);
    } else {
      setShownButtonAvis(false);
    }
  };

  const ActifConflit = () => {
    if (status === 3 && authDecision[0].length === 3) {
      setShownButtonConflit(true);
    } else {
      setShownButtonConflit(false);
    }
  };

  const ActifFirstDecision = () => {
    if (user === auth.data.id && status === 1) {
      setShownButtonFirst(true);
    } else {
      setShownButtonFirst(false);
    }
  };

  const ActifFinalDecision = () => {
    if (user === auth.data.id && status === 3) {
      setShownButtonFinal(true);
    } else {
      setShownButtonFinal(false);
    }
  };

  useEffect(() => {
    ActifAvis();
    ActifConflit();
    ActifFirstDecision();
    ActifFinalDecision();
  }, [nbdec]);

  return (
    <div className="menubar">
      <div className="userImpact">
        <h3>PERSONNES IMPACTEES</h3>
        <h3>PERSONNES EXPERTES</h3>
      </div>
      <button
        style={{ display: shownButtonAvis ? "block" : "none" }}
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
        style={{ display: shownButtonConflit ? "block" : "none" }}
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleConflit();
          handleClick();
        }}
      >
        DONNEZ UN CONFLIT
      </button>
      <button
        style={{ display: shownButtonFirst ? "block" : "none" }}
        className="btn-firstDecision"
        type="button"
        onClick={() => {
          handleFisrt();
          handleClick();
        }}
      >
        DONNEZ UNE PREMIERE DECISION
      </button>
      <button
        style={{ display: shownButtonFinal ? "block" : "none" }}
        className="btn-conflit"
        type="button"
        onClick={() => {
          handleFinal();
          handleClick();
        }}
      >
        DONNEZ UNE DECISION FINALE
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
  info: PropTypes.string.isRequired,
  handleFisrt: PropTypes.string.isRequired,
  handleFinal: PropTypes.string.isRequired,
};
