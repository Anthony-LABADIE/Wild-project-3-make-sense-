import PropTypes from "prop-types";

export default function MenuBar({ handleClick }) {
  return (
    <div className="menubar">
      <h3>PERSONNES IMPACTEES</h3>
      <h3>PERSONNES EXPERTES</h3>
      <h5>voir les avis</h5>
      <button className="btn-avis" type="button" onClick={handleClick}>
        DONNEZ UN AVIS
      </button>
    </div>
  );
}

MenuBar.propTypes = {
  handleClick: PropTypes.string.isRequired,
};
