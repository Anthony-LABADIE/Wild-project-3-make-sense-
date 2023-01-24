import PropTypes from "prop-types";
import "./NavBarDecision.css";
import personne from "../../assets/img/personne-3.png";

export default function MenuBar({ handleClick, handleConflit, handleAvis }) {
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
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
  handleConflit: PropTypes.string.isRequired,
  handleAvis: PropTypes.string.isRequired,
};
