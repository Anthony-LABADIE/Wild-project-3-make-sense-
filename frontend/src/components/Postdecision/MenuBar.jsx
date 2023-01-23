import PropTypes from "prop-types";
import "./NavBarDecision.css";
import personne from "../../assets/img/personne-3.png";

export default function MenuBar({ handleClick }) {
  return (
    <div className="menubar">
      <div className="userImpact">
        <h3>PERSONNES IMPACTEES</h3>
        <img src={personne} alt="personne" className="personne" />
        <h3>PERSONNES EXPERTES</h3>
        <img src={personne} alt="personne" className="personne" />
      </div>
      <button className="btn-avis" type="button" onClick={handleClick}>
        DONNEZ UN AVIS
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
};
