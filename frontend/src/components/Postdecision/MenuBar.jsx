import PropTypes from "prop-types";
import "./NavBarDecision.css";
import personne from "../../assets/img/personne-3.png";

export default function MenuBar({
  handleClick,
  handleConflit,
  handleAvis,
  handleFinalDecision,
  handleFirstDecision,
}) {
  return (
    <div className="menubar">
      <div className="userImpact">
        <h3>PERSONNES IMPACTEES</h3>
        <img src={personne} alt="personne" className="personne" />
        <h3>PERSONNES EXPERTES</h3>
        <img src={personne} alt="personne" className="personne" />
      </div>
      <button
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
      <button
        className="btn-finaldecision"
        type="button"
        onClick={() => {
          handleFinalDecision();
          handleClick();
        }}
      >
        PREND UNE DECISION
      </button>
      <button
        className="btn-firstdecision"
        type="button"
        onClick={() => {
          handleFirstDecision();
          handleClick();
        }}
      >
        PREND UNE PREMIERE DECISION
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
  handleConflit: PropTypes.string.isRequired,
  handleAvis: PropTypes.string.isRequired,
  handleFinalDecision: PropTypes.string.isRequired,
  handleFirstDecision: PropTypes.string.isRequired,
};
